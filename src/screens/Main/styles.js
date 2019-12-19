import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    padding: 0 30px;
    flex: 1;
`;

export const TopContainer = styled.View`
    flex: 1;
`;

export const CityImage = styled.Image.attrs({
    sizeMode: 'contain',
})`
    flex: 1;
    height: 100%;
    width: 100%;
`;

export const Avatar = styled.Image.attrs({
    bottom: -40,
    right: 20,
})`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background: #fff;
`;

export const Title = styled.View`
    justify-content: flex-start;
    padding: 10px;
`;

export const TitleText = styled.Text`
    font-size: 30px;
    color: #cb8b19;
`;

export const ButtonsView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: #fff;
`;

export const CallButton = styled(RectButton)`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
`;

export const CallTitle = styled.Text`
    font-size: 12px;
    color: #cb8b19;
`;

export const ServicesButton = styled(RectButton)`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
`;

export const ServicesTitle = styled.Text`
    font-size: 12px;
    color: #cb8b19;
`;
export const AddressButton = styled(RectButton)`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
`;

export const AddressTitle = styled.Text`
    font-size: 12px;
    color: #cb8b19;
`;
export const CommentsButton = styled(RectButton)`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
`;

export const CommentsTitle = styled.Text`
    font-size: 12px;
    color: #cb8b19;
`;
export const FavoritesButton = styled(RectButton)`
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
`;

export const FavoritesTitle = styled.Text`
    font-size: 12px;
    color: #cb8b19;
`;

export const DescView = styled.View`
    flex: 1;
    background: #fff;
    padding: 5px 20px;
`;

export const Separator = styled.View`
    height: 1px;
    background: #cb8b19;
    justify-content: flex-start;
`;

export const CommentsView = styled.View`
    justify-content: center;
    padding: 10px 10px;
`;

export const Comments = styled.Text`
    font-size: 14px;
    color: #cb8b19;
`;
