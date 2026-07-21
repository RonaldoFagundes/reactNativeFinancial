/*
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import BrokerList from "../../components/BrokerList";
import { getBrokers } from "../../services/brokers";

export default function Broker({ navigation }) {

    const [brokers, setBrokers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadBrokers();
    }, []);

    async function loadBrokers() {
        try {
            setLoading(true);

            const data = await getBrokers();
            setBrokers(data);

        } catch (error) {
            Alert.alert(
                "Erro",
                "Não foi possível carregar os investimentos."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <LinearGradient
            colors={["#0F0E17", "#000000"]}
            style={{ flex: 1 }}
        >
            <BrokerList
                brokers={brokers}
                loading={loading}                
            />
        </LinearGradient>
    );
}
    */