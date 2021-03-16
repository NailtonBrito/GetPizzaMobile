import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const Contador = () => {

    const [valor, setValor] = useState(0);

    const somaUm = () => {
        setValor(valor+1);
    }

    return(
        <View>
            <Text style={estilo.valor}>
                {valor}
            </Text>
            <TouchableOpacity onPress={ ()=>{somaUm()} }>
                <Text style={estilo.botao}>+1</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    valor:{
        fontSize: 20,
    },
    botao:{
        fontSize: 30,
    },
});

export default Contador;