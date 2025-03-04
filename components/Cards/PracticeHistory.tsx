import { CheckCircle, XCircle } from 'lucide-react-native';
import { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

const PracticeHistory = () => {
  // Using useMemo for better performance
  const practiceHistory = useMemo(
    () => [
      { id: '1', name: 'Word Puzzle', status: 'Completed', accuracy: '80%' },
      { id: '2', name: 'Tongue Twister', status: 'Completed', accuracy: '85%' },
      { id: '3', name: 'Sentence Repair', status: 'Incomplete', accuracy: '60%' },
      { id: '4', name: 'Rhyming Words', status: 'Completed', accuracy: '90%' },
    ],
    []
  );

  return (
    <View className="flex w-full items-center justify-center p-4">
      <View className="min-h-72 w-full rounded-xl bg-[#0D0F1B] p-4">
        <Text className="mb-3 text-lg font-semibold tracking-wide text-white">
          Practice History
        </Text>

        <FlatList
          data={practiceHistory}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animated.View
              entering={FadeInRight.springify().delay(index * 100)}
              className="mb-2 flex-row items-center justify-between rounded-md bg-[#1A1C2B] p-2">
              <Text className="text-sm tracking-wide text-white">{item.name}</Text>
              <View className="flex-row items-center">
                <Text className="mr-2 text-xs text-gray-300">{item.accuracy}</Text>
                {item.status === 'Completed' ? (
                  <CheckCircle size={18} color="green" />
                ) : (
                  <XCircle size={18} color="red" />
                )}
              </View>
            </Animated.View>
          )}
          contentContainerStyle={{ paddingBottom: 10 }}
          windowSize={5} // Optimized for performance
          initialNumToRender={3} // Loads only necessary items
        />
      </View>
    </View>
  );
};

export default PracticeHistory;
