import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function DetailsScreen() {
  const data = [
    {
      id: 1,
      title: 'Estrogen',
      subtitle: '120 pg/mL',
      normal: true,
      image: 'https://picsum.photos/id/101/200/200',
    },
    {
      id: 2,
      title: 'Norepinephrine',
      subtitle: '90 mmHg',
      normal: true,
      image: 'https://picsum.photos/id/102/200/200',
    },
    {
      id: 3,
      title: 'Tingkat Glukosa',
      subtitle: '189 mg/dL',
      normal: false,
      image: 'https://picsum.photos/id/103/200/200',
    },
  ];  

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
        <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 40, marginRight: 16 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: '#777', marginEnd: 8 }}>{item.subtitle}</Text>

            <Ionicons
              name={item.normal ? 'checkmark-circle' : 'close-circle'}
              size={16}
              color={item.normal ? 'green' : 'red'}
            />
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#EF8C0B', borderRadius: 8, padding: 8 }}>
          <Text style={{ color: '#fff' }}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default DetailsScreen;
