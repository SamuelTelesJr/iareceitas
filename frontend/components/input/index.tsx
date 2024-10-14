import { View, StyleSheet, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import { Controller } from 'react-hook-form';
import { colors } from '@/constants/colors';

interface InputProps {
    control: any;
    name: string;
    placeholder?: string;
    rules?: object;
    error?: string;
    keyboardType: KeyboardTypeOptions;
}

export function Input({ control, name, placeholder, rules, error, keyboardType }: InputProps) {
 return (
    <View style={styles.container}>
        <Controller 
            control={control} 
            name={name} 
            rules={rules} 
            
            render={({ field: {onChange, onBlur, value}} ) => ( 
            <TextInput 
                style={styles.input}
                placeholder={placeholder} 
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                keyboardType={keyboardType}
            />)} 
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  errorText: {
    color: colors.orange,
    marginTop: 4,
  }
});