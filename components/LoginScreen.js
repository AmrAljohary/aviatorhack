import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  useColorScheme,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const LoginScreen = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const inputRef = useRef(null);
  const notificationRef = useRef(null);

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const textColor = isDarkMode ? '#fff' : '#000';
  const backgroundColor = isDarkMode ? '#000' : '#fff';

  const handleLogin = () => {
    if (username === 'gano' && password === 'gano123') {
      setLoading(true);
      setSuccess(false);
      setError(false);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        notificationRef.current?.bounceIn();
        setTimeout(() => {
          setSuccess(false);
          setUsername('');
          setPassword('');
          inputRef.current?.focus();
          notificationRef.current?.bounceOut();
          onLogin();
          Keyboard.dismiss(); // Dismiss the keyboard after successful login
        }, 500);
      }, 3000);
    } else {
      setError(true);
      setLoading(false);
      setUsername('');
      setPassword('');
      inputRef.current?.focus();
      notificationRef.current?.shake();
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TextInput
        ref={inputRef}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={[
          styles.input,
          {color: textColor, backgroundColor: backgroundColor},
        ]}
        placeholderTextColor={isDarkMode ? '#fff' : '#000'}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[
          styles.input,
          {color: textColor, backgroundColor: backgroundColor},
        ]}
        placeholderTextColor={isDarkMode ? '#fff' : '#000'}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={[styles.button, {backgroundColor: '#1d3557'}]}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text
            style={[styles.buttonText, {color: isDarkMode ? '#fff' : '#fff'}]}>
            Login
          </Text>
        )}
      </TouchableOpacity>
      <Animatable.View
        ref={notificationRef}
        style={[
          styles.notification,
          success && styles.success,
          error && styles.error,
        ]}>
        {success && (
          <Text style={styles.notificationText}>Login successful!</Text>
        )}
        {error && (
          <Text style={styles.notificationText}>
            Invalid username or password.
          </Text>
        )}
      </Animatable.View>
      <View style={styles.poweredBy}>
        <Text style={[styles.poweredByText, {color: textColor}]}>
          Powered by AOA Hacker
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
