import React, {Component, useState} from "react";
import { StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

export default class Date extends Component{


    state = {
        date: '',
    }

    changeDate = (valor) => {
        this.setState({
            date: valor,
        })
    }

    render() {
        return (
            <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponent}
                date={this.state.date}
                onDateChange={this.changeDate}
            />
        )
    }

}

const styles = StyleSheet.create({

    dateComponent: {
        width: 160,
    }

});