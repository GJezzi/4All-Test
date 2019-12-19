import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

// import { Container } from './styles';

export default function Service() {
    return <View />;
}

Service.navigationOptions = ({ navigation }) => ({
    title: 'Serviços',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <AntIcon name="caretleft" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});
