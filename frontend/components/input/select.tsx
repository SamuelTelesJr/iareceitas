import { View, StyleSheet, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Controller } from 'react-hook-form';
import { colors } from '../../constants/colors';


import { Feather } from '@expo/vector-icons';

import { useState } from 'react';

interface OptionsProps {
    label: string;
    value: string | number;
}

interface SelectProps {
    control: any;
    name: string;
    placeholder?: string;
    error?: string;
    options: OptionsProps[];
}

export function Select({ control, name, placeholder, error, options }: SelectProps) {
    const [visible, setVisible] = useState(false);



 return (
    <View style={styles.container}>
        <Controller 
            control={control} 
            name={name} 
            
            render={({ field: {onChange, onBlur, value}} ) => ( 
            <>
                <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
                    <Text>
                        {value? options.find(option => option.value === value)?.label : placeholder}
                        </Text>
                    <Feather 
                        name='arrow-down' 
                        size={16} color='#000' 
                    />
                </TouchableOpacity>

                <Modal 
                    visible={visible}
                    animationType='fade'
                    transparent={true}
                    onRequestClose={() => setVisible(false)}
                >
                    <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                        onPress={() => setVisible(false)}
                    >
                        <TouchableOpacity
                            style={styles.modalContent}
                            activeOpacity={1}
                        >
                            <FlatList
                                contentContainerStyle={{gap: 4}}
                                data={options}
                                keyExtractor={(item) => item.value.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.options}
                                        onPress={() =>  {
                                                setVisible(false) 
                                                onChange(item.value)
                                            }}
                                    >
                                        <Text>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                            />

                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </>)} 
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  select: {
    height: 44,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    color: colors.orange,
    marginTop: 4,
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  options: {
    backgroundColor: 'rgba(208, 208, 208, 0.4)',
    paddingVertical: 14,
    borderRadius: 4,
    paddingHorizontal: 8
  }
});