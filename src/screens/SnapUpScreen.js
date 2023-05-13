import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const PRODUCTS = [
  { id: 1, name: 'Vitamin Prenatal', image: 'https://plus.unsplash.com/premium_photo-1664453891531-fc7862cac2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80' },
  { id: 2, name: 'Sabuk Maternity', image: 'https://images.unsplash.com/photo-1608461864721-b8f50c91c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
  { id: 3, name: 'Bantal Kehamilan', image: 'https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2018/08/17/3038958329.jpg' },
  { id: 4, name: 'Bra Menyusui', image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR02N5J-E5Y38D3TyyfnvLcJu3ja54ctYh4rK7UF45JDGwXN7DVtCQ_X19S9r_u4waBmE5J_mNA2cs6lsV2ZDY' },
  { id: 5, name: 'Pompa ASI', image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1617710007/attached_image/pilah-pilih-pompa-asi-0-alodokter.jpg' },
  { id: 6, name: 'Gendongan Bayi', image: 'https://plus.unsplash.com/premium_photo-1682003647524-95386bf39212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
];

const SnapUpScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10
  },
  productContainer: {
    width: '33%',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    textAlign: 'center',
  },
});

export default SnapUpScreen;
