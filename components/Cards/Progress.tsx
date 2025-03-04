import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// Dummy Data
const dummyData = [
  { label: 'Speed', progress: 75, icon: 'speedometer' },
  { label: 'Accuracy', progress: 85, icon: 'check-circle' },
  { label: 'Consistency', progress: 60, icon: 'chart-line' },
];

const ProgressCard = ({ data = dummyData }) => {
  return (
    <View className="flex w-full flex-col items-center justify-center px-4 py-4">
      <View className="w-full items-center rounded-2xl bg-gray-900 p-6 shadow-lg ">
        <Text className="mb-2 text-center text-lg font-bold text-white">Performance Overview</Text>
        <View className="flex flex-row justify-between px-4 py-2">
          {data?.[0] && (
            <View className="flex-1 items-center">
              <ProgressItem label={data[0].label} progress={data[0].progress} icon={data[0].icon} />
            </View>
          )}
          {data?.[1] && (
            <View className="flex-1 items-center">
              <ProgressItem label={data[1].label} progress={data[1].progress} icon={data[1].icon} />
            </View>
          )}
          {data?.[2] && (
            <View className="flex-1 items-center">
              <ProgressItem label={data[2].label} progress={data[2].progress} icon={data[2].icon} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const ProgressItem = ({ label, progress, icon }) => {
  const progressValue = useSharedValue(0);

  useEffect(() => {
    progressValue.value = withTiming(progress, { duration: 1000, easing: Easing.ease });
  }, [progress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: 125 - (125 * progressValue.value) / 100, // Circular progress
  }));

  return (
    <View className="items-center">
      <Svg height="60" width="60" viewBox="0 0 50 50">
        {/* Background Circle */}
        <Circle cx="25" cy="25" r="20" stroke="#444" strokeWidth="5" fill="none" />

        {/* Animated Progress Circle */}
        <AnimatedCircle
          cx="25"
          cy="25"
          r="20"
          stroke="#FF6347" // Tomato color
          strokeWidth="5"
          fill="none"
          strokeDasharray="125"
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>

      {/* Progress & Icon */}
      <View className="mt-2 flex flex-row items-center">
        <Icon name={icon} size={18} color="#FF6347" />
        <Text className="ml-1 text-sm font-semibold text-white">{progress}%</Text>
      </View>

      {/* Label */}
      <Text className="text-xs text-gray-400">{label}</Text>
    </View>
  );
};

export default ProgressCard;
