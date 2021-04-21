import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Confirmation } from './Confirmation';


export function UserIdentification(){
    
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    
    const navigation = useNavigation();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }


    function handleSubimit(){
            navigation.navigate('Confirmation');
    }

    
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>    
                                <Text 
                                style={styles.carinha}
                                >
                                {isFilled ? '😁' : '😀'}
                                </Text>
                                <Text 
                                style={styles.title}
                                >
                                    Como podemos {'\n'} chamar você?
                                </Text>
                            </View>
                            <TextInput
                                style={[
                                    styles.txtInput,
                                    (isFocused || isFilled) &&{borderBottomColor:colors.green}
                                ]}
                                placeholder="Digite um nome."
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                                
                            />
                            <View style={styles.footer}>
                                <Button 
                                    title="Confirmar"
                                    onPress={handleSubimit}
                                />
                            </View>
                        </View>
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content:{
        flex: 1,
        width:'100%',
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal:54,
        alignItems: 'center',
        
    },

    header:{
        alignItems: 'center',
    },

    carinha:{
        fontSize:44,
        color: colors.heading,
        },
    txtInput:{
        borderBottomWidth:1,
        borderBottomColor: colors.gray,
        color: colors.heading,
        width:'100%',
        fontSize:18,
        marginTop:50,
        padding:10,
        textAlign: 'center'
    },
    title:{
        marginTop:20,
        fontSize:24,
        textAlign: 'center',
        color: colors.heading,
        lineHeight:32,
        fontFamily: fonts.heading
    },
    footer:{
        width:'100%',
        marginTop:40,
        paddingHorizontal:20
    }
}); 