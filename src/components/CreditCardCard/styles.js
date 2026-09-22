import { StyleSheet } from "react-native";

export default StyleSheet.create({

    card: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#15131D",

        borderWidth: 1,
        borderColor: "#24222E",

        borderRadius: 16,

        padding: 16,
        marginBottom: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,

        elevation: 5
    },

    iconContainer: {
        width: 52,
        height: 52,

        borderRadius: 14,

        backgroundColor: "#1C2D2A",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 14
    },

    content: {
        flex: 1
    },

    brand: {
        color: "#FFFFFF",

        fontSize: 17,
        fontWeight: "700",

        marginBottom: 4
    },

    number: {
        color: "#AAAAAA",

        fontSize: 13,

        marginBottom: 4
    },

    desc: {
        color: "#777777",

        fontSize: 12,

        marginBottom: 6
    },

    limit: {
        color: "#44E8C3",

        fontSize: 15,
        fontWeight: "700"
    }

});
