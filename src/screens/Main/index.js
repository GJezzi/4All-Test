import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Platform, Linking, Alert } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import Background from '../../components/Background';

import {
    Container,
    TopContainer,
    CityImage,
    Title,
    TitleText,
    Avatar,
    ButtonsView,
    CallButton,
    CallTitle,
    ServicesButton,
    ServicesTitle,
    AddressButton,
    AddressTitle,
    CommentsButton,
    CommentsTitle,
    FavoritesButton,
    FavoritesTitle,
    DescView,
    Separator,
    CommentsView,
    Comments,
} from './styles';

function Main({ navigation }) {
    const [details, setDetails] = useState('');
    const id = navigation.getParam('id');

    useEffect(() => {
        async function loadDetails() {
            const response = await api.get(`tarefa/${id}`);
            const info = response.data;

            setDetails(info);
        }
        loadDetails();
    }, [id]);

    function makeCall() {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${details.telefone}`;
        } else {
            phoneNumber = `telprompt:${details.telefone}`;
        }

        Linking.openURL(phoneNumber);
    }

    function handleServices() {
        navigation.navigate('Service');
    }

    function showAlert() {
        Alert.alert('Endereço:', `${details.endereco}`, [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK' },
        ]);
    }

    return (
        <Background>
            <Container>
                <TopContainer>
                    <CityImage source={{ uri: details.urlFoto }} />
                    <Avatar source={{ uri: details.urlLogo }} />
                </TopContainer>

                <Title>
                    <TitleText>{details.titulo}</TitleText>
                </Title>

                <ButtonsView>
                    <CallButton onPress={() => makeCall()}>
                        <MaterialIcon name="call" size={30} color="#cb8b19" />
                        <CallTitle>Ligar</CallTitle>
                    </CallButton>
                    <ServicesButton onPress={() => handleServices()}>
                        <SimpleIcon name="diamond" size={30} color="#cb8b19" />
                        <ServicesTitle>Serviços</ServicesTitle>
                    </ServicesButton>
                    <AddressButton onPress={() => showAlert()}>
                        <MaterialIcon
                            name="location-on"
                            size={30}
                            color="#cb8b19"
                        />
                        <AddressTitle>Endereço</AddressTitle>
                    </AddressButton>
                    <CommentsButton>
                        <AwesomeIcon
                            name="comments"
                            size={30}
                            color="#cb8b19"
                        />
                        <CommentsTitle>Comentários</CommentsTitle>
                    </CommentsButton>
                    <FavoritesButton>
                        <AwesomeIcon name="star" size={30} color="#cb8b19" />
                        <FavoritesTitle>Favoritos</FavoritesTitle>
                    </FavoritesButton>
                </ButtonsView>
                <DescView>
                    <Separator />
                    <CommentsView>
                        <Comments>{details.texto}</Comments>
                    </CommentsView>
                </DescView>
            </Container>
        </Background>
    );
}

Main.navigationOptions = ({ navigation }) => ({
    title: 'Porto Alegre',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
        >
            <AntIcon name="caretleft" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
            <AntIcon name="search1" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});

export default connect(state => ({
    task: state.task,
}))(Main);
