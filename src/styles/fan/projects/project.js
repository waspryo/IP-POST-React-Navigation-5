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
  // ProjectList
  ProjectList: {
    opacity: 1,
    height: 450
  },
  DiabledProjectList: {
    opacity: 0.3,
    height: 450
  },
  ProjectListVisible: {
    opacity: 1,
  },
  ProjectListInvisible: {
    opacity: 0.4
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
  },
  //  Modal
  ProjectModal: {
    width: "90%",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    borderColor: '#3DC0B1',
    borderRadius: 7,
    color: '#fff'
  },
  ProjectModalInner: {
    flexDirection: "row",
    marginBottom: 20,
    height: 36,
    position: "relative"
  },
  ProjectModalTab1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3DC0B1",
    borderRadius: 4,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  ProjectModalTab2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3DC0B1",
    borderRadius: 4,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  ProjectModalImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  // StoriesImage
  StoriesImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  // Report
  ReportButton: {
    backgroundColor: '#3DC0B1',
    flex: 1,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 10
  },
  DisabledReportButton: {
    backgroundColor: '#3DC0B1',
    flex: 1,
    opacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 10
  }
})