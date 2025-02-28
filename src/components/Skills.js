import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests";

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="4" />
        <Skill title="JavaScript" rating="4" />
        <Skill title="TypeScript" rating="4" />
        <Skill title="Node JS" rating="4" />
        <Skill title="React JS" rating="4" />
        <Skill title="React Native" rating="4" />
        <Skill title="Electron JS" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Français" rating="4" />
        <Skill title="Swahili" rating="4" />
        <Skill title="Anglais" rating="1" />
      </div>
      <Interests />
    </>
  );
}

export default Skills;
