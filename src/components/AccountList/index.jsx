import React from "react";
import { FlatList, Text, Pressable } from "react-native";
import AccountCard from "../AccountCard";
import styles from "./styles";

export default function AccountList({
    accounts,
    loading,
    onAccountPress
}) {

    return (
        <FlatList
            data={accounts}
            keyExtractor={(item) => String(item.id_act)}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}


            renderItem={ ({ item }) => (

                 <AccountCard
                    account={item}
                    onPress={() =>
                        onAccountPress(item)
                    }
                />  
            )}


            
            ListEmptyComponent={
                loading ? (
                    <Text style={styles.empty}>
                        Carregando contas...
                    </Text>
                ) : (
                    <Text style={styles.empty}>
                        Nenhuma conta cadastrada.
                    </Text>
                )
            }
        />
    );
}



















