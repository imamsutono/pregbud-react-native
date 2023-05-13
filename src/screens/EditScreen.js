import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditScreen = ({ route, navigation }) => {
  const data = route.params;
  const [name, setName] = useState(data.title);
  const [image, setImage] = useState(data.image);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    Alert.alert('Edit berhasil', 'Data berhasil diperbarui');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nama</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Upload gambar</Text>
        <View style={styles.imagePreview}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
      </View>
      <TouchableOpacity onPress={pickImage}>
        <Text style={{ color: '#EF8C0B' }}>Ubah Gambar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitLabel}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  fileInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  imagePreview: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
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

export default EditScreen;
