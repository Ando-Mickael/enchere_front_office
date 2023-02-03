import { IonButton, IonInput, IonItem, IonLabel, IonToast } from "@ionic/react";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../util/Api";

export const FormLogin: React.FC = () => {

    const [email, setEmail] = useState();
    const [mdp, setMdp] = useState();
    const [showError, setShowError] = useState(false);

    const verifLogin = () => {
        const url = baseUrl + `/loginUtilisateur?email=${email}&mdp=${mdp}`;
        console.log(url);
        axios.get(url)
            .then((response) => {
                if (response.data !== "") {
                    localStorage.setItem("utilisateur", JSON.stringify(response.data));
                    window.location.assign("/accueil");
                } else {
                    localStorage.removeItem("utilisateur");
                    setShowError(true);
                }
            });
    }

    return (
        <>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setEmail(e.target.value)} />
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Mot de passe</IonLabel>
                <IonInput
                    type="password"
                    onIonChange={(e: any) => setMdp(e.target.value)} />
            </IonItem>

            <IonButton
                expand="block"
                onClick={() => verifLogin()}>Se connecter</IonButton>

            <IonToast
                isOpen={showError}
                onDidDismiss={() => setShowError(false)}
                message="Email et/ou mot de passe invalide !"
                duration={1500}
            />
        </>
    );
} 