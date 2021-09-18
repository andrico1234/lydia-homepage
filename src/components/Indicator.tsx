import React from "react"
import { useRef } from "react"
import styles from "./Indicator.module.css"

interface Props {
  itemCount: number
  activeItem: number
  onClick: (i: number) => void
}

export function SlideIndicator(props: Props) {
  const arr = new Array(props.itemCount).fill(0)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={styles.SlideIndicator}>
      {arr.map((_, i) => {
        const isActive = i === props.activeItem
        return (
          <button
            onClick={() => props.onClick(i)}
            onKeyDown={({ key }) => {
              const childElements = containerRef.current.querySelectorAll(
                "button"
              )
              const elCount = childElements.length

              if (key === "ArrowLeft") {
                if (i === 0) {
                  childElements[elCount - 1].focus()
                  props.onClick(elCount - 1)
                } else {
                  childElements[i - 1].focus()
                  props.onClick(i - 1)
                }
              }

              if (key === "ArrowRight") {
                if (i >= elCount - 1) {
                  childElements[0].focus()
                  props.onClick(0)
                } else {
                  childElements[i + 1].focus()
                  props.onClick(i + 1)
                }
              }
            }}
            className={isActive ? styles.SlideIndicator_active : ""}
            key={i}
          />
        )
      })}
    </div>
  )
}
