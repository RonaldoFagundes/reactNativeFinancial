import React, { useEffect, useState, useContext } from "react";
import { View, Text, ActivityIndicator} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AppContext } from "../../context/app";

import {getApicationsByAccount} from '../../services/applications';

import ApplicationList from '../../components/ApplicationList';
import ValuesToggle from "../../components/ValuesToggle";

export default function Applications({navigation}){


   const { selectedAccount ,
           showValues,
           setShowValues} = useContext(AppContext);


   const [applications, setApplications] = useState([]);
   const [loading, setLoading] = useState(true);



   useEffect(() => {
      if (selectedAccount?.id_act) {
          loadApplications();
      }
   }, [selectedAccount]);
   



   async function loadApplications() {
           try {
               setLoading(true);
   
               const data = await getApicationsByAccount(selectedAccount.id_act);
   
               setApplications(Array.isArray(data) ? data : []);
   
           } catch (error) {
               console.log("Erro ao carregar Applications:", error);
               setApplications([]);
           } finally {
               setLoading(false);
           }
       }
     

        
    function selectApplication(application) {

        console.log(
            "Aplicação selecionada:",
            application
        );

        // navigation.navigate("ApplicationDetails", {
        //    application
        // });
    }



    
    return(
        <LinearGradient
                   colors={["#0F0E17", "#000000"]}
                   style={{ flex: 1 }}
               >       
                   <Text
                       style={{
                           color: "#FFF",
                           fontSize: 22,
                           fontWeight: "bold",
                           margin: 20
                       }}
                   >
                       Applicações
                   </Text>  

                    <View
                style={{
                     alignItems: "flex-end",
                    paddingHorizontal: 20,
                    marginBottom: 8
                }}
            >
                <ValuesToggle
                    visible={!showValues}
                    onToggle={() =>
                        setShowValues(
                            prev => !prev
                        )
                    }
                />
            </View>

       
                   {loading ? (
                       <ActivityIndicator
                           size="large"
                           color="#FFF"
                           style={{ marginTop: 40 }}
                       />
                   ) : (
                       <ApplicationList
                           apl={applications} 
                           onSelectApplication={selectApplication}                           
                       />
                   )}  
       
               </LinearGradient>
    )   

}