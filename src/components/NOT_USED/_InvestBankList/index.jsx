/*
import React, {useState} from 'react';
import {FlatList,Text} from "react-native";
import InvestBankCard from "../InvestBankCard" ;

export default function InvestBankList({list}){
    return (
           <FlatList
               data={list}
               keyExtractor={(item)=> 
                   item.id_ivb.toString()
               }
                renderItem={({item})=>(
                    <InvestBankCard
                      invbk={item}
                      />
                )}
                showsVerticalScrollIndicator={false}
             />             
    );
}
 */

/*
import React from "react";
import { FlatList } from "react-native";
import InvestBankCard from "../InvestBankCard" ;
export default function InvestBankList({list}) {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id_ivb.toString()}
            renderItem={({ item }) => (

                <InvestBankCard
                    invbk={item}                    
                />
            )}
            showsVerticalScrollIndicator={false}
        />
    );
}
 */