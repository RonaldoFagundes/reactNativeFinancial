import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export default function CreditCard({ card, onPress }) {

    return (
        <Pressable
            style={styles.card}
            onPress={onPress}
        >

            <View style={styles.iconContainer}>
                <Ionicons
                    name="card-outline"
                    size={26}
                    color="#44E8C3"
                />
            </View>

            <View style={styles.content}>

                <Text style={styles.brand}>
                    {card.brand_ccr}
                </Text>

                <Text style={styles.number}>
                    Cartão: {card.number_ccr}
                </Text>

                <Text style={styles.desc}>
                    {card.desc_ccr}
                </Text>

                <Text style={styles.limit}>
                    Limite: R$ {Number(card.limit_ccr).toFixed(2)}
                </Text>

            </View>

        </Pressable>
    );
}
