import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppointmentScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  };

  const handleSubmit = () => {
    Alert.alert('Pengajuan berhasil!', 'Jadwal janji temu telah diajukan ke dokter.');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Appointment Form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />

      <View style={styles.timeDateContainer}>
        <Button title="Select Date" onPress={showDatePicker} />
        <Button title="Select Time" onPress={showTimePicker} />
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitLabel}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  textInput: {
    paddingHorizontal: 16,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10
  },
  timeDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  submitButton: {
    backgroundColor: '#EF8C0B',
    borderRadius: 8,
    paddingVertical: 16,
    marginTop: 24
  },
  submitLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default AppointmentScreen;
