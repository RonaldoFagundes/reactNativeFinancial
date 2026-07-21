/* import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InvestBankList from "../../components/InvestBankList";
import {getInvestBank} from '../../services/investbank';
import InvestmentModal from '../../components/InvestmentModal';

export default function InvestBank() {    
    const [InvestBank, setInvestBank] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);

     useEffect(() => {
          loadInvestBank();
       }, []);   
     
        async function loadInvestBank() {
               try {
                   setLoading(true);       
                   const data = await getInvestBank();
                   setInvestBank(data); 
       
               } catch (error) {
                   Alert.alert(
                       "Erro",
                       "Não foi possível carregar os investimentos."
                   );
               } finally {
                   setLoading(false);
               }
           }      


          async function handleCreateInvestment(investment) {
               console.log(investment)
          }

        function closeModal() {
           setModal(false);
        }

    return (
        <LinearGradient
            colors={["#0F0E17", "#000000"]}
            style={{ flex: 1 }}
        >
           <InvestBankList list={InvestBank} loading={loading} />

           <InvestmentModal
                 visible={modal}
                 onSave={handleCreateInvestment}
                 onClose={closeModal}
            />
        </LinearGradient>       
    );
} */