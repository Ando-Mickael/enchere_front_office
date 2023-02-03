import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from "@ionic/react";
import { ListeHistoriqueProps, OneHistoriquePros } from "../util/Interface";

export const OneHistorique: React.FC<OneHistoriquePros> = ({ historique }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>@{historique["u"]["pseudo"]}</IonCardTitle>
                <IonCardSubtitle>{historique["dateEnchere"]}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <p>Prix : {historique["prix"]}Ar</p>
            </IonCardContent>
        </IonCard>
    );
}

export const ListeHistorique: React.FC<ListeHistoriqueProps> = ({ historiques }) => {
    return (
        <>
            {historiques.map((historique: any, index: number) => {
                return (
                    <OneHistorique historique={historique} key={index} />
                );
            })}
        </>
    );
}