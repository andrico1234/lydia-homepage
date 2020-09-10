import React from "react"
import { ChoreographerImage } from "./images/ChoregrapherImage"
import { DanceArtistImage } from "./images/DanceArtistImage"
import { TeacherImage } from "./images/TeacherImage"
import { useInView } from "react-intersection-observer"
import { AnimatePresence, motion } from "framer-motion"

export function ExperienceTwo() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <ExperienceBlock title="Dance Artist" img={<DanceArtistImage />} />
      <ExperienceBlock title="Teacher" img={<TeacherImage />} />
      <ExperienceBlock title="Choreographer" img={<ChoreographerImage />} />
    </div>
  )
}

interface ExperienceBlockProps {
  title: string
  img: React.ReactNode
}

function ExperienceBlock(props: ExperienceBlockProps) {
  const { title, img } = props
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      style={{
        height: "350px",
        flex: "1 0 335px",
        padding: "16px",
        maxWidth: "420px",
      }}
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <h2
              style={{
                alignItems: "center",
                fontSize: "28px",
              }}
            >
              {title}
            </h2>
            {img}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
