
/*
import React from "react";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BankLogo({ img }) {
    const source = img
        ? img.startsWith("iVBOR")
            ? { uri: `data:image/png;base64,${img}` }
            : { uri: `http://10.0.2.2:8000/storage/${img}` }
        : null;

    if (!source) {
        return (
            <View>
                <Ionicons name="business" size={26} color="#44E8C3" />
            </View>
        );
    }

    return <Image source={source} style={{ width: 40, height: 40 }} />;
}
    */