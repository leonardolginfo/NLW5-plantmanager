import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    return(
        <View style={styles.cabecalho}>
            <View>
                <Text>Olá!</Text>
                <Text>Leonardo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        cabecalho: {
            width:'100%',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical:20,
            marginTop: getStatusBarHeight(),
            backgroundColor: colors.red,
        }

})