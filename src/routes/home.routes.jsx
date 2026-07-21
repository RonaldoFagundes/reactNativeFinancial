import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Bank from "../pages/Bank";
import Account from "../pages/Account";
import Transactions from '../pages/Transactions';
import CreditCard from '../pages/CreditCard';
import Investments from '../pages/Investments';
import Applications from "../pages/Applications";

/*
import Broker from '../pages/Broker';
import InvestBank from '../pages/InvestBank';
*/
import Rescue from '../pages/Rescue';


const Stack = createNativeStackNavigator();

export default function HomeRoutes() {

    return (

        <Stack.Navigator

            screenOptions={{

                headerStyle: {
                    backgroundColor: "#0F0E17",
                },

                headerTintColor: "#44E8C3",

                headerTitleStyle: {
                    color: "#FFF",
                    fontWeight: "700",
                    fontSize: 18,
                },

                headerShadowVisible: false,

                headerBackTitleVisible: false,

                headerBackButtonDisplayMode: "minimal",
            }}
        >

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Bank"
                component={Bank}
                options={{
                    title: "Banks",
                }}
            />

            <Stack.Screen
                name="Account"
                component={Account}
                options={{
                    title: "Accounts",
                }}
            />

            <Stack.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    title: "Account",
                }}
            />

            <Stack.Screen
                name="CreditCard"
                component={CreditCard}
                options={{
                    title: "Account",
                }}
            />

        {/* 
            <Stack.Screen
                name="InvestBank"
                component={InvestBank}
                options={{
                    title: "Account",
                }}
            />

            <Stack.Screen
                name="Broker"
                component={Broker}
                options={{
                    title: "Account",
                }}
            />
        */}

            <Stack.Screen
                name="Applications"
                component={Applications}
                options={{
                    title: "Account",
                }}
            />

            <Stack.Screen
                name="Investments"
                component={Investments}
                options={{
                    title: "My Aplications",
                }}
            />



            <Stack.Screen
                name="Rescue"
                component={Rescue}
                options={{
                    title: "Investment",
                }}
            />

        </Stack.Navigator>

    );

}