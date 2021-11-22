import React from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#333333',
    flex: 1,
  },
  container: {
    flex: 1,
    elevation: 2,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: '#FFF'
  },
  containerTask: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
  },
  tasksWrapper: {
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    margin: 10,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  items: {
    marginTop: 30,
  },
  containerTaskItems:{
    flex: 1,
    marginBottom: 50,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    paddingLeft: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 0,
    justifyContent: 'space-between',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#2C497F',
    borderWidth: 1,
    width: 230,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2C497F',
    borderWidth: 1,
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
  },
  modalView: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonModal: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    elevation: 2,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#49416D',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,

  },
  textAnotationSucessfull: {
    color: "black",
    fontSize: 15,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  modalText: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",

  },
  modalContainerButton: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    paddingRight: 0,
  },
});
