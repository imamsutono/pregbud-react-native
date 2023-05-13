import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const data = [
  {
    id: 1,
    name: 'dr. John Doe, Sp.OG',
    specialization: 'Obstetri dan Ginekologi',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'dr. Jane Doe, Sp.A',
    specialization: 'Anak',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'dr. Mark Smith, Sp.PD',
    specialization: 'Penyakit Dalam',
    image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 4,
    name: 'dr. Sarah Johnson, Sp.KJ',
    specialization: 'Kedokteran Jiwa',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
];

const DoctorListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    marginHorizontal: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardText: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  specialization: {
    fontSize: 14,
    color: '#999',
  },
});

export default DoctorListScreen;
