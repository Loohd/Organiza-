import React, {useState} from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView, TextInput, } from 'react-native-gesture-handler';
import { styles } from './styles';
import ImageTitle from "../../components/ImageTitle";
import CheckBox from '@react-native-community/checkbox';


export default function List() {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#333333', flex: 1 }}>
                <View style={styles.bodyList}>
                    <ImageTitle
                        cover={require('../../assets/FotoTemporaria1.png')}
                        titleAnnotation="TAREFAS DIARIAS"
                    />
                    <Text style={styles.titleDescription}>Descrição</Text>
                    <View style={styles.container}>
                    <View style= {styles.checkboxContainer}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            style={styles.checkbox}
                        />
                        <TextInput style={styles.textDescription}
                            placeholder="Escreva uma observação" />
                    </View>
                    </View>
                    <View style={styles.container}>
                    <View style= {styles.checkboxContainer}>
                        <CheckBox
                           disabled={false}
                           value={toggleCheckBox}
                           onValueChange={(newValue) => setToggleCheckBox(newValue)}
                           style={styles.checkbox}
                        />
                        <TextInput style={styles.textDescription}
                            placeholder="Escreva uma observação" />
                    </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}