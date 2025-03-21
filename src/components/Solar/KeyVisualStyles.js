import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { asteroidsBackground } from './asteroidsBackground';

// import sunImage from 'assets/images/solar/sun.png';
// import mercuryImage from 'assets/images/solar/planet-mercury.svg';
// import venusImage from 'assets/images/solar/planet-venus.svg';
// import earthImage from 'assets/images/solar/planet-earth.svg';
// import marsImage from 'assets/images/solar/planet-mars.svg';
// import jupiterImage from 'assets/images/solar/planet-jupiter.svg';
// import saturnImage from 'assets/images/solar/planet-saturn.svg';
// import uranusImage from 'assets/images/solar/planet-uranus.svg';
// import neptuneImage from 'assets/images/solar/planet-neptune.svg';


// const sunImage = 'assets/images/solar/sun.png';
const cypherSolIcon = 'assets/images/cyphersol-icon.png';
// const  mercuryImage = 'assets/images/solar/planet-mercury.svg';
const venusImage = 'assets/images/solar/planet-venus.svg';
const earthImage = 'assets/images/solar/planet-earth.svg';
const marsImage = 'assets/images/solar/planet-mars.svg';
const jupiterImage = 'assets/images/solar/planet-jupiter.svg';
const saturnImage = 'assets/images/solar/planet-saturn.svg';
const uranusImage = 'assets/images/solar/planet-uranus.svg';
const neptuneImage = 'assets/images/solar/planet-neptune.svg';
import { NavLink } from 'react-router-dom';


export const Container = styled(motion.div)`
   position: relative;
  min-height: 100vh;
  /* Global sizing values */
  --base-orbit: 270px;      /* Base orbit size for the innermost planet */
  --orbit-spacing: 170px;   /* Additional size per orbit */
  --planet-size: 80px;      /* Size for all planet images */
`;
// export const Planet = styled(NavLink)`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     border: 1px solid rgba(102, 166, 229, 0.12);
//     border-radius: 1000px;
//     transform: translate(-50%, -50%);
//     transition: border 300ms ease;

//     &::before {
//         position: absolute;
//         content: '';
//         left: 50%;
//         transform: translate(-50%, -50%);
//         border-radius: 100px;
//         transition: transform 300ms ease;
//     }

//     @keyframes orbit {
//         0% {
//             transform: translate(-50%, -50%) rotate(0deg);
//         }
//         100% {
//             transform: translate(-50%, -50%) rotate(-360deg);
//         }
//     }

//     @media (min-width: 768px) {
//         &:hover {
//             border: 1px solid ${(props) => props.$planetColor};

//             &::before {
//                 transform: scale(1.5) translate(-50%, -50%);
//             }
//         }

//         &:focus {
//             outline: none;
//         }

//         &:focus-visible {
//             border: 1px solid ${(props) => props.$planetColor};

//             &::before {
//                 transform: scale(1.5) translate(-50%, -50%);
//             }
//         }

//         ${(props) =>
//             props.$isActive
//                 ? css`
//                       border: 1px solid ${(props) => props.$planetColor};
//                       &::before {
//                           transform: scale(1.5) translate(-50%, -50%);
//                       }
//                   `
//                 : ''};
//     }
// `;

export const Planet = styled(NavLink)`
     position: absolute;
  top: 50%;
  left: 50%;
  /* Dynamically calculate orbit circle size using orbitIndex */
  width: ${({ orbitIndex }) =>
    `calc(var(--base-orbit) + var(--orbit-spacing) * ${orbitIndex})`};
  height: ${({ orbitIndex }) =>
    `calc(var(--base-orbit) + var(--orbit-spacing) * ${orbitIndex})`};
  border: 1px solid rgba(140, 194, 247, 0.25);
//   border: 1px solid #71797E	;
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  transition: border 300ms ease;

  /* Place the planet image at the edge (top center) of the orbit */
  &::before {
    content: '';
    position: absolute;
    top: 0;  /* Place at the top edge of the orbit circle */
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    width: var(--planet-size);
    height: var(--planet-size);
    background-size: cover;
    transition: transform 300ms ease;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #ffff;
  }
      @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }

    @keyframes counterRotate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @media (min-width: 768px) {
        &:hover {
            border: 1px solid ${(props) => props.$planetColor};
            // border: 2px solid white;

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        &:focus {
            outline: none;
        }

        &:focus-visible {
            border: 1px solid ${(props) => props.$planetColor};

            &::before {
                transform: scale(1.5) translate(-50%, -50%);
            }
        }

        ${(props) =>
            props.$isActive
                ? css`
                      border: 1px solid ${(props) => props.$planetColor};
                      &::before {
                          transform: scale(1.5) translate(-50%, -50%);
                      }
                  `
                : ''};
    }
`;

export const Sun = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 150px;
    width: 150px;
    // height: 200px;
    // width: 200px;
    border-radius: 1000px;
    background-image: url(${cypherSolIcon}) ;
    background-size: 75% auto;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #ffff;
    // box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
    //     0 0 22px 11px rgba(255, 203, 0, 0.13);
    transform: translate(-50%, -50%);
`;

export const Mercury = styled(Planet)`
    animation: orbit 6.1867343561s linear infinite;
    z-index: 100;

    &::before {
        background-image: url(${cypherSolIcon});
     background-size: 75% auto;
         animation: counterRotate 6.1867343561s linear infinite;

    }
`;

export const Venus = styled(Planet)`
    animation: orbit 12.4555338265s linear infinite;
    z-index: 99;

    &::before {
        background-image: url(${cypherSolIcon});
     background-size: 75% auto;
         animation: counterRotate 12.4555338265s linear infinite;

    }
`;

export const Earth = styled(Planet)`
    animation: orbit 20s linear infinite;
    z-index: 98;

    &::before {
        background-image: url(${cypherSolIcon});
     background-size: 75% auto;
         animation: counterRotate 20s linear infinite;
    }
`;

export const Mars = styled(Planet)`
    animation: orbit 30.4261314589s linear infinite;
    z-index: 97;

    &::before {
        background-image: url(${cypherSolIcon});
     background-size: 75% auto;
       
         animation: counterRotate 30.4261314589s linear infinite;
    }
`;

export const Jupiter = styled(Planet)`
    animation: orbit 40.7228171013s linear infinite;
    z-index: 96;

    &::before {
        background-image: url(${jupiterImage});
     background-size: 75% auto;
         animation: counterRotate 40.7228171013s linear infinite;
    }
`;

export const Saturn = styled(Planet)`
    animation: orbit 882.6952471456s linear infinite;
    z-index: 95;

    &::before {
        background-image: url(${saturnImage});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const Uranus = styled(Planet)`
    animation: orbit 2512.4001967933s linear infinite;
    z-index: 94;

    &::before {
        background-image: url(${uranusImage});
        background-size: cover;
    }
`;

export const Neptune = styled(Planet)`
    animation: orbit 4911.7838624549s linear infinite;
    z-index: 93;

    &::before {
        background-image: url(${neptuneImage});
        background-size: cover;
    }
`;

export const AsteroidsBelt = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(102, 166, 229, 0.12);
    border-radius: 1000px;
    transform: translate(-50%, -50%);

    height: 800px;
    width: 800px;
    opacity: 0.7;
    border-color: transparent;
    overflow: hidden;
    animation: orbit 179.9558282773s linear infinite;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        height: 210px;
        width: 210px;
        background: transparent;
        border-radius: 140px !important;
        box-shadow: ${asteroidsBackground};

        transform: translate(-50%, -50%) scale(1.5);
        transform-origin: center;
    }

    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
`;
