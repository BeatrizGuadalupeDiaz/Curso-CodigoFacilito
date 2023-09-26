import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  TextInput,
  View,
  Alert,
} from 'react-native';

const SingIn = ({navigation}: any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function Verification() {
    if (email.trim().length > 0 && password.trim().length > 0) {
      if (email === 'User' && password === '1234') {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Invalid email or password');
        setEmail('');
        setPassword('');
      }
    }
  }
  //jsx.element
  return (
    <SafeAreaView
      style={{flex: 0.8, justifyContent: 'space-evenly', alignSelf: 'center'}}>
      <Image
        source={{
          uri: 'https://images.vexels.com/media/users/3/224234/isolated/preview/ff7c525c1c3e1bef640644542001e1fd-logotipo-de-la-escuela-en-linea.png',
        }}
        style={{width: 100, height: 100, borderRadius: 50, alignSelf: 'center'}}
        resizeMode="cover"
      />
      <View style={{justifyContent: 'space-between', height: 120}}>
        <TextInput
          placeholder="Email"
          style={{
            borderWidth: 1,
            width: 300,
            height: 50,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            width: 300,
            height: 50,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <Button title="Sing In" onPress={Verification} />
    </SafeAreaView>
  );
};

export default SingIn;
