import React from "react";
import { View, Text, Pressable } from "react-native";

export default function InvestmentCard({ inv, onApply }) {

    if (!inv) {
        return null;
    }

    function handleApply() {
        if (typeof onApply === "function") {
            onApply(inv);
        }
    }

    return (
        <View
            style={{
                backgroundColor: "#1E1B2E",
                marginHorizontal: 16,
                marginVertical: 8,
                padding: 16,
                borderRadius: 16,
            }}
        >
            <Text
                style={{
                    color: "#FFF",
                    fontSize: 18,
                    fontWeight: "bold",
                }}
            >
                {inv.name_inv || "-"}
            </Text>

            <Text
                style={{
                    color: "#94A3B8",
                    marginTop: 6,
                }}
            >
                Tipo: {inv.type_inv || "-"}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                Categoria: {inv.category_inv || "-"}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                Taxa: {Number(inv.rate_inv || 0).toFixed(2)}%
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                IR: {inv.income_inv || "-"}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                Valor: R$ {Number(inv.value_inv || 0).toFixed(2)}
            </Text>

            <View
                style={{
                    marginTop: 18,
                }}
            >
                <Pressable
                    onPress={handleApply}
                    style={{
                        backgroundColor: "#3B82F6",
                        padding: 12,
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontWeight: "600",
                        }}
                    >
                        Aplicar
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}


/*
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function InvestmentCard({ inv, onApply }) {

    function handleApply() {
        if (onApply) {
            onApply(inv);
        }
    }   

    return (
        <View
            style={{
                backgroundColor: "#1E1B2E",
                marginHorizontal: 16,
                marginVertical: 8,
                padding: 16,
                borderRadius: 16,
            }}
        >
            <Text
                style={{
                    color: "#FFF",
                    fontSize: 18,
                    fontWeight: "bold",
                }}
            >
                {inv.name_inv}
            </Text>

            <Text
                style={{
                    color: "#94A3B8",
                    marginTop: 6,
                }}
            >
                Tipo: {inv.type_inv}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                Categoria: {inv.category_inv}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                Taxa: {inv.rate_inv}%
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                IR: {inv.income_inv}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                Valor: R$ {Number(inv.value_inv || 0).toFixed(2)}
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 18,
                }}
            >
                <Pressable
                    onPress={handleApply}
                    style={{
                        flex: 1,
                        backgroundColor: "#3B82F6",
                        padding: 12,
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontWeight: "600",
                        }}
                    >
                        Aplicar
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
*/











/*
import React from "react";
import { View, Text, Pressable } from "react-native";

export default function InvestmentCard({ inv }) {

    const onCreatNewInvest = () => {

        //
        console.log(
            " id " + inv.id_inv + " " +
            " categoria " + inv.category_inv + " " +
            " type " + inv.type_inv)
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
        'name_inv'
        'type_inv'
        'open_inv'
        'expery_inv'
        'category_inv'
        'rate_inv'
        'value_apl'
        'income_inv'      
        'id_inv'
     //


    return (
        <View
            style={{
                backgroundColor: "#1E1B2E",
                marginHorizontal: 16,
                marginVertical: 8,
                padding: 16,
                borderRadius: 16,
            }}
        >
            <Text
                style={{
                    color: "#FFF",
                    fontSize: 18,
                    fontWeight: "bold",
                }}
            >
                {` ${inv.name_inv}`}
            </Text>

            <Text style={{ color: "#94A3B8", marginTop: 6 }}>
                {` Tipo: ${inv.type_inv}`}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                {`Categoria: ${inv.category_inv}`}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                {`Taxa: ${inv.rate_inv} %`}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                {`IR: ${inv.income_inv} `}
            </Text>

            <Text
                style={{
                    color: "#44E8C3",
                    marginTop: 4,
                    fontWeight: "600",
                }}
            >
                {`Valor R$: ${inv.value_inv.toFixed(2)} `}
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 18,
                }}
            >

                <Pressable
                    onPress={() => onCreatNewInvest()}
                    style={{
                        flex: 1,
                        backgroundColor: "#3B82F6",
                        padding: 12,
                        borderRadius: 10,
                        marginRight: 8,
                    }}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            fontWeight: "600",
                        }}
                    >
                        Aplicar
                    </Text>
                </Pressable>
            </View>

        </View>
    );
}
    */