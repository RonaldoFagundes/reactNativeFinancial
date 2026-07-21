import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

export default function CreditCard() {
    return (
        <LinearGradient
            colors={["#0F0E17", "#000000"]}
            style={styles.container}
        >

            <View style={styles.card}>

                <Text style={styles.title}>
                    Cartão de Crédito
                </Text>

                <Text style={styles.subtitle}>
                    Gerencie seu cartão e limites
                </Text>

            </View>

        </LinearGradient>
    );
}