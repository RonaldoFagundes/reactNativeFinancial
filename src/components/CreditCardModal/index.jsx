import React, { useState } from "react";

import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

export default function CreditCardModal({
    visible,
    onClose,
    onSave
}) {

    const [card, setCard] = useState({
        fk_act: "",
        number_ccr: "",
        brand_ccr: "",
        format_ccr: "",
        closing_ccr: "",
        desc_ccr: "",
        limit_ccr: "",
        expiry_ccr: "",
        create_ccr: ""
    });


    const brands = [
        "Visa",
        "Mastercard",
        "Elo",
        "American Express"
    ];


    const formats = [
        "Crédito",
        "Internacional",
        "Nacional"
    ];


    const handleInputChange = (field, value) => {

        setCard({
            ...card,
            [field]: value
        });

    };


    const save = () => {

        onSave(card);

        setCard({
            fk_act: "",
            number_ccr: "",
            brand_ccr: "",
            format_ccr: "",
            closing_ccr: "",
            desc_ccr: "",
            limit_ccr: "",
            expiry_ccr: "",
            create_ccr: ""
        });

    };


    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={false}
        >

            <LinearGradient
                colors={["#0F0E17", "#000000"]}
                style={{ flex: 1 }}
            >

                <ScrollView
                    contentContainerStyle={styles.container}
                >

                    <View style={styles.header}>

                        <Text style={styles.title}>
                            Create Credit Card
                        </Text>

                        <Text style={styles.subtitle}>
                            Add a new credit card
                        </Text>

                    </View>


                    {/* ACCOUNT */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            ACCOUNT
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Account ID"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={card.fk_act}
                            onChangeText={(v) =>
                                handleInputChange("fk_act", v)
                            }
                        />

                    </View>


                    {/* CARD NUMBER */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            CARD NUMBER
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="1234 5678 9012 3456"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={card.number_ccr}
                            onChangeText={(v) =>
                                handleInputChange("number_ccr", v)
                            }
                        />

                    </View>


                    {/* BRAND */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            CARD BRAND
                        </Text>

                        <View style={styles.types}>

                            {brands.map((brand, index) => (

                                <Pressable
                                    key={index}
                                    style={[
                                        styles.typeButton,
                                        card.brand_ccr === brand &&
                                        styles.selected
                                    ]}
                                    onPress={() =>
                                        handleInputChange(
                                            "brand_ccr",
                                            brand
                                        )
                                    }
                                >

                                    <Text style={styles.typeText}>
                                        {brand}
                                    </Text>

                                </Pressable>

                            ))}

                        </View>

                    </View>


                    {/* FORMAT */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            CARD FORMAT
                        </Text>

                        <View style={styles.types}>

                            {formats.map((format, index) => (

                                <Pressable
                                    key={index}
                                    style={[
                                        styles.typeButton,
                                        card.format_ccr === format &&
                                        styles.selected
                                    ]}
                                    onPress={() =>
                                        handleInputChange(
                                            "format_ccr",
                                            format
                                        )
                                    }
                                >

                                    <Text style={styles.typeText}>
                                        {format}
                                    </Text>

                                </Pressable>

                            ))}

                        </View>

                    </View>


                    {/* DESCRIPTION */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            DESCRIPTION
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="My main credit card"
                            placeholderTextColor="#666"
                            value={card.desc_ccr}
                            onChangeText={(v) =>
                                handleInputChange("desc_ccr", v)
                            }
                        />

                    </View>


                    {/* LIMIT */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            CREDIT LIMIT
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="5000.00"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={card.limit_ccr}
                            onChangeText={(v) =>
                                handleInputChange("limit_ccr", v)
                            }
                        />

                    </View>


                    {/* CLOSING */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            CLOSING DAY
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="10"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={card.closing_ccr}
                            onChangeText={(v) =>
                                handleInputChange("closing_ccr", v)
                            }
                        />

                    </View>


                    {/* EXPIRY */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            EXPIRY DATE
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="12/28"
                            placeholderTextColor="#666"
                            value={card.expiry_ccr}
                            onChangeText={(v) =>
                                handleInputChange("expiry_ccr", v)
                            }
                        />

                    </View>


                    {/* CREATE DATE */}

                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            CREATION DATE
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="2026-09-19"
                            placeholderTextColor="#666"
                            value={card.create_ccr}
                            onChangeText={(v) =>
                                handleInputChange("create_ccr", v)
                            }
                        />

                    </View>


                    {/* SAVE */}

                    <Pressable
                        style={styles.save}
                        onPress={save}
                    >

                        <Text style={styles.saveText}>
                            Save Credit Card
                        </Text>

                    </Pressable>


                    {/* CANCEL */}

                    <Pressable
                        style={styles.cancel}
                        onPress={onClose}
                    >

                        <Text style={styles.cancelText}>
                            Cancel
                        </Text>

                    </Pressable>

                </ScrollView>

            </LinearGradient>

        </Modal>
    );
}
