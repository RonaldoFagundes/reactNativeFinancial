import React, { useState, useContext } from 'react';
import {
   Pressable,
   Text,
   TextInput,
   View,
   Modal,
   StyleSheet
} from 'react-native';

//import { AuthContext } from '../../context/auth';
import { AppContext } from '../../context/app';

import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';


export default function Login({ navigation }) {

   const { signIn } = useContext(AppContext);

   const [modalCadUser, setModalCadUser] = useState(false);

   const [loginData, setLoginData] = useState({ user: '', password: '' });
   const [registerData, setRegisterData] = useState({ name: '', password: '' });

   
   const handleLoginChange = (field, value) => {
      setLoginData(prev => ({ ...prev, [field]: value }));
   };



   const handleRegisterChange = (field, value) => {

      setRegisterData(

         prev => (
            {
               ...prev, [field]: value
            }
         )
      );
   };


   const handleLogin = () => {
      // O loginData.user precisa receber 'admin' e o loginData.password precisa receber '123'
      signIn(loginData.user, loginData.password);
   };


   const handleInsertUser = () => {
      if (!registerData.name || !registerData.password) {
         alert('Please fill in all fields to register');
         return;
      }
      // Aqui entra sua lógica de API para salvar o usuário
      alert('User registered successfully!');
      setModalCadUser(false);
      setRegisterData({ name: '', password: '' }); // Limpa o formulário
   };


   return (
      <LinearGradient colors={['#0F0E17', '#000000']} style={{ flex: 1 }}>

         <View style={styles.brandHeader}>
            <View style={styles.logoBadge}>
               <Ionicons name="wallet" size={32} color="#44E8C3" />
            </View>
            <Text style={styles.textTitle}>Welcome back</Text>
            <Text style={styles.textSubtitle}>Sign in to access your digital account</Text>
         </View>

         <View style={styles.cardForm}>

            <View style={styles.inputGroup}>
               <Text style={styles.inputLabel}>USERNAME</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Enter your user"
                  placeholderTextColor="#666"
                  value={loginData.user}
                  onChangeText={(val) => handleLoginChange('user', val)}
                  autoCapitalize="none"
               />
            </View>

            <View style={styles.inputGroup}>
               <Text style={styles.inputLabel}>PASSWORD</Text>
               <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#666"
                  secureTextEntry={true}
                  value={loginData.password}
                  onChangeText={(val) => handleLoginChange('password', val)}
                  autoCapitalize="none"
               />
            </View>

            <Pressable style={styles.btnPrimary} onPress={handleLogin}>
               <Text style={styles.textBtnPrimary}>Confirm</Text>
            </Pressable>

            <Pressable style={styles.btnSecondary} onPress={() => setModalCadUser(true)}>
               <Text style={styles.textBtnSecondary}>
                  Don't have an account? <Text style={styles.textHighlight}>Sign up</Text>
               </Text>
            </Pressable>

         </View>

         <Modal animationType="slide" visible={modalCadUser} transparent={false}>

            <LinearGradient colors={['#0F0E17', '#000000']} style={{ flex: 1 }}>

               <View contentContainerStyle={styles.modalContainer}>

                  <View style={styles.brandHeader}>
                     <Text style={styles.textTitle}>Create account</Text>
                     <Text style={styles.textSubtitle}>Join our fintech and control your balance</Text>
                  </View>

                  <View style={styles.cardForm}>
                     <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>FULL NAME</Text>
                        <TextInput
                           style={styles.input}
                           placeholder="Your Name"
                           placeholderTextColor="#666"
                           value={registerData.name}
                           onChangeText={(val) => handleRegisterChange('name', val)}
                        />
                     </View>
                     <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>CHOOSE A PASSWORD</Text>
                        <TextInput
                           style={styles.input}
                           placeholder="Minimum 6 characters"
                           placeholderTextColor="#666"
                           secureTextEntry={true}
                           value={registerData.password}
                           onChangeText={(val) => handleRegisterChange('password', val)}
                        />
                     </View>
                     <Pressable style={styles.btnPrimary} onPress={handleInsertUser}>
                        <Text style={styles.textBtnPrimary}>Create account</Text>
                     </Pressable>
                     <Pressable style={styles.btnCancel} onPress={() => setModalCadUser(false)}>
                        <Text style={styles.textBtnCancel}>Go Back</Text>
                     </Pressable>
                  </View>
               </View>

            </LinearGradient>

         </Modal>

      </LinearGradient>
   );
}

const styles = StyleSheet.create({

   modalContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
      paddingBottom: 40,
   },
   brandHeader: {
      alignItems: 'center',
      marginBottom: 40,
   },

   logoBadge: {
      width: 64,
      height: 64,
      borderRadius: 16,
      backgroundColor: 'rgba(68, 232, 195, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
   },

   textTitle: {
      fontSize: 28,
      fontWeight: '700',
      color: '#FFFFFF',
      textAlign: 'center',
      letterSpacing: -0.5,
   },
   textSubtitle: {
      fontSize: 15,
      color: '#94A3B8',
      textAlign: 'center',
      marginTop: 8,
      lineHeight: 22,
   },

   cardForm: {
      width: '100%',
      backgroundColor: '#1E1B2E',
      borderRadius: 24,
      padding: 24,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.05)',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 5,
   },

   inputGroup: {
      marginBottom: 20,
   },
   inputLabel: {
      fontSize: 11,
      fontWeight: '700',
      color: '#94A3B8',
      marginBottom: 8,
      letterSpacing: 1,
   },

   input: {
      width: '100%',
      height: 52,
      backgroundColor: '#0F0E17',
      borderRadius: 12,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#FFFFFF',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)',
   },

   btnPrimary: {
      width: '100%',
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
   textBtnPrimary: {
      color: '#0F0E17',
      fontSize: 16,
      fontWeight: '700',
   },
   btnSecondary: {
      marginTop: 20,
      alignItems: 'center',
   },
   textBtnSecondary: {
      color: '#94A3B8',
      fontSize: 14,
   },

   textHighlight: {
      color: '#44E8C3',
      fontWeight: '700',
   },
   btnCancel: {
      marginTop: 16,
      width: '100%',
      height: 52,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)',
   },

   textBtnCancel: {
      color: '#94A3B8',
      fontSize: 16,
      fontWeight: '600',
   }
});




