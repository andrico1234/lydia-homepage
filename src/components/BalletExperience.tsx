import React from "react"
import { ExperienceImage } from "./ExperienceImage"
import BalletOne from "../images/ballet-one.png"
import BalletTwo from "../images/ballet-two.png"
import BalletThree from "../images/ballet-three.png"
import BalletFour from "../images/ballet-four.png"

export function BalletExperience() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ExperienceImage description="The black swans" src={BalletOne} />
      <ExperienceImage description="Royal Albert Hall" src={BalletTwo} />
      <ExperienceImage description="Project for Artist" src={BalletThree} />
      <ExperienceImage description="Private commission" src={BalletFour} />
    </div>
  )
}
