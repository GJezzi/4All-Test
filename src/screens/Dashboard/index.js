import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Container, TaskList, Task, TaskTitle } from './styles';

import api from '../../services/api';

import Background from '../../components/Background';
import { taskRequest } from '../../store/modules/task/actions';

function Dashboard({ navigation }) {
    const dispatch = useDispatch();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const response = await api.get('tarefa');
            const taskList = response.data.lista;

            setTasks(taskList);
        }
        loadTasks();
    }, []);

    function handleSelectedTask(task) {
        navigation.navigate('Main', { id: task });
        dispatch(taskRequest(task));
    }

    return (
        <Background>
            <Container>
                <TaskList
                    data={tasks}
                    keyExtractor={task => String(task.id)}
                    renderItem={({ item: task }) => (
                        <Task onPress={() => handleSelectedTask(task)}>
                            <TaskTitle>{task}</TaskTitle>
                        </Task>
                    )}
                />
            </Container>
        </Background>
    );
}

Dashboard.navigationOptions = () => ({
    title: 'Lista de Tarefas',
});

export default connect()(Dashboard);
