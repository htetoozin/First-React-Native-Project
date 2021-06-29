import React, { useState } from 'react';
import ListItem from './app/components/ListItem';
import ListingEditScreen from './app/screens/ListingEditScreen';
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
    // <LoginScreen />
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
    <ListItem />
  );
}
