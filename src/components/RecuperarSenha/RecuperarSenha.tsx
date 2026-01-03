import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";

import { useRouter } from "expo-router";
import Button from "../Button/Button";
import Input from "../inputs/InputText";
import TextLinks from "../links/TextLinks";
import { styles } from "./styles";

export default function RecuperarSenha() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    function isValidEmail(value: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    }

    function handleSubmit() {
        if (!email) {
            setError("O e-mail é obrigatório");
            return;
        }

        if (!isValidEmail(email)) {
            setError("Informe um e-mail válido");
            return;
        }

        setError("");
        setSuccess(false);
        setLoading(true);

        // simulação de envio (API depois)
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1000);

         
    }
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.iconContainer}>
                    <MaterialIcons
                        name="email"
                        size={45}
                        color="#6B7280"
                    />
                </View>

                <Text style={styles.title}>Recuperar Senha</Text>
                <Text style={styles.descricao}>
                    Digite seu e-mail para receber instruções de recuperação
                </Text>

                <Text style={styles.label}>E-mail</Text>

                <Input
                    placeholder="Informe seu e-mail"
                    value={email}
                    onChangeText={(text: string) => {
                        setEmail(text);
                        setError("");
                    }}
                    icon={<MaterialIcons name="email" size={22} color="#9CA3AF" />}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                {error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : null}

                {success ? (
                    <Text style={styles.successText}>
                        Se o e-mail existir, enviaremos as instruções.
                    </Text>
                ) : null}

                <View style={styles.containerButton}>
                    <Button
                        title={loading ? "Enviando..." : "Enviar link de recuperação"}
                        onPress={handleSubmit}
                        disabled={loading}
                    />
                </View>

                <View style={styles.linkContainer}>
                    <TextLinks
                        title="Voltar para login"
                        onPress={() => router.replace("/login")}
                    />
                </View>
            </View>
        </View>
    );
}
