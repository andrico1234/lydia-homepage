import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./layout.css"
import { Link } from "gatsby"

const LayoutWrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#FFB1BB" }}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "white",
          padding: `0 32px 1.45rem`,
          minHeight: "100vh",
        }}
      >
        <nav>
          <ul
            style={{ display: "flex", flexDirection: "row", listStyle: "none" }}
          >
            <li>
              <Link to="/about-me">About me</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>Gallery</li>
          </ul>
        </nav>
        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
        <footer style={{ textAlign: "center" }}>
          Built with{" "}
          <span role="img" aria-label="black-heart">
            🖤
          </span>{" "}
          by <a href="https://andri.co">Andrico</a>
        </footer>
      </div>
    </div>
  )
}

function Layout({ children }) {
  return (
    <LayoutWrapper>
      <motion.main>{children}</motion.main>
    </LayoutWrapper>
  )
}

export default Layout
