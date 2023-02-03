import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import { FormRechercheAvancee } from "../components/FormRechercheAvancee";
import { Sidemenu } from "../components/Sidemenu";

export const Recherche: React.FC = () => {

    return (
        <>
            <Sidemenu />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Recherche</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="1"></IonCol>
                            <IonCol size="3">
                                <img src={require("../img/enchere.jpg")} />
                            </IonCol>
                            <IonCol size="6" offset="1">
                                <h2>Rechercher vos preferences</h2><hr />
                                <FormRechercheAvancee />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
}