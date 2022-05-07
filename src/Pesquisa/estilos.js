import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor:" #0000ff"
    },
    Estado: {
        backgroundColor: "#00ccff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    nome:{
        color:"#ff3399",
        fontWeight:"bold",
        fontSize: 16,
        width: '40%'
    },
    Sabor:{
        color:"#ff3399",
        fontSize: 14,
        width: '40%'
    },
    preco:{
        color:"#ff3399",
        fontSize: 14,
    },
    Vazio:{
        color:"#ff4dff",
        fontSize: 24,
        textAlign: "center",
        fontWeight:"bold",
        padding: 26,
    },
    VazioNome:{
        color:"#cc0099",
        fontSize: 24,
        textAlign: "center",
        fontWeight:"bold",
        padding: 26,
    },
})