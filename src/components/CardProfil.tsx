import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Utilisateur from "../model/Utilisateur";
import { baseUrl } from "../util/Api";

export const CardProfil: React.FC = () => {

    const [solde, setSolde] = useState([]);

    function getSolde() {
        const url = baseUrl + `/solde/${new Utilisateur().getId()}`;

        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setSolde(response.data);
            });
    }

    useEffect(() => {
        getSolde();
    }, []);

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>@{new Utilisateur().getPseudo()}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <p><b>Email : </b>{new Utilisateur().getEmail()}</p>
                <p><b>Mon compte : </b>{solde} Ar</p>
            </IonCardContent>
        </IonCard>
    );
}