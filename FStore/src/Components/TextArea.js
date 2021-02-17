import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import {Input} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'


const TextArea = ({numberOfLines,placeholder,multiline,label,onChangeText,value,editable}) => {
    return (
        <View>
        <Input 
            multiline={multiline}
            numberOfLines={numberOfLines}
            autoCapitalize='none'
            placeholder={placeholder}
            placeholderTextColor={"#9E9E9E"}
            label={label}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
        />
        </View>
    )
}

export default TextArea

const styles = StyleSheet.create({
   
})
