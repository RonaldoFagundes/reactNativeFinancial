import React, { useEffect, useState, useContext } from "react";
import { View, Alert, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AppContext } from "../../context/app";

import { getAccounts } from "../../services/banks";
import { createAccount } from "../../services/accounts";

import Header from "../../components/Header";
import BankSummary from "../../components/BankSummary";
import AccountCard from "../../components/AccountCard";
import AccountModal from "../../components/AccountModal";
import AccountList from "../../components/AccountList";





export default function Bank({ navigation }) {   
    
    
   
    const { selectedBank: bank } = useContext(AppContext);

    //console.log(bank.broker_bnk);

    const {setSelectedAccount} = useContext(AppContext);
    
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);



    useEffect(() => {
        loadAccounts();
    }, []);
     



    async function loadAccounts() {
        try {
            setLoading(true);
            const data = await getAccounts(bank.id_bnk);
            setAccounts(data); 
            
           

        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar contas.");
        } finally {
            setLoading(false);
        }
    }
   


    async function handleCreateAccount(account) {
        try {
            await createAccount({
                ...account,
                fk_bank: bank.id_bnk
            });
            await loadAccounts();
            setModal(false);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível criar conta.");
        }
    }
   


    function openModal() {
        setModal(true);
    }


    function closeModal() {
        setModal(false);
    }


    function openAccount(account) {
       // navigation.navigate("Account", { account });
        setSelectedAccount(account);
       navigation.navigate("Account");
    }



    
    return (
        <LinearGradient colors={["#0F0E17", "#000000"]} style={{ flex: 1 }}>

         {/* <Header /> */}
           
            <BankSummary
                bank={bank}
                totalAccounts={accounts.length}
                onAddAccount={openModal}
            />



            <AccountList
                accounts={accounts}
                loading={loading}
                onAccountPress={openAccount}            
            />
           

            <AccountModal
                visible={modal}
                onClose={closeModal}
                onSave={handleCreateAccount}
                isBroker={bank.broker_bnk}
            />

        </LinearGradient>
    );
}









