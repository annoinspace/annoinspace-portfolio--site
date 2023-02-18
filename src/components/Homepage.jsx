import React from "react"
import { Col, Container, Row, Image } from "react-bootstrap"
import test from "../assets/9132ff56a0ef21af6802edc6b84e42e6.jpg"
import changedimage from "../assets/e7cdb31759866f0fefe35f369a456af1.jpg"
import { useState } from "react"

import { WiStars } from "react-icons/wi"

export default function Homepage() {
  const [moved, setMoved] = useState(false)
  const [angle, setAngle] = useState(0)

  const handleHover = () => {
    setAngle(angle + 90)
    setMoved(true)
    if (angle + 90 === 450) {
      setAngle(0)
    }
  }

  const newimage = moved ? changedimage : test

  return (
    <div className="homepage-wrapper">
      <div className="d-flex justify-content-center align-items-center full-height">
        <div className="arch"></div>
        <div className=" arch-underlay"></div>
        <div className=" arch-underlay-2"></div>
      </div>
      <div className="arch-large d-flex">
        <p className="align-self-end">
          Hi! I'm Aneesah, aka annoinspace. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi
          aperiam alias perferendis consequuntur ipsa veniam inventore sapiente harum. Tenetur corrupti quaerat
          similique reiciendis magnam accusamus incidunt tempora magni tempore. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Vel laudantium beatae illum inventore quasi nobis amet soluta esse et omnis deleniti,
          officia quibusdam sit voluptatum quod voluptate blanditiis quidem. Ullam!
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

        <div className="side-margin border-left max-height text-white">{angle}</div>
      </div>
      <div className="d-flex justify-content-end">
        <div className=" circle-container-wrapper">
          <div
            className="d-flex flex-wrap circle-container align-self-end justify-content-between "
            style={{ transform: `rotate(${angle}deg)` }}
            onMouseEnter={handleHover}
          >
            <div className=" circle-connection">
              <div
                className="circle c-1"
                style={{
                  transform: `rotate(-${angle}deg)`,
                  transition: "transform 1s ease-in-out",
                  backgroundImage: `url(${newimage})`
                }}
              ></div>
              <div
                className="circle c-2"
                style={{ transform: `rotate(-${angle}deg)`, transition: "transform 1s ease-in-out" }}
              ></div>
              <div
                className="circle c-3"
                style={{ transform: `rotate(-${angle}deg)`, transition: "transform 1s ease-in-out" }}
              ></div>
              <div
                className="circle c-4"
                style={{ transform: `rotate(-${angle}deg)`, transition: "transform 1s ease-in-out" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
