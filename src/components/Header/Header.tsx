import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import {styles} from "./styles"


export default function Header(){
    const hoje = new Date();
    const diasSemana = ["Doming", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    const diaSemana = diasSemana[hoje.getDay()];
    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];

    const dataFormatada = `${diaSemana}, ${dia}, ${mes}`;

    const userName = "Willian";
    

    
    
    return(
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <View style={styles.textContainer}>
                    <Text style={styles.greeting}>  Olá, {userName}! ✂️ </Text>
                    <Text style={styles.date}>  {dataFormatada} </Text>
                </View>
                
                <View>
                    <MaterialIcons name="content-cut" size={28} color="#6B9BD1"/>
                </View>
            </View>
        </View>


    )
}