import {StatusBar} from 'expo-status-bar';
import {FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18next, {languageResources} from "./services/i18next";
import {useState} from "react";
import languageList from "./services/languageList.json";
import {changeLanguage} from "i18next";

export default function App() {
    const {t} = useTranslation();
    const [visible, setVisibleModal] = useState(false);

    const changeLng = (lng) => {
        i18next.changeLanguage(lng);
        setVisibleModal(    false);
    }

    return (
        <View style={styles.container}>
            <Modal visible={visible} onRequestClose={() => setVisibleModal(false)}>
                <View style={styles.languagesList}>
                    <FlatList data={Object.keys(languageResources)} renderItem={({item}) => (
                        <TouchableOpacity style={styles.languageButton}
                                          onPress={() => changeLng(item) }>
                            <Text style={styles.lngName}>{languageList[item].nativeName}</Text>
                        </TouchableOpacity>
                    )}/>
                </View>
            </Modal>
            <Text style={styles.text}>{t('home.name')}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setVisibleModal(true)}>
                <Text style={styles.buttonText}>{t("common.change_language")}</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191266',
    },
    button: {
        backgroundColor: '#6258e8',
        padding: 10,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    text: {
        marginBottom: 100,
        fontSize: 18,
        color: 'white',
    },
    languagesList: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        paddingTop:50,
        backgroundColor: '#6258e8',
    },

    languageButton: {
        padding: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
    },
    lngName: {
        fontSize: 16,
        color: 'white',
    },
});
