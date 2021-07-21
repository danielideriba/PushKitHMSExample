/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {
//     HmsLocalNotification,
//     HmsPushMessaging
//   } from '@hmscore/react-native-hms-push';

// HmsPushMessaging.setBackgroundMessageHandler((dataMessage) => {
//     console.log('setBackgroundMessageHandler', dataMessage);
//     HmsLocalNotification.localNotification({
//       [HmsLocalNotification.Attr.title]: '[Headless] DataMessage Received',
//       [HmsLocalNotification.Attr.message]: new RNRemoteMessage(
//         dataMessage,
//       ).getDataOfMap(),
//     })
//       .then((result) => {
//         console.log('[Headless] DataMessage Received', result);
//       })
//       .catch((err) => {
//         console.log(
//           '[LocalNotification Default] Error/Exception: ' + JSON.stringify(err),
//         );
//       });
  
//     return Promise.resolve();
// });

AppRegistry.registerComponent(appName, () => App);
