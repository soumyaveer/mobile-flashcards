import { AsyncStorage } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = 'mobile-flashcards:notifications-2';

export const createNotification = () => ({
  title: "Your flash cards are waiting for you",
  body: "Don't forget to practise at least one deck today!",
  ios: {
    sound: true
  },
  android: {
    sound: true,
    vibrate: true,
    priority: "high",
    sticky: false
  }
});

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(() =>  Notifications.cancelAllScheduledNotificationsAsync()
    );
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then((resp) => JSON.parse(resp))
    .then((json) => {
      if (json === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              // tomorrow.setDate(tomorrow.getDate() + 1);
              // tomorrow.setHours(20);
              tomorrow.setMinutes(48);
              tomorrow.setSeconds(59);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                }
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          });
      }
    })
};