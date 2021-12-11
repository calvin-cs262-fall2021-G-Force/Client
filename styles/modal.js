import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
    modalView: {
        backgroundColor: "gold",
        borderRadius: 30,
        alignItems: "center",
        alignSelf:'center',
        marginTop: 200,
        justifyContent:'center',
        // shadowColor: "#8C2131",
        // shadowOffset: {
        //     width: 20,
        //     height: 12
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 4,
        elevation: 100,
        height:'60%',
        width:'90%'
    },
    button: {
        marginTop: 20,
        borderRadius: 15,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: "#8C2131",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#F3CD00",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    postInput: {
        alignSelf:'center',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#8C2131',
        borderWidth: 1,
        height: 200,
        width: 250,
    },
    picker: {
        height: 60,
        width: 250,
        marginTop: 10,
        borderRadius: 20,
        borderColor: '#8C2131',
        borderWidth: 20,
        backgroundColor: "#fff"
    }
});