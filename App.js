/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Switch,
  ScrollView,
  Text,
  TextInput,
  FlatList
} from "react-native";
import {
  HmsPushInstanceId,
  HmsLocalNotification,
  HmsPushEvent,
  HmsPushOpenDevice,
  HmsPushMessaging,
  HmsPushProfile,
  HmsPushResultCode
} from '@hmscore/react-native-hms-push';

import NotificationDetails from './components/NotificationDetails.js';

HmsPushInstanceId.getToken('')
      .then((result) => {
        console.log('getToken', result);
      })
      .catch((err) => {
        alert('[getToken] Error/Exception: ' + JSON.stringify(err));
});

HmsPushOpenDevice.getOdid()
  .then((result) => {
    console.log("getOdid", result);
  })
  .catch((err) => {
    alert("[getOdid] Error/Exception: " + JSON.stringify(err));
});

HmsPushMessaging.isAutoInitEnabled()
  .then((result) => {
    console.log("isAutoInitEnabled", result);
  })
  .catch((err) => {
    alert("[isAutoInitEnabled] Error/Exception: " + JSON.stringify(err));
});

function App() {
var getIdpromo = null;

  useEffect(() => {
    onTokenReceivedListener = HmsPushEvent.onTokenReceived((result) => {
      console.log('onTokenReceived', result);
    });
    
    onTokenErrorListener = HmsPushEvent.onTokenError((result) => {
      console.log('onTokenError', result);
    });
    
    onNotificationOpenedAppListener = HmsPushEvent.onNotificationOpenedApp(
      (result) => {
        console.log('onNotificationOpenedAppListener', result.extras.idPromo);
        getIdpromo = result.extras.idPromo;
      },
    );

    onRemoteMessageReceivedListener = HmsPushEvent.onRemoteMessageReceived(
      (result) => {
        const RNRemoteMessageObj = new RNRemoteMessage(result.msg);
        HmsLocalNotification.localNotification({
          [HmsLocalNotification.Attr.title]: 'DataMessage Received',
          [HmsLocalNotification.Attr.message]:
            RNRemoteMessageObj.getDataOfMap(),
        });
        console.log('onRemoteMessageReceived', result);
      },
    );
  
    () => {
      onTokenReceivedListener.remove();
      onTokenErrorListener.remove();
      onNotificationOpenedAppListener.remove();
    };
  }, []);

    return (
      <View>
          <Text>Push kit App</Text>
          <Text>{getIdpromo}</Text>
      </View>
    );
}

export default App;
