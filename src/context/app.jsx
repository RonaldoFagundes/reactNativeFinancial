import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext({});



export default function AppProvider({ children }) {



    // ==========================
    // AUTH
    // ==========================
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // ==========================
    // GLOBAL DATA
    // ==========================
    const [selectedBank, setSelectedBank] = useState(null);
    const [selectedAccount, setSelectedAccount] = useState(null);



    useEffect(() => {
        loadStorageData();
    }, []);




    async function loadStorageData() {
        try {
            const storageUser = await AsyncStorage.getItem("@Auth:user");

            if (storageUser) {
                setUser(JSON.parse(storageUser));
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }




    async function signIn(username, password) {
        if (username === "admin" && password === "123") {
            const loggedUser = {
                id: "1",
                name: "Administrador de Testes",
                email: "admin@teste.com",
                token: "fake-jwt-token"
            };
            setUser(loggedUser);
            await AsyncStorage.setItem(
                "@Auth:user",
                JSON.stringify(loggedUser)
            );
            return true;
        }
        alert('Usuário: admin\nSenha: 123');
        return false;
    }



    async function signOut() {
        await AsyncStorage.removeItem("@Auth:user");
        setUser(null);
        setSelectedBank(null);
        setSelectedAccount(null);
    }




    return (
        <AppContext.Provider
            value={{

                // AUTH
                signed: !!user,
                user,
                loading,
                signIn,
                signOut,

                // BANK
                selectedBank,
                setSelectedBank,

                // ACCOUNT
                selectedAccount,
                setSelectedAccount

            }}
        >
            {children}
        </AppContext.Provider>
    );
}


