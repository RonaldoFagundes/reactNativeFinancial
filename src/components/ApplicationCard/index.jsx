import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";


export default function ApplicationCard({ apl , onPress}) {


     return (
            <Pressable style={styles.card} onPress={onPress}>
    
                <View style={styles.iconContainer}>
                    <Ionicons name="wallet-outline" size={26} color="#44E8C3" />
                </View>
    
                <View style={styles.content}>

                    <Text style={styles.type}>
                        {apl.expery_apl}
                    </Text>
                   
                    <Text style={styles.balance}>
                        R$ {Number(apl.value_apl).toFixed(2)}
                    </Text>
                    
                </View>
    
            </Pressable>
        );
    }