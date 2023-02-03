import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../css/styles.css";
import { baseUrl } from "../util/Api";

export const FormRechercheAvancee: React.FC = () => {

    const [categories, setCategories] = useState([]);
    const [utilisateurs, setUtilisateur] = useState([]);
    const [categorieId, setCategorieId] = useState();
    const [nom, setNom] = useState();
    const [dateDebut, setDateDebut] = useState();
    const [proprietaireId, setProprietaireId] = useState();
    const [status, setStatus] = useState();

    const history = useHistory();

    function rechercher() {
        const data = {
            "categorieId": categorieId,
            "nom": nom,
            "dateDebut": dateDebut,
            "proprietaireId": proprietaireId,
            "status": status
        }

        history.push("/resultat?data=" + JSON.stringify(data));
    }

    function getCategories() {
        const url = baseUrl + "/categories";
        axios.get(url).then((response) => {
            setCategories(response.data);
        })
    }

    function getProprietaire() {
        const url = baseUrl + "/utilisateurs";
        axios.get(url).then((response) => {
            setUtilisateur(response.data);
        })
    }

    useEffect(() => {
        getCategories();
        getProprietaire();
    }, []);

    return (
        <>
            <IonItem>
                <IonLabel>Categorie</IonLabel>
                <IonSelect
                    onIonChange={(e: any) => setCategorieId(e.target.value)} >
                    <IonSelectOption
                        value="">Tout
                    </IonSelectOption>
                    {categories.map((categorie, index) => {
                        return (
                            <IonSelectOption
                                value={categorie["id"]} key={index}>{categorie["intitule"]}
                            </IonSelectOption>
                        )
                    })}
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Nom</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setNom(e.target.value)} />
            </IonItem>

            <IonItem>
                <IonLabel position="stacked">Date de debut</IonLabel>
                <IonInput
                    type="date"
                    onIonChange={(e: any) => setDateDebut(e.target.value)} />
            </IonItem>

            <IonItem>
                <IonLabel>Proprietaire</IonLabel>
                <IonSelect
                    onIonChange={(e: any) => setProprietaireId(e.target.value)} >
                    {utilisateurs.map((utilisateur) => {
                        return (
                            <IonSelectOption
                                value={utilisateur["id"]}>{utilisateur["pseudo"]}
                            </IonSelectOption>
                        )
                    })}
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel>Status</IonLabel>
                <IonSelect
                    onIonChange={(e: any) => setStatus(e.target.value)} >
                    <IonSelectOption value={0}>En cours</IonSelectOption>
                    <IonSelectOption value={1}>Fini</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonButton
                expand="block"
                onClick={() => rechercher()}>Rechercher</IonButton>
        </>
    );
}