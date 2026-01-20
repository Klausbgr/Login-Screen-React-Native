import { StyleSheet, View, Image, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Input } from '@/componeents/input';
import { Button } from '@/componeents/Button';
import { Link } from 'expo-router';

export default function Index() {
    function handleLogin() {
        Alert.alert("Login", "Preencha todos os campos!");
    }
    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>

    <View style={styles.container}>
        <Image source={require("@/assets/img2.jpg")} 
        style={styles.illustration}
        />

        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha.</Text>

        <View style={styles.form}>
            <Input placeholder="E-mail" keyboardType='email-address' onChangeText={text => console.log(text)}/>
            <Input placeholder="Senha" secureTextEntry />
            <Button label="Entrar" onPress={handleLogin} />
        </View>

        <Text style={styles.footerText}>Não tem uma conta? <Link href={"/signup"} style={styles.footerLink}>Cadastre-se</Link> aqui.</Text>
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