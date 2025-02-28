import React from "react"
import "./FormationsExperiences.css"
import DataFormations from "../datas/Formations"
import DataExperiences from "../datas/Experiences"
import DataEtudesFaites from "../datas/EtudesFaites"
import Formations from "./Formations"
import Experiences from "./Experiences"
import EtudesFaites from "./EtudesFaites"

function FormationsExperiences() {
  return (
    <>
      <EtudesFaites datas={DataEtudesFaites} />
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
    </>
  )
}

export default FormationsExperiences
