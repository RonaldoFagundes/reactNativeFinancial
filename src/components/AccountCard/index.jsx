import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function AccountCard({ account, onPress }) {

    return (
        <Pressable style={styles.card} onPress={onPress}>

            <View style={styles.iconContainer}>
                <Ionicons name="wallet-outline" size={26} color="#44E8C3" />
            </View>

            <View style={styles.content}>
                <Text style={styles.type}>
                    {account.type_act}
                </Text>
                <Text style={styles.desc}>
                    {account.desc_act}
                </Text>
                <Text style={styles.number}>
                    Conta: {account.number_act}
                </Text>
                <Text style={styles.balance}>
                    R$ {Number(account.saldo_act).toFixed(2)}
                </Text>
            </View>

        </Pressable>
    );
}