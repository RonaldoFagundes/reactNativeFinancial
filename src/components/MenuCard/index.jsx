import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


import styles from "./styles";



export default function MenuCard({ icon, title, onPress }) {

    return (

        <Pressable style={styles.container} onPress={onPress}>

            <View style={styles.left}>
                <Ionicons name={icon} size={22} color="#44E8C3" />
                <Text style={styles.title}>{title}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
            
        </Pressable>
    );

}