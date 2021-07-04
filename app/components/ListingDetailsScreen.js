import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import colors from '../config/colors';
import AppText from './AppText';
import ListItem from './ListItem';

const ListingDetailsScreen = () => {
  const route = useRoute();
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          title='Htet Oo Zin'
          subTitle='5 things'
          image={require('../assets/mosh.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;
