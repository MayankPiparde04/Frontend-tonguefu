import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeNav = () => {
  return (
    <SafeAreaView className="absolute left-0 right-0 top-0 z-50 bg-[#FF6347]">
      <View className="flex min-h-[70px] w-full flex-row items-center justify-between px-4 py-3">
        <Text className="text-lg font-bold text-white">TONGUEFU</Text>
        <Image
          source={{ uri: 'https://picsum.photos/200/200' }}
          className="h-12 w-12 rounded-full"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeNav;
