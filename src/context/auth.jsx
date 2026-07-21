import React, { createContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


// 1. Criamos e exportamos o contexto explicitamente
export const AuthContext = createContext({});


export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // 2. Verifica se já existe um usuário logado ao abrir o app
  useEffect(() => {

    async function loadStorageData() {
      try {
        const storageUser = await AsyncStorage.getItem('@Auth:user');
        if (storageUser) {
          setUser(JSON.parse(storageUser));
        }
      } catch (error) {
        console.log('Erro ao ler AsyncStorage:', error);
      } finally {
        setLoading(false);
      }
    }

    loadStorageData();
     }, []);


  // 3. Função de Login chamada pela sua página de Login
  async function signIn(username, password) {

    if (username === 'admin' && password === '123') {

      const loggedUser = {
        id: '1',
        name: 'Administrador de Testes',
        email: 'admin@teste.com',
        token: 'fake-jwt-token-para-teste'
      };

       setUser(loggedUser);

      try {
        await AsyncStorage.setItem('@Auth:user', JSON.stringify(loggedUser));
      } catch (error) {
        console.log('Erro ao salvar AsyncStorage:', error);
      }
    } else {
      alert('Erro: Use o usuário "admin" e senha "123" para testar!');
    }
  }


  // 4. Função de Logout
  async function signOut() {
    try {
      await AsyncStorage.removeItem('@Auth:user');
    } catch (error) {
      console.log('Erro ao remover AsyncStorage:', error);
    }
    setUser(null);
  }


  return (
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signOut
      }}>
      {children}
    </AuthContext.Provider>
  );
}







 



   

