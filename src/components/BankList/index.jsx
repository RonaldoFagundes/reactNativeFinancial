import React, {useState} from 'react';
import {FlatList,Text} from "react-native";
import styles from "./styles";
import BankCard from "../BankCard";

export default function BankList({
    banks,
    loading,
    onBankPress
}) {

    return (
        <FlatList
            data={banks}
            keyExtractor={(item)=> 
                item.id_bnk.toString()
            }
            renderItem={({item})=>(
                <BankCard
                    bank={item}
                    onPress={() =>
                        onBankPress(item)
                    }
                />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            ListEmptyComponent={
                loading ?
                (
                  <Text style={styles.empty}>Carregando bancos...</Text>
                )
                :
                (
                    <Text style={styles.empty}>Nenhum banco cadastrado.</Text>
                )
            }
        />
    );
}

  