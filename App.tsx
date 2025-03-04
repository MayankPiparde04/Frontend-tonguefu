import Game from 'pages/Game';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import './global.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const scaleAnim = new Animated.Value(1); // Animation scale

  const handleTabPress = (tab) => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.3, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();

    setActiveTab(tab);
  };

  const renderScreen = () => {
    if (activeTab === 'Home') return <Home />;
    if (activeTab === 'Game') return <Game />;
    if (activeTab === 'Profile') return <Profile />;
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Main Screen */}
      <View style={{ flex: 1 }}>{renderScreen()}</View>

      {/* Bottom Tab Bar */}
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          backgroundColor: '#222',
          borderTopWidth: 1,
          borderColor: '#444',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {['Home', 'Game', 'Profile'].map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTabPress(tab)}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.View style={{ transform: [{ scale: activeTab === tab ? scaleAnim : 1 }] }}>
              <Icon
                name={tab === 'Home' ? 'home' : tab === 'Game' ? 'controller-classic' : 'account'}
                size={30}
                color={activeTab === tab ? 'tomato' : 'gray'}
              />
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default App;
