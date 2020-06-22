import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonIcon } from "@ionic/react";
import React, { useRef, FormEvent, useState } from "react";
import './Inscription.css';
import { checkmarkOutline } from "ionicons/icons";

const Inscription: React.FC = () => {

    const mailInputRef = useRef<HTMLIonInputElement>("");
    const mailInputRef = useRef<HTMLIonInputElement>("");
    const countryRef =  useRef<HTMLIonInputElement>("");
    const passInputRef = useRef<HTMLIonInputElement>("");
    const submitForm = (e: FormEvent) =>{
        e.preventDefault()

        /*const newUser = {
            genre: e.detail.value
            tranche_d_age: e.detail.tranche_d_age,
            pays: e.detail.pays,
            ville: this.state.ville,
            email: this.state.email,
            password: this.state.password
        }*/

        register(newUser).then(res => {
            //this.props.history.push(`/home`)
        })
    };

    const [genre, setGenre] = useState<string>();
    const [tranche_d_age, setTranche_d_age] = useState<string>();
    const [pays, setPays] = useState<string>();
    const [ville, setVille] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    return(
        <IonPage id="main-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <p className="centeredTitle">Inscription</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="contenu">
                <form noValidate formGroup="userForm" onSubmit={submitForm}>
                    <IonLabel><p className="centeredLabel">Genre</p></IonLabel>
                    <IonSelect formControlName="genre" value={genre} onIonChange={e => setGenre(e.detail.value!)} className="input">
                        <IonSelectOption>Homme</IonSelectOption>
                        <IonSelectOption>Femme</IonSelectOption>
                    </IonSelect>    
                    <IonLabel><p className="centeredLabel">Tranche d'age</p></IonLabel>
                    <IonSelect formControlName="tranche_d_age" value={tranche_d_age} onIonChange={e => setTranche_d_age(e.detail.value!)} className="input">
                        <IonSelectOption>18-25 ans</IonSelectOption>
                        <IonSelectOption>26-35 ans</IonSelectOption>
                        <IonSelectOption>36-50 ans</IonSelectOption>
                        <IonSelectOption>Autre</IonSelectOption>
                    </IonSelect>
                    
                    <IonLabel><p className="centeredLabel">Pays d'origine</p></IonLabel>
                    <IonInput formControlName="pays" value={pays} onIonChange={e => setPays(e.detail.value!)} ref={countryRef} placeholder="France" className="input" type="text" required></IonInput>
                    
                    <IonLabel><p className="centeredLabel">Ville</p></IonLabel>
                    <IonInput formControlName="ville" value={ville} onIonChange={e => setVille(e.detail.value!)} ref={countryRef} placeholder="Le Mans" className="input" type="text" required></IonInput>
                    

                    <IonLabel><p className="centeredLabel">Pseudo</p></IonLabel>
                    <IonInput formControlName="email" value={email} onIonChange={e => setEmail(e.detail.value!)} ref={mailInputRef} placeholder="exemple@gmail.com" className="input" type="text" required></IonInput>
  
  
                    <IonLabel><p className="centeredLabel">Mot de passe</p></IonLabel>
                    <IonInput formControlName="password" value={password} onIonChange={e => setPassword(e.detail.value!)} ref={passInputRef} type="password"  className="input" required></IonInput>
                    
                    <IonButton className="loginbutton" type="submit" routerLink="" color="tertiary"><IonIcon icon={checkmarkOutline}></IonIcon></IonButton>    
                </form>

            </IonContent>
        </IonPage>
       
    );


};

export default Inscription;