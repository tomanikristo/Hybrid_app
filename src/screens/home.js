import React from 'react';
import Users from '../components/Users';
const HomeScreen = () => {
    return (
        <Users />
    );
};
HomeScreen.navigationOptions = {
    title: 'User List'
};
export default HomeScreen;