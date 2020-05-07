import React from 'react';
import { View, Button } from 'react-native';

export default function Home(props: any) {
    return (
    <View>
        <Button title={"Home2"} onPress={() => {
            props.navigation.navigate('StoreScreen');
        }} />
    </View>
    )
} 