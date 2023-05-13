import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQScreen = () => {
  const data = [
    {
      question: 'Apa itu PregBud?',
      answer: 'PregBud adalah aplikasi mobile yang dirancang khusus untuk membantu ibu hamil dalam memantau kesehatan janin serta memberikan informasi seputar kehamilan.'
    },
    {
      question: 'Bagaimana cara mendaftar di PregBud?',
      answer: 'Untuk mendaftar di PregBud, pengguna bisa melakukan registrasi melalui tombol "Daftar" yang terdapat pada halaman utama aplikasi.'
    },
    {
      question: 'Apakah PregBud gratis?',
      answer: 'Ya, PregBud dapat diunduh dan digunakan secara gratis oleh pengguna.'
    },
    {
      question: 'Bagaimana cara menghubungi dokter di PregBud?',
      answer: 'Pengguna dapat menghubungi dokter melalui fitur "Doctor List" yang terdapat pada aplikasi PregBud.'
    },
    {
      question: 'Apakah PregBud aman digunakan selama kehamilan?',
      answer: 'PregBud aman digunakan selama kehamilan karena telah melalui uji klinis dan disetujui oleh Badan Pengawas Obat dan Makanan.'
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  answer: {
    fontSize: 14,
    lineHeight: 20
  }
});

export default FAQScreen;
