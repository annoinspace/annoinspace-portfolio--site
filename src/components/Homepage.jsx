import React from "react"
import test from "../assets/9132ff56a0ef21af6802edc6b84e42e6.jpg"
import changedimage from "../assets/sky.jpg"
import { Image } from "react-bootstrap"
import { useState, useEffect } from "react"
import linkedinLogo from "../assets/In-White-96.png"
import githubLogo from "../assets/github-mark-white.png"
import linkedinHomepage from "../assets/linkedin-homepage.png"
import linkedinME from "../assets/linkedin-me.png"
import linkedinSearch from "../assets/linkedin-search.png"
import quizStart from "../assets/welcome-page.png"
import quizQuestion from "../assets/quizquestion.png"
import quizResults from "../assets/quiz-results.png"
import quizReview from "../assets/rateus-page.png"
import spotifyAlbum from "../assets/album-page.png"
import spotifySearch from "../assets/search-page.png"

import { WiStars } from "react-icons/wi"
import weather from "../assets/weather-app.png"
import weatherSearch from "../assets/weather-app-search.png"
// import weatherStart
import { BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs"

export default function Homepage() {
  const [moved, setMoved] = useState(false)
  const [angle, setAngle] = useState(0)
  const [newimage, setNewImage] = useState(test)
  const [textNumber, setTextNumber] = useState(1)
  const [down, showDown] = useState(false)
  const [up, showUp] = useState(true)
  const [images, setImages] = useState([])
  const [captions, setCaptions] = useState([])

  const intro = "introduction text"

  const [displayText, setDisplayText] = useState(intro)
  const textArr = ["text from array [0]", "text from array [1]", "text from array [02]", "text from array [3]"]
  const linkedinImages = [linkedinHomepage, linkedinSearch]
  const linkedInText = ["Feed Page", "Connections Page"]
  const spotifyImages = [spotifyAlbum, spotifySearch]
  const SpotifyText = ["Album Page", "Search Page"]
  const weatherAppImages = [weather, weatherSearch]
  const weatherText = ["Initial Search Page", "Results Page"]

  const handleImages = () => {
    if (angle === 90) {
      setImages(linkedinImages)
      setCaptions(linkedInText)
    } else if (angle === 180) {
      setImages(spotifyImages)
      setCaptions(SpotifyText)
    } else if (angle === 270) {
      setImages(weatherAppImages)
      setCaptions(weatherText)
    } else {
      setImages([])
      setCaptions([])
    }
  }

  const handleHover = () => {
    setMoved(true)
    showDown(true)
    if (angle + 90 === 270) {
      showUp(false)
      setAngle(270)
      setTextNumber(4)
      let textToShow = textArr[3]
      setDisplayText(textToShow)
      console.log("angle", angle)
      // handleImages()
    } else {
      setAngle(angle + 90)
      showUp(true)
      setTextNumber(textNumber + 1)
      let textToShow = textArr[textNumber]
      console.log("angle", angle)
      // handleImages()
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
      console.log("angle", angle)
      // handleImages()
    } else {
      showUp(true)
      setAngle(angle - 90)
      setTextNumber(textNumber - 1)
      setDisplayText(textArr[textNumber - 2])
      console.log("angle", angle)
      // handleImages()
      if (angle - 90 === 0) {
        showDown(false)
      }
    }
  }

  useEffect(() => {
    console.log("angle after update:", angle)
    console.log("text number after update:", textNumber)
    console.log("text to show after update:", displayText)
    handleImages()
  }, [angle, textNumber, displayText])

  useEffect(() => {
    if (moved) {
      setTimeout(() => {
        setNewImage(changedimage)
      }, 0)
    }
  }, [newimage, images])

  return (
    <div className="homepage-wrapper">
      <div className="d-flex justify-content-center align-items-center full-height">
        <div className="arch"></div>
        <div className=" arch-underlay"></div>
        <div className=" arch-underlay-2"></div>
      </div>

      {/* {moved === false && (
        <div className="arch-large d-flex">
          <p className="align-self-end">
            Hi! I'm Aneesah, aka annoinspace. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi
            aperiam alias perferendis consequuntur ipsa veniam inventore sapiente harum. Tenetur corrupti quaerat
            similique reiciendis magnam accusamus incidunt tempora magni tempore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Vel laudantium beatae illum inventore quasi nobis amet soluta esse et omnis
            deleniti, officia quibusdam sit voluptatum quod voluptate blanditiis quidem. Ullam!
          </p>
        </div>
      )} */}
      <div className="d-flex justify-content-between bottom-border top-section">
        <div className="side-margin border-right h-100"></div>
        <div className="text-white d-flex w-100">
          <div className=" d-flex justify-content-end align-items-center  w-100">
            <a href="https://www.linkedin.com/in/aneesah-almas-khan/" style={{ color: "transparent" }}>
              <Image
                src={linkedinLogo}
                className="logoFilter"
                style={{
                  height: "30px",
                  width: "30px",
                  color: "white",
                  marginRight: "10px"
                }}
              />{" "}
            </a>
            <a href="https://github.com/annoinspace" style={{ color: "transparent" }}>
              <Image
                src={githubLogo}
                className="logoFilter"
                style={{
                  height: "30px",
                  width: "30px",
                  color: "white"
                }}
              />
            </a>
          </div>
        </div>
        <div className="side-margin border-left h-100"></div>
      </div>
      <div className="d-flex bottom-border ">
        <div className="side-margin border-right h-100 "></div>
        <div className="max-height d-flex flex-column justify-content-center align-items-center top ">
          <div className="purple-text mr h-100 mt-4 d-flex">
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
          {moved === false && <div>have a lot at some of my projects </div>}
          {moved === true && angle === 0 && <div>find me here</div>}
          {angle === 90 && <div>linkedin images</div>}
          {angle === 180 && <div>spotify images</div>}
          {angle === 270 && <div>weather app</div>}
        </div>
      </div>
      <div className="d-flex justify-content-between h-100 ">
        <div>
          <div className="d-flex w-75 mll gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className=""
                style={{
                  height: "250px",
                  width: "565px",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 1s ease-in-out",
                  borderRadius: "10px"
                }}
              ></div>
            ))}
          </div>
          <div className="d-flex w-75 mll gap-4 justify-content-around mt-1 ">
            {captions.map((caption, i) => (
              <div key={i} className="" style={{ color: "#c2baef", transition: "transform 1s ease-in-out" }}>
                {caption}
              </div>
            ))}
          </div>
        </div>
        <div className=" circle-container-wrapper  ">
          {up && (
            <span onClick={handleHover} className="arrow" id="arrow-1">
              <BsFillArrowRightCircleFill />
            </span>
          )}
          {down && (
            <span onClick={handleHoverAnti} className="arrow" id="arrow-2">
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
                className="circle c-2 d-flex justify-content-center align-items-center"
                style={{
                  transform: `rotate(-${angle}deg)`,
                  transition: "transform 1s ease-in-out"
                  // backgroundImage: `url(${linkedinHomepage})`
                }}
              >
                {" "}
                <div className="">Linkedin Clone</div>
                CIRCLE 2
              </div>
              <div
                className="circle c-3 d-flex justify-content-center align-items-center"
                style={{ transform: `rotate(-${angle}deg)`, transition: "transform 1s ease-in-out" }}
              >
                {" "}
                <div className="">Spotify</div>
                CIRCLE 3
              </div>
              <div
                className="circle c-4 d-flex justify-content-center align-items-center"
                style={{ transform: `rotate(-${angle}deg)`, transition: "transform 1s ease-in-out" }}
              >
                <div className="">Weather App</div>
                CIRCLE 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
