import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    align-self: center;
    margin-top: 30px;
`;

export const TaskList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 60px;
    padding: 0 20px;
`;

export const Task = styled(RectButton)`
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    flex: 1;

    align-items: center;
    margin: 0 10px 20px;
`;

export const TaskTitle = styled.Text`
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-align: center;
`;
