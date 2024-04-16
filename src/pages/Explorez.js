import React from "react";
import Visite from "../components/Visite";
import "./ExplorezStyle.css";
const Explorez = () => {
  return (
    <div>
      <div className="museum-container" style={{ textAlign: "center" }}>
        <h1>Visitez notre musée virtuel </h1>
        <br></br>
        <Visite />
      </div>
      <div className="games-container">
        <h1>Jouez </h1>
        <div className="game">
          <div className="game-description">
            <h2>Doctor Hero</h2>
            <p>
              Doctor Hero est un jeu de chirurgie dans lequel vous commencez en
              tant qu'interne en médecine dans un hôpital et vous vous classez
              pour devenir médecin ou chirurgien. Diagnostiquez vos patients,
              examinez leurs membres, identifiez leurs afflictions et leurs
              maladies, opérez-les et devenez finalement le chirurgien le plus
              titré au monde ! Êtes-vous prêt à guérir le monde, Docteur Hero ?
            </p>
          </div>
          <iframe
            className="iframeContainer"
            name="gameFrame"
            scrolling="no"
            src="https://games.poki.com/458768/9f73393f-b76a-4963-a84c-c0cdf6021052?tag=pg-v5.12.0+9780d13e76f25eb1836a318ef6153e0a1aa90aa5&amp;site_id=53&amp;iso_lang=fr&amp;country=TN&amp;poki_url=https://poki.com/fr/g/doctor-hero&amp;gdhoist=yes&amp;nonPersonalized=n&amp;familyFriendly=n&amp;categories=4,9,91,100,188,748&amp;ab=4e2026c43e966a0a32970e2a10bd9831250e590e&amp;experiment=a-1a90f4b7&amp;special_condition=landing"
          ></iframe>
        </div>
        

        <div className="game">
          <iframe
            className="iframeContainer"
            frameborder="0"
            allowfullscreen=""
            src="//html5.gamedistribution.com/rvvASMiM/f894f03b01f94c05ac98a96c5404100a/index.html?timestamp=1713281571&amp;countryCode=fr&amp;siteid=79&amp;channelid=2&amp;siteLocale=fr&amp;locale=fr&amp;gd_sdk_referrer_url=https%3A%2F%2Fwww.jeu.fr%2Fjeu%2Fprincesse-exotique-medecin-du-cerveau&amp;gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5qZXUuZnIvamV1L3ByaW5jZXNzZS1leG90aXF1ZS1tZWRlY2luLWR1LWNlcnZlYXUiLCJwYXJlbnREb21haW4iOiJqZXUuZnIiLCJ0b3BEb21haW4iOiJqZXUuZnIiLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D"
          ></iframe>
          <div className="game-description">
            <h2>Princesse Exotique : Médecin du Cerveau</h2>
            <p>
              Après sa récente aventure en haute mer, cette princesse courageuse
              ne se sent pas très bien. Quel pourrait être le problème ?
              Emmenons-la chez le médecin pour un examen dans ce jeu médical. Il
              est possible qu'elle ait besoin d'une opération du cerveau !
            </p>
          </div>
        </div>

        <div className="game">
          <div className="game-description">
            <h2>LÉcole des monstres : chirurgie cardiaque</h2>
            <p>
              Même les monstres ont parfois besoin d'une aide médicale !
              Draculaura souffre de douleurs thoraciques depuis quelques
              temps... elle va devoir subir une chirurgie cardiaque. Tu seras en
              charge de l'opération dans ce jeu de simulation médicale. La
              patiente t'attend en salle d'opération. Alors, prêt(e) ?
            </p>
          </div>
          <iframe
            className="iframeContainer"
            frameborder="0"
            allowfullscreen="allow"
            seamless=""
            scrolling="no"
            src="//html5.gamedistribution.com/rvvASMiM/4cfa63ce7cfd4dbf9046b671561d00fd/index.html?timestamp=1713282385&amp;countryCode=fr&amp;siteid=79&amp;channelid=2&amp;siteLocale=fr&amp;locale=fr&amp;gd_sdk_referrer_url=https%3A%2F%2Fwww.jeu.fr%2Fjeu%2Fecole-des-monstres-chirurgie-cardiaque&amp;gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5qZXUuZnIvamV1L2Vjb2xlLWRlcy1tb25zdHJlcy1jaGlydXJnaWUtY2FyZGlhcXVlIiwicGFyZW50RG9tYWluIjoiamV1LmZyIiwidG9wRG9tYWluIjoiamV1LmZyIiwiaGFzSW1wcmVzc2lvbiI6dHJ1ZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9"
          ></iframe>
        </div>

        <div className="game">
          <iframe
            className="iframeContainer"
            src="https://www.crazygames.fr/embed/virtual-knee-surgery"
            frameBorder="0"
            allow="gamepad *;"
          ></iframe>
          <div className="game-description">
            <h2>Le petit chirurgien</h2>
            <p>
              "Le Petit Chirurgien" est un jeu flash ludique et éducatif conçu
              spécialement pour les enfants, les plongeant dans le rôle
              enthousiasmant d'un jeune chirurgien. Avec des graphismes colorés
              et accrocheurs, le jeu est peuplé de personnages amicaux et de
              scénarios imaginatifs qui captivent l'attention des jeunes
              joueurs. L'objectif est d'introduire les enfants au monde médical
              de manière simple et amusante, les encourageant à pratiquer des
              opérations simples grâce à des instructions claires et
              interactives.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Explorez;
