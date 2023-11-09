import './Project.css';
import { useState } from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import img from "./project(2).png";
import img2 from "./project(4).png";
import img3 from "./project(5).png";
import img4 from "./project(6).png";
import img5 from "./project(7).png";
import img6 from "./project(8).png";
import img7 from "./project(9).png";
import img8 from "./project(10).png";
import img9 from "./project(11).png";
function Project() {
    const [images, setImages] = useState([
        img,
        img3,
        img7
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    function handlePrevious() {
        setCurrentIndex((index) => index === 0 ? images.length - 1 : index - 1);
    }
    function handleNext() {
        setCurrentIndex((index => index === images.length - 1 ? 0 : index + 1));
    }
    function PreviousNextButton() {
        return (
            <div>
                <button className='button' onClick={handlePrevious}>&#8592;</button>
                <button className='button' onClick={handleNext}>&#x2192;</button>
            </div>
        );
    }
    const imageOnClick = (index) => {
        setCurrentIndex(index)
    };
    function ImageSlider() {
        return (
            <div className='imageSlider'>
                {images.map((image, index) => (
                    <div key={index} className={`image ${index === currentIndex ? 'active' : ''}`}>
                        <img src={image} width="300" height="200" onClick={() => imageOnClick(index)} />
                    </div>
                ))}
            </div>
        );
    }
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const options = {
        particles: {
            number: {
                value: 200,
                density: {
                    enable: false,
                }
            },
            color: {
                value: ["#e3e3e3", "#b3b5b4", "#6e6e6e", "#4c4d4c"]
            },
            shape: {
                type: "square"
            },
            opacity: {
                value: 1
            },
            size: {
                value: { min: 1, max: 6 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: "left",
                random: true,
                straight: true,
                outModes: "out"
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                    smooth: 100
                },
                onClick: {
                    enable: false,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: .5
                    }
                },
            }
        }
    };
    document.body.style = 'background: #050505;';
    return (
        <div>
            <div id='opening'>
                <h1>Projects</h1>
                <p>
                    These are the projects i'm currently working on, they aren't finished yet but hopefully i can share the final results soon.
                </p>
            </div>
            <div className='centerText'>
                <ImageSlider />
                <PreviousNextButton />
            </div>
            {
                currentIndex === 0 ? (<div><FirstParagraph /></div>) : currentIndex === 1 ? (<div><SecondParagraph /></div>) : currentIndex === 2 ? (<div><ThirdParagraph /></div>) : ''
            }
            <Particles options={options} init={particlesInit} id='particle'></Particles>
        </div>

    );
}
const textStyle = {
    color: 'white',
};
function FirstParagraph() {
    return (
        <div>
            <div style={textStyle} id='projectContent'>
                <h1 id='firstProject'>Flutter App</h1>
                <p>I'm making an android app using flutter, it has some basic feature like log-in, sign-in, and create a profile<br />
                    Technology used : <br />
                    -Dart language<br />
                    -Flutter framework<br />
                    -Android studio<br />
                    -Laptop (for developing)<br/>
                    -Phone (for debugging)</p>
                    <a>Github link :<br/>
            <a id='link' href='https://github.com/KangNasgor/Flutter-App' target="_blank" rel="noreferrer">Here</a></a>
            </div>
            <div id='imgcontent'>
                <img src={img} width="200" />
                <img src={img5} width="150" />
                <img src={img2} width="300" />
            </div>
        </div>
    );
}
function SecondParagraph() {
    return (
        <div>
            <div style={textStyle} id='projectContent'>
                <h1 id='firstProject'>Unity Game</h1>
                <p>I have a game project from my school, it's a 2D game but i can't show the game because the assets haven't finished yet, i'm only working for the mechanics<br />
                    Technology used : <br />
                    -C# language<br />
                    -Unity library<br />
                    -Visual Studio 2022<br />
                    -Laptop (for developing and debugging)</p>
                    <a>Github link :<br/>
            <a id='link'href='https://github.com/KangNasgor/Unity-scripts' target="_blank" rel="noreferrer">Here</a></a>
            </div>
            <div id='imgcontent'>
                <img src={img4} width="400" />
                <img src={img3} width="300" />
            </div>
        </div>
    );
}
function ThirdParagraph() {
    return (
        <div>
            <div style={textStyle} id='projectContent'>
                <h1 id='firstProject'>Small Websites</h1>
                <p>These are my websites when i first started learning how to code<br />
                    Technology used : <br />
                    -HTML, CSS, JavaScript language<br />
                    -Bootstrap framework<br />
                    -Visual Studio Code 2019<br />
                    -Laptop (for developing and debugging)</p>
            </div>
            <div id='imgcontent'>
                <img src={img6} width="300" />
                <img src={img8} width="300" />
                <img src={img9} width="300" />
            </div>
        </div>
    );
}

export default Project;