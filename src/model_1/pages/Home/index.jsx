import React, {
   useEffect,
   useState,
   useContext
} from 'react';

import {
   Pressable,
   Text,
   TextInput,
   View,
   Modal,
   Image,
   ScrollView,
   FlatList,
   Alert,
   StyleSheet
} from 'react-native';

import { AuthContext } from '../../context/auth';

import { FontAwesome } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';



export default function Home({ navigation }) {

   const {
      user,
      signOut
   } = useContext(AuthContext);

   const [modalCadBank, setModalCadBank] = useState(false);



   // Lista dos bancos vindos da API
   //const [banks, setBanks] = useState([]);
   const [banks, setBanks] = useState([

      {
         id_bnk: 1,
         number_bnk: "001",
         name_bnk: "Banco do Brasil",
         ein_bnk: "00.000.000/0001-91",
         contact_bnk: "0800 729 0001",
         desc_bnk: "Banco público",
         img_bnk: null
      },


      {
         id_bnk: 2,
         number_bnk: "237",
         name_bnk: "Bradesco",
         ein_bnk: "60.746.948/0001-12",
         contact_bnk: "0800 704 8383",
         desc_bnk: "Banco privado",
         img_bnk: null
      },


      {
         id_bnk: 3,
         number_bnk: "341",
         name_bnk: "Itaú Unibanco",
         ein_bnk: "60.701.190/0001-04",
         contact_bnk: "0800 728 0728",
         desc_bnk: "Banco nacional",
         img_bnk: null
      }

   ]);



   // Controle de carregamento
   const [loadingBanks, setLoadingBanks] = useState(false);


   // Cadastro do banco
   const [bank, setBank] =
      useState({
         number_bnk: "",
         name_bnk: "",
         ein_bnk: "",
         contact_bnk: "",
         desc_bnk: "",
         img_bnk: null,
      });



   /*
   =====================================================
   CARREGAR BANCOS AO ABRIR A HOME
   =====================================================
   */

   useEffect(() => {
      // getBanks();
      console.log("Bancos carregados localmente");
   }, []);


   /*
   =====================================================
   BUSCAR BANCOS NA API
   =====================================================
   */
   const getBanks = async () => {
      try {
         setLoadingBanks(true);
         const response = await fetch("http://10.0.2.2:8000/api/bank");
         const data = await response.json();
         setBanks(data);
      } catch (error) {
         console.log("Erro ao carregar bancos:", error);
      } finally {
         setLoadingBanks(false);
      }
   };

   /*
   =====================================================
   SELECIONAR IMAGEM DO BANCO
   =====================================================
   */
   const pickImage = async () => {
      const mediaType =
         ImagePicker.MediaType?.Images ||
         ImagePicker.MediaTypeOptions?.Images;
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: mediaType,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });
      if (!result.canceled) {
         setBank({
            ...bank,
            img_bnk: result.assets[0].uri
         });
      }
   };


   /*
   =====================================================
   REMOVER IMAGEM
   =====================================================
   */
   const removeImage = (attribute) => {
      setBank({
         ...bank,
         [attribute]: null
      });
   };


   /*
   =====================================================
   INPUTS DO FORMULÁRIO
   =====================================================
   */
   const handleInputChange = (field, value) => {
      setBank({
         ...bank,
         [field]: value
      });
   };




   /*
    =====================================================
    SALVAR BANCO LOCAL
    =====================================================
    */
   const insertBank = async () => {
      const newBank = {
         id_bnk: Date.now(),
         number_bnk: bank.number_bnk,
         name_bnk: bank.name_bnk,
         ein_bnk: bank.ein_bnk,
         contact_bnk: bank.contact_bnk,
         desc_bnk: bank.desc_bnk,
         img_bnk: bank.img_bnk
      };
      setBanks([
         ...banks,
         newBank
      ]);
      setBank({
         number_bnk: "",
         name_bnk: "",
         ein_bnk: "",
         contact_bnk: "",
         desc_bnk: "",
         img_bnk: null
      });
      setModalCadBank(false);
   };




   /*
   =====================================================
   SALVAR BANCO API
   =====================================================
   */
   const insertBank2 = async () => {
      const formData = new FormData();

      formData.append("number_bnk", bank.number_bnk);
      formData.append("name_bnk", bank.name_bnk);
      formData.append("ein_bnk", bank.ein_bnk);
      formData.append("contact_bnk", bank.contact_bnk);
      formData.append("desc_bnk", bank.desc_bnk);

      if (bank.img_bnk) {
         formData.append("img_bnk",
            {
               uri: bank.img_bnk,
               name: "bank.jpg",
               type: "image/jpeg"
            }
         );
      }

      try {
         const response = await fetch("http://10.0.2.2:8000/api/bank", {
            method: "POST",
            body: formData,
            headers: {
               Accept:
                  "application/json"
            }
         }
         );
         /*
         try {
          const response = await fetch("http://10.0.2.2:8000/api/bank", {
            method: "POST",
            body: formData,
          });        
        */
         const json = await response.json();
         console.log("Banco salvo:", json);

         /*
         Atualiza a lista
         sem precisar sair da Home
         */
         await getBanks();
         setBank({
            number_bnk: "",
            name_bnk: "",
            ein_bnk: "",
            contact_bnk: "",
            desc_bnk: "",
            img_bnk: null,
         });
         setModalCadBank(false);
      } catch (error) {
         console.log("Erro ao salvar banco:", error);
         Alert.alert("Erro", "Não foi possível salvar o banco");
      }
   };



   /*
   =====================================================
   ITEM DA FLATLIST
   =====================================================
   */
   const renderBankItem =
      ({ item }) => (

         <Pressable style={styles.bankCard}
             onPress={() => navigation.navigate("Bank", {bank: item })}>

            {
               item.img_bnk ?
                  (
                     <Image
                        source={{ uri: `http://10.0.2.2:8000/storage/${item.img_bnk}` }}
                        style={styles.bankLogo}
                     />
                  )
                  :
                  (
                     <View style={styles.bankLogoPlaceholder}>
                        <Ionicons name="business" size={24} color="#44E8C3" />
                     </View>
                  )
            }

            <View style={{ flex: 1 }}>
               <Text style={styles.bankName}>
                  {item.name_bnk}
               </Text>

               <Text style={styles.bankInfo}>
                  Banco:
                  {" "}
                  {item.number_bnk}
               </Text>

               <Text style={styles.bankInfo}>
                  CNPJ:
                  {" "}
                  {item.ein_bnk}
               </Text>

               <Text style={styles.bankInfo}>
                  {item.contact_bnk}
               </Text>
            </View>
         </Pressable>
      );


   return (
      <LinearGradient colors={['#0F0E17', '#000000']} style={{ flex: 1 }}>

         {/* ================= HEADER =================
         <View style={styles.header}>
            <View style={styles.userInfo}>
               <View style={styles.avatarBadge}>
                  { !user == "admin" ? (
                        <Image
                           source={require('../../../assets/icon.png')}
                           style={{
                              width: 40,
                              height: 40,
                              borderRadius: 12
                           }}
                           resizeMode="contain"
                        />
                     ) : (
                        <Ionicons name="person" size={20} color="#44E8C3"/>
                     )
                  }
               </View>
               <View>
                  <Text style={styles.welcomeText}>
                     Hello,
                  </Text>

                  <Text style={styles.usernameText}>
                     {user?.name || 'Fintech User'}
                  </Text>
               </View>
            </View>

            <Pressable
               style={styles.logoutBtn}
               onPress={signOut}
            >
               <Ionicons name="log-out-outline" size={22} color="#ff4d4d" />
            </Pressable>
         </View>
           */}

           <Header />
           

         {/* ================= LISTA PRINCIPAL ================= */}
         <FlatList
            data={banks}
            keyExtractor={(item) =>
               item.id_bnk.toString()
            }
            renderItem={renderBankItem}

            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
            ListHeaderComponent={
               <>
                  {/* SALDO 
                  <View style={styles.balanceCard}>
                     <Text style={styles.balanceLabel}>AVAILABLE BALANCE</Text>
                     <Text style={styles.balanceValue}> $ 12,450.80 </Text>
                  </View>
                   */}

                  <View style={styles.homeIntro}>
                     <Text style={styles.homeTitle}>Manage your banks</Text>
                     <Text style={styles.homeSubtitle}>
                        Keep your financial institutions
                        organized in one place.
                     </Text>
                     <View style={styles.bankSummary}>
                        <View>
                           <Text style={styles.summaryNumber}>
                              {banks.length}
                           </Text>
                           <Text style={styles.summaryLabel}>Connected Banks</Text>
                        </View>
                        <Ionicons name="business-outline" size={40} color="#44E8C3" />
                     </View>
                  </View>


                  {/* AÇÕES */}
                  <View style={styles.actionSection}>
                     <Text style={styles.sectionTitle}>Quick Actions</Text>
                     <View style={styles.shortcutView}>
                        <Pressable style={styles.shortcutCard}
                           onPress={() => setModalCadBank(true)}>
                           <View style={styles.iconCircle}>
                              <FontAwesome name="plus" size={18} color="#44E8C3" />
                           </View>
                           <Text style={styles.shortcutText}>Add Bank</Text>
                        </Pressable>
                     </View>
                  </View>

                  {/* TITULO LISTA */}
                  <Text style={[styles.sectionTitle, { marginHorizontal: 24, marginTop: 20 }]}>
                     Registered Banks
                  </Text>
               </>
            }

            ListEmptyComponent={
               loadingBanks ?
                  (
                     <Text style={styles.emptyText}>Loading banks...</Text>
                  )
                  :
                  (
                     <Text style={styles.emptyText}>
                        No banks registered.
                     </Text>
                  )
            }
         />



         {/* ================= MODAL CADASTRO ================= */}
         <Modal animationType="fade"
            visible={modalCadBank}
            transparent={false}
         >

            <LinearGradient colors={['#0F0E17', '#000000']} style={{ flex: 1 }}>

               <ScrollView contentContainerStyle={styles.modalScrollContainer}>

                  <View style={styles.modalHeader}>
                     <Text style={styles.modalTitle}>Register Institution</Text>
                     <Text style={styles.modalSubtitle}>
                        Connect a new banking partner to your platform
                     </Text>
                  </View>

                  {/* IMAGEM */}
                  <View style={styles.imagePickerSection}>
                     {
                        bank.img_bnk === null ?
                           (
                              <Pressable style={styles.uploadBox}
                                 onPress={pickImage}>
                                 <FontAwesome name="image" size={32} color="#44E8C3" />
                                 <Text style={styles.uploadBoxText}>Upload Institution Logo</Text>
                              </Pressable>
                           )
                           :
                           (
                              <View style={styles.previewBox}>
                                 <Image source={{ uri: bank.img_bnk }} style={styles.previewImage} />
                                 <Pressable style={styles.deleteImageBtn}
                                    onPress={() => removeImage('img_bnk')}>
                                    <FontAwesome name="trash" size={16} color="#FFF" />
                                 </Pressable>
                              </View>
                           )
                     }

                  </View>
                  <View style={styles.formCard}>

                     {/* INPUTS */}
                     {
                        [
                           {
                              label: "BANK NUMBER",
                              field: "number_bnk",
                              placeholder: "001"
                           },

                           {
                              label: "BANK NAME",
                              field: "name_bnk",
                              placeholder: "Banco do Brasil"
                           },

                           {
                              label: "TAX ID / CNPJ",
                              field: "ein_bnk",
                              placeholder: "00.000.000/0001-00"
                           },

                           {
                              label: "CONTACT",
                              field: "contact_bnk",
                              placeholder: "Email or phone"
                           },

                           {
                              label: "DESCRIPTION",
                              field: "desc_bnk",
                              placeholder: "Details"

                           }

                        ].map((input, index) => (
                           <View key={index} style={styles.inputGroup}>

                              <Text style={styles.inputLabel}>
                                 {input.label}
                              </Text>


                              <TextInput style={styles.input}
                                 placeholder={input.placeholder}
                                 placeholderTextColor="#666"
                                 value={bank[input.field]}
                                 onChangeText={(value) =>
                                    handleInputChange(input.field, value)}
                              />
                           </View>
                        ))
                     }

                     <Pressable style={styles.btnSave}
                        onPress={insertBank}
                     >
                        <Text style={styles.btnSaveText}>Save Bank</Text>
                     </Pressable>

                     <Pressable style={styles.btnCancel}
                        onPress={() => setModalCadBank(false)}>
                        <Text style={styles.btnCancelText}>Cancel</Text>
                     </Pressable>

                  </View>
               </ScrollView>
            </LinearGradient>
         </Modal>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({

   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 16,
   },

   userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
   },

   avatarBadge: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: 'rgba(68,232,195,0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
   },

   welcomeText: {
      fontSize: 13,
      color: '#94A3B8',
   },

   usernameText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#FFFFFF',
   },

   logoutBtn: {
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: 'rgba(255,77,77,0.1)',
      justifyContent: 'center',
      alignItems: 'center',
   },

   homeIntro: {
      marginHorizontal: 24,
      marginTop: 20,
      marginBottom: 10,
   },

   homeTitle: {
      color: '#FFFFFF',
      fontSize: 26,
      fontWeight: '700',
   },

   homeSubtitle: {
      color: '#94A3B8',
      fontSize: 14,
      marginTop: 8,
      lineHeight: 20,
   },

   bankSummary: {
      marginTop: 20,
      backgroundColor: '#1E1B2E',
      borderRadius: 20,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.05)',
   },

   summaryNumber: {
      color: '#44E8C3',
      fontSize: 32,
      fontWeight: '700',
   },

   summaryLabel: {
      color: '#94A3B8',
      fontSize: 13,
      marginTop: 4,
   },

   /*
   balanceCard: {
      backgroundColor: '#1E1B2E',
      marginHorizontal: 24,
      borderRadius: 20,
      padding: 24,
      marginTop: 16,
      borderWidth: 1,
      borderColor:'rgba(255,255,255,0.05)',
   },
   balanceLabel: {
      fontSize: 11,
      fontWeight: '700',
      color: '#94A3B8',
      letterSpacing: 1,
   },
   balanceValue: {
      fontSize: 28,
      fontWeight: '700',
      color: '#FFFFFF',
      marginTop: 8,
   },
   */

   actionSection: {
      marginTop: 32,
      paddingLeft: 24,
   },

   sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: 16,
   },

   shortcutView: {
      flexDirection: 'row',
      paddingRight: 24,
   },

   shortcutCard: {
      width: 90,
      height: 95,
      backgroundColor: '#1E1B2E',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.05)',
   },

   iconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#0F0E17',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
   },

   shortcutText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#FFFFFF',
      textAlign: 'center',
   },


   /*
   ================================
        FLATLIST BANK CARDS
   ================================
   */
   bankCard: {
      flexDirection: 'row',
      backgroundColor: '#1E1B2E',
      marginHorizontal: 24,
      marginTop: 12,
      padding: 12,
      borderRadius: 16,
      alignItems: 'center',
      borderWidth: 1,
      borderColor:'rgba(255,255,255,0.05)',
   },

   bankLogo: {
      width: 60,
      height: 60,
      borderRadius: 12,
      marginRight: 12,
   },

   bankLogoPlaceholder: {
      width: 60,
      height: 60,
      borderRadius: 12,
      backgroundColor: '#0F0E17',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
   },

   bankName: {
      fontSize: 16,
      fontWeight: '700',
      color: '#FFFFFF',
   },

   bankInfo: {
      fontSize: 12,
      color: '#94A3B8',
      marginTop: 4,
   },

   emptyText: {
      color: '#94A3B8',
      textAlign: 'center',
      marginTop: 20,
   },

   /*
   ================================
        MODAL
   ================================
   */

   modalScrollContainer: {
      flexGrow: 1,
      paddingHorizontal: 24,
      paddingBottom: 40,
   },

   modalHeader: {
      alignItems: 'center',
      marginVertical: 24,
   },

   modalTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: '#FFFFFF',
   },

   modalSubtitle: {
      fontSize: 14,
      color: '#94A3B8',
      textAlign: 'center',
      marginTop: 6,
   },

   imagePickerSection: {
      alignItems: 'center',
      marginBottom: 24,
   },

   uploadBox: {
      width: '100%',
      height: 100,
      borderRadius: 16,
      backgroundColor: '#1E1B2E',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#44E8C3',
      justifyContent: 'center',
      alignItems: 'center',
   },

   uploadBoxText: {
      color: '#94A3B8',
      fontSize: 13,
      marginTop: 8,
   },

   previewBox: {
      width: 120,
      height: 120,
      position: 'relative',
   },

   previewImage: {
      width: 120,
      height: 120,
      borderRadius: 16,
   },

   deleteImageBtn: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: '#ff4d4d',
      justifyContent: 'center',
      alignItems: 'center',
   },

   formCard: {
      backgroundColor: '#1E1B2E',
      borderRadius: 24,
      padding: 24,
      borderWidth: 1,
      borderColor:'rgba(255,255,255,0.05)',
   },

   inputGroup: {
      marginBottom: 16,
   },

   inputLabel: {
      fontSize: 10,
      fontWeight: '700',
      color: '#94A3B8',
      marginBottom: 6,
      letterSpacing: 1,
   },

   input: {
      width: '100%',
      height: 48,
      backgroundColor: '#0F0E17',
      borderRadius: 12,
      paddingHorizontal: 16,
      color: '#FFFFFF',
      borderWidth: 1,
      borderColor:'rgba(255,255,255,0.1)',
   },

   btnSave: {
      width: '100%',
      height: 52,
      backgroundColor: '#44E8C3',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 12,
   },

   btnSaveText: {
      color: '#0F0E17',
      fontSize: 16,
      fontWeight: '700',
   },

   btnCancel: {
      width: '100%',
      height: 52,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor:'rgba(255,255,255,0.1)',
      marginTop: 12,
   },

   btnCancelText: {
      color: '#94A3B8',
      fontSize: 16,
      fontWeight: '600',
   },
   
});