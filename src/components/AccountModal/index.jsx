import React, { useState } from "react";

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


export default function AccountModal({
    visible,
    onClose,
    onSave,
    isBroker
}) {


    const [account, setAccount] = useState({
        type_act: "",
        number_act: "",
        desc_act: "",
        saldo_act: ""
    });


    /*
    const accountTypes = [
        "Digital",
        "Corrente",
        "Poupança",
        "Investimento"
    ];
    */



     /*
    const accountTypes = broker
    ? [
        "Digital",
        "Investimento"
      ]
    : [
        "Corrente",
        "Poupança"
      ];
    */



    let accountTypes = [];
    if (isBroker) {
      accountTypes = ["Digital", "Investimento"];
    } else {
      accountTypes = ["Corrente", "Poupança"];
    }



    const handleInputChange = (field, value) => {
        setAccount({
            ...account,
            [field]: value
        });
    };




    const save = () => {

        onSave(account);

        setAccount({
            type_act: "",
            number_act: "",
            desc_act: "",
            saldo_act: ""
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


                <ScrollView contentContainerStyle={styles.container}>


                    <View style={styles.header}>

                        <Text style={styles.title}>
                            Create Account
                        </Text>

                        <Text style={styles.subtitle}>
                            Add a new bank account
                        </Text>

                    </View>


                   
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>ACCOUNT TYPE</Text>

                        <View style={styles.types}>
                            {accountTypes.map((type, index) => (

                                <Pressable
                                    key={index}
                                    style={[
                                        styles.typeButton,
                                        account.type_act === type && styles.selected
                                    ]}
                                    onPress={() =>
                                        handleInputChange("type_act", type)
                                    }
                                >
                                    <Text style={styles.typeText}>
                                        {type}
                                    </Text>
                                </Pressable>
                                
                            ))}
                        </View>
                    </View>


                    
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>ACCOUNT NUMBER</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="12345-6"
                            placeholderTextColor="#666"
                            value={account.number_act}
                            onChangeText={(v) =>
                                handleInputChange("number_act", v)
                            }
                        />
                    </View>

                    
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>DESCRIPTION</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Salary account"
                            placeholderTextColor="#666"
                            value={account.desc_act}
                            onChangeText={(v) =>
                                handleInputChange("desc_act", v)
                            }
                        />
                    </View>

                    
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>INITIAL BALANCE</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="0.00"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={account.saldo_act}
                            onChangeText={(v) =>
                                handleInputChange("saldo_act", v)
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
    );
}