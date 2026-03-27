import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
           
                <Image source={require('../../../assets/logo.png')} style={styles.logo} />


                <Text style={styles.title}>Fashion Store</Text>
                <Text style={styles.description}>
                    Bem-vindo à Fashion Store! Confira nossas roupas estilosas para todas as ocasiões.
                </Text>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Produtos')}>
                    <Text style={styles.buttonText}>Ver Produtos</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Contato')}>
                    <Text style={styles.buttonText}>Contato</Text>
                </Pressable>

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },

    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        borderRadius: 50
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },

    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 25,
        lineHeight: 22,
    },

    button: {
        backgroundColor: '#1a2863',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});