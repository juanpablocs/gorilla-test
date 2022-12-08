import React from 'react';
import { SectionList } from 'react-native';
import { Button, Container, ItemList, TextStyled } from '../components';

export const HomeScreen: React.FC<any> = ({ navigation }) => {
  const todos = [
    {
      title: 'Completed Tasks',
      data: [
        // { title: 'xx', key: 'xx', completed: true },
      ]
    },
    {
      title: 'Pending Tasks',
      data: [
        { title: 'xx', key: 'xx' },
        { title: 'xx1', key: 'xx1' },
        { title: 'xx2', key: 'xx2' },

      ]
    }

  ];

  return (
    <Container>
      <SectionList
        sections={todos}
        keyExtractor={(item, index) => item.key + index}
        renderSectionHeader={({ section }) => (<TextStyled heading>{section.title}</TextStyled>)}
        ListEmptyComponent={<TextStyled>Not found tasks</TextStyled>}
        renderItem={({ item }) => <ItemList {...item} />}
      />
      <Button onPress={() => navigation.navigate('NewTask')}>
        Add new Task
      </Button>
    </Container>
  );
};