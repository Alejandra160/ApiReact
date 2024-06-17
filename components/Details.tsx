import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import usePokeinfo from '@/hooks/usePokeinfo';

export function Details({ navigation, route }) {
    const { url } = route.params;
    const { info, loading, error } = usePokeinfo(url);

    if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
    if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

    function handleClick() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={handleClick}>
                <Text style={styles.header}>Details</Text>
            </TouchableOpacity>
            
            <View style={styles.detailContainer}>
                <Text style={styles.title}>ID: {info.id}</Text>
                <Text style={styles.title}>Name: {info.name}</Text>
                <Text style={styles.title}>Type: {info.types.map(t => t.type.name).join(', ')}</Text>
                <Text style={styles.title}>Weight: {info.weight}</Text>
                <Text style={styles.subtitle}>Abilities:</Text>

              
                <View style={styles.abilitiesContainer}>
                    {info.abilities.map((ability, index) => (
                        <Text key={index} style={styles.text}>{ability.ability.name}</Text>
                    ))}
                </View>
                
                <Text style={styles.subtitle}>Moves:</Text>
                <View style={styles.movesContainer}>
                    {info.moves.slice(0, 10).map((move, index) => (
                        <Text key={index} style={styles.text}>{move.move.name}</Text>
                    ))}
                      <View style={styles.imageContainer}>
                    <Image source={{ uri: info.sprites.front_default }} style={styles.image} />
                    <Image source={{ uri: info.sprites.back_default }} style={styles.image} />
                </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f',
        flexGrow: 1,
    },
    header: {
        fontSize: 26, // Tamaño de fuente más grande
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4B0082', // Color índigo
        textAlign: 'center',
    },
    detailContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15, // Bordes más redondeados
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 }, // Sombra más suave
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 20, // Tamaño de fuente más grande
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4B0082', // Color índigo
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600', // Semi-bold
        marginTop: 10,
        marginBottom: 10,
        color: '#FF1493', // Color rosado fuerte
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 150, 
        height: 150,
        marginHorizontal: 10,
    },
    abilitiesContainer: {
        marginVertical: 10,
    },
    movesContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap', // Movimientos envueltos
    },
    loadingText: {
        fontSize: 18,
        color: '#FF1493', // Color rosado fuerte
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#FF0000', // Color rojo fuerte
        textAlign: 'center',
        marginTop: 20,
    },
});
