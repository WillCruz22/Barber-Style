import { styles } from "@/src/styles/homeStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import ProximoAgendamento from "../components/CardsAgendamento/ProximoAgendamento";
import Header from "../components/Header/Header";
import NovoAgendamentoModal from "../components/NovoAgendamentoModal/NovoAgendamentoModal";


export default function Home() {
    const [novoAgendamentoVisible, setNovoAgendamentoVisible] = useState(false);

    return (
        <>

            <Header />

            <ScrollView style={styles.scrollContainer} >
                <View style={styles.cardsContainer}>
                    <Cards
                        title="Faturamento hoje"
                        value="R$0,00"
                        icon={<MaterialIcons name="attach-money" size={18} color="green" />}
                    />

                    <Cards
                        title="Clientes hoje"
                        value="6"
                        icon={<MaterialIcons name="people" size={22} color="blue" />}
                    />


                    <Cards
                        title="Agendamentos"
                        value="12"
                        icon={<MaterialIcons name="event" size={22} color="red" />}
                    />

                    <Cards
                        title="Taxa de ocupação"
                        value="50%"
                        icon={<MaterialIcons name="attach-money" size={18} color="" />}
                    />

                    <ProximoAgendamento />

                </View >
                <View style={styles.container}>

                    <Button
                        title="Registro de venda"
                        style={styles.buttonHome}
                        icon={<MaterialIcons name="attach-money" size={22} color="#fff" />}
                    />

                    <Button
                        title="Novo Agendamento"
                        icon={<MaterialIcons name="event" size={22} color="#fff" />}
                        style={styles.buttonHome}
                        onPress={() => setNovoAgendamentoVisible(true)}
                    />

                    <Button
                        title="Gerenciar clientes"
                        icon={<MaterialIcons name="people" size={22} color="#fff" />}
                        style={styles.buttonHome}
                    />
                    <Modal
                        visible={novoAgendamentoVisible}
                        transparent
                        animationType="slide"
                        onRequestClose={() => setNovoAgendamentoVisible(false)}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(0,0,0,0.4)",
                                justifyContent: "flex-end",
                            }}
                            activeOpacity={1}
                            onPress={() => setNovoAgendamentoVisible(false)}
                        >
                            <TouchableOpacity activeOpacity={1}>
                                <NovoAgendamentoModal
                                    onClose={() => setNovoAgendamentoVisible(false)}
                                    onSave={(data) => {
                                        console.log(data);
                                        setNovoAgendamentoVisible(false);
                                    }}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </Modal>

                    <Button
                        icon={<MaterialIcons name="trending-up" size={22} color="#fff" />}
                        title="Taxa de ocupação"
                        style={styles.buttonHome}
                    />


                </View>




            </ScrollView>
        </>
    )
}