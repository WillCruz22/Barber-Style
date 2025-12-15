import React from "react";
import { View, TextInput, TextInputProps, StyleProp, ViewStyle, TextStyle } from "react-native";
import { styles } from "./InputTextStyles";

interface InputProps extends TextInputProps {
    icon?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
}

export default function Input({
    icon,
    placeholder,
    containerStyle,
    inputStyle,
    ...rest
}: InputProps) {
    return (
        <View style={[styles.container, containerStyle]}>
            {icon && <View style={styles.icon}>{icon}</View>}

            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
                {...rest}
            />
        </View>
    );
}
