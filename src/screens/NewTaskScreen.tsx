import React from 'react';
import { Text, View } from 'react-native';
import { Button, Container } from '../components';

export const NewTaskScreen = ({ navigation }) => {

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text>New Task</Text>
      </View>
      <Button onPress={() => navigation.goBack()}>Create new Task</Button>
    </Container>
  )
}