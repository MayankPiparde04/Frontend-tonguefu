import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Game List
const games = [
  { id: 1, title: 'Word Puzzle' },
  { id: 2, title: 'Tongue Twisters' },
  { id: 3, title: 'Word Building Blocks' },
  { id: 4, title: 'Speech Speed Challenge' },
  { id: 5, title: 'Sentence Repair' },
  { id: 6, title: 'Rhyming Words Game' },
];

const Game = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  // If a game is selected, show its dummy screen
  if (selectedGame) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
        <Text className="text-2xl font-bold">{selectedGame} - Dummy Screen</Text>
        <TouchableOpacity
          onPress={() => setSelectedGame(null)}
          className="mt-6 rounded-lg bg-red-500 px-6 py-3">
          <Text className="font-semibold text-white">Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // Main Game Selection Screen
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="mb-6 text-2xl font-bold">Select a Game</Text>
      <View className="w-full items-center">
        {games.map((game) => (
          <TouchableOpacity
            key={game.id}
            onPress={() => setSelectedGame(game.title)}
            className="mb-4 h-16 w-3/4 items-center justify-center rounded-lg bg-blue-500 shadow-lg active:scale-95">
            <Text className="text-lg font-semibold text-white">{game.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Game;
