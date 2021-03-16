import React from 'react';
import { View, FlatList } from 'react-native';
import { Linha } from '../../components/Linha';
import { Header } from 'react-native-elements';
import styles from './styles';
import dados from './data';

const App = () =>{
      return(
        <View style={styles.conteudo}>
          <Header 
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{text: 'Cardápio', style:{color:'#fff'}}}
          />
            <FlatList 
              data={dados}
              renderItem={({item}) => <Linha item = {item}/>}
            keyExtractor={item=> item.id}
            />
        </View>
      );
}

export default App;