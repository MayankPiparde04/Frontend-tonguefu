import { PlusCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Small Reminder Card Component
const ReminderCard = ({ title, date, time }) => (
  <View className="mt-3 rounded-lg border border-gray-700 bg-gray-800 p-3 shadow-md">
    <Text className="text-lg font-semibold text-white">{title}</Text>
    <Text className="text-gray-400">
      {date} - {time}
    </Text>
  </View>
);

const Reminder = () => {
  const [reminders, setReminders] = useState([
    { id: '1', title: 'Meeting with Team', date: 'March 5, 2025', time: '10:00 AM' },
    { id: '2', title: 'Doctor Appointment', date: 'March 6, 2025', time: '3:30 PM' },
  ]);

  return (
    <View className="flex h-[300px] min-w-full p-4">
      <View className="h-full rounded-2xl bg-gray-900 p-4 shadow-md">
        <Text className="text-xl font-bold text-white">Reminders</Text>
        <FlatList
          data={reminders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReminderCard title={item.title} date={item.date} time={item.time} />
          )}
        />
      </View>
      <TouchableOpacity
        className="absolute bottom-6 right-6 rounded-full bg-blue-500 p-3 shadow-lg"
        onPress={() => console.log('Add Reminder')}>
        <PlusCircle size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Reminder;
