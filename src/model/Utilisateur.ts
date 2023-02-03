export default class Utilisateur {

    private __utilisateur: any;

    public constructor() {
        this.init();
    }

    private init() {
        const storage: any = localStorage.getItem("utilisateur");
        this.__utilisateur = JSON.parse(storage);
    }

    public setUtilisateur(utilisateur: any) {
        this.__utilisateur = utilisateur;
    }

    public getUtilisateur() {
        return this.__utilisateur;
    }

    public getId() {
        return this.__utilisateur["id"];
    }

    public getNom() {
        return this.__utilisateur["nom"];
    }

    public getToken() {
        return this.__utilisateur["token"];
    }

    public getEmail() {
        return this.__utilisateur["email"];
    }

    public getPseudo() {
        return this.__utilisateur["pseudo"];
    }

}