import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PregBud</Text>
      <TouchableOpacity onPress={handleMenuToggle}>
        <Ionicons name="menu" size={30} color="#fff" />
      </TouchableOpacity>

      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="information-circle-outline" size={30} color="#333" />
            <Text style={styles.menuText}>Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="medkit-outline" size={30} color="#333" />
            <Text style={styles.menuText}>Doctor List</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle-outline" size={30} color="#333" />
            <Text style={styles.menuText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="cart-outline" size={30} color="#333" />
            <Text style={styles.menuText}>Snap Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5b9aa0',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 18,
  },
};

export default Header;
