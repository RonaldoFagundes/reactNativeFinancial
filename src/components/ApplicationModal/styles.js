import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "center",
    },

    header: {
        marginBottom: 30,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
    },

    subtitle: {
        color: "#94A3B8",
        fontSize: 15,
        textAlign: "center",
        marginTop: 8,
    },

    formGroup: {
        marginBottom: 20,
    },

    label: {
        color: "#44E8C3",
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 8,
    },

    input: {
        backgroundColor: "#1E1B2E",
        color: "#FFFFFF",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#333",
        fontSize: 16,
    },

    save: {
        backgroundColor: "#3B82F6",
        padding: 14,
        borderRadius: 12,
        marginTop: 20,
    },

    saveText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },

    cancel: {
        backgroundColor: "#374151",
        padding: 14,
        borderRadius: 12,
        marginTop: 12,
    },

    cancelText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
    },

});