import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
    discountCard: {
        justifyContent:'center', 
        alignItems:'center', 
        flex:1
    },
    text: {
        fontSize:20,
        padding: 20,
        //alignItems:'center',
    },
    discountText: {
        alignSelf:'center',
        fontSize:20,
        fontWeight: 'bold',
        padding: 20,
        backgroundColor:'#8C2131',
        color:'#F3CD00',
        borderRadius:15,
    }
});
