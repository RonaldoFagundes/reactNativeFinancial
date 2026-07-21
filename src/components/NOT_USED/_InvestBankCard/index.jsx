/*
import React from "react";
import { View, Text, Pressable } from "react-native";
export default function InvestBankCard({ invbk }) {   

   const onCreatNewInvest=()=>{
          console.log(
            " id_ivb "+invbk.id_ivb+" "+
            " type_ivb "+invbk.type_ivb )            
    }

    return (   
           <View
               style={{
                   backgroundColor: "#1E1B2E",
                   marginHorizontal: 16,
                   marginVertical: 8,
                   padding: 16,
                   borderRadius: 16,
               }}
           >
               <Text
                   style={{
                       color: "#FFF",
                       fontSize: 18,
                       fontWeight: "bold",
                   }}
               >
                   {invbk.type_ivb}
               </Text>   
               <Text style={{ color: "#94A3B8", marginTop: 6 }}>
                   Tipo: {invbk.cat_ivb}
               </Text>   
               <Text
                   style={{
                       color: "#44E8C3",
                       marginTop: 4,
                       fontWeight: "600",
                   }}
               >
                   Taxa: {invbk.tx_ivb}%
               </Text>   
               <View
                   style={{
                       flexDirection: "row",
                       justifyContent: "space-between",
                       marginTop: 18,
                   }}
               >
                   <Pressable
                       onPress={ () => onCreatNewInvest() }
                       style={{
                           flex: 1,
                           backgroundColor: "#3B82F6",
                           padding: 12,
                           borderRadius: 10,
                           marginRight: 8,
                       }}
                   >
                       <Text
                           style={{
                               color: "#FFF",
                               textAlign: "center",
                               fontWeight: "600",
                           }}
                       >
                           Aplicar
                       </Text>
                   </Pressable>          
               </View>   
           </View>
       );
   }
*/

     