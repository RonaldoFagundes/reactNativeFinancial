import React, { useEffect, useState, useContext } from "react";
import { Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../../components/Header";
import HomeSummary from "../../components/HomeSummary";
import BankList from "../../components/BankList";
import BankModal from "../../components/BankModal";

import { AppContext } from "../../context/app";
import { getBanks, createBank } from "../../services/banks";



export default function Home({ navigation }) {

   const { setSelectedBank } = useContext(AppContext);

   const [banks, setBanks] = useState([]);
   const [loading, setLoading] = useState(false);
   const [modalCadBank, setModalCadBank] = useState(false);



   useEffect(() => {
      loadBanks();
   }, []);


   
   async function loadBanks() {
      try {
         setLoading(true);
         const data = await getBanks();
         setBanks(data);
      } catch (error) {
         Alert.alert("Erro", error.message);
      } finally {
         setLoading(false);
      }
   }
  


   async function insertBank(bank) {
      try {
         await createBank(bank);
         await loadBanks();
         Alert.alert("Sucesso", "Banco cadastrado com sucesso.");
         setModalCadBank(false);
      } catch (error) {
         Alert.alert("Erro", error.message);
      }
   }


 
   function openBank(bank) {
      //navigation.navigate("Bank", { bank });
      setSelectedBank(bank);
      navigation.navigate("Bank");
   }


   function closeModal() {
      setModalCadBank(false);
   }


   function openModal() {
      setModalCadBank(true);
   }
  


   return (
      <LinearGradient colors={["#0F0E17", "#000000"]} style={{ flex: 1 }}>
         <Header />
         <HomeSummary
            totalBanks={banks.length}
            onAddBank={openModal}            
         />
         <BankList
            banks={banks}
            loading={loading}
            onBankPress={openBank}
         />
         <BankModal
            visible={modalCadBank}
            onClose={closeModal}
            onSave={insertBank}
         />
      </LinearGradient>
   );
}








