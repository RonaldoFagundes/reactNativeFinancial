import React from 'react';
import { useContext } from 'react';
import {
    View,
    Text,
    Image,
    Pressable
} from 'react-native';

import {
    Ionicons
} from '@expo/vector-icons';

import { AppContext } from '../../context/app';


export default function Header() {
    const {
        user,
        signOut
    } = useContext(AppContext);

    return (
        <View style={styles.header}>
            <View style={styles.userInfo}>
                <View style={styles.avatarBadge}>
                    <Ionicons name="person" size={20} color="#44E8C3" />
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
                onPress={signOut}>
                <Ionicons name="log-out-outline" size={22} color="#ff4d4d" />
            </Pressable>
        </View>
    )
}

const styles = {
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatarBadge: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(68,232,195,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
    },

    welcomeText: {
        fontSize: 13,
        color: '#94A3B8'
    },

    usernameText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF'
    },

    logoutBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(255,77,77,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    }
}