import React from 'react';
import { Text, View } from 'react-native';
const UserScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User Details</Text>
        </View>
    );
};
UserScreen.navigationOptions = {
    title: 'User Details'
};
export default UserScreen;