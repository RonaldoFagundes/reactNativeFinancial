import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    Alert,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";



export default function ApplicationModal({
    visible,
    investment,
    account,
    onSave,
    onClose,
}) {

    const initialState = {
        open_apl: "",
        expery_apl: "",
        value_apl: "",
    };

    const [application, setApplication] = useState(initialState);



    function handleInputChange(field, value) {
        setApplication((prev) => ({
            ...prev,
            [field]: value,
        }));
    }



    function clearForm() {
        setApplication(initialState);
    }


  function parseMoney(value) {
        return Number(
            String(value)
                .replace(/\./g, "")
                .replace(",", ".")
        );
    }




 



   function save() {

    const accountBalance = Number(account?.saldo_act || 0);

    //const applicationValue = Number(application.value_apl || 0);

    const applicationValue = parseMoney(application.value_apl);



     if (isNaN(applicationValue) || applicationValue <= 0) {
            alert("Valor inválido","Digite um valor válido para a aplicação.");
            return;
        }


    if (applicationValue > accountBalance) {
        alert( "Saldo insuficiente","O valor da aplicação é maior que o saldo disponível.");

        /*
        Alert.alert(
            "Saldo insuficiente",
            "O valor da aplicação é maior que o saldo disponível."
        );
         */        
        return;
    }

    /*
    const data = {
        id_inv: investment?.id_inv,
        name_inv: investment?.name_inv,
        type_inv: investment?.type_inv,
        rate_inv: investment?.rate_inv,
        income_inv: investment?.income_inv,

        open_apl: application.open_apl,
        expery_apl: application.expery_apl,
        //value_apl: application.value_apl,
        value_apl: applicationValue,
    };
    */
   
    /*
   const fk_act = account?.id_act;
   const fk_inv = investment?.id_inv;

    if (!fk_act) {
        console.log("Conta selecionada:", account);
        return;
    }

    if (!fk_inv) {
        console.log("Investimento selecionado:",investment );
        return;
    }
    const data = {
        fk_act: fk_act,
        fk_inv: fk_inv,
        open_apl: application.open_apl,
        expery_apl: application.expery_apl,
        value_apl: applicationValue
    };
    */



    /*
    const data = {
    fk_act: account?.id_act,
    fk_inv: investment?.id_inv,
    open_apl: application.open_apl,
    expery_apl: application.expery_apl,
    value_apl: applicationValue,
    };
    */   
    const data = {
    fk_act: account?.id_act,
    fk_inv: investment?.id_inv,

    open_apl: application.open_apl,
    expery_apl: application.expery_apl,
    value_apl: applicationValue
};
    onSave(data);
    clearForm();
    onClose();
    
}








    /*
    function save() {

        if (
            !application.open_apl ||
            !application.expery_apl ||
            !application.value_apl
        ) {
            Alert.alert(
                "Atenção",
                "Preencha todos os campos."
            );
            return;
        }


           const data = {

            // dados do investimento
            id_inv: investment?.id_inv,
            name_inv: investment?.name_inv,
            type_inv: investment?.type_inv,
            rate_inv: investment?.rate_inv,
            income_inv: investment?.income_inv,


            // dados da aplicação
            open_apl: application.open_apl,
            expery_apl: application.expery_apl,
            value_apl: application.value_apl,

        };


        console.log("Aplicação criada:");
        console.log(data);

        onSave(data);

        clearForm();
        onClose();
    }
     */







    function close() {
        clearForm();
        onClose();
    }





    return (

        <Modal
            visible={visible}
            animationType="fade"
            transparent={false}
        >

            <LinearGradient
                colors={[
                    "#0F0E17",
                    "#000000"
                ]}
                style={{
                    flex:1
                }}
            >

                <ScrollView
                    contentContainerStyle={styles.container}
                >


                    <View style={styles.header}>

                        <Text style={styles.title}>
                            Create Application
                        </Text>


                        <Text style={styles.subtitle}>
                            {investment?.name_inv || "Investment"}
                        </Text>


                    </View>



                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            APPLICATION OPEN
                        </Text>

                        <Text style={styles.subtitle}>
                          Saldo disponível: R$ {Number(account?.saldo_act || 0).toFixed(2)}
                        </Text>

                        <TextInput

                            style={styles.input}

                            placeholder="01/08/2026"

                            placeholderTextColor="#666"

                            value={application.open_apl}

                            onChangeText={(text)=>
                                handleInputChange(
                                    "open_apl",
                                    text
                                )
                            }

                        />

                    </View>




                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            APPLICATION EXPIRY
                        </Text>


                        <TextInput

                            style={styles.input}

                            placeholder="01/08/2027"

                            placeholderTextColor="#666"

                            value={application.expery_apl}

                            onChangeText={(text)=>
                                handleInputChange(
                                    "expery_apl",
                                    text
                                )
                            }

                        />

                    </View>





                    <View style={styles.formGroup}>

                        <Text style={styles.label}>
                            APPLICATION VALUE
                        </Text>


                        <TextInput

                            style={styles.input}

                            placeholder="0.00"

                            placeholderTextColor="#666"

                            keyboardType="numeric"

                            value={application.value_apl}

                            onChangeText={(text)=>
                                handleInputChange(
                                    "value_apl",
                                    text
                                )
                            }

                        />

                    </View>





                    <Pressable
                        style={styles.save}
                        onPress={save}
                    >

                        <Text style={styles.saveText}>
                            Save Application
                        </Text>

                    </Pressable>





                    <Pressable
                        style={styles.cancel}
                        onPress={close}
                    >

                        <Text style={styles.cancelText}>
                            Cancel
                        </Text>

                    </Pressable>



                </ScrollView>


            </LinearGradient>


         </Modal>


         /* 
        <Modal
            visible={visible}
            animationType="fade"
            transparent={false}
        >
            <LinearGradient
                colors={["#0F0E17", "#000000"]}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Create Application
                        </Text>

                        <Text style={styles.subtitle}>
                            Add a new application
                        </Text>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>
                            APPLICATION OPEN
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="01/08/2026"
                            placeholderTextColor="#666"
                            value={application.open_apl}
                            onChangeText={(text) =>
                                handleInputChange("open_apl", text)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>
                            APPLICATION EXPIRY
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="01/08/2027"
                            placeholderTextColor="#666"
                            value={application.expery_apl}
                            onChangeText={(text) =>
                                handleInputChange("expery_apl", text)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>
                            APPLICATION VALUE
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="0.00"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={application.value_apl}
                            onChangeText={(text) =>
                                handleInputChange("value_apl", text)
                            }
                        />
                    </View>
                    <Pressable
                        style={styles.save}
                        onPress={save}
                    >
                        <Text style={styles.saveText}>
                            Save Application
                        </Text>
                    </Pressable>
                    <Pressable
                        style={styles.cancel}
                        onPress={close}
                    >
                        <Text style={styles.cancelText}>
                            Cancel
                        </Text>
                    </Pressable>
                </ScrollView>
            </LinearGradient>
        </Modal>
 */










    );
}







/*
import React, { useState } from "react";
import {
    Modal,
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";

export default function ApplicationModal({ visible, onSave, onClose }) {
  
     const [application, setApplication] = useState({           
            open_apl:"",
            expery_apl:"",            
            value_apl:""           
    });  

    //
    const [application, setApplication] = useState({
            name_apl:"",
            type_apl:"",
            open_inv:"",
            expery_invy:"",
            category_aplory :"",
            rate_apl:"",
            value_apl:"",
            income_aple:"",
            fk_inv:"",
    });  
    //


    //
     console.log(           
            ' name_inv '+inv.name_inv+
            ' type_inv '+inv.type_inv+
            ' open_inv  - falta '+
            ' expery_inv - falta '+
            ' category_inv '+inv.category_inv+
            ' rate_inv '+inv.rate_inv+
            ' value_apl -falta '+
            ' income_inv '+inv.income_inv+      
            ' id_inv '+inv.id_inv        
              )
         }
    //


    const handleInputChange = (field, value) => {
        setApplication({
            ...application,
            [field]: value
        });
    };


    const save = () => {
        onSave(application);
        setApplication({
            name_apl:"",
            type_apl:"",
            open_inv:"",
            expery_invy:"",
            category_aplory :"",
            rate_apl:"",
            value_apl:"",
            income_aple:"",
            fk_inv:"",
        })
    }


    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={false}>

            <LinearGradient
                colors={["#0F0E17", "#000000"]}
                style={{ flex: 1 }}>

                <ScrollView contentContainerStyle={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Create Investment
                        </Text>

                        <Text style={styles.subtitle}>
                            Add a new Investment
                        </Text>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>APPLICATION OPEN</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="CDB"
                            placeholderTextColor="#666"
                            value={application.open_apl}
                            onChangeText={(v) =>
                                handleInputChange("open_apl", v)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>APPLICATION EXPERY</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="CDB"
                            placeholderTextColor="#666"
                            value={application.expery_apl}
                            onChangeText={(v) =>
                                handleInputChange("expery_apl", v)
                            }
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.label}>APLICATION VALUE</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="0.00"
                            placeholderTextColor="#666"
                            keyboardType="numeric"
                            value={application.value_apl}
                            onChangeText={(v) =>
                                handleInputChange("value_apl", v)
                            }
                        />
                    </View>

                    <Pressable style={styles.save} onPress={save}>
                        <Text style={styles.saveText}>
                            Save Account
                        </Text>
                    </Pressable>

                    <Pressable style={styles.cancel} onPress={onClose}>
                        <Text style={styles.cancelText}>
                            Cancel
                        </Text>
                    </Pressable>

                </ScrollView>

            </LinearGradient>

        </Modal>
    )
}; 
*/