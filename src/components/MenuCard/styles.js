import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1E1B2E",
        padding: 16,
        borderRadius: 14,
        marginTop: 12
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },

    title: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "600"
    }
});