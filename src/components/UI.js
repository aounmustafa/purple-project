import React from "react";
import "./UI.css";
import Music from "../Assets/Music.png";
import HandHold from "../Assets/HandHold.png";
import rail from "../Assets/Rail.png";
import Tarrot from "../Assets/Tarrot.png";
import Graphic from "../Assets/Graphic.png";
import Shop from "../Assets/Shop.png";
import Rail1 from "../Assets/Rail1.png";
import Rail2 from "../Assets/Rail2.png";
import Rail3 from "../Assets/Rail3.png";
import Rail4 from "../Assets/Rail4.png";
import Rail5 from "../Assets/Rail5.png";
import Rail6 from "../Assets/Rail6.png";
import Rail7 from "../Assets/Rail7.png";
import Rail8 from "../Assets/Rail8.png";
import MuseBoxImg from "../Assets/MuseboxImg.png";
import Tarrot1 from "../Assets/Tarrot1.png";
import Tarrot2 from "../Assets/Tarrot2.png";
import Tarrot3 from "../Assets/Tarrot3.png";
import Tarrot4 from "../Assets/Tarrot4.png";
import Tarrot5 from "../Assets/Tarrot5.png";
import Tarrot6 from "../Assets/Tarrot6.png";
import Tarrot7 from "../Assets/Tarrot7.png";
import Tarrot8 from "../Assets/Tarrot8.png";

import graphics1 from "../Assets/graphics1.png";

import graphics2 from "../Assets/graphics2.png";
import { useNavigate } from "react-router-dom";

const UI = () => {
  const nav = useNavigate();

  const MuseDescp = () => {
    nav("/railway", {
      state: {
        img: [MuseBoxImg],
        heading: "Sound Device",
        subheading: "Olympus to Musebox",
        text1: "A project done for Studio: Principles of Interaction Design",
        text2:
          "This project started out as Olympus in my second-year at university and transformed into Musebox in my final year at university.",
        text3:
          "The product is a sound device that can connect to devices whilst also being a white noise machine with built in sounds. In the original design the material is a tangible foam that contracts and expands to present user feedback. Held in place by a magnetic plate, it can easily become two separate devices and be simultaneously used.",
      },
    });
  };
  const RailwaysDescp = () => {
    nav("/railway", {
      state: {
        img: [Rail1, Rail2, Rail3, Rail4, Rail5, Rail6, Rail7, Rail8],
        heading: "Pakistan Railways",
        subheading: "Website Redesign - Booking Process",
        text1: "A project divided between UI and UX studios at university.",
        text2:
          "A thorough heuristic analysis led to the redesign of the Pakistan Railways website, focusing on the booking process to make it efficient, simple and visually pleasing for users.",
        text3:
          "After making the flow and wireframe, the website's interface was redesigned. The seating chart and payment sections were particularly paid attention to as they were previously difficult to navigate and understand. Using minimal design and colorful visual cues for feedback, this process became much easier for the users.",
      },
    });
  };
  const TarrotDescp = () => {
    nav("/railway", {
      state: {
        img: [
          Tarrot1,
          Tarrot2,
          Tarrot3,
          Tarrot4,
          Tarrot5,
          Tarrot6,
          Tarrot7,
          Tarrot8,
        ],
        heading: "Tarrot Card Deck",
        subheading: "Components of Interface Design",
        text1: "A project done for UI studio at university.",
        text2:
          "The goal was to create a guide that professionals and students could both use to learn about UI Components. The deck is alternate cards of black and white cards,dividing into input, output, navigational, informational and group elements. The theme of a guide was reimagined as a mystical tarot set that would spirtually and practically guide designers.",
        text3: "",
      },
    });
  };

  const GraphicsDescp = () => {
    nav("/railway", {
      state: {
        img: [graphics1, graphics2],
        heading: "Switching Interfaces",
        subheading: "Game converted to tangible interface",
        text1: "A project done for UX Studio at university.",
        text2:
          "Re-imagined CodyCross, the crossword puzzle mobile game into a tangible and interactive interface that is inclusive of children with visual impairments whilst also aiding motor skill development. It has a series of features such as coins, a smart-gel pad and various toggles with different affordances. ",
        text3: "",
      },
    });
  };
  return (
    <div className="UI_Container">
      <div className="top_row">
        <div className="rec1">
          <img src={rail} alt="" width="200" height="150" />
          <div className="rec1_txt">
            <h2
              style={{
                textAlign: "justify",
                marginTop: "-5px",
              }}
            >
              Pakistan Railways
              <span>
                <p style={{ fontSize: 15, width: "100%" }}>
                  Website Redesign - Booking Process
                </p>
              </span>
            </h2>
            <button className="rec1_btn" onClick={() => RailwaysDescp()}>
              View Project
            </button>
          </div>
        </div>
        <div style={{ width: "45%", marginLeft: "2rem", marginRight: "2rem" }}>
          <button onClick={() => MuseDescp()}>
            <img src={Music} width="225" height="215" />
          </button>
          <button>
            <img
              src={HandHold}
              width="255"
              height="215"
              style={{ marginLeft: "5rem" }}
            />
          </button>
        </div>
      </div>

      {/* Bottom row */}
      <div className="top_row">
        <div style={{ width: "45%", marginLeft: "2rem", marginRight: "2rem" }}>
          <button onClick={() => GraphicsDescp()}>
            <img src={Graphic} width="225" height="215" />
          </button>
          <button onClick={() => TarrotDescp()}>
            <img
              src={Tarrot}
              width="225"
              height="215"
              style={{ marginLeft: "5rem" }}
            />
          </button>
        </div>
        <div className="rec2">
          <div className="rec1_txt">
            <h2
              style={{
                textAlign: "justify",
                marginTop: "-5px",
              }}
            >
              Gifting Platform
              <span>
                <p style={{ fontSize: 15, width: "100%" }}>
                  Original Website for Custom Gift Baskets
                </p>
              </span>
            </h2>
            <button className="rec1_btn">View Project</button>
          </div>
          <img src={Shop} alt="" width="200" height="150" />
        </div>
      </div>
    </div>
  );
};

export default UI;

{
  /* <div className="rec2">
        <img src={rail} alt="" width="200" height="150" />
        <div className="rec1_txt">
          <h2
            style={{
              textAlign: "justify",
              marginTop: "-5px",
            }}
          >
            Pakistan Railways
            <span>
              <p style={{ fontSize: 15, width: "100%" }}>
                Website Redesign - Booking Process
              </p>
            </span>
          </h2>
          <button className="rec1_btn">View Project</button>
        </div>
      </div> */
}
