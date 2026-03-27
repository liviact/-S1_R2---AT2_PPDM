import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Contato() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fale Conosco</Text>

      <View style={styles.item}>
        <FontAwesome name="phone" size={24} color="#000" />
        <Text style={styles.text}>(11) 99999-9999</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome name="whatsapp" size={24} color="#25D366" />
        <Text style={styles.text}>WhatsApp: (11) 99999-9999</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome name="map-marker" size={24} color="#E74C3C" />
        <Text style={styles.text}>Rua da Moda, 123, São Paulo - SP</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome name="id-card" size={24} color="#000" />
        <Text style={styles.text}>CNPJ: 12.345.678/0001-99</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },

  text: {
    fontSize: 16,
    color: '#555',
  },
});