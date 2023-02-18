import React from "react"
import test from "../assets/9132ff56a0ef21af6802edc6b84e42e6.jpg"
import changedimage from "../assets/e7cdb31759866f0fefe35f369a456af1.jpg"
import { useState, useEffect } from "react"

import { WiStars } from "react-icons/wi"
import { BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs"

export default function Homepage() {
  const [moved, setMoved] = useState(false)
  const [angle, setAngle] = useState(0)
  const [newimage, setNewImage] = useState(test)
  const [textNumber, setTextNumber] = useState(1)
  const [down, showDown] = useState(false)
  const [up, showUp] = useState(true)

  const intro = "introduction text"

  const [displayText, setDisplayText] = useState(intro)
  const textArr = ["text from array [0]", "text from array [1]", "text from array [02]", "text from array [3]"]

  const handleHover = () => {
    setMoved(true)
    showDown(true)
    // setTextNumber(1)
    if (angle + 90 === 270) {
      showUp(false)
      setAngle(270)
      setTextNumber(4)
      let textToShow = textArr[3]
      setDisplayText(textToShow)
    } else {
      setAngle(angle + 90)
      showUp(true)
      setTextNumber(textNumber + 1)
      let textToShow = textArr[textNumber]

      setDisplayText(textToShow)
    }
  }
  const handleHoverAnti = () => {
    setMoved(true)
    if (angle - 90 === 0) {
      showUp(true)
      showDown(false)
      setAngle(0)
      setTextNumber(1)
      setDisplayText(textArr[0])
    } else {
      showUp(true)
      setAngle(angle - 90)
      setTextNumber(textNumber - 1)
      setDisplayText(textArr[textNumber - 2])
      if (angle - 90 === 0) {
        showDown(false)
      }
    }
  }

  // const handleHoverAnti = () => {
  //   setMoved(true)
  //   if (angle - 90 === 0) {
  //     showUp(true)
  //     showDown(false)
  //     setAngle(0)
  //     setTextNumber(1)
  //     // let textToShow = textArr[textNumber]
  //     // setDisplayText(textToShow)
  //     if (textNumber === 4) {
  //       setDisplayText(textArr[3])
  //     }
  //     if (textNumber === 3) {
  //       setDisplayText(textArr[2])
  //     }
  //     if (textNumber === 2) {
  //       setDisplayText(textArr[1])
  //     }
  //     if (textNumber === 1) {
  //       setDisplayText(textArr[0])
  //     }
  //   } else {
  //     showUp(true)
  //     setAngle(angle - 90)
  //     setTextNumber(textNumber - 1)
  //     if (textNumber === 4) {
  //       setDisplayText(textArr[3])
  //     }
  //     if (textNumber === 3) {
  //       setDisplayText(textArr[2])
  //     }
  //     if (textNumber === 2) {
  //       setDisplayText(textArr[1])
  //     }
  //     if (textNumber === 1) {
  //       setDisplayText(textArr[0])
  //     }

  //     if (angle - 90 === 0) {
  //       showDown(false)
  //     }
  //   }
  // }

  useEffect(() => {
    console.log("angle after update:", angle)
    console.log("text number after update:", textNumber)
    console.log("text to show after update:", displayText)
  }, [angle, textNumber, displayText])

  useEffect(() => {
    if (moved) {
      setTimeout(() => {
        setNewImage(changedimage)
      }, 0)
    } else {
      setNewImage(test)
    }
  }, [textNumber, displayText, angle])

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

        <div className="side-margin border-left max-height text-white">
          {textNumber} : {displayText} : angle{angle}
        </div>
      </div>
      <div className="d-flex justify-content-end ">
        <div className=" circle-container-wrapper  ">
          {up && (
            <span onMouseEnter={handleHover} className="arrow" id="arrow-1">
              <BsFillArrowRightCircleFill />
            </span>
          )}
          {down && (
            <span onMouseEnter={handleHoverAnti} className="arrow" id="arrow-2">
              <BsFillArrowDownCircleFill />
            </span>
          )}

          <div
            className="d-flex flex-wrap circle-container align-self-end justify-content-between "
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className=" circle-connection">
              <div
                className="circle c-1"
                style={{
                  transform: `rotate(-${angle}deg)`,
                  transition: "transform 1s ease-in-out",
                  backgroundImage: `url(${newimage})`
                }}
              >
                {" "}
                {moved ? <span>CIRCLE 1</span> : <span>INTRO</span>}
              </div>
              <div
                className="circle c-2"
                style={{
                  transform: `rotate(-${angle}deg)`,
                  transition: "transform 1s ease-in-out"
                }}
              >
                {" "}
                CIRCLE 2
              </div>
              <div
                className="circle c-3"
                style={{ transform: `rotate(-${angle}deg)`, transition: "transform 1s ease-in-out" }}
              >
                {" "}
                CIRCLE 3
              </div>
              <div
                className="circle c-4"
                style={{ transform: `rotate(-${angle}deg)`, transition: "transform 1s ease-in-out" }}
              >
                CIRCLE 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
