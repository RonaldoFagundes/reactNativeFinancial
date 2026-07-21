import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        paddingBottom: 20,
        paddingHorizontal: 24
    },

    wrapper: {
        marginBottom: 12,
        borderRadius: 16
    },

    pressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }]
    },

    empty: {
        color: "#94A3B8",
        textAlign: "center",
        marginTop: 30
    }

});


