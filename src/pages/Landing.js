import React from 'react'
import PageContainer from '../components/PageContainer'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Landing = (props) => {
    return(
        <PageContainer>
            <Header>
                <h1 className="animate__animated animate__fadeIn">STREET WARS</h1>
                <p className="animate__animated animate__fadeIn animate__delay-1s">L'application de chasse à l'homme</p>
                <p className="animate__animated animate__fadeIn animate__delay-1s">Version Alpha (en cours de test)</p>
                <Link to="/ressources/streetwars.apk" target="_blank" download>
                    <img className="animate__animated animate__fadeIn animate__delay-1s" src="available_on_google_play.png" alt="Disponible sur Google Play" />
                </Link>
            </Header>
            <Part>
                <h1>Participez à la version Alpha !</h1>
                <p>L'application est en cours de validation sur Google Play. En attendant, vous pouvez télécharger directement la version Alpha
                    de l'application en cliquant sur "Disponible sur Google Play" ci-dessus, <br/>et participez à la première phase de jeu pour 
                    tester l'application, et nous aider à l'améliorer.
                </p>
            </Part>
            <Part>
                <h1>Qu'est-ce que c'est ?</h1>
                <p>Street Wars, c'est une application où chaque joueur a 7 jours pour "éliminer" un autre joueur, en
                    l'arrosant avec un pistolet à eau.
                </p>
                <p>Vous avez toutes les informations nécessaires pour éliminer votre cible : sa photo, son adresse,
                    son travail, son nom et prénom, l'adresse de son travail, et ses horaires de travail.
                </p>
                <h3>Mais attention, un "traqueur" doit également vous éliminer dans les 7 jours !</h3>
            </Part>
        </PageContainer>
    )
}

const Header = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 15em;
        border: 1px solid white;
        cursor: pointer;
    }

    h1 {
        margin: 0;
    }
`

const Part = styled.div`
    padding: 2em;
    text-align: center;
`

export default Landing