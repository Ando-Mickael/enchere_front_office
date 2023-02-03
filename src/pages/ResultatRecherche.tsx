import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ListeEncheres } from "../components/ListeEncheres";
import { Sidemenu } from "../components/Sidemenu";
import { baseUrl } from "../util/Api";

export const ResultatRecherche: React.FC = () => {

    const url = new URL(window.location.href);
    let dataStr: any = url.searchParams.get("data");
    const data = JSON.parse(dataStr);

    const [encheres, setEncheres] = useState([]);

    function getEncheres() {
        const url = baseUrl + `/encheres2?nomProduit=${data["nom"]}&categorieId=${data["categorieId"]}&dateDebut=${data["dateDebut"]}&proprietaireId=${data["proprietaireId"]}&status=${data["status"]}`;
        axios.get(url).then((response) => {
            setEncheres(response.data);
        })
    }

    useEffect(() => {
        getEncheres();
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
                        <IonTitle>Recherche avancee</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <h2>Resultat(s): {encheres.length}</h2>
                    <ListeEncheres encheres={encheres} />
                </IonContent>
            </IonPage>
        </>
    );
}