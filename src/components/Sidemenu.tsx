import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { homeOutline, logInOutline, personOutline, searchOutline } from "ionicons/icons";

export const Sidemenu: React.FC = () => {

    const items = [
        {
            "nom": "Accueil",
            "icon": homeOutline,
            "url": "/accueil"
        },
        {
            "nom": "Recherche avancee",
            "icon": searchOutline,
            "url": "/recherche"
        },
        {
            "nom": "Profil",
            "icon": personOutline,
            "url": "/profil"
        },
        {
            "nom": "Se connecter",
            "icon": logInOutline,
            "url": "/login"
        }
    ];

    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Enchere</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    {items.map((item, index) => {
                        return (
                            <IonItem href={item["url"]} key={index} lines="none">
                                <IonIcon
                                    slot='start'
                                    icon={item["icon"]} />
                                <IonLabel>{item["nom"]}</IonLabel>
                            </IonItem>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
}