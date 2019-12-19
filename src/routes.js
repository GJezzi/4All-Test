import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../src/screens/Main';
import Dashboard from '../src/screens/Dashboard';
import Service from '../src/screens/Service';

export default createAppContainer(
    createStackNavigator(
        {
            Dashboard,
            Main,
            Service,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            initialRouteName: 'Dashboard',
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#CB8B19',
                },
                headerTintColor: '#FFF',
                headerLeftContainerStyle: {
                    paddingStart: 20,
                },
                headerRightContainerStyle: {
                    paddingEnd: 20,
                },
            },
        }
    )
);
