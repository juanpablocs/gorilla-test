import React from 'react';
import { SectionList, View } from 'react-native';
import { Button, Container, ItemList, TextStyled } from '../components';

export const HomeScreen: React.FC<any> = ({ navigation }) => {
  const todos = [
    {
      title: 'Completed Tasks',
      data: [
      ]
    },
    {
      title: 'Pending Tasks',
      data: [
        { title: 'xx', key: 'xx' },
        { title: 'xx1', key: 'xx1' },
        { title: 'xx2', key: 'xx2' },
        { title: 'xx3', key: 'xx3' },
        { title: 'xx4', key: 'xx4' },
        { title: 'xx5', key: 'xx5' },
        { title: 'xx6', key: 'xx6' },
        { title: 'xx7', key: 'xx7' },
        { title: 'xx8', key: 'xx8' },
        { title: 'xx9', key: 'xx9' },
        { title: 'xx10', key: 'xx10' },
        { title: 'xx11', key: 'xx11' },
        { title: 'xx12', key: 'xx12' },
      ]
    }

  ];

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <SectionList
          sections={todos}
          keyExtractor={(item, index) => item.key + index}
          renderSectionHeader={({ section }) => ( <TextStyled heading>{section.title}</TextStyled>)}
          ListEmptyComponent={<TextStyled>Not found tasks</TextStyled>}
          renderItem={({ item }) => <ItemList {...item} />}
        />
      </View>
      <Button onPress={() => navigation.navigate('NewTask')}>
        Add new Task
      </Button>
    </Container>
  );
};