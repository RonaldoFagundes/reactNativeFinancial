/* import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export default function InvestmentModal({ visible, onSave, onClose }) {
    const [investment, setInvestment] = useState({
        fk_act: "",
        type_inv: "",
        value_inv: "",
        yield_rate: "",
        profit: "",
        date_inv: ""
    });

    const handleInputChange = (field, value) => {
        setInvestment({
            ...investment,
            [field]: value
        });
    };

    const save = () => {
        onSave(investment);
        setInvestment({
            fk_act: "",
            type_inv: "",
            value_inv: "",
            yield_rate: "",
            profit: "",
            date_inv: ""
        })
    }

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={false}>

            <LinearGradient
                colors={["#0F0E17", "#000000"]}
                style={{ flex: 1 }}>

                <ScrollView contentContainerStyle={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Create Investment
                        </Text>

                        <Text style={styles.subtitle}>
                            Add a new Investment
                        </Text>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>INVESTMENT TYPE</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="CDB"
                            placeholderTextColor="#666"
                            value={investment.type_inv}
                            onChangeText={(v) =>
                                handleInputChange("type_inv", v)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>APLICATION VALUE</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0.00"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={investment.value_inv}
                            onChangeText={(v) =>
                                handleInputChange("value_inv", v)
                            }
                        />
                    </View>

                    <Pressable style={styles.save} onPress={save}>
                        <Text style={styles.saveText}>
                            Save Account
                        </Text>
                    </Pressable>

                    <Pressable style={styles.cancel} onPress={onClose}>
                        <Text style={styles.cancelText}>
                            Cancel
                        </Text>
                    </Pressable>

                </ScrollView>

            </LinearGradient>

        </Modal>
    )
}; */