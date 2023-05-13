import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function DetailsScreen({ route, navigation }) {
  const data = [
    {
      id: 1,
      title: 'Estrogen',
      subtitle: '120 pg/mL',
      normal: true,
      image: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20220214080221/ri/950/src/images/Article_Images/ImageForArticle_22114_16448437406713117.jpg',
    },
    {
      id: 2,
      title: 'Norepinephrine',
      subtitle: '90 mmHg',
      normal: true,
      image: 'https://thumbs.dreamstime.com/z/norepinephrine-structural-chemical-formula-model-molecul-noradrenaline-organic-functions-brain-body-as-116477330.jpg',
    },
    {
      id: 3,
      title: 'Tingkat Glukosa',
      subtitle: '189 mg/dL',
      normal: false,
      image: 'https://media.istockphoto.com/id/1092296428/id/vektor/glukosa-molekul-gula-anggur-alpha-glukosa-dan-beta-glukosa-formula-kimia-struktural-dan.webp?s=612x612&w=is&k=20&c=Rv0__arbiAUdtVRaCYvENMfMPrNYEIjqSAkHQsuUCzw=',
    },
  ];

  const onEdit = ({ title, image }) => {
    navigation.navigate('EditStack', { title, image });
  };

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
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
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

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: '#EF8C0B',
    borderRadius: 8,
    padding: 8
  }
});

export default DetailsScreen;
