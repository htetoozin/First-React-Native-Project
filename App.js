import React, { useState } from 'react';
import { FlatList, View, Text, TextInput, Switch } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  // const [category, setCategory] = useState(categories[0]);
  return (
    // <View style={{ backgroundColor: '#f8f4f4', padding: 20, paddingTop: 100 }}>
    //   <Card
    //     title='Red jacket for sale'
    //     subTitle='$100'
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>
    // <Screen>
    //   {/* <Icon name='email' size={35} backgroundColor='red' iconColor='white' /> */}
    //   <ListItem
    //     title='My title'
    //     // subTitle='My subtitle'
    //     ImageComponent={<Icon name='email' />}
    //   />
    // </Screen>
    // <ListingsScreen />
    // <Screen>
    //   {isNew}
    //   <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    // </Screen>
    <LoginScreen />
    // <Screen>
    //   {/* <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon='apps'
    //     placeholder='Category'
    //   />
    //   <AppTextInput icon='email' placeholder='Email' /> */}

    // </Screen>
  );
}
