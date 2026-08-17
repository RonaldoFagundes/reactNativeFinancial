import React, { useEffect, useState, useContext } from "react";
import { View, Alert, Image,  ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AppContext } from "../../context/app";

import { getAccounts } from "../../services/banks";
import { createAccount } from "../../services/accounts";

import Header from "../../components/Header";
import BankSummary from "../../components/BankSummary";
import AccountCard from "../../components/AccountCard";
import AccountModal from "../../components/AccountModal";
import AccountList from "../../components/AccountList";

import AccountDropdown from "../../components/AccountDropdown";
import ValuesToggle from "../../components/ValuesToggle";

export default function Bank({ navigation }) {    
       
    //const { selectedBank: bank } = useContext(AppContext);

    //console.log(bank.broker_bnk);

    //const {setSelectedAccount} = useContext(AppContext);


      const {
        selectedBank: bank,
        setSelectedAccount,
        showValues,
        setShowValues
    } = useContext(AppContext);




    
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);

    const [chosenAccount, setChosenAccount] = useState(null);

  
   // const [showValues, setShowValues] = useState(true);


    useEffect(() => {
        loadAccounts();
    }, []);
     






    async function loadAccounts() {
        try {
            setLoading(true);

            const data = await getAccounts(bank.id_bnk);

            setAccounts(data);

            // Seleciona automaticamente a primeira conta
          
            if (data.length > 0) {

                setChosenAccount(data[0]);
                setSelectedAccount(data[0]);

            } else {

                setChosenAccount(null);
                setSelectedAccount(null);

            }



        } catch (error) {

            Alert.alert(
                "Erro",
                "Não foi possível carregar contas."
            );

        } finally {
            setLoading(false);
        }
    }


   /*
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
    */









    async function handleCreateAccount(account) {

        try {

            const newAccount = await createAccount({
                ...account,
                fk_bank: bank.id_bnk
            });

            await loadAccounts();
            setModal(false);

        } catch (error) {
            Alert.alert(
                "Erro",
                "Não foi possível criar conta."
            );
        }
    }

    /*
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
    */










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
   




    function handleSelectAccount(account) {
    setChosenAccount(account);
    setSelectedAccount(account);
}



    
    return (
        <LinearGradient colors={["#0F0E17", "#000000"]} style={{ flex: 1 }}>

         {/* <Header /> */}


        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 50}}
        >

            
           
            <BankSummary
                bank={bank}
                totalAccounts={accounts.length}
                onAddAccount={openModal}
            />

       
         
<View style={{alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 8}}>

    <ValuesToggle
    visible={!showValues}
    onToggle={() => setShowValues(prev => !prev)}
/>

</View>




           {/* 
            <AccountList
                accounts={accounts}
                loading={loading}
                onAccountPress={openAccount}            
            />      
           */}


            <AccountDropdown
              accounts={accounts}
              selectedAccount={chosenAccount}
              onSelect={handleSelectAccount}
               onAccountPress={openAccount}
                showValues={showValues}                
             />              


   </ScrollView>


    <AccountModal
                visible={modal}
                onClose={closeModal}
                onSave={handleCreateAccount}
                isBroker={bank.broker_bnk}
            />




        </LinearGradient>
    );
}









