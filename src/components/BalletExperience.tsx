import React from "react"
import { ExperienceImage } from "./ExperienceImage"
import BalletOne from "../images/ballet-one.png"
import BalletTwo from "../images/ballet-two.png"
import BalletThree from "../images/ballet-three.png"
import BalletFour from "../images/ballet-four.png"

interface Props {
  openModal: () => void
}

export function BalletExperience(props: Props) {
  const { openModal } = props
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ExperienceImage
        onClick={openModal}
        description="The black swans"
        src={BalletOne}
      />
      <ExperienceImage
        onClick={openModal}
        description="Royal Albert Hall"
        src={BalletTwo}
      />
      <ExperienceImage
        onClick={openModal}
        description="Project for Artist"
        src={BalletThree}
      />
      <ExperienceImage
        onClick={openModal}
        description="Private commission"
        src={BalletFour}
      />
    </div>
  )
}
