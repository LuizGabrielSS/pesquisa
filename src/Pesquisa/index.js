import React,{Component} from "react";
import {View,FlatList,TouchableOpacity,Text} from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "./estilos";
import DATA from "../mocks/doces"

/*Função criada para criar uma tela e uma resposta para o usuario visualizar melhor o que esta
acontecendo para ocorrer a dificuldade para não achar o que procura*/
const vazio = (nome) => {
	return (<View >
		<Text style={styles.Vazio}>Desculpa, mas é isso mesmo que você deseja?</Text>
		<Text style={styles.Vazio}>Nome digitado:</Text>
		<Text style={styles.VazioNome}>{nome}</Text>
	</View>)
}

/*Aqui é onde você define como vão aparecer os estilos de cada resposta das pesquisas*/
const Item = ({ title, preco, sabor}) => {
	return (<>
	<TouchableOpacity style={styles.Estado}>
		<Text style={styles.nome}>{title}</Text>
        <Text style={styles.Sabor}>{sabor}</Text>
        <Text style={styles.preco}>{preco}</Text>
	</TouchableOpacity>	
    </>);
};

/*Aqui é onde definimos quais valores vão quando renderizados,
isso facilita quando formos usar o flatlist*/
const renderItem = ({ item }) =>
<Item 
 title={item.nome} 
 sabor ={item.sabor} 
 preco = {item.preco}
 />;

 /*Aqui  começamos a definir nossa classe que vai carregar todos os nossos dados e fazer 
toda a questão do filtro */
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: false,data:DATA,error: null,searchValue: "",};
        this.arrayholder = DATA;
    }
        
/*Uma função simples para filtrar continuamente a lista do que esta aparecendo para o usuario,
tomando como base o que ele esta digitando*/
searchFunction = (text) => {
	const updatedData = this.arrayholder.filter((item) => {
	const text_data = text.toUpperCase();
	const item_data = `${item.nome.toUpperCase()})`;
	return item_data.indexOf(text_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
};
/*Aqui é o que estamos passando para o usuario, algo simples e direto de explicar é que:
acima temos uma barra de pesquisa e logo em seguida um lista, que pega o que esta sendo dado a ela
como "dado atual" pela função de filtrar*/
render(){
    return(
    <View style={styles.container}>
        <SearchBar
            placeholder="Pesquisa"
            darkTheme
            round
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
            />
            <FlatList
            ListEmptyComponent={vazio(this.state.searchValue)}
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        </View>
        );
    }
}

export default Search;