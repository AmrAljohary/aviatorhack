import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  useColorScheme,
  Animated,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';

const generateRandomName = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let name = '';
  for (let i = 0; i <= 5; i++) {
    if (i < 2) {
      name += characters.charAt(Math.floor(Math.random() * characters.length));
    } else {
      name += '**';
    }
  }
  return name;
};
  const handleBuyNow = () => {
    const telegramLink = 'https://t.me/AOA_HACK';
    Linking.openURL(telegramLink);
  };
const generateRandomAmount = () => {
  const max = 4000; // زيادة الحد الأقصى للرقم العشوائي
  const random = Math.floor(Math.random() * max);
  const amount = Math.ceil(random / 5) * 5;
  return amount;
};

const generateRandomRatio = () => {
  return (Math.floor(Math.random() * 251) + 10) / 10;
};

const generateRandomProfit = (amount, ratio) => {
  return (amount * ratio).toFixed(2);
};
const stylesByProfit = {
  positive: {
    backgroundColor: '#00C851',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 8,
    alignSelf: 'flex-start',
  },
  negative: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 8,
    alignSelf: 'flex-start',
  },
};

const Table = () => {
  const ROW_HEIGHT = 0;
  const FADE_ANIMATION_DURATION = 500;
  const MOVE_ANIMATION_DURATION = 1000;
  const [data, setData] = useState(
    [...Array(10)].map(() => ({
      name: generateRandomName(),
      amount: generateRandomAmount(),
      ratio: generateRandomRatio(),
      profit: generateRandomProfit(
        generateRandomAmount(),
        generateRandomRatio(),
      ),
    })),
  );

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const textColor = isDarkMode ? '#fff' : '#000';
  const backgroundColor = isDarkMode ? '#000' : '#fff';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(prevData => {
        const newData = [
          ...prevData.slice(1),
          {
            name: generateRandomName(),
            amount: generateRandomAmount(),
            ratio: generateRandomRatio(),
            profit: generateRandomProfit(
              generateRandomAmount(),
              generateRandomRatio(),
            ),
          },
        ];
        return newData;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.headerText, {color: textColor}]}>
        Join the ranks of successful investors and enjoy the profits with our
        app.
      </Text>
      <View style={styles.tableRow}>
        <Text style={[styles.tableHeader, {color: textColor}]}>Profit</Text>
        <Text style={[styles.tableHeader, {color: textColor}]}>Ratio</Text>
        <Text style={[styles.tableHeader, {color: textColor}]}>Amount</Text>
        <Text style={[styles.tableHeader, {color: textColor}]}>Name</Text>
      </View>
      {data.map((row, i) => {
        const {profit, ratio, amount, name} = row;
        const backgroundColorStyle =
          profit > 0 ? stylesByProfit.positive : stylesByProfit.negative;
        const translateY = new Animated.Value((i + 1) * ROW_HEIGHT);

        const fadeIn = Animated.timing(translateY, {
          toValue: i * ROW_HEIGHT,
          duration: FADE_ANIMATION_DURATION,
          useNativeDriver: true,
        });
        const moveDown = Animated.timing(translateY, {
          toValue: i * ROW_HEIGHT,
          duration: MOVE_ANIMATION_DURATION,
          useNativeDriver: true,
        });

        useEffect(() => {
          Animated.sequence([fadeIn, moveDown]).start();
        }, [fadeIn, moveDown]);

        return (
          <Animated.View
            key={i}
            style={[
              styles.tableRow,
              {transform: [{translateY}]},
              backgroundColorStyle,
            ]}>
            <Text style={[styles.tableCell, {color: textColor}]}>
              ${profit}
            </Text>
            <Text style={[styles.tableCell, {color: textColor}]}>
              {ratio.toFixed(1)}
            </Text>
            <Text style={[styles.tableCell, {color: textColor}]}>
              ${amount}
            </Text>
            <Text style={[styles.tableCell, {color: textColor}]}>{name}</Text>
          </Animated.View>
        );
      })}
      <TouchableOpacity
        style={[styles.buttonDown, {backgroundColor: '#1d3557'}]}
        onPress={handleBuyNow}>
        <Text style={[styles.buttonText, {color: '#fff'}]}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Table;
