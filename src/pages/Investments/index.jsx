import React, { useEffect, useState, useContext } from "react";
import { Text, ActivityIndicator} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AppContext } from "../../context/app";
import { getInvestmentByAccount } from "../../services/investments";

import { createApplications } from "../../services/applications";

import InvestmentsList from "../../components/InvestmentsList";
import ApplicationModal from "../../components/ApplicationModal";



export default function Investments() {

    // const { selectedBank } = useContext(AppContext);
    const { selectedBank, selectedAccount } = useContext(AppContext);

    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedInvestment, setSelectedInvestment] = useState(null);


    /*
    useEffect(() => {
        if (selectedBank?.id_bnk) {
            loadInvestments();
        }
    }, [selectedBank]);
    */

    useEffect(() => {
       if (selectedAccount?.id_act) {
        loadInvestments();
       }
     }, [selectedAccount]);




    async function loadInvestments() {
        try {
            setLoading(true);

            const data = await getInvestmentByAccount(selectedAccount.id_act);

            setInvestments(Array.isArray(data) ? data : []);

        } catch (error) {
            console.log("Erro ao carregar investimentos:", error);
            setInvestments([]);
        } finally {
            setLoading(false);
        }
    }


    /*
    function openApplication(investment) {
        setSelectedInvestment(investment);
        setModalVisible(true);
    }
    */



    function openApplication(investment) {

        const accountBalance = Number(selectedAccount?.saldo_act || 0);
        const investmentValue = Number(investment?.value_inv || 0);

        if (accountBalance < investmentValue) {

             alert( "Saldo insuficiente",
                 `Você precisa de R$ ${investmentValue.toFixed(2)} para aplicar neste investimento.`
              );

              /*
            Alert.alert(
                "Saldo insuficiente",
                `Você precisa de R$ ${investmentValue.toFixed(2)} para aplicar neste investimento.`
            );
            */
            
            return;
        }
        setSelectedInvestment(investment);
        setModalVisible(true);
    }




    /*
    async function saveApplication(application) {
        try {
            // será implementado depois
            console.log(application);
            console.log(selectedInvestment);
            setModalVisible(false);
        } catch (error) {
            console.log(error);
        }
    }
    */




    async function saveApplication(application) {
    try {
        setLoading(true);

        const response = await createApplications(application);

        console.log("Aplicação criada:", response);

        alert("Sucesso", "Aplicação realizada com sucesso.");
        setModalVisible(false);

        // opcional: recarregar investimentos ou atualizar conta
        // await loadInvestments();

    } catch (error) {
        console.log("Erro ao criar aplicação:", error);

        /*
        Alert.alert(
            "Erro",
                error.message || "Não foi possível realizar a aplicação."
        );
        */
       
    } finally {
        setLoading(false);
    }
}







    return (
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
                Investimentos
            </Text>


            {loading ? (
                <ActivityIndicator
                    size="large"
                    color="#FFF"
                    style={{ marginTop: 40 }}
                />
            ) : (
                <InvestmentsList
                    inv={investments}
                    onSelect={openApplication}
                />
            )}

            <ApplicationModal
                visible={modalVisible}
                investment={selectedInvestment}
                account={selectedAccount}
                onSave={saveApplication}
                onClose={() => setModalVisible(false)}
            />

        </LinearGradient>
    );
}

/*
import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AppContext } from "../../context/app";
import {getInvestmentByBank} from '../../services/investments';
import InvestmentsList from '../../components/InvestmentsList';

export default function Investments( ) {   
    //const { idBnk } = route.params;

    const {selectedBank} = useContext(AppContext);
    const [investments, setInvestments] = useState([]);

     useEffect(() => {         
            loadInvestments();    
       }, []); 

      async function loadInvestments() {          
           const data =  await getInvestmentByBank(selectedBank.id_bnk);
           setInvestments(data);
      }

    return (
        <LinearGradient colors={["#0F0E17", "#000000"]} style={{ flex: 1 }}>
           <Text style={{ color: 'white' }}> Tela de lisa de investmentos</Text>
            <InvestmentsList inv={investments}/>
        </LinearGradient>
    );

}
    */