import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        padding: 24,
        paddingBottom: 40
    },

    header: {
        marginBottom: 20
    },

    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#FFF"
    },

    subtitle: {
        fontSize: 14,
        color: "#94A3B8",
        marginTop: 6,
        lineHeight: 20
    },

    formGroup: {
        marginBottom: 18
    },

    label: {
        color: "#94A3B8",
        fontSize: 12,
        marginBottom: 8,
        letterSpacing: 0.5
    },

    input: {
        height: 50,
        backgroundColor: "#1E1B2E",
        borderRadius: 12,
        paddingHorizontal: 15,
        color: "#FFF"
    },

    types: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10
    },

    typeButton: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        backgroundColor: "#1E1B2E",
        borderRadius: 10
    },

    selected: {
        backgroundColor: "#44E8C3"
    },

    typeText: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "600"
    },

    save: {
        height: 50,
        backgroundColor: "#44E8C3",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },

    saveText: {
        color: "#0F0E17",
        fontWeight: "700",
        fontSize: 14
    },

    cancel: {
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.1)"
    },

    cancelText: {
        color: "#94A3B8",
        fontWeight: "600",
        fontSize: 14
    }

});