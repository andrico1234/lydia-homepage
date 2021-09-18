import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import React, { useState } from "react"
import { Chevron } from "./Chevron"
import { SlideIndicator } from "./Indicator"

const variants = {
  enter: () => {
    return {
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    }
  },
}

const reviews = [
  {
    review: [
      "Many, many thanks for a fantastic week.",
      "It was so well structured and pitched at a level that seemed perfect for me. I learnt so much - I can't believe I managed to remember so many pieces!",
      "Thanks for being caring and patient and thanks so much for the help with the first experience of pointe!",
    ],
    from: "7-day Ballet Intensive Course",
  },
  {
    review: [
      "Our tutor Lydia was amazing!",
      "Throughout the 5-day intensive ballet beginner’s course, she was always encouraging us, enthusiastic and very patient.",
      "She was able to teach the steps in an easy-to-understand way and always gave us helpful corrections to perfect the steps and the technique.",
    ],
    from: "7-day Ballet Intensive Course",
  },
  {
    review: [
      "Such a great memory of a fantastic week!",
      "I had so much fun, and it was especially fantastic to get to do the Don Quixote rep, as this week I am on a tutu making course and I am making my tutu inspired by that act 3 Kitri wedding costume!",
      "I hope to move to London one day and would love to come to your dance and fitness classes when I do!",
    ],
    from: "7-day Ballet Intensive Course",
  },
  {
    review: [
      "Thank you so much for such an incredible week!",
      "I was ready to quit dance before our course – but you have totally re-inspired me with your fun, patience, and enthusiasm!",
      "It has also been a privilege to watch how you dance, you are so great at it!",
    ],
    from: "7-day Ballet Intensive Course",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeText = reviews[activeIndex]

  function nextImage() {
    if (activeIndex === reviews.length - 1) return setActiveIndex(0)
    setActiveIndex(activeIndex + 1)
  }

  function setCurrentImage(i: number) {
    setActiveIndex(i)
  }

  return (
    <div>
      <h2>Testimonials</h2>
      <AnimateSharedLayout>
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={activeIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.3 },
            }}
          >
            {activeText.review.map(text => {
              return (
                <p style={{ fontStyle: "italic" }} key={text}>
                  {text}
                </p>
              )
            })}
            <p style={{ marginLeft: "8px", fontStyle: "normal" }}>
              - {activeText.from}
            </p>
          </motion.div>
        </AnimatePresence>
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              border: 0,
              background: "none",
              cursor: "pointer",
            }}
            onClick={nextImage}
          >
            <Chevron
              style={{
                transform: `rotate(-90deg)`,
              }}
            />
          </button>
        </div>
        <SlideIndicator
          activeItem={activeIndex}
          itemCount={reviews.length}
          onClick={setCurrentImage}
        />
      </AnimateSharedLayout>
    </div>
  )
}
