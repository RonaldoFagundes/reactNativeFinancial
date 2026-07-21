import React, { useEffect, useState } from 'react';
import {
    View,
    Text   
}
    from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

import Header from "../../components/Header";

export default function Cash({ navigation }) {

    return (

        <LinearGradient colors={["#0F0E17", "#000000"]} style={{ flex: 1 }}>

            <Header />

            <View>
                <Text style={{ color: 'white' }}>Tela Cash</Text>
            </View>

        </LinearGradient>
    )
}