import React from "react";
import { FlatList, Text } from "react-native";

import CreditCardCard from "../CreditCardCard";

import styles from "./styles";

export default function CreditCardList({
    cards,
    loading,
    onCreditCardPress
}) {

    return (
        <FlatList
            data={cards}
            keyExtractor={(item) => String(item.id_ccr)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}

            renderItem={({ item }) => (

                <CreditCardCard
                    card={item}
                    onPress={() =>
                        onCreditCardPress(item)
                    }
                />

            )}

            ListEmptyComponent={
                loading ? (
                    <Text style={styles.empty}>
                        Carregando cartões...
                    </Text>
                ) : (
                    <Text style={styles.empty}>
                        Nenhum cartão cadastrado.
                    </Text>
                )
            }
        />
    );
}
