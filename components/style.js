import { StyleSheet } from 'react-native';

const appTheme = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffff',
  },
  image: {
    width: 200,
    height: 200,
    zIndex: 10,
    borderRadius: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  poweredBy: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  poweredByText: {
    color: '#888',
    fontSize: 12,
  },
});

export default appTheme;
