import React, { useState } from 'react';

import {
    View,
    Text,
    Pressable,
    FlatList,
    Modal,
    TextInput,
    StyleSheet
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';


export default function Bank({ route }) {

    const { bank } = route.params;

    const [modal, setModal] = useState(false);

    const [accounts, setAccounts] = useState([]);

    const [account, setAccount] = useState({
        type: "",
        name: "",
        number: ""
    });

    const accountTypes = [
        "Digital",
        "Corrente",
        "Poupança",
        "Investimentos"
    ];



    function saveAccount() {

        const newAccount = {
            id: Date.now(),
            bank_id: bank.id_bnk,
            type: account.type,
            name: account.name,
            number: account.number
        };

        setAccounts([
            ...accounts,
            newAccount
        ]);

        setAccount({
            type: "",
            name: "",
            number: ""
        });

        setModal(false);
    }



    return (
        <View style={styles.container}>
            <Header />

            <Text style={styles.bankTitle}>
                {bank.name_bnk}
            </Text>

            <Text style={styles.subtitle}>Gerenciar contas</Text>

            <Pressable style={styles.addButton}
                onPress={() => setModal(true)}>

                <Ionicons name="add" size={22} color="#0F0E17" />

                <Text style={styles.addText}>Nova conta</Text>

            </Pressable>


            <FlatList
                data={accounts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <View style={styles.card}>

                        <Ionicons name="wallet" size={30} color="#44E8C3" />

                        <View>

                            <Text style={styles.type}>
                                {item.type}
                            </Text>

                            <Text style={styles.info}>
                                {item.name}
                            </Text>

                            <Text style={styles.info}>
                                Conta: {item.number}
                            </Text>

                        </View>

                    </View>

                )}

            />

            <Modal

                visible={modal}
                transparent={true}
                animationType="slide">

                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>
                        Nova Conta
                    </Text>

                    <Text style={styles.label}>Tipo</Text>

                    <View style={styles.types}>

                        {
                            accountTypes.map(type => (
                                <Pressable
                                    key={type}
                                    style={[
                                        styles.typeButton,
                                        account.type === type && styles.selected
                                    ]}

                                    onPress={() => setAccount({
                                        ...account,
                                        type: type
                                    })}>

                                    <Text style={styles.typeText}>
                                        {type}
                                    </Text>

                                </Pressable>
                            ))
                        }

                    </View>
                    <TextInput
                        placeholder="Nome da conta"
                        placeholderTextColor="#777"
                        style={styles.input}
                        value={account.name}
                        onChangeText={(v) =>
                            setAccount({
                                ...account,
                                name: v
                            })

                        }

                    />

                    <TextInput
                        placeholder="Número da conta"
                        placeholderTextColor="#777"
                        style={styles.input}
                        value={account.number}
                        onChangeText={(v) =>
                            setAccount({
                                ...account,
                                number: v
                            })

                        } />

                    <Pressable
                        style={styles.save}
                        onPress={saveAccount}>
                        <Text>Salvar</Text>
                    </Pressable>

                    <Pressable
                        style={styles.save}
                         onPress={() => setModal(false)}>
                        <Text>Cancelar</Text>
                    </Pressable>

                </View>

            </Modal>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F0E17"
    },

    bankTitle: {
        color: "#44E8C3",
        fontSize: 28,
        fontWeight: "700",
        paddingHorizontal: 24
    },

    subtitle: {
        color: "#94A3B8",
        paddingHorizontal: 24,
        marginTop: 5
    },

    addButton: {
        margin: 24,
        height: 50,
        backgroundColor: "#44E8C3",
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    addText: {
        fontWeight: "700",
        marginLeft: 8
    },

    card: {
        backgroundColor: "#1E1B2E",
        marginHorizontal: 24,
        padding: 20,
        borderRadius: 16,
        flexDirection: "row",
        gap: 15,
        marginBottom: 12
    },

    type: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "700"
    },

    info: {
        color: "#94A3B8"
    },

    modal: {
        flex: 1,
        backgroundColor: "#0F0E17",
        padding: 25,
        justifyContent: "center"
    },

    modalTitle: {
        fontSize: 25,
        color: "#FFF",
        fontWeight: "700",
        marginBottom: 20
    },

    label: {
        color: "#94A3B8"
    },

    types: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 20
    },

    typeButton: {
        backgroundColor: "#1E1B2E",
        padding: 12,
        borderRadius: 10,
        margin: 5
    },

    selected: {
        backgroundColor: "#44E8C3"
    },

    typeText: {
        color: "#FFF"
    },

    input: {
        height: 50,
        backgroundColor: "#1E1B2E",
        borderRadius: 12,
        padding: 15,
        color: "#FFF",
        marginTop: 15
    },

    save: {
        height: 50,
        backgroundColor: "#44E8C3",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }

});
