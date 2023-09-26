import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

const TodoList = () => {
  const alumnos = [{name: 'Juan'}, {name: 'Pedro'}, {name: 'Maria'}];

  const [alumnosList, setAlumnosList] = React.useState(alumnos);
  const [name, setName] = React.useState<string>('');

  function add(name: string) {
    /* const newAlumno = {name};
      setAlumnosList([...alumnosList, newAlumno]);
      setName(''); */
    //verifica si no existen espacios o si el input esta vacio
    if (name.trim().length > 0) {
      setAlumnosList(value => value.concat({name}));
      setName('');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <View style={styles.cotainerSearch}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nombre del alumno"
          value={name}
          onChangeText={setName}
        />
        <Button title="Agregar" onPress={() => add(name)} />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={alumnosList}
          renderItem={({item}) => (
            <Text style={styles.itemsList}>{item.name}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  cotainerSearch: {
    flex: 2,
    justifyContent: 'space-evenly',
    padding: 20,
    borderRadius: 15,
  },
  input: {
    backgroundColor: '#f5f5f5',
    height: 60,
    margin: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  containerList: {
    flex: 8,
    backgroundColor: '#f5f5f8',
    margin: 20,
    alignItems: 'center',
    borderRadius: 15,
    width: '75%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2285F1',
    marginVertical: 20,
  },
  itemsList: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default TodoList;
