import React from 'react';
import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Typewriter from "./Typewriter";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import img from "./img(1).jpeg";
import { BrowserRouter, Route, Routes, Link, useLocation, HashRouter} from "react-router-dom";

function MainMenu() {
    const [clicked, setClicked] = useState(true);
    const [text, setText] = useState(true);
    useEffect(() => {
        const changingText = setInterval(() => {
            setText((ChangedText) => !ChangedText);
        }, 2500);
        return () => {
            clearInterval(changingText);
        };
    }, []);
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const options = {
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#e3e3e3", "#b3b5b4", "#6e6e6e", "#4c4d4c"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 2
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
                straight: false,
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
                    enable: true,
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
    document.body.style = 'background: #050505; height : 1500px;';
    function bottomScroll() {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }
    function TopScroll() {
        window.scroll({
            top: document.body.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    }
    const textStyle = {
        color : 'white',
    };
    return (
        <div className='body'>
            <div className='title centerText' id='title'>
                {
                    text ? (<FirstTitle />) : (<SecondTitle />)
                }
            </div>
            <div>
                <button className='CTAbutton' onClick={bottomScroll}>Let's go</button>
            </div>
            <Particles options={options} init={particlesInit} id='particles'/>
            <div id='content'>
                <div><h1>Welcome</h1><p>I'm Leonard Alfareno and i'm a student in Vocational High School 8 Semarang, Indonesia.</p></div>
                <img src={img} width="300" id='imgprofile' />
            </div>
            <div id='content2'>
                <p>My main purpose is to gain more friend or community that eager to learn website developing or software developing<br/>
                Currently i'm learning front-end website development and game development using Unity.
                </p>
            </div>
            <h2 style={textStyle} id='nextButton'><Link to={"/project"} id='nextButtonLink' onClick={TopScroll}><a>See my projects &#x2192;</a></Link></h2>
        </div>
    );
}
function FirstTitle() {
    const text = "";
    return (
        <Typewriter text="Hello!" delay={100} />
    );
}
function SecondTitle() {
    return (
        <Typewriter text="I'm Leonard" delay={100} />
    );
}
export default MainMenu;