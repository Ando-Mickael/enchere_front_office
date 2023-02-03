import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormEncherir } from "../components/FormEncherir";
import { Sidemenu } from "../components/Sidemenu";
import { baseUrl } from "../util/Api";

export const Fiche: React.FC = () => {

    const url = new URL(window.location.href);
    let enchereId = url.searchParams.get("enchereId");
    const [enchere, setEnchere]: any = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    function getEnchere() {
        const url = baseUrl + `/encheres/${enchereId}`;
        console.log(url);

        axios.get(url)
            .then((response) => {
                console.log(response.data);

                setEnchere(response.data);
            })
            .then((error) => {
                console.log(error);
            })

    }

    useEffect(() => {
        getEnchere();
    }, []);

    return (
        <>
            <Sidemenu />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Fiche</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {enchere.map((item: any) => {
                        return (
                            <IonGrid>
                                <IonRow>
                                    <IonCol size="6" offset="3">
                                        <IonCard>
                                            <IonRow>
                                                <IonCol>
                                                    <IonCardHeader>
                                                        <IonCardTitle>{item["nomProduit"]}</IonCardTitle>
                                                        <p>Par @{item["proprietaire"]["pseudo"]}</p>
                                                        <p>Debut : {item["dateDebut"]}</p>
                                                        <p>Fin : {item["dateFin"]}</p>
                                                        <p>Duree : {item["duree"]}h</p>
                                                    </IonCardHeader>
                                                    <IonCardContent>
                                                        <IonButton onClick={() => setIsOpen(true)}>Encherir</IonButton>
                                                    </IonCardContent>
                                                </IonCol>
                                                <IonCol>
                                                    <img src={item["img"]} width="500" />
                                                </IonCol>
                                            </IonRow>
                                        </IonCard>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        );
                    })}
                    <IonModal isOpen={isOpen}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Paiement</IonTitle>
                                <IonButtons slot="end">
                                    <IonButton onClick={() => setIsOpen(false)}>x</IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding">
                            <IonGrid>
                                <IonRow>
                                    <IonCol></IonCol>
                                    <IonCol>
                                        <FormEncherir enchere={enchere[0]} />
                                    </IonCol>
                                    <IonCol></IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonContent>
                    </IonModal>
                </IonContent >
            </IonPage >
        </>
    );
}