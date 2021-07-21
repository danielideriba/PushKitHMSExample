import React from 'react';
import { Text, ScrollView } from 'react-native';

const NotificationDetails = props => {
    return (
        <ScrollView>
            <Text  style={{padding: 10 }}>{props.remoteMessage.body}</Text>
        </ScrollView>
    );
};
export default NotificationDetails;