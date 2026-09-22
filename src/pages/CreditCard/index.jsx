import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    Pressable
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import CreditCardList from "../../components/CreditCardList";
import CreditCardModal from "../../components/CreditCardModal";

import {
    getCreditCards,
    createCreditCard
} from "../../services/creditCard";

import styles from "./styles";


export default function CreditCard() {

    const [cards, setCards] = useState([]);

    const [loading, setLoading] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);




    const loadCards = async () => {

        try {

            setLoading(true);

            const response = await getCreditCards();

            console.log(
                "Cartões:",
                response
            );

            setCards(
                Array.isArray(response)
                    ? response
                    : []
            );

        } catch (error) {

            
            console.log(
                "Erro ao carregar cartões:",
                error
            );
          
            setCards([]);

        } finally {

            setLoading(false);

        }
    };




    useEffect(() => {

        loadCards();

    }, []);




    const handleSave = async (card) => {

        try {

            await createCreditCard(card);

            setModalVisible(false);

            await loadCards();

        } catch (error) {

            console.error(
                "Erro ao criar cartão:",
                error
            );

        }
    };




    const handleCardPress = (card) => {

        console.log(
            "Cartão selecionado:",
            card
        );

    };



    

    return (
        <LinearGradient
            colors={["#0F0E17", "#000000"]}
            style={styles.container}
        >

            <View style={styles.header}>

                <View>

                    <Text style={styles.title}>
                        Cartão de Crédito
                    </Text>

                    <Text style={styles.subtitle}>
                        Gerencie seu cartão e limites
                    </Text>

                </View>


                <Pressable
                    style={styles.addButton}
                    onPress={() =>
                        setModalVisible(true)
                    }
                >

                    <Ionicons
                        name="add"
                        size={24}
                        color="#0F0E17"
                    />

                </Pressable>

            </View>


            <View style={styles.listContainer}>

                <CreditCardList
                    cards={cards}
                    loading={loading}
                    onCreditCardPress={handleCardPress}
                />

            </View>


            <CreditCardModal
                visible={modalVisible}
                onClose={() =>
                    setModalVisible(false)
                }
                onSave={handleSave}
            />

        </LinearGradient>
    );
}




/*
import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

export default function CreditCard() {
    return (
        <LinearGradient
            colors={["#0F0E17", "#000000"]}
            style={styles.container}
        >

            <View style={styles.card}>

                <Text style={styles.title}>
                    Cartão de Crédito
                </Text>

                <Text style={styles.subtitle}>
                    Gerencie seu cartão e limites
                </Text>

            </View>

        </LinearGradient>
    );
}
    */