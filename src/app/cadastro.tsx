import Textall from "@/src/components/Text/Text";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Button from "../components/Button/Button";
import InputText from "../components/inputs/InputText";
import { styles } from "../styles/cadastroStyles";

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [data, setData] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    function handleCadastro() {
        // valida nome
        if (!nome.trim()) {
            alert("Preencha seu nome completo");
            return;
        }

        // valida CPF (somente tamanho por enquanto)
        if (cpf.length !== 14) {
            alert("CPF inválido");
            return;
        }

        // valida data
        if (data.length !== 10) {
            alert("Informe uma data válida (DD/MM/AAAA)");
            return;
        }

        // valida email simples
        if (!email.includes("@")) {
            alert("E-mail inválido");
            return;
        }

        // valida senha
        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem");
            return;
        }

        // Se tudo correto
        alert("Cadastro realizado com sucesso!");


        router.replace("/login");

    }

    function maskCPF(value: string) {
        return value
            .replace(/\D/g, "")               // remove tudo que não é número
            .replace(/(\d{3})(\d)/, "$1.$2")  // coloca o ponto
            .replace(/(\d{3})(\d)/, "$1.$2")  // segundo ponto
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // hífen
    }
    function maskDate(value: string) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1");
    }
    function maskTelefone(value: string) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})\d+?$/, "$1");
    }




    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContanier}>

                {/* NOME */}
                <Textall style={styles.label} text="Nome Completo" />

                <View>
                    <InputText
                        placeholder="Nome completo"
                        value={nome}
                        onChangeText={setNome}
                        icon={<MaterialIcons name="person" size={22} color="#9CA3AF" />}
                    />


                </View>

                {/* CPF */}
                <Textall text="CPF" />

                <View>
                    <InputText
                        placeholder="Informe o CPF"
                        value={cpf}
                        onChangeText={(text) => setCpf(maskCPF(text))}
                        icon={<MaterialIcons name="description" size={22} color="#9CA3AF" />}

                    />
                </View>

                {/* DATA DE NASCIMENTO */}
                <Textall text="Data de Nascimento" />

                <View>

                    <InputText
                        placeholder="Data de nascimento"
                        keyboardType="numeric"
                        value={data}
                        onChangeText={(text) => setData(maskDate(text))}
                        icon={<MaterialIcons name="calendar-today" size={22} color="#9CA3AF" />}
                    />
                </View>

                {/* TELEFONE */}
                <Textall text="Telefone" />
                <View>

                    <InputText
                        placeholder="Telefone"
                        keyboardType="phone-pad"
                        value={telefone}
                        onChangeText={(text) => setTelefone(maskTelefone(text))}
                        icon={<MaterialIcons name="phone" size={22} color="#9CA3AF" />}
                    />
                </View>

                {/* EMAIL */}
                <Textall text="E-mail" />

                <View>

                    <InputText
                        placeholder="Informe seu e-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        icon={<MaterialIcons name="email" size={22} color="#9CA3AF" />}
                    />
                </View>

                {/* SENHA */}
                <Textall text="Senha" />

                <View>

                    <InputText

                        placeholder="Senha"
                        secureTextEntry
                        autoCapitalize="none"
                        value={senha}
                        onChangeText={setSenha}
                        icon={<MaterialIcons name="lock" size={22} color="#9CA3AF" />}
                    />
                </View>

                {/* CONFIRMAR SENHA */}
                <Textall text="Confirmar Senha" />

                <View>

                    <InputText
                        placeholder="Senha"
                        secureTextEntry
                        autoCapitalize="none"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        icon={<MaterialIcons name="lock" size={22} color="#9CA3AF" />}
                    />
                </View>

            </ScrollView>

            <View style={styles.buttonContainer}>
                <Button
                    title="Cria conta"
                    onPress={handleCadastro}

                />
            </View>

        </View>
    )
}
