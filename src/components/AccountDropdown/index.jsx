import React, { useState } from "react";

import {
    View,
    Text,
    Pressable,
    FlatList,
    Modal,
    TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";


export default function AccountDropdown({
    accounts = [],
    selectedAccount,
    onSelect,
    onAccountPress,
    showValues = true
}) {

    const [visible, setVisible] = useState(false);


    function handleSelect(account) {
        setVisible(false);
        onSelect(account);
    }


    function renderAccount({ item }) {

        const selected =
            selectedAccount?.id_act === item.id_act;


        return (
            <Pressable
                style={[
                    styles.option,
                    selected && styles.optionSelected
                ]}
                onPress={() => {
                    handleSelect(item);
                    onAccountPress(item);
                }}
            >

                <View style={styles.optionIcon}>
                    <Ionicons
                        name="wallet-outline"
                        size={22}
                        color="#44E8C3"
                    />
                </View>


                <View style={styles.optionContent}>

                    <Text style={styles.optionType}>
                        {item.type_act}
                    </Text>

                    <Text style={styles.optionDescription}>
                        {item.desc_act}
                    </Text>

                    <Text style={styles.optionNumber}>
                        Conta: {item.number_act}
                    </Text>

                </View>


                <View style={styles.optionRight}>

                    <Text style={styles.optionBalance}>
                        {showValues
                            ? `R$ ${Number(
                                item.saldo_act || 0
                            ).toFixed(2)}`
                            : "R$ ••••••"
                        }
                    </Text>


                    {selected && (
                        <Ionicons
                            name="checkmark-circle"
                            size={22}
                            color="#44E8C3"
                        />
                    )}

                </View>

            </Pressable>
        );
    }


    return (
        <View style={styles.container}>

            <Text style={styles.label}>
                Conta padrão
            </Text>


            <Pressable
                style={styles.dropdown}
                onPress={() => setVisible(true)}
            >

                {selectedAccount ? (
                    <>

                        <View style={styles.selectedIcon}>
                            <Ionicons
                                name="wallet"
                                size={22}
                                color="#44E8C3"
                            />
                        </View>


                        <View style={styles.selectedContent}>

                            <Text style={styles.selectedType}>
                                {selectedAccount.type_act}
                            </Text>

                            <Text style={styles.selectedNumber}>
                                Conta: {selectedAccount.number_act}
                            </Text>

                        </View>


                        <View style={styles.selectedRight}>

                            <Text style={styles.selectedBalance}>
                                {showValues
                                    ? `R$ ${Number(
                                        selectedAccount.saldo_act || 0
                                    ).toFixed(2)}`
                                    : "R$ ••••••"
                                }
                            </Text>


                            <Ionicons
                                name="chevron-down"
                                size={20}
                                color="#94A3B8"
                            />

                        </View>

                    </>

                ) : (

                    <>

                        <View style={styles.selectedIcon}>
                            <Ionicons
                                name="wallet-outline"
                                size={22}
                                color="#44E8C3"
                            />
                        </View>


                        <Text style={styles.placeholder}>
                            Selecione uma conta
                        </Text>


                        <Ionicons
                            name="chevron-down"
                            size={20}
                            color="#94A3B8"
                        />

                    </>

                )}

            </Pressable>


            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >

                <View style={styles.modalOverlay}>

                    <Pressable
                        style={styles.modalBackground}
                        onPress={() => setVisible(false)}
                    />


                    <View style={styles.modalContent}>

                        <View style={styles.modalHeader}>

                            <View>

                                <Text style={styles.modalTitle}>
                                    Selecionar conta
                                </Text>

                                <Text style={styles.modalSubtitle}>
                                    Escolha a conta que deseja utilizar
                                </Text>

                            </View>


                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={styles.closeButton}
                            >

                                <Ionicons
                                    name="close"
                                    size={22}
                                    color="#FFFFFF"
                                />

                            </TouchableOpacity>

                        </View>


                        {accounts.length === 0 ? (

                            <Text style={styles.empty}>
                                Nenhuma conta cadastrada.
                            </Text>

                        ) : (

                            <FlatList
                                data={accounts}
                                keyExtractor={(item) =>
                                    item.id_act.toString()
                                }
                                renderItem={renderAccount}
                                showsVerticalScrollIndicator={false}
                            />

                        )}

                    </View>

                </View>

            </Modal>

        </View>
    );
}