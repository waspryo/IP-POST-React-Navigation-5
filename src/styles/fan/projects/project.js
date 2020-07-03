import { StyleSheet } from 'react-native';

const bgcw = "#fff"

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  projectImage: {
    flex: 1,
  },
  item: {
    backgroundColor: bgcw,
  },
  detailLayout: {
    backgroundColor: bgcw
  },
  projectText: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  itemTitle: {
    marginTop: 10,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 27,
  },
  itemText: {
    marginTop: 18,
    marginRight: 15,
    marginLeft: 15,
    fontSize: 13,
    lineHeight: 23
  },
  headingText: {
    fontSize: 17,
    textAlign: 'center'
  },
  textNotice: {
    fontSize: 14
  },
  howToUseEmeposText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'
  },
  // ShareView
  ShareViewContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ShareViewContainerOfInner: {
    backgroundColor: "#3DC0B1",
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ShareViewStep1: {
    color: 'white',
    textAlign: 'center'
  }
})