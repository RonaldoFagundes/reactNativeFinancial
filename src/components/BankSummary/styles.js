import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        paddingTop: 10,
        marginBottom: 20
    },

    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#FFFFFF"
    },

    subtitle: {
        fontSize: 14,
        color: "#94A3B8",
        marginTop: 6,
        lineHeight: 20
    },

    summaryCard: {
        marginTop: 18,
        backgroundColor: "#1E1B2E",
        padding: 20,
        borderRadius: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 6
    },


     defaulCard: {
        marginTop: 18,
        backgroundColor: "#1E1B2E",
        padding: 10,
        borderRadius: 18,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 6
    },

    number: {
        fontSize: 34,
        fontWeight: "900",
        color: "#44E8C3"
    },

    label: {
        fontSize: 13,
        color: "#94A3B8",
        marginTop: 4
    },

    addButton: {
        marginTop: 16,
        height: 52,
        backgroundColor: "#44E8C3",
        borderRadius: 14,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        shadowColor: "#44E8C3",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5
    },

    addText: {
        fontWeight: "800",
        color: "#0F0E17",
        fontSize: 14
    },

    img:{
       width: 60,
       height: 60,
       borderRadius: 6,       
    },

    imgEmpty:{
       width: 90,
       height: 90,
       borderRadius: 25  
    },



     typeButton: {
      width: '60%',
      height: 52,
      backgroundColor: '#44E8C3',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
      shadowColor: '#44E8C3',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 3,
    },

    textBtn: {
      color: '#0F0E17',
      fontSize: 16,
      fontWeight: '700',
   },
   

});