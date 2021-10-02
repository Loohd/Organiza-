import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {date: ''};
    }

    selectDate = (date) => {
        this.setState({date: date});
    }

    render() {
        return (
            <View style={styles.container}>
                <DatePicker
                    style={{
                        width: 200,
                    }}
                    date={this.state.date}
                    format= "DD-MM-YYYY"
                    minDate="01-01-2021"
                    maxDate="31-12-2060"
                    onDateChange={this.selectDate}
                />
                <Text style={{fontSize: 25}}>{this.state.date}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})