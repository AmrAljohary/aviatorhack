import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //spalsh

  image: {
    width: '60%',
    height: '30%',
    zIndex: 10,
    borderRadius: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  // Login Screen
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextT: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    width: '80%',
    color: '#ffffff',
    borderRadius: 20,
    textTransform: 'capitalize',
    lineHeight: 30,
  },
  headerText: {
    position: 'absolute',
    top: 100,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    width: '100%',
    color: '#ffffff',
    height: '80%',
    // backgroundColor: '#1d3557',
    borderRadius: 20,
    padding: 20,
    textTransform: 'capitalize',
    lineHeight: 30,
  },
  input: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#457b9d',
    backgroundColor: '#ffffff',
  },
  button: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: '#1d3557',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: '#1d3557',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },
  buttonDown: {
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: '#1d3557',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    zIndex: 999,
  },
  notificationText: {
    color: '#ffffff',
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 5,
  },
  success: {
    backgroundColor: '#06d6a0',
  },
  error: {
    backgroundColor: '#e63946',
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
  //connect
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextConnect: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBar: {
    width: '80%',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    margin: 20,
  },
  cancelButton: {
    marginLeft: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#d62828',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Loading Screen
  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00ccff',
  },
  number: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00ccff',
  },
  logo: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    zIndex: 1,
    height: '30%', // customize the height here
  },
  //tabel
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginTop: 50,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default styles;
