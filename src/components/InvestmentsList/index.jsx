import React from "react";
import { FlatList } from "react-native";

import InvestmentCard from "../InvestmentCard";

export default function InvestmentsList({inv, onSelect}) {

    return (
        <FlatList
            data={inv}
            keyExtractor={(item) => item.id_inv.toString()}
            renderItem={({ item }) => (

                <InvestmentCard
                    inv={item} 
                     onApply={onSelect}                   
                />
            )}

            showsVerticalScrollIndicator={false}
        />
    );
}