import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import WeatherActions from '../store/WeatherActions';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

const HomeScreen = (props) => {

    const [pincode, setPincode] = useState(null)
    const weatherDetailsState = useSelector(state => state.weatherReducer) // state.weatherReducer => it is as per reducer name used in combineReducers
    const dispatch = useDispatch();

    useEffect(() => {
        if (weatherDetailsState.hasLoaded) {
            props.navigation.push("Weather Details", {pincode, ...weatherDetailsState})
        }        
    });

    const onChangePincode = (text) => {
        setPincode(text)
    }

    const onPressSubmit = () => {
        const fetchWeatherDetailsAction = WeatherActions.fetchWeatherDetails(pincode);
        dispatch(fetchWeatherDetailsAction)
    }

    return (
        <View style={styles.background}>
                <Text style={styles.title}>Find out the weather in your city.</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Enter the pincode' 
                    placeholderTextColor='white'
                    onChangeText={onChangePincode}>                        
                </TextInput>
                <Pressable onPress={onPressSubmit}>
                    <View style={styles.buttonBackground}>
                        <Text style={styles.buttonTitle}> Submit </Text>
                    </View>
                </Pressable>            
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        padding: 40,
    },
    container: {
    },
    title: {
        fontSize: 56,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
    },
    textInput: {
        height: 50,
        marginVertical: 34,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    buttonBackground: {
        height: 50,
        width: 250,
        alignSelf: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
    },
    buttonTitle: {
        top: 12,
        height: 50,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    }
});