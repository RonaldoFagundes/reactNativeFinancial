import React, { useEffect, useState, useContext } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import styles from "./styles";
import { AppContext } from "../../context/app";
import { getBankImage } from "../../utils/img";
import MenuCard from "../../components/MenuCard";

export default function Account({ navigation }) {

    const{ 
        selectedBank,
        selectedAccount: account
     }= useContext(AppContext);
     
    const img = getBankImage(selectedBank?.img_bnk);

    /*
    const isCurrent = account.type_act === "Corrente";
    const isDigital =  account.type_act === "Digital";
    const isSavings = account.type_act === "Poupança"; 
    const isInvestments = account.type_act === "Investimento";
     */

    const type = account?.type_act;
    const isCurrent = type === "Corrente";
    const isDigital = type === "Digital";
    const isSavings = type === "Poupança";
    const isInvestments = type === "Investimento";

    /*
    const [brokers, setBrokers] = useState([]);
    useEffect(() => {
      if (isInvestments) {
        loadBrokers();
      }
   }, [isInvestments]);

   async function loadBrokers() {
     try {
        const data = await getBrokers();
        setBrokers(data);
      } catch (error) {
        console.log(error);
     }
   }
   */

     return (

        <ScrollView style={styles.container}>



            {/* HEADER CARD */}
            <View style={styles.card}>

                <View style={styles.imageBox}>
                    <Image source={img} style={styles.logo} />
                </View>

                <Text style={styles.bankName}>
                    {selectedBank?.name_bnk}
                </Text>

                <Text style={styles.type}>                   
                    {account?.type_act}
                </Text>

                <Text style={styles.accountNumber}>
                     Conta: {account?.number_act}
                </Text>

                <Text style={styles.balance}>
                    R$ {Number(account?.saldo_act || 0).toFixed(2)}
                </Text>

            </View>

            {/* MENU */}
            <Text style={styles.sectionTitle}>
                Serviços
            </Text>           



           {!isInvestments && (
             <MenuCard
               icon="swap-horizontal"
               title="Transações"
               onPress={() => navigation.navigate("Transactions")}
           />
           )}


             {(isCurrent || isDigital) && (
            <MenuCard
              icon="card"
              title="Cartão de Crédito"
              onPress={() => navigation.navigate("CreditCard")}
            />
           )}





            {(isInvestments || isCurrent) && (
            <>
             <MenuCard
               icon="swap-horizontal"
               title="Meus Investimentos"               
            /*    onPress={() => navigation.navigate("Investments")} */
                onPress={() => navigation.navigate("Applications")}
           />            
            <MenuCard
               icon="swap-horizontal"
               title="Aplicar"               
              onPress={() => navigation.navigate("Investments")}              
           />
             </>
           )}





          


        {/* 

           {(isCurrent || isDigital) && (
            <MenuCard
             icon="pie-chart"
             title="Investimentos"
            onPress={() => navigation.navigate("Investments")} 
            onPress={() => navigation.navigate("Applications")}
             />
           )}

        */}




         {/*
         
         {isInvestments && (
          <BrokerList
            brokers={brokers}
            onDetails={(broker) =>
                navigation.navigate("BrokerDetails", { broker })
              }
             onRescue={(broker) =>
                navigation.navigate("Rescue", { broker })
             }
          />
         )}
         */}




          {/* 
            {isCurrent && (
             <>
               <MenuCard
                   icon="swap-horizontal"
                   title="Transações"
                   onPress={() =>
                      navigation.navigate("Transactions")
                   }
               />
                <MenuCard
                    icon="card"
                    title="Cartão de Crédito"
                    onPress={() =>
                        navigation.navigate("CreditCard")
                    }
                />
                <MenuCard
                    icon="card"
                    title="Investmentos"
                    onPress={() =>
                        navigation.navigate("InvestBank")
                    }
                />
            </>
            )}
            {isDigital && (
             <>
               <MenuCard
                   icon="swap-horizontal"
                   title="Transações"
                   onPress={() =>
                      navigation.navigate("Transactions")
                   }
               />
                <MenuCard
                    icon="card"
                    title="Cartão de Crédito"
                    onPress={() =>
                        navigation.navigate("CreditCard")
                    }
                />              
            </>
            )}
            {isSavings && (                
                <>
               <MenuCard
                   icon="swap-horizontal"
                   title="Transações"
                   onPress={() =>
                      navigation.navigate("Transactions")
                   }
               />
                <MenuCard
                    icon="wallet"
                    title="Rendimento"
                    onPress={() =>
                        navigation.navigate("Income")
                    }
                />
                </>
            )}   

            {isInvestments && (
                <>
                    <MenuCard
                        icon="pie-chart"
                        title="Aplicar"
                        onPress={() =>
                            navigation.navigate("Broker")
                        }
                    />
                    <MenuCard
                        icon="stats-chart"
                        title="Transferir"
                        onPress={() =>
                            navigation.navigate("Rescue")
                        }
                    />
                </>
            )}
        */}
        </ScrollView>
    );







  
    /*
    const { selectedBank } = useContext(AppContext);

    const img = getBankImage(selectedBank.img_bnk);     
    
    const {selectedAccount: account} = useContext(AppContext);

    const isInvestAllowed =
        account.type_act === "Corrente" ||
        account.type_act === "Digital";

    return (


        <View style={styles.container}>
          <View             
             style={{ 
                 width: 80,
                 height: 80,
                 backgroundColor:'red'                 
              }}           
           >
              <Image source={img}               
              style={{ 
                 width: 60,
                 height: 60,
                 borderRadius: 6, 
              }} />
          </View>         

            <Text style={styles.subtitle}>
                {`Saldo  ${account.saldo_act} `}
            </Text>           

            <Text style={styles.subtitle}>
                {`Type  ${account.type_act} `}
            </Text>

            <Text style={styles.subtitle}>
                {`Number  ${account.number_act} `}
            </Text>            
           
            <Pressable style={styles.card}>
                <Text style={styles.cardText}>
                    Transações
                </Text>
            </Pressable>
          
            {isInvestAllowed && (
                <Pressable style={styles.card}>
                    <Text style={styles.cardText}>
                        Investimentos
                    </Text>
                </Pressable>
            )}
           
            {isInvestAllowed && (
                <Pressable style={styles.card}>
                    <Text style={styles.cardText}>
                        Cadastrar Cartão de Crédito
                    </Text>
                </Pressable>
            )}

        </View>
    );
    */
}
   