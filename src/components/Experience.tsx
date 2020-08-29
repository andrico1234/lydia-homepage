import React, { useState } from "react"
import { BalletExperience } from "./BalletExperience"
import { ContemporaryExperience } from "./ContemporaryExperience"
import { Modal } from "./Modal"

export function Experience() {
  const [isModalVisible, setModalVisibilityState] = useState(false)

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Gallery.</h3>
      <div
        style={{
          height: "1200px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "0 auto", flex: 1 }}>
          <BalletExperience openModal={() => setModalVisibilityState(true)} />
        </div>
        <div style={{ margin: "0 auto", flex: 1 }}>
          <ContemporaryExperience />
        </div>
        <div style={{ margin: "0 auto", flex: 1 }}>
          <ContemporaryExperience />
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        setVisibility={setModalVisibilityState}
      />
    </>
  )
}
