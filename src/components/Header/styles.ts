import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6B9BD1',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#6B9BD1',
    },
    iconContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});