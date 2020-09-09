import React, { useState, useEffect } from "react"
import { NavigationLinks } from "./NavigationLinks"
import { HeroImage } from "./HeroImage"
import { navigate } from "gatsby"
import useCycle from "../../hooks/useCycle"

const links: string[] = ["about", "experience", "gallery"]

export function Hero() {
  const [activeId, setActiveId] = useState(links[2])
  const { currentValue, setNextValue, setValue } = useCycle(links, 2)
  const [isExiting, setExitingState] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextId = setNextValue()

      setActiveId(nextId)
    }, 4000)

    return function () {
      clearInterval(interval)
    }
  })

  function handleLinkClick(id: string) {
    setExitingState(true)

    const index = links.indexOf(id)
    setValue(index)

    setTimeout(() => {
      navigate(`/${id}`)
    }, 500)
  }

  console.log("activeId", activeId, currentValue)

  return (
    <>
      <NavigationLinks
        isFadingOut={isExiting}
        links={links}
        activeId={activeId}
        onClickLink={handleLinkClick}
      />
      <HeroImage
        currentIndex={links.indexOf(currentValue)}
        activeId={activeId}
      />
    </>
  )
}
