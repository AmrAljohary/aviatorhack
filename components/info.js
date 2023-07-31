import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import ConnectToServer from './connect';
import styles from './styles';

const Info = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const textColor = isDarkMode ? '#fff' : '#000';
  const backgroundColor = isDarkMode ? '#000' : '#fff';

  const [isLoading, setIsLoading] = useState(false);
  const [showConnectToServer, setShowConnectToServer] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowConnectToServer(true);
    }, 5000);
  };

  return (
    <View style={[styles.container, {backgroundColor}]} >
      {showConnectToServer ? (
        <ConnectToServer />
      ) : (
        <>
          <Text style={[styles.headerText, {color: textColor}]}>
            Congratulations on taking the first step towards achieving your
            financial dreams!
            {'\n\n'}
            Our cutting-edge app provides you with the exact numbers for
            betting, giving you the opportunity to increase your profits and
            achieve financial freedom.
            {'\n\n'}
            Our app is designed to provide you with accurate and real-time data
            that can help you make informed decisions and increase your chances
            of winning.
            {'\n\n'}
            So, what are you waiting for?
          </Text>
          <TouchableOpacity
            style={[styles.buttonDown, {backgroundColor: '#1d3557'}]}
            onPress={handleButtonClick}
            disabled={isLoading}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {isLoading && (
                <ActivityIndicator
                  size="small"
                  color="#ffffff"
                  style={{marginRight: 10}}
                />
              )}
              {!isLoading && (
                <Text style={[styles.buttonText, {color: '#fff'}]}>
                  Let's Go!
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Info;
