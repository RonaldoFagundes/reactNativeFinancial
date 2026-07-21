import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

import { getBankImage } from "../../utils/img";



export default function BankCard({ bank, onPress }) {    

   const imageSource = getBankImage(bank.img_bnk);
 
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            {
                imageSource ?
                    <Image
                        source={imageSource}
                        style={styles.logo}
                    />
                    :
                    <View style={styles.logoPlaceholder}>
                        <Ionicons
                            name="business"
                            size={26}
                            color="#44E8C3"
                        />
                    </View>
            }

            <View style={styles.info}>
                <Text style={styles.name}>
                    {bank.name_bnk}
                </Text>
                <Text style={styles.text}>
                    Banco: {bank.number_bnk}
                </Text>
                <Text style={styles.text}>
                    CNPJ: {bank.ein_bnk}
                </Text>
                <Text style={styles.text}>
                    {bank.contact_bnk}
                </Text>
            </View>
        </Pressable>
    );
}