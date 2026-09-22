import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1
    },

    header: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        paddingHorizontal: 20,

        paddingTop: 24,

        paddingBottom: 16
    },

    title: {
        color: "#FFFFFF",

        fontSize: 24,

        fontWeight: "700",

        marginBottom: 6
    },

    subtitle: {
        color: "#777777",

        fontSize: 13
    },

    addButton: {
        width: 46,

        height: 46,

        borderRadius: 14,

        backgroundColor: "#44E8C3",

        alignItems: "center",

        justifyContent: "center"
    },

    listContainer: {
        flex: 1
    }

});



/*
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    card: {
        backgroundColor: "#1E1B2E",
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.05)"
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#FFF"
    },

    subtitle: {
        fontSize: 14,
        color: "#94A3B8",
        marginTop: 6
    }

});
*/