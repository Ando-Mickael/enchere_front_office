import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../util/Api";
import { ItemEnchereProps } from "../util/Interface";

export const ItemEnchere: React.FC<ItemEnchereProps> = ({ enchere }) => {

    const [prixMin, setPrixMin] = useState();

    function getPrixMin() {
        const url = baseUrl + `/prixMin/${enchere["id"]}`;
        axios.get(url)
            .then((response) => {
                setPrixMin(response.data)
            })
            .then((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getPrixMin()
    }, [])

    return (
        <IonCard className="box">
            <img src={enchere["img"]} width="500" />
            <IonCardHeader>
                <IonCardTitle>{enchere["nomProduit"]}</IonCardTitle>
                <IonCardSubtitle>{enchere["dateDebut"]}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <h2>{prixMin}Ar</h2>
            </IonCardContent>
            <IonButton href={"/fiche?enchereId=" + enchere["id"]} fill="clear">Details</IonButton>
            <IonButton href={"/historique?enchereId=" + enchere["id"]} fill="clear">Historique</IonButton>
        </IonCard>
    );
}