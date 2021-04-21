import React from 'react';
import { 
    Text,
    View,
    StyleSheet
 } from 'react-native';

import { Header } from '../components/Header';

import color from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button';
import colors from '../styles/colors';

 export function PlantSelect(){
     return(
        <View style={styles.container}>
            <View>
                <Header />
            </View>
            <Text>
                Selecionar Planta
            </Text>
        </View>
     )
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,         
         backgroundColor: colors.background
         }    
 })