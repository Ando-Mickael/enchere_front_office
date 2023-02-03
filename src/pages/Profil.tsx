import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardProfil } from "../components/CardProfil";
import { ListeEncheres } from "../components/ListeEncheres";
import { Sidemenu } from "../components/Sidemenu";
import Utilisateur from "../model/Utilisateur";
import { baseUrl } from "../util/Api";

export const Profil: React.FC = () => {

    const [encheres, setMesEncheres] = useState([]);

    const getMesEncheres = () => {
        const url = baseUrl + `/encheresByUtilisateur/${new Utilisateur().getId()}`;

        axios.get(url)
            .then((response) => {
                setMesEncheres(response.data);
            });
    }

    useEffect(() => {
        getMesEncheres();
    }, []);

    return (

        <>
            <Sidemenu />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Profil</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h2>Profil</h2>
                    <CardProfil />
                    <h2>Mes encheres : {encheres.length}</h2>
                    <ListeEncheres encheres={encheres} />
                </IonContent>
            </IonPage>
        </>
    );

}