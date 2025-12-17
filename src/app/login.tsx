import { useState } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import InputText from "@/components/inputs/InputText";
import Button from "@/src/components/Button/Button";
import TextLinks from "@/src/components/links/TextLinks";
import { styles } from "@/src/styles/loginStyles";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ email: "", senha: "" });

    const router = useRouter();

    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validarFormulario = () => {
        let novosErros = { email: "", senha: "" };
        let valido = true;

        if (!email.trim()) {
            novosErros.email = "E-mail é obrigatório";
            valido = false;
        } else if (!validarEmail(email)) {
            novosErros.email = "E-mail inválido";
            valido = false;
        }

        if (!senha.trim()) {
            novosErros.senha = "Senha é obrigatória";
            valido = false;
        } else if (senha.length < 6) {
            novosErros.senha = "Senha deve conter no mínimo 6 caracteres";
            valido = false;
        }

        setErros(novosErros);
        return valido;
    };

    const handleLogin = () => {
        if (validarFormulario()) {
            router.push("/home");
        }
    };

    const handleCadastrar = () => {
        router.push("/cadastro");
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("@/assets/logo/logo.png")}
            />

            <Text style={styles.textPrincipal}>Seja bem-vindo!</Text>
            <Text style={styles.textSecundario}>
                Entre com suas credenciais!
            </Text>

            {/*  FORMULÁRIO */}
            <View style={styles.form}>
                <Text style={styles.labelText}>E-mail</Text>
                <InputText
                    placeholder="seu@email.com.br"
                    value={email}
                    onChangeText={setEmail}
                />
                {erros.email ? (
                    <Text style={styles.textoErro}>{erros.email}</Text>
                ) : null}

                <Text style={styles.labelText}>Senha</Text>
                <InputText
                    placeholder="Informe sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                {erros.senha ? (
                    <Text style={styles.textoErro}>{erros.senha}</Text>
                ) : null}

                <View style={styles.forgot}>
                    <TextLinks title="Recuperar senha" />
                </View>

                <Button
                    title="Entrar"
                    onPress={handleLogin}
                    style={styles.loginButton}
                />
            </View>

            <View style={styles.footer}>
                <TextLinks title="Cadastrar" onPress={handleCadastrar} />
            </View>
        </View>
    );
}
