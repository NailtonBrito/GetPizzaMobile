import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Linha = ({item}) => {
    const navigation = useNavigation();
    return(
    <TouchableOpacity
        onPress={()=>{navigation.navigate('Detalhes', item)}}
    >
        <View style={estilo.conteudo}>
            <Image 
                style={estilo.imagem}
                source={{uri:item.img}}
            />
            <View>
                <Text style={estilo.titulo}>{item.titulo}</Text>
                <Text >{item.desc}</Text>
                <Text style={estilo.preco}>{item.preco}</Text>
                <Rating 
                    type='custom'
                    startingValue={item.rating}
                    readonly
                    style={estilo.rating}
                    imageSize={20}
                />
            </View>
        </View>
    </TouchableOpacity>    
    );

}

const estilo = StyleSheet.create({
    titulo:{
        fontSize: 35,
    },
    preco:{
        fontSize: 20,
        color: 'red',
    },
    conteudo:{
        marginBottom: 120,
        flexDirection: 'row',
    },
    imagem:{
        height: 80,
        width: 80,
    }
})
export default Linha;