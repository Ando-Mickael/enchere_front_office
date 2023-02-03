import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* My imports */
import { Accueil } from './pages/Accueil';
import { Login } from './pages/Login';
import { Profil } from './pages/Profil';
import { Recherche } from './pages/Recherche';
import { Fiche } from './pages/Fiche';
import { ResultatRecherche } from './pages/ResultatRecherche';
import { Historique } from './pages/Historique';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/accueil">
					<Accueil />
				</Route>
				<Route exact path="/profil">
					<Profil />
				</Route>
				<Route exact path="/fiche">
					<Fiche />
				</Route>
				<Route exact path="/recherche">
					<Recherche />
				</Route>
				<Route exact path="/resultat">
					<ResultatRecherche />
				</Route>
				<Route exact path="/historique">
					<Historique />
				</Route>
				<Route exact path="/">
					<Redirect to="/accueil" />
				</Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
