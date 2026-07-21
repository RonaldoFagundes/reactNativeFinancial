import { StyleSheet } from "react-native";


export default StyleSheet.create({

container:{
    flexGrow:1,
    paddingHorizontal:24,
    paddingBottom:40
},

header:{
    alignItems:"center",
    marginVertical:24
},

title:{
    color:"#FFF",
    fontSize:24,
    fontWeight:"700"
},

subtitle:{
    color:"#94A3B8",
    marginTop:6
},

imageSection:{
    alignItems:"center",
    marginBottom:24
},

uploadBox:{
    width:"100%",
    height:100,
    borderRadius:16,
    backgroundColor:"#1E1B2E",
    borderWidth:1,
    borderStyle:"dashed",
    borderColor:"#44E8C3",
    justifyContent:"center",
    alignItems:"center"
},

uploadText:{
    color:"#94A3B8",
    marginTop:8
},

previewBox:{
    width:120,
    height:120
},

previewImage:{
    width:120,
    height:120,
    borderRadius:16
},

deleteButton:{
    position:"absolute",
    right:-5,
    top:-5,
    width:28,
    height:28,
    borderRadius:14,
    backgroundColor:"#ff4d4d",
    justifyContent:"center",
    alignItems:"center"
},

form:{
    backgroundColor:"#1E1B2E",
    padding:24,
    borderRadius:24
},

inputGroup:{
    marginBottom:16
},

label:{
    color:"#94A3B8",
    fontSize:10,
    marginBottom:6
},

input:{
    height:48,
    backgroundColor:"#0F0E17",
    borderRadius:12,
    paddingHorizontal:16,
    color:"#FFF"
},

save:{
    height:52,
    backgroundColor:"#44E8C3",
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center",
    marginTop:12
},

saveText:{
    color:"#0F0E17",
    fontWeight:"700"
},

cancel:{
    height:52,
    justifyContent:"center",
    alignItems:"center"
},

cancelText:{
    color:"#94A3B8"
},

brokerContainer: {
    height: 48,
    backgroundColor: "#0F0E17",
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
},

brokerText: {
    color: "#FFF",
    fontSize: 16
},

});