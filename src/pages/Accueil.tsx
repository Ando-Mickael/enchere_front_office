// liste des encheres

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ListeEncheres } from '../components/ListeEncheres';
import { Sidemenu } from '../components/Sidemenu';
import json from "../data/database.json";
import { baseUrl } from '../util/Api';

export const Accueil: React.FC = () => {

	const [encheres, setEncheres] = useState([]);

	function getEncheres() {
        const url = baseUrl + "/encheres";
        axios.get(url).then((response) => {
            setEncheres(response.data);
        })
    }

    useEffect(() => {
        getEncheres();
    }, []);

	return (
		<>
			<Sidemenu />
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Accueil</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className='ion-padding'>
					<h2>Liste des encheres</h2>
					<ListeEncheres encheres={encheres} />
				</IonContent>
			</IonPage>
		</>
	);
};
