import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    // flex: 1,
    // alignSelf: 'stretch',
    // marginTop: 30,
    // marginHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20
  },
  projectImage: {
    flex: 1,
  },
  projectText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover', // or 'stretch'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 470,
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    backgroundColor: '#3DC0B1',
  },
  bntColor: {
    color: 'white',
  }
})