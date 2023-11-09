import React from 'react';
import './About.css';
import { useState } from 'react';
import pics from './img(2).jpeg';
import { useEffect } from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
import {FaInstagram} from 'react-icons/fa'
ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);
const state = {
    labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'C#'],
    datasets: [
      {
        label : "Language",
        backgroundColor : "white",
        data: [30, 20, 10, 5, 10, 100]
      }
    ]
}
const textStyle = {
  color : 'white',
}; 
export default function About() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const option = {
        fullScreen: {
          enable: true
        },
        fpsLimit: 100,
        particles: {
          groups: {
            z5000: {
              number: {
                value: 70
              },
              zIndex: {
                value: 5000
              }
            },
            z7500: {
              number: {
                value: 30
              },
              zIndex: {
                value: 75
              }
            },
            z2500: {
              number: {
                value: 50
              },
              zIndex: {
                value: 25
              }
            },
            z1000: {
              number: {
                value: 40
              },
              zIndex: {
                value: 10
              }
            }
          },
          number: {
            value: 150,
            density: {
              enable: false,
              value_area: 800
            }
          },
          color: {
            value: "#fff",
            animation: {
              enable: false,
              speed: 20,
              sync: true
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: false,
              speed: 3,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 3
          },

          move: {
            angle: {
              value: 1,
              offset: 0
            },
            enable: true,
            speed: 3,
            direction: "right",
            random: false,
            straight: true,
            outModes: {
              default: "out"
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8
            },
            repulse: {
              distance: 200
            },
            push: {
              quantity: 4,
              groups: ["z5000", "z7500", "z2500", "z1000"]
            },
            remove: {
              quantity: 2
            }
          }
        },
        detectRetina: true,
        emitters: {
          position: {
            y: 55,
            x: -30
          },
          rate: {
            delay: 7,
            quantity: 1
          },
          size: {
            width: 0,
            height: 0
          },
          particles: {
            shape: {
              type: "images",
              options: {
                images: [
                  {
                    src: "https://particles.js.org/images/amongus_blue.png",
                    width: 205,
                    height: 267
                  },
                  {
                    src: "https://particles.js.org/images/amongus_cyan.png",
                    width: 207,
                    height: 265
                  },
                  {
                    src: "https://particles.js.org/images/amongus_green.png",
                    width: 204,
                    height: 266
                  },
                  {
                    src: "https://particles.js.org/images/amongus_lime.png",
                    width: 206,
                    height: 267
                  },
                  {
                    src: "https://particles.js.org/images/amongus_orange.png",
                    width: 205,
                    height: 265
                  },
                  {
                    src: "https://particles.js.org/images/amongus_pink.png",
                    width: 205,
                    height: 265
                  },
                  {
                    src: "https://particles.js.org/images/amongus_red.png",
                    width: 204,
                    height: 267
                  },
                  {
                    src: "https://particles.js.org/images/amongus_white.png",
                    width: 205,
                    height: 267
                  }
                ]
              }
            },
            size: {
              value: 40
            },
            move: {
              speed: 10,
              outModes: {
                default: "destroy",
                left: "none"
              },
              straight: true
            },
            rotate: {
              value: {
                min: 0,
                max: 360
              },
              animation: {
                enable: true,
                speed: 10,
                sync: true
              }
            }
          }
        }
      };
    document.body.style = 'background: black;';
    return (
        <div>
            <div className='aboutpage'>
                <div className='content'>
                    <h1 className='title'>About me</h1>
                    <div className='gate'></div>
                    <p>Hi, i'm Leonard Alfareno a student in Vocational High School 8 Semarang, Indonesia, at 13 years old when i'm in Junior High School i randomly found a programming youtube video and my friend showed me a website he made and i was amazed and started learning how to code.
                        i like playing games a lot and i have been gaming since i was 4 years old and i also like to listen a music.
                    </p>
                </div>
                <img src={pics} height="200" width="200" className='imgprofile' />
            </div>
            <div id='skills'>
                <h2>Skills Chart</h2>
                </div>
                <Bar
                height="100"
                data={state}
                options={{
                    indexAxis: 'y',
                    barThickness : 10,
                    color: "white",
                    plugins : {
                        legend : {
                            display : false
                        }
                    },
                    yAxes :{
                        color: "red",
                    },
                    gridLines : {
                        color : "white",
                    },
                    scales : {
                        y:{
                            grid : {
                                color : "white",
                            },
                            ticks :{
                                color : "white",
                            }
                        },
                        x:{
                            grid : {
                                color : "white",
                            },
                            ticks :{
                                color : "white",
                            }
                        }
                    }
                    }}
                    id='chartSkills'
                />
                <div style={textStyle} id='contacts'>
                  <h1>Contacts</h1>
                  <h4>These are my contacts that you can reach out, this includes my phone number, email, and social media.</h4>
                  <div id='telephone'>
                  <a id='iconTelephone' href='https://wa.me/6285876200861'>&#x2706;</a>
                  <a id='number' href='https://wa.me/6285876200861'>+62 858-7620-0861</a>
                  </div>
                  <div id='email'>
                    <a id='iconEmail'>&#x2709;</a>
                    <a id='emailUsn'>rxyz643201@gmail.com</a>
                  </div>
                  <div id='instagram'>
                    <a id='iconInstagram' href='https://www.instagram.com/rxyzyz/'><FaInstagram/></a>
                    <a id='instagramUsn' href='https://www.instagram.com/rxyzyz/'>@rxyzyz</a>
                  </div>
                </div>
                <Particles options={option} init={particlesInit}/>
        </div>
    );
}