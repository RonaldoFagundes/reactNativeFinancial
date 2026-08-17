import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

import { getBankImage } from "../../utils/img";

export default function BankSummary({ bank, totalAccounts, onAddAccount }) {

    const image = getBankImage(bank.img_bnk);

    return (
        <View style={styles.container}>
            <View style={styles.bankHeader}>
                {image ? (
                    <Image source={image} style={styles.img} />
                ) : (
                    <View style={styles.imgEmpty}>
                        <Ionicons
                            name="business"
                            size={26}
                            color="#44E8C3"
                        />
                    </View>
                )}
                <Text style={styles.title}>
                    {bank?.name_bnk || "Banco"}
                </Text>
            </View>

            <Text style={styles.subtitle}>
                Gerencie suas contas com facilidade
            </Text>

            <View style={styles.summaryCard}>

                <View>
                    <Text style={styles.number}>
                        {totalAccounts}
                    </Text>

                    <Text style={styles.label}>
                        Connected Accounts
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
                       onPress={onAddAccount}
                >
                    <Text style={styles.textBtn}>New Account</Text>
                </Pressable>
            </View>

        </View>
    );
}




























