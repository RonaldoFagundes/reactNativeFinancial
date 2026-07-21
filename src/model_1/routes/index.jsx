import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/auth';


import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';



export default function Routes() {
  
  // Supondo que seu contexto tenha as propriedades 'signed' (bool) e 'loading' (bool)
  const { signed, loading } = useContext(AuthContext);

   // Mostra uma tela de carregamento enquanto verifica se o usuário está logado (ex: lendo o AsyncStorage)
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }

  // Se 'signed' for true, renderiza as abas. Se for false, renderiza o Login.
  return signed ? <AppRoutes /> : <AuthRoutes />;
}