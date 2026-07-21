import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";


export default function Transactions() {
    
    return (
        <LinearGradient
            colors={["#0F0E17", "#000000"]}
            style={styles.container}
        >

            <View style={styles.card}>

                <Text style={styles.title}>
                    Transactions
                </Text>

                <Text style={styles.subtitle}>
                    Gerencie suas Transactions
                </Text>

            </View>

        </LinearGradient>
    );
}