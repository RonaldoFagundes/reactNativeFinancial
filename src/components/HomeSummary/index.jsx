import React from "react";
import {View, Text, Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";


export default function HomeSummary({ totalBanks, onAddBank }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Manage your banks
            </Text>
            <Text style={styles.subtitle}>
                Keep your financial institutions
                organized in one place.
            </Text>
            <View style={styles.summaryCard}>
                <View>
                    <Text style={styles.number}>
                        {totalBanks}
                    </Text>
                    <Text style={styles.label}>
                        Connected Banks
                    </Text>
                </View>
                <Ionicons
                    name="business-outline"
                    size={40}
                    color="#44E8C3"
                />
            </View>

             <View style={styles.defaulCard}>
                    <Pressable
                       style={[styles.typeButton]}
                       onPress={onAddBank}
                    >
                       <Text style={styles.textBtn}>New Bank</Text>
                    </Pressable>
            </View>
            




        </View>
    );
}