import { StyleSheet, View, Image, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '@/componeents/input';
import { Button } from '@/componeents/Button';
import { Link } from 'expo-router';

export default function signup() {
    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>

    <View style={styles.container}>
        <Image source={require("@/assets/img1.jpg")} 
        style={styles.illustration}
        />

        <Text style={styles.title}>Cadastrar</Text>
        <Text style={styles.subtitle}>Crie sua conta para acessar.</Text>

        <View style={styles.form}>
            <Input placeholder="Nome"/>
            <Input placeholder="E-mail" keyboardType='email-address'/>
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirmar Senha" secureTextEntry />
            <Button label="Cadastrar" />
        </View>

        <Text style={styles.footerText}>Já tem uma conta? <Link href={"/"} style={styles.footerLink}>Entre</Link></Text>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 32,
    },
    illustration: {
        width: '100%',
        height: 330,
        resizeMode: 'contain',
        marginTop: 62,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
    },
    form: {
        marginTop: 24,
        gap: 12,
    },
    footerText: {
        marginTop: 24,
        textAlign: 'center',
        color: 'gray',

    },
    footerLink: {
        color: '#6633ffff',
        fontWeight: 'bold',
    },
})