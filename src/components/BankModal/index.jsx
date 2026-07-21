import React, { useState } from "react";

import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    ScrollView,
    Switch
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

import { prepareImage } from "../../utils/img";



export default function BankModal({ visible, onClose, onSave }) {
    

    const initialBank = {
       number_bnk: "",
       name_bnk: "",
       ein_bnk: "",
       contact_bnk: "",
       desc_bnk: "",
       broker_bnk: false,
       img_bnk: null
    };

    const [bank, setBank] = useState(initialBank);

    /*
    const [bank, setBank] = useState({
        number_bnk: "",
        name_bnk: "",
        ein_bnk: "",
        contact_bnk: "",
        desc_bnk: "",
        broker_bnk: true,
        img_bnk: null
    });
    */


    const handleInputChange = (field, value) => {
        setBank({
            ...bank,
            [field]: value
        });
    };




    const pickImage = async () => {

        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
          alert("Permissão para acessar imagens negada.");
          return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            quality: 0.8,
            base64: true
        });

        if (!result.canceled) {
           const image = result.assets[0];     
           const base64 = await prepareImage(image);
           setBank({
              ...bank,
              img_bnk: base64
           });
        }
    };



    /*
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1               
            });
        if (!result.canceled) {
            const image = result.assets[0];
            setBank({
                ...bank,
                img_bnk: result.assets[0].uri
            });           
        }
    };
   */


    const removeImage = () => {
        setBank({
            ...bank,
            img_bnk: null
        });
    };



    const save = () => {
        onSave(bank);
        setBank(initialBank);

        /*
        setBank({
            number_bnk: "",
            name_bnk: "",
            ein_bnk: "",
            contact_bnk: "",
            desc_bnk: "",
            broker_bnk:true,
            img_bnk: null
        });
        */
    };




    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={false}
        >
            <LinearGradient colors={["#0F0E17", "#000000"]} style={{ flex: 1 }}>

                <ScrollView contentContainerStyle={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.title}>Register Institution</Text>
                        <Text style={styles.subtitle}>Connect a new banking partner</Text>
                    </View>

                    <View style={styles.imageSection}>
                        {
                            bank.img_bnk ?
                                (
                                    <View style={styles.previewBox}>
                                        <Image source={{ uri: bank.img_bnk }}
                                            style={styles.previewImage}
                                        />
                                        <Pressable
                                            style={styles.deleteButton}
                                            onPress={removeImage}>
                                            <FontAwesome name="trash" size={16} color="#FFF" />
                                        </Pressable>
                                    </View>
                                )
                                :
                                (
                                    <Pressable style={styles.uploadBox}
                                        onPress={pickImage}>
                                        <FontAwesome name="image" size={32} color="#44E8C3" />
                                        <Text style={styles.uploadText}>
                                            Upload Institution Logo
                                        </Text>
                                    </Pressable>
                                )
                        }
                    </View>


                    <View style={styles.form}>
                        {
                            [
                                {
                                    label: "BANK NUMBER",
                                    field: "number_bnk",
                                    placeholder: "001"
                                },

                                {
                                    label: "BANK NAME",
                                    field: "name_bnk",
                                    placeholder: "Banco do Brasil"
                                },

                                {
                                    label: "TAX ID / CNPJ",
                                    field: "ein_bnk",
                                    placeholder: "00.000.000/0001-00"
                                },

                                {
                                    label: "CONTACT",
                                    field: "contact_bnk",
                                    placeholder: "Email or phone"
                                },                              

                                 /* 
                                {
                                    label: "BROKER",
                                    field: "broker_bnk",
                                    placeholder: "Broker name"
                                },
                                */                              
                                
                                {
                                    label: "DESCRIPTION",
                                    field: "desc_bnk",
                                    placeholder: "Details"
                                }
                            ]
                                .map((item, index) => (
                                    <View key={index} style={styles.inputGroup}>
                                        <Text style={styles.label}>
                                            {item.label}
                                        </Text>
                                        <TextInput style={styles.input}
                                            placeholder={item.placeholder}
                                            placeholderTextColor="#666"
                                            value={bank[item.field]}

                                            onChangeText={value =>
                                                handleInputChange(item.field,value)
                                            }
                                        />
                                    </View>
                                ))
                        }

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>BROKER</Text>
                            <View style={styles.brokerContainer}>
                                    <Text style={styles.brokerText}>
                                        {bank.broker_bnk ? "Yes" : "No"}
                                    </Text> 
                                    <Switch 
                                        value={bank.broker_bnk}
                                        onValueChange={(value) =>
                                        handleInputChange("broker_bnk", value)
                                        }
                                        trackColor={{ false: "#666", true: "#44E8C3" }}
                                        thumbColor="#FFF"
                                    />
                            </View>
                        </View>


                        <Pressable style={styles.save}
                            onPress={save}>
                            <Text style={styles.saveText}>Save Bank</Text>
                        </Pressable>

                        <Pressable style={styles.cancel}
                            onPress={onClose}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>

                    </View>
                </ScrollView>
            </LinearGradient>
        </Modal>
    );
}