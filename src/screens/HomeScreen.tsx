import React from 'react';
import { useSelector } from 'react-redux';
import { SectionList } from 'react-native';
import { Button, Container, ItemList, NotFoundStyled, TextStyled } from '../components';
import { iTaskState } from '../store/reducer';

export const HomeScreen: React.FC<any> = ({ navigation }) => {
  const todoList = useSelector((state: iTaskState) => state.todos);
  const todos = [
    {
      title: 'Completed Tasks',
      data: todoList.filter(todo => todo.completed)
    },
    {
      title: 'Pending Tasks',
      data: todoList.filter(todo => !todo.completed)
    }

  ];

  return (
    <Container>
      {todoList.length > 0 ?
        <SectionList
          sections={todos}
          keyExtractor={(item, index) => item.name + index}
          renderSectionHeader={({ section }) => section.data.length > 0 ? <TextStyled heading>{section.title}</TextStyled> : <></>}
          ListEmptyComponent={<TextStyled>Not found tasks</TextStyled>}
          renderItem={({ item }) => <ItemList {...item} />}
        />
        :
        <NotFoundStyled><TextStyled>Not found tasks 😔</TextStyled></NotFoundStyled>
      }

      <Button onPress={() => navigation.navigate('NewTask')}>
        Add new Task
      </Button>
    </Container>
  );
};