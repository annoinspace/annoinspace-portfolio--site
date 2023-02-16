import React from "react"
import { Col, Container, Row } from "react-bootstrap"

export default function Homepage() {
  return (
    <>
      <div className="d-flex justify-content-between bottom-border ">
        <div className="side-margin border-right"></div>
        <div className="side-margin border-left"></div>
      </div>
      <div className="d-flex justify-content-between bottom-border ">
        <div className="side-margin border-right max-height"></div>
        <div className="max-height d-flex justify-content-center align-items-center">
          <div className="purple-text ">Aneesah Almas Khan</div>
        </div>
        <div className="side-margin border-left max-height"></div>
      </div>
    </>
  )
}
