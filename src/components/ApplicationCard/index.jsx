import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

import { AppContext } from "../../context/app";

export default function ApplicationCard({ apl , onPress}) {


     const {
        showValues
    } = useContext(AppContext);


     return (
         <Pressable 
            style={styles.card} 
            onPress={onPress}
        >

            <View style={styles.iconContainer}>
                <Ionicons 
                    name="wallet-outline" 
                    size={26} 
                    color="#44E8C3" 
                />
            </View>

           <View style={styles.content}>

                <Text style={styles.type}>
                    {apl.investment?.name_inv ?? "Investimento"}
                </Text>



               <Text style={styles.balance}>
                    {showValues
                        ? `R$ ${Number(
                            apl.value_apl || 0
                        ).toFixed(2)}`
                        : "R$ ••••••"
                    }
                </Text>              




                 <Text style={styles.info}>
                    {apl.investment?.type_inv}
                </Text>


                <Text style={styles.info}>
                    Vencimento: {apl.expery_apl}
                </Text>
                
                 <Text style={styles.info}>
                    Conta: {apl.account?.number_act}
                </Text>

            </View>

        </Pressable>

            /* 
            <Pressable style={styles.card} onPress={onPress}>    
                <View style={styles.iconContainer}>
                    <Ionicons name="wallet-outline" size={26} color="#44E8C3" />
                </View>    
                <View style={styles.content}>
                    <Text style={styles.type}>
                        {apl.expery_apl}
                    </Text>                   
                    <Text style={styles.balance}>
                        R$ {Number(apl.value_apl).toFixed(2)}
                    </Text>                    
                </View>    
            </Pressable>
             */
        );
    }