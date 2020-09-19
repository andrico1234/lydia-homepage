import React from "react"
import { navigate } from "gatsby"
import { ChoreographerImage } from "./images/ChoregrapherImage"
import { ChoreographerMobileImage } from "./images/ChoregrapherMobileImage"
import { DanceArtistImage } from "./images/DanceArtistImage"
import { DanceArtistMobileImage } from "./images/DanceArtistMobileImage"
import { TeacherImage } from "./images/TeacherImage"
import { TeacherMobileImage } from "./images/TeacherMobileImage"
import { ExperienceBlock } from "./ExperienceBlock"

async function directToGallery() {
  window.scrollTo(0, 0)

  setTimeout(() => {
    navigate("/gallery")
  }, 500)
}

export function Experience() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <ExperienceBlock
        title="Dance Artist"
        img={<DanceArtistImage />}
        mobileImg={<DanceArtistMobileImage />}
        description={
          <p>
            As a professional dance artist in the Classical and Contemporary
            genres, Lydia will offer her skills and expertise and adapt to the
            needs of your project or event. Whether it be for stage, screen or
            functions. You can see Lydia's capabilities as a dance artist in the{" "}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={directToGallery}
            >
              gallery
            </span>
          </p>
        }
      />
      <ExperienceBlock
        title="Teacher"
        img={<TeacherImage />}
        mobileImg={<TeacherMobileImage />}
        reverse
        description={
          <>
            <p>
              Offering tuition in the dance and fitness industries with over 5
              years of experience, Lydia teaches at several gyms and studios
              across London. Her classes specialise in Ballet and low-impact
              exercise and are ideal for anyone looking to tone and gain
              strength while improving their core-stability, flexibility and
              balance.
            </p>
            <p>
              Please contact Lydia if you would like to know more about these
              classes or are seeking private tuition.
            </p>
          </>
        }
      />
      <ExperienceBlock
        title="Choreographer"
        img={<ChoreographerImage />}
        mobileImg={<ChoreographerMobileImage />}
        description={
          <p>
            Lydia has choreographed many works, both small and large scale. Her
            clients range from students, dance artists, and music professionals.
            Lydia's choreography is both engaging and emotive, which have come
            as a result of following her two key principles; open collaboration
            and clear communication.
          </p>
        }
      />
    </div>
  )
}
