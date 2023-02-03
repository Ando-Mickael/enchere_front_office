import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListeHistorique } from "../components/ListeHistorique";
import { Sidemenu } from "../components/Sidemenu";
import { baseUrl } from "../util/Api";

export const Historique: React.FC = () => {

    const url = new URL(window.location.href);
    let enchereId = url.searchParams.get("enchereId");
    const [historiques, setHistoriques] = useState([]);

    function getHistoriques() {
        const url = baseUrl + `/historiqueByEnchere/${enchereId}`;
        axios.get(url)
            .then((response) => {
                setHistoriques(response.data);
            })
    }

    useEffect(() => {
        getHistoriques();
    }, [])

    return (
        <>
        <Sidemenu />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Historique</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h2>Proposition(s) : {historiques.length}</h2>
                    <ListeHistorique historiques={historiques} />
                </IonContent>
            </IonPage>
        </>
    );
}