import { StyleSheet } from "react-native";


export default StyleSheet.create({

    container:{

        marginHorizontal:24,

        marginTop:20,

        marginBottom:10

    },


    title:{

        color:"#FFFFFF",

        fontSize:26,

        fontWeight:"700"

    },


    subtitle:{

        color:"#94A3B8",

        fontSize:14,

        marginTop:8,

        lineHeight:20

    },


    summaryCard:{

        marginTop:20,

        backgroundColor:"#1E1B2E",

        borderRadius:20,

        padding:20,

        flexDirection:"row",

        justifyContent:"space-between",

        alignItems:"center",

        borderWidth:1,

        borderColor:"rgba(255,255,255,0.05)"

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


    number:{

        color:"#44E8C3",

        fontSize:32,

        fontWeight:"700"

    },


    label:{

        color:"#94A3B8",

        fontSize:13,

        marginTop:4

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