import React from 'react';
import { View, Alert } from 'react-native';
import { Button, Container, FormStyled, InputControl } from '../components';

export const NewTaskScreen = ({ navigation }) => {
  const [title, setTitle] = React.useState('');

  const handlerSubmit = () => {
    if(title.length > 0) {
      return navigation.goBack();
    }
    Alert.alert("the title is required")
  }
  return (
    <Container>
      <FormStyled>
        <InputControl label='Title' type='text' placeholder='Design team metting' onChange={setTitle} />
        <InputControl label='Deadline' type='select' placeholder='2021-02-28' selectOptions={[{ label: '2022-12-07', value: '1' }]} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 0.48 }}>
            <InputControl label='Start time' iconName='clock-time-three-outline' placeholder='11:00 Am' />
          </View>
          <View style={{ flex: 0.48 }}>
            <InputControl label='End time' iconName='clock-time-three-outline' placeholder='14:00 Pm' />
          </View>
        </View>
        <InputControl label='Remind' type='select' placeholder='10 minutes early' selectOptions={[{ label: '20 minutes', value: '1' }]} />
        <InputControl label='Repeat' type='select' placeholder='weekly'  selectOptions={[{ label: 'monthly', value: '1' }]} />
      </FormStyled>
      <Button onPress={handlerSubmit}>Create new Task</Button>
    </Container>
  )
}