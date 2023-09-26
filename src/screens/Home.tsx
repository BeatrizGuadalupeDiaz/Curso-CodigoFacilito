import React from 'react'
import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation}:any) => {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:28, fontWeight:'bold'}}>Welcome, User!!</Text>
      <Button title="Go to Todo List" onPress={() => navigation.navigate('TodoList')} />
    </SafeAreaView>
  )
}

export default Home