import React from "react"
import { ExperienceImage } from "./ExperienceImage"
import ContempOne from "../images/contemp-one.png"
import ContempTwo from "../images/contemp-two.png"
import ContempThree from "../images/contemp-three.png"
import LydiaSmall from "../images/lydia-smol.png"

export function ContemporaryExperience() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ExperienceImage description="Photo shoot" src={ContempOne} />
      <ExperienceImage description="Photo shoot 2" src={ContempTwo} />
      <ExperienceImage description="Photo shoot 2" src={LydiaSmall} />
      <ExperienceImage description="Final performance" src={ContempThree} />
    </div>
  )
}
