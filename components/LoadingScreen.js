import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  useColorScheme,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const LoadingScreen = () => {
  const defaultIndex = 0;
  const numbers = [1, 2, 3, 4, 5]; // replace with your own array of numbers
  const [number, setNumber] = useState(null);
  const [showStartButton, setShowStartButton] = useState(false);
  const [showNextGameButton, setShowNextGameButton] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const textColor = isDarkMode ? '#fff' : '#fff';
  const backgroundColor = isDarkMode ? '#000' : '#fff';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartButton(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (gameStarted) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setShowNextGameButton(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [number, gameStarted]);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      //comment it
      // setNumber(numbers[defaultIndex]);
      //to here
      setNumber(Math.random() * 7);
      setGameStarted(true);
      setShowStartButton(false);
      setLoading(false);
    }, 3000);
  };

  const handleNextGame = () => {
    setLoading(true);
    setTimeout(() => {
      //comment this
      // const nextIndex = numbers.indexOf(number) + 1;
      // const nextNumber =
      //   nextIndex >= numbers.length ? numbers[0] : numbers[nextIndex];
      // setNumber(nextNumber);
      //to here to show random
      setNumber(Math.random() * 27);
      setShowNextGameButton(false);
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Image style={styles.logo} source={require('../assets/rocket.png')} />
      <Animatable.View style={styles.loadingScreen}>
        <Animatable.Text
          style={styles.loadingText}
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite">
          Loading...
        </Animatable.Text>
        {number !== null && (
          <Animatable.Text
            style={styles.number}
            animation="fadeIn"
            duration={500}>
            {number.toFixed(1)}
          </Animatable.Text>
        )}
        {showStartButton && (
          <TouchableOpacity onPress={handleStart} style={styles.button}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={[styles.buttonText]}>Start</Text>
            )}
          </TouchableOpacity>
        )}
        {showNextGameButton && (
          <TouchableOpacity onPress={handleNextGame} style={styles.button}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={[styles.buttonText]}>Next Game</Text>
            )}
          </TouchableOpacity>
        )}
        <View style={styles.poweredBy}>
          <Text style={styles.poweredByText}>Powered by AOA Hacker</Text>
        </View>
      </Animatable.View>
    </View>
  );
};

export default LoadingScreen;
