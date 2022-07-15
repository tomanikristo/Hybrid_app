import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import User from '../screens/user';
import axios from 'axios'
// import buildQuery from 'odata-query'
import User from '../screens/user';


const Users = props => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        fetch('https://services.odata.org/V4/OData/OData.svc/Products')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .then((json) => setUsers(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return (
        <View style={{ padding: 20 }}>
            {isLoading ? <Text>Loading...</Text> :
                (
                    <FlatList
                        data={users}
                        keyExtractor={({ ID }) => ID.toString()}
                        renderItem={({ item }) => <Text>{item.value.ID}  </Text>}
                    />
                )}
        </View>
    );
};
export default Users;