import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeNav from 'components/HomeNav';
import Reminder from 'components/Cards/Reminder';
import Progress from 'components/Cards/Progress';
import PracticeHistory from 'components/Cards/PracticeHistory';
import StartChallenge from 'components/Cards/StartChallenge';

const Home = () => {
  const sections = [
    { id: '1', component: <Reminder /> },
    { id: '2', component: <StartChallenge /> },
    { id: '3', component: <PracticeHistory /> },
    { id: '4', component: <Progress /> },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      {/* Navigation Bar */}
      <HomeNav />

      {/* Replace ScrollView with FlatList */}
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
        contentContainerStyle={{ paddingTop: 80, paddingBottom: 20, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="mb-4 w-full items-start">
            <Text className="text-5xl font-bold text-white">Hello Mayank,</Text>
            <Text className="text-3xl font-bold text-white">Welcome back</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
