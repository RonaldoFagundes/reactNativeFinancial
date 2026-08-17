import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";



export default function ValuesToggle({
    visible,
    onToggle,
    size = 22,
    color = "#94A3B8"
}) {


    return (

        <TouchableOpacity
            onPress={onToggle}
            activeOpacity={0.7}
            style={{
                padding: 6
            }}
        >

            <Ionicons
                name={
                    visible
                        ? "eye-outline"
                        : "eye-off-outline"
                }
                size={size}
                color={color}
            />
        </TouchableOpacity>
        
    );
}
