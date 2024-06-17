import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';

export function Card({ data, navigation }) {
    const handlePress = () => {
        navigation.navigate('Details', { url: data.url });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.card}>
            <ImageBackground 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png' }} 
                style={styles.backgroundImage}
                imageStyle={{ borderRadius: 15 }}>
                <View style={styles.overlay} />
                <Text style={styles.text}>{data.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical:30,
        marginHorizontal:20,
        borderRadius: 15, // Esquinas redondeadas más pronunciadas
        overflow: 'hidden', // Para que la imagen de fondo no se salga de los bordes redondeados
        elevation: 5, // Elevación para sombra en Android
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 5 }, // Desplazamiento de la sombra
        shadowOpacity: 0.3, // Opacidad de la sombra
        shadowRadius: 10, // Radio de la sombra
    },
    backgroundImage: {
        width: 150, // Ancho completo de la tarjeta
        height: 150, // Altura de la imagen de fondo
        justifyContent: 'center', // Centrar el texto verticalmente
        alignItems: 'center', // Centrar el texto horizontalmente
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Cubrir toda la imagen de fondo
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de superposición con transparencia
    },
    text: {
        fontSize: 24, // Tamaño de fuente grande
        fontWeight: 'bold', // Texto en negrita
        color: '#fff', // Color del texto blanco para contraste
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra del texto
        textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra del texto
        textShadowRadius: 5, // Radio de la sombra del texto
    },
    
});
