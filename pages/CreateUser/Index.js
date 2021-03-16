import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Input, Button } from 'react-native-elements';
import styles from './styles';


const CreateUser = ( )=> {
    const InitialValues = {
        name: '',
        password: '',
        email: '',
    }
    return(
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleSubmit, handleBlur, values})=>(
            <View style={styles.container}>
                <Input 
                    placeholder='Nome'
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                />
                <Input 
                    placeholder='Email'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                />
                <Input 
                    placeholder='Senha'
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                />
                <Button 
                    title="Criar conta"
                    onPress={handleSubmit}
                />
            </View>
            )}
        </Formik>
    );
}

export default CreateUser;