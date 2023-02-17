import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import sparkle from "../assets/Goodies - Sparkles.png"
import { WiStars } from "react-icons/wi"
export default function Homepage() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center full-height">
        <div className="arch"></div>
        <div className=" arch-underlay"></div>
        <div className=" arch-underlay-2"></div>
      </div>
      <div className="arch-large d-flex">
        <p className="align-self-end">
          Hi! I'm Aneesah, aka annoinspace. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi
          aperiam alias perferendis consequuntur ipsa veniam inventore sapiente harum. Tenetur corrupti quaerat
          similique reiciendis magnam accusamus incidunt tempora magni tempore.
        </p>
      </div>
      <div className="d-flex justify-content-between bottom-border ">
        <div className="side-margin border-right"></div>
        <div className="side-margin border-left"></div>
      </div>
      <div className="d-flex  bottom-border ">
        <div className="side-margin border-right max-height"></div>
        <div className="max-height d-flex flex-column justify-content-center align-items-center top ">
          <div className="purple-text mr mt-4 d-flex">
            ANNO
            <span className="flare"></span>
          </div>

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
      <div className="d-flex flex-column">
        <div className="circle align-self-end">circle</div>
      </div>
    </>
  )
}
