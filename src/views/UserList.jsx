import React, { useContext } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import users from '../data/users'
import { Avatar, Button, Icon, ListItem } from '@rneui/themed';
import UsersContext from '../context/UsersContext';

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuario', 'Deseja excluir o usuario?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Nao'
            }

        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <Avatar  source= {{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                    />
                    <Button 
                    onPress={() => {confirmUserDeletion(user)}}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}
                    />
                </ListItem>


        )
    }


    return (
        <View>

            <FlatList
                keyExtractor={user => user.id}
                data={state.users}
                renderItem={getUserItem}
            />

        </View>

    )


}