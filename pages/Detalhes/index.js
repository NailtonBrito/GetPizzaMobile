import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
 
const Detalhes = ({route}) => {
    const navigation = useNavigation();
    const item = route.params;
    return(
        <View>
            <Header>
                <Icon type='font-awesome' name='angle-left' color='#fff' size={25}
                    onPress={() => {navigation.goBack()}}
                />
                <Text style={styles.headerTitle}>{item.titulo}</Text>
            </Header>
            <View style={styles.content}>
                <Image 
                    style={styles.img}
                    source={{
                        uri: item.img
                    }}
                />
                <Text style={styles.title}>{item.titulo}</Text>
                <Text>{item.desc}</Text>
            </View>
        </View>
    );
}

export default Detalhes;