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
    backgroundColor: '#FFF'
  },
  containerTask:{
    flexDirection:'row',
    alignItems: 'center',
    position: 'relative',
  },
  tasksWrapper: {
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    paddingLeft: 10,
    width: '100%',
    flexDirection: 'row',
    // justifyContent: '',
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
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",

  },
  modalContainerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  trashIcon:{
  width: 70,
  alignItems: 'center',
  },
  TaskContainer:{
    justifyContent: 'flex-start',
    flex: 1,
    maxWidth: '90%',
    backgroundColor: '#FFF'
  },
})
