import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        padding: 24,

        paddingBottom: 50
    },

    header: {
        marginBottom: 32
    },

    title: {
        color: "#FFFFFF",

        fontSize: 28,
        fontWeight: "700",

        marginBottom: 8
    },

    subtitle: {
        color: "#777777",

        fontSize: 14
    },

    formGroup: {
        marginBottom: 22
    },

    label: {
        color: "#888888",

        fontSize: 11,
        fontWeight: "700",

        letterSpacing: 1,

        marginBottom: 10
    },

    input: {
        height: 52,

        backgroundColor: "#15131D",

        borderWidth: 1,
        borderColor: "#292633",

        borderRadius: 12,

        paddingHorizontal: 16,

        color: "#FFFFFF",

        fontSize: 15
    },

    types: {
        flexDirection: "row",

        flexWrap: "wrap",

        gap: 10
    },

    typeButton: {
        backgroundColor: "#15131D",

        borderWidth: 1,
        borderColor: "#292633",

        borderRadius: 10,

        paddingVertical: 12,
        paddingHorizontal: 16
    },

    selected: {
        backgroundColor: "#173C35",

        borderColor: "#44E8C3"
    },

    typeText: {
        color: "#CCCCCC",

        fontSize: 13,
        fontWeight: "600"
    },

    save: {
        height: 54,

        backgroundColor: "#44E8C3",

        borderRadius: 14,

        justifyContent: "center",
        alignItems: "center",

        marginTop: 10,
        marginBottom: 12
    },

    saveText: {
        color: "#0F0E17",

        fontSize: 15,
        fontWeight: "700"
    },

    cancel: {
        height: 54,

        backgroundColor: "transparent",

        borderWidth: 1,
        borderColor: "#292633",

        borderRadius: 14,

        justifyContent: "center",
        alignItems: "center"
    },

    cancelText: {
        color: "#AAAAAA",

        fontSize: 15,
        fontWeight: "600"
    }

});
