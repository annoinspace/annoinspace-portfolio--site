import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { WiStars } from "react-icons/wi"
export default function Homepage() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <div className="arch"></div>
        <div className=" arch-underlay"></div>
        <div className=" arch-underlay-2"></div>
      </div>
      <div className=" arch-large"></div>
      <div className="d-flex justify-content-between bottom-border ">
        <div className="side-margin border-right"></div>
        <div className="side-margin border-left"></div>
      </div>
      <div className="d-flex  bottom-border ">
        <div className="side-margin border-right max-height"></div>
        <div className="max-height d-flex flex-column justify-content-center align-items-center top ">
          <div className="purple-text mr mt-4 ">ANNO </div>
          <div className="d-flex justify-content-center align-items-center anno">
            <div className="d-flex flex-column ">
              <span className="purple-text-small mb-0 p-0">in</span>
              <WiStars className="purple-icon mt-0 p-0" />
            </div>
            <div className="purple-text ">Space</div>
          </div>
        </div>
        <div className="side-margin border-left max-height"></div>
      </div>
      <div className="flare"></div>
    </>
  )
}
