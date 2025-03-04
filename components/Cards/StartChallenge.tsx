import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const challenges = [
  '🔹 Try the Tongue Twister Challenge Today!',
  '🔹 Master the Word Association Game!',
  '🔹 Improve with the Sentence Repair Task!',
  '🔹 Take on the Rhyming Words Challenge!',
  '🔹 Boost Your Skills with the Storytelling Exercise!',
];

const StartChallenge = () => {
  const [challengeIndex, setChallengeIndex] = useState(
    Math.floor(Math.random() * challenges.length)
  );

  const handleNewChallenge = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * challenges.length);
    } while (newIndex === challengeIndex); // Ensures a new challenge is picked
    setChallengeIndex(newIndex);
  };

  return (
    <Animated.View
      entering={FadeInUp.springify()}
      className="flex w-full items-center justify-center p-4">
      <View className="flex w-full rounded-xl bg-[#1A1C2B] p-4 shadow-lg">
        <Text className="mb-2 text-lg font-semibold text-white">Start a New Challenge</Text>
        <Text className="mb-4 text-sm text-gray-300">{challenges[challengeIndex]}</Text>
        <View className="flex-row justify-between">
          <TouchableOpacity className="mr-2 flex-1 rounded-lg bg-blue-600 px-4 py-2 active:bg-blue-700">
            <Text className="text-center font-semibold text-white">Start Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 rounded-lg bg-gray-700 px-4 py-2 active:bg-gray-600"
            onPress={handleNewChallenge}>
            <Text className="text-center font-semibold text-white">Try Another</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default StartChallenge;
