import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  useColorScheme,
  Linking,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import LoginScreen from './components/LoginScreen';
import LoadingScreen from './components/LoadingScreen';
import SplashScreen from './components/splash';
import Info from './components/info';
import styles from './components/styles';
import Table from './components/tabel';
import moment from 'moment-timezone';

const App = () => {
  const [appReady, setAppReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [hasInternet, setHasInternet] = useState(false);
  const [loginExpired, setLoginExpired] = useState(false);
  useEffect(() => {
    // simulate a delay for the app to finish loading
    setTimeout(() => {
      setAppReady(true);
    }, 5000);
  }, []);

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  const handleBuyNow = () => {
    const telegramLink = 'https://t.me/AOA_HACK';
    Linking.openURL(telegramLink);
  };
  useEffect(() => {
    const checkInternet = async () => {
      try {
        const response = await fetch('https://www.google.com');
        if (response.ok) {
          setHasInternet(true);
        } else {
          setHasInternet(false);
        }
      } catch (error) {
        setHasInternet(false);
      }
    };
    checkInternet();
    const intervalId = setInterval(() => {
      checkInternet();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const checkExpiration = async () => {
      const now = new Date();
      try {
        const expiryDate = new Date('2023-07-30T2:00:00');
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const data = await response.json();
        const dateTimeString = data.datetime;
        const apiDateTime = new Date(dateTimeString);
        if (expiryDate <= apiDateTime) {
          setLoginExpired(true);
        } else {
          setLoginExpired(false);
        }
      } catch (error) {
        console.error(error);
        // if there's an error fetching the current time from the API, assume the app is still valid
        setLoginExpired(true);
      }
    };

    // check the expiration date on app start
    checkExpiration();

    // check the expiration date every minute
    const intervalId = setInterval(() => {
      checkExpiration();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    Keyboard.dismiss(); // Dismiss the keyboard after successful login
  };

  const handleLayout = (event: {
    nativeEvent: {layout: {width: number; height: number}};
  }) => {
    const {width, height} = event.nativeEvent.layout;
    if (width > height) {
      Orientation.lockToPortrait();
    }
  };

  if (showLoading) {
    return <LoadingScreen />;
  }

  if (!hasInternet) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          No internet connection. Please connect to the internet and try again.
        </Text>
      </View>
    );
  }
  if (loginExpired) {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Your login has expired,Please buy app again to continue.
        </Text>
        <TouchableOpacity
          style={[styles.buttonDown, {backgroundColor: '#1d3557'}]}
          onPress={handleBuyNow}>
          <Text style={[styles.buttonText, {color: '#fff'}]}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <>
      {appReady ? (
        loggedIn ? (
          <Info />
        ) : (
          <LoginScreen onLogin={handleLogin} />
        )
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

export default App;
