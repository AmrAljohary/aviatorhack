import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Image,
  Animated,
  BackHandler,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {ActivityIndicator} from 'react-native';
import styles from './styles';
import LoadingScreen from './LoadingScreen';

const ConnectToServer = () => {
  const [fadeIn] = useState(new Animated.Value(0));
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [isLoading, setIsLoading] = useState(true);
  const [isConnectionSuccessful, setIsConnectionSuccessful] = useState(false);
  const [showCancelButton, setShowCancelButton] = useState(false);

  const textColor = isDarkMode ? '#fff' : '#000';
  const backgroundColor = isDarkMode ? '#000' : '#fff';

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return true;
      },
    );

    return () => backHandler.remove();
  }, [fadeIn]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        const timer = setTimeout(() => {
          setIsLoading(false);
          setIsConnectionSuccessful(true);
        }, 5000);

        return () => clearTimeout(timer);
      } else {
        setIsLoading(false);
        setShowCancelButton(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCancel = () => {
    BackHandler.exitApp();
  };

  if (isLoading) {
    return (
      <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.overlay} />
        <Animated.Text
          style={[
            styles.headerTextConnect,
            {color: textColor, opacity: fadeIn},
          ]}>
          Connecting to game server...
        </Animated.Text>
        <ActivityIndicator
          size="large"
          color={textColor}
          style={styles.loader}
        />
      </View>
    );
  } else {
    if (isConnectionSuccessful) {
      return <LoadingScreen />;
    } else {
      return (
        <View style={[styles.container, {backgroundColor}]}>
          <View style={styles.overlay} />
          <Animated.Text
            style={[
              styles.headerTextConnect,
              {color: textColor, opacity: fadeIn},
            ]}>
            Connection successful!
          </Animated.Text>
          <Animated.View style={[styles.textContainer, {opacity: fadeIn}]}>
            <TouchableOpacity
              style={styles.connectButton}
              onPress={() => setIsConnectionSuccessful(true)}>
              <Text style={[styles.buttonText, {color: textColor}]}>
                Continue
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      );
    }
  }
};

export default ConnectToServer;
