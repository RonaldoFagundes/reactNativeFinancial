import React from "react";
import { FlatList, Text, Pressable, View } from "react-native";
import ApplicationCard from "../ApplicationCard";
import styles from "./styles";




export default function ApplicationList({apl, onSelectApplication}){




   return(
      <FlatList
                  data={apl}
                  keyExtractor={(item) => item.id_apl.toString()}
                  renderItem={({ item }) => (
      
                      <ApplicationCard
                          apl={item}  
                          onPress={() =>
                          onSelectApplication(item)
                    }                                     
                    
                    />
                  )}
      
                  showsVerticalScrollIndicator={false}
        />
      
   )

} 