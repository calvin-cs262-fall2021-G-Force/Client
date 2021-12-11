import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#e7e8d5",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        marginTop: 20,
        borderRadius: 15,
        padding: 10,
        elevation: 2
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
        marginTop: 10,
        paddingVertical: 15,
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