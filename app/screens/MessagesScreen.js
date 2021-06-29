import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSperator from '../components/ListItemSperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initalMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'T1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'T2',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initalMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((msg) => msg.id !== message.id));
    // Delete the message from messages
    // setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log('message list pressed! ', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'T3',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
