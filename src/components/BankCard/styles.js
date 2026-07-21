import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {

        flexDirection: "row",

        backgroundColor: "#1E1B2E",

        marginHorizontal: 24,

        marginTop: 12,

        padding: 12,

        borderRadius: 16,

        alignItems: "center",

        borderWidth: 1,

        borderColor: "rgba(255,255,255,0.05)"

    },

    logo: {

        width: 60,

        height: 60,

        borderRadius: 12,

        marginRight: 12

    },

    logoPlaceholder: {

        width: 60,

        height: 60,

        borderRadius: 12,

        backgroundColor: "#0F0E17",

        justifyContent: "center",

        alignItems: "center",

        marginRight: 12

    },

    info: {

        flex: 1

    },

    name: {

        fontSize: 16,

        fontWeight: "700",

        color: "#FFF"

    },

    text: {

        fontSize: 12,

        color: "#94A3B8",

        marginTop: 4

    }

});