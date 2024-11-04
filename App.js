import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  
  const agregarAlumno = () => {
    if (nombre.trim() && edad.trim()) { // Verificar que los campos no estén vacíos
      setAlumnos([...alumnos, { id: Date.now().toString(), nombre, edad }]);
      setNombre('');
      setEdad('');
    }
  };

  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter(alumno => alumno.id !== id));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput 
        placeholder="Nombre" 
        value={nombre} 
        onChangeText={setNombre} 
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} 
      />
      <TextInput 
        placeholder="Edad" 
        value={edad} 
        onChangeText={setEdad} 
        keyboardType="numeric" 
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} 
      />
      <Button title="Agregar Alumno" onPress={agregarAlumno} />

      <FlatList
        data={alumnos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
            <Text>{item.nombre} - {item.edad}</Text>
            <TouchableOpacity onPress={() => eliminarAlumno(item.id)}>
              <Text style={{ color: 'red' }}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
