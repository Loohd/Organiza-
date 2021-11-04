import { CardAnimationContext } from '@react-navigation/stack';
import React, { Component, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Card,  } from 'react-native-paper';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}
const Calendar: React.FC = () => {

        const [items, setItems] = useState({});

        const loadItems = (day) => {
            setTimeout(() => {
                for (let i = -15; i < 85; i++) {
                    const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                    const strTime = timeToString(time);
                    if (!items[strTime]) {
                        items[strTime] = [];
                        const numItems = Math.floor(Math.random() * 1 + 1);
                        for (let j = 0; j < numItems; j++) {
                            items[strTime].push({
                                name: 'Item for ' + strTime + ' #' + j,
                                height: Math.max(50, Math.floor(Math.random() * 150))
                            });
                        }
                    }
                }
                const newItems = {};
                Object.keys(items).forEach(key => {
                    newItems[key] = items[key];
                });
                setItems(newItems);
            }, 1000);
        }

        const renderItem = (item) => {
            return(<TouchableOpacity style= {{
                marginRight: 10,
                marginTop: 17,
            }}>
                <Card>
                    <Card.Content>
                        <View style = {{ flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    }}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label="B"/>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>)
        }

        return (
            <View style={{flex: 1}}>
                <Agenda
                    items={items}
                    loadItemsForMonth={loadItems}
                    selected={'2021-10-02'}
                    renderItem={renderItem}

                />
            </View>


        )

};

export default Calendar;