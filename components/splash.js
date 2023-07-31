import React from 'react';
import {StyleSheet, View, Image, Text, useColorScheme} from 'react-native';
import styles from './styles';

const SplashScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const textColor = isDarkMode ? '#fff' : '#000';
  const backgroundColor = isDarkMode ? '#000' : '#fff';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Image
        source={require('../assets/rocket-login.jpg')}
        style={styles.image}
      />
      <Text style={[styles.text, {color: textColor}]}>
        Welcome To Aviator Hack App !
      </Text>
      <Text style={[styles.text, {color: textColor}]}>Get Ready For 22 X</Text>
      <View style={styles.poweredBy}>
        <Text style={[styles.poweredByText, {color: textColor}]}>
          Powered By AOA Hacker
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
