import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserForm from './views/UserForm';
import UserList from './views/UserList';
import { Button, Icon } from '@rneui/themed';
import { UsersProvider } from './context/UsersContext';


const Stack = createNativeStackNavigator();

export default props => {

    return (
        <UsersProvider>

            <NavigationContainer>

                <Stack.Navigator
                    initialRouteName='UserList'
                    screenOptions={screenOptions}
                >
                    <Stack.Screen 
                        name='UserList'
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de usuarios',
                                headerRight: () => (
                                        <Button
                                            type='clear'
                                            icon={<Icon name='add' size={25} color='white' 
                                            onPress={() => navigation.navigate('UserForm')}
                                            />
                                        } />
                                    )
                                }
                            }
                        }
                    />
                    <Stack.Screen 
                        name='UserForm'
                        component={UserForm}
                        options={{
                            title: 'Formulario de usuarios'
                        }}
                    />

                </Stack.Navigator>


            </NavigationContainer>
        </UsersProvider>
    )

}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}