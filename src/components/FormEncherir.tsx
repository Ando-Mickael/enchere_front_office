import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import axios from "axios";
import { useState } from "react";
import Utilisateur from "../model/Utilisateur";
import { baseUrl } from "../util/Api";
import { ItemEnchereProps } from "../util/Interface";

export const FormEncherir: React.FC<ItemEnchereProps> = ({ enchere }) => {

    const [prix, setPrix] = useState();
    const utilisateurId = new Utilisateur().getId();

    function ajouter() {
        const data = {
            "prix": prix,
            "utilisateurId": utilisateurId,
            "enchereId": enchere["id"]
        }
        console.log(data);

        const url = baseUrl + "/addHistorique";
        axios.post(url, data)
            .then((response) => {
                console.log(response);
            })
            .then((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <IonItem>
                <IonLabel position="floating">Prix</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setPrix(e.target.value)} />
            </IonItem>

            <IonButton
                expand="block"
                onClick={() => ajouter()}>Ajouter</IonButton>
        </>
    );
}