import * as React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
  0: '#014064',
  1: '#2F5B83',
  2: '#18446B',
  3: '#DEDEE1',
  4: '#495875',
  5: '#485A96',
  6: '#efefef',
  7: '#ffffff',
}

export const styles = StyleSheet.create({

  //structure
  container: {
    backgroundColor: colors[2],
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // container2: {
  //   backgroundColor: '#123444',
  //   // flex: 1,
  //   alignItems: 'flex-start',
  //   // justifyContent: 'space',
  //   width: '100%',
  //   height: '100%',
  //   paddingHorizontal: 20,
  // },
  container2: {
    backgroundColor: colors[7],
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  container3: {
    backgroundColor: colors[7],
    height: '100%',
    width: '100%',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  // container3: {
  //   backgroundColor: colors[7],
  //   // height: '100%',
  //   width: '100%',
  //   flex: 1,
  //   alignItems: 'center',
  //   // justifyContent: 'flex-start'
  // },
  // scrollContainer: {
  //   // backgroundColor: colors[7],
  //   backgroundColor: 'red',
  //   height: '100%',
  //   width: '100%',
  //   flex: 1,
  // },
  tabRow: {
    width: '50%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  // row: {
  //   width: '90%',
  //   flexDirection: 'row',
  //   flexWrap: 'nowrap',
  //   justifyContent: 'space-between'
  // },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 5,
    marginBottom: 5,
    width: '90%',
    justifyContent: 'space-between'
  },
  sectionRow: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '90%',
    // backgroundColor: 'red'
    // marginTop: 20,
    // marginBottom: 20,
  },
  column: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
  },
  column2: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
  },
  column3: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // width: '90%',
    // marginTop: 20,
    // marginBottom: 20,
  },

  //components

  //labels
  label1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors[0],
    width: '90%'
  },
  label2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors[6],
  },
  label3: {
    fontSize: 18,
    fontWeight: '700',
    color: colors[6],
  },
  label4: {
    fontSize: 14,
    fontWeight: '600',
    width: '90%',
    color: colors[2],
    marginTop: 5,
    marginBottom: 5
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors[0],
    // width: '90%'
  },
  sectionDescription: {
    fontSize: 10,
    fontWeight: '500',
    color: colors[4],
    // width: '90%'
  },
  title1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  title2: {
    fontSize: 18,
    color: '#ececec',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '200',
    color: colors[0],
    textAlign: 'left',
    flex: 2,
    paddingLeft: 15,
    // width: '100%',
    // backgroundColor: 'red'
  },

  //buttons
  btnTab1: {
    padding: 2,
  },
  btnTabText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  btn1: {
    padding: 10,
    paddingHorizontal: 25,
    margin: 5,
    borderRadius: 5,
    backgroundColor: colors[1]
  },
  btnText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  // btn2: {
  //   padding: 10,
  //   paddingHorizontal: 25,
  //   margin: 5,
  // },
  // btnText2: {
  //   color: '#ccc',
  //   fontSize: 14,
  //   fontWeight: 'bold'
  // },
  btnIcon1: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colors[5]
  },
  btnTextIcon1: {
    color: '#eee',
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  buttonWithTextContainer: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    // backgroundColor: 'red',
    width: 75,
    height: 75
  },
  btn: {
    width: '100%',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: '#014064',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn2: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn2: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  //inputs
  txtInput1: {
    width: '90%',
    height: 50,
    // backgroundColor: colors[1],
    color: '#fff',
    marginTop: 2,
    marginBottom: 10,
    padding: 2,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF'
  },
  txtInput2: {
    width: '90%',
    height: 50,
    backgroundColor: colors[6],
    borderWidth: 1,
    borderColor: colors[0],
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#fff'
  },
  checkBox1On: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: colors[2],
    borderRadius: 5,
    backgroundColor: colors[1]
  },
  checkBox1Off: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: colors[2],
    borderRadius: 5,
    backgroundColor: colors[3]
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: '90%'
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 75,
    paddingHorizontal: 0,
    paddingTop: 20,
    // backgroundColor: 'blue'
  },
  singersContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // alignItems: 'flex-start',
    // justifyContent: 'space-ev',
    width: '100%',
    maxHeight: 100,
    margin: 5,
  },
  documentsContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // alignItems: 'flex-start',
    // justifyContent: 'space-ev',
    width: '100%',
    maxHeight: 100,
    marginTop: 5,
    marginBottom: 5,
  },

  //images
  logo1: {
    width: 240,
    height: 60,
    resizeMode: "stretch"
  },
  logo2: {
    width: (227 * 0.7),
    height: (284 * 0.7),
    resizeMode: 'stretch',
  },
  headerLogo: {
    width: 120 * 0.7,
    height: 30 * 0.7,
    resizeMode: "stretch"
  },

});