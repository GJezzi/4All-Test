import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const presistedReducer = persistReducer(
        {
            key: 'fourAll',
            storage: AsyncStorage,
            whitelist: ['main', 'dashboard', 'service'],
        },
        reducers
    );
    return presistedReducer;
};
