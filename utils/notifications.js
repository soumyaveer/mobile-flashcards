// import { AsyncStorage } from "react-native";
// import { Notifications } from "expo";
// import Permissions from "expo";
//
// const NOTIFICATION_STORAGE_KEY = 'mobile-flashcards-notifications';
//
// export const createNotification = () => ({
//   title: "How much do you remember today?",
//   body: "Did you take a quiz today?",
//   ios: {
//     sound: false
//   },
//   android: {
//     sound: false,
//     vibrate: false,
//     priority: "high",
//     sticky: false
//   }
// });
//
// export const clearLocalNotification = () => {
//   AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
//     .then(() => Notifications.cancelAllScheduledNotificationsAsync()
//     );
// };
//
// export const setLocalNotification = () => {
//   AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
//     .then((resp) => JSON.parse(resp))
//     .then((json) => {
//       if (json === null) {
//         Permissions.askAsync(Permissions.NOTIFICATIONS)
//           .then(({ status }) => {
//             if (status === 'granted') {
//               Notifications.cancelAllScheduledNotificationsAsync()
//
//               let tomorrow = new Date()
//               tomorrow.setDate(tomorrow.getDate() + 1)
//               tomorrow.setHours(20)
//
//               Notifications.scheduleLocalNotificationAsync(
//                 createNotification(),
//                 {
//                   time: tomorrow,
//                   repeat: 'day',
//                 }
//               )
//
//               AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
//             }
//           });
//       }
//     })
// };