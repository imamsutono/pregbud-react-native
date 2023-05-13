import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

function DetailsScreen() {
  const data = [
    {
      id: 1,
      title: 'Perawatan Kehamilan',
      subtitle: 'Mulai dari pendaftaran hingga persalinan',
      image: 'https://picsum.photos/id/101/200/200',
    },
    {
      id: 2,
      title: 'Makanan Sehat untuk Ibu Hamil',
      subtitle: 'Makanan seimbang yang dibutuhkan ibu hamil',
      image: 'https://picsum.photos/id/102/200/200',
    },
    {
      id: 3,
      title: 'Latihan Prenatal Yoga',
      subtitle: 'Manfaat dan panduan latihan prenatal yoga',
      image: 'https://picsum.photos/id/103/200/200',
    },
  ];  

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
        <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius: 40, marginRight: 16 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ fontSize: 12, color: '#777' }}>{item.subtitle}</Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#EF8C0B', borderRadius: 8, padding: 8 }}>
          <Text style={{ color: '#fff' }}>Edit</Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
