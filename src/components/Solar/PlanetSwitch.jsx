// planetSwitch.jsx
import {
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
} from './KeyVisualStyles';

const PlanetSwitch = ({ data, activePlanet ,orbitIndex }) => {
    const commonProps = {
        to: data.path,
        'aria-label': `${data.name} page`,
        $isActive: activePlanet === data.path,
        $planetColor: data.sectionColor,
        orbitIndex, // Forwarding orbitIndex to the styled component
      };
    const planetSwitch = () => {
        switch (data.name) {
            case 'Mercury':
            return <Mercury {...commonProps} />;
            case 'Venus':
            return <Venus {...commonProps} />;
            case 'Earth':
            return <Earth {...commonProps} />;
            case 'Mars':
            return <Mars {...commonProps} />;
            // case 'Jupiter':
            //     return (
            //         <Jupiter
            //             to={data.path}
            //             aria-label={`${data.name} page`}
            //             $isActive={activePlanet === data.path}
            //             $planetColor={data.sectionColor}
            //         />
            //     );
            // case 'Saturn':
            //     return (
            //         <Saturn
            //             to={data.path}
            //             aria-label={`${data.name} page`}
            //             $isActive={activePlanet === data.path}
            //             $planetColor={data.sectionColor}
            //         />
            //     );
            // case 'Uranus':
            //     return (
            //         <Uranus
            //             to={data.path}
            //             aria-label={`${data.name} page`}
            //             $isActive={activePlanet === data.path}
            //             $planetColor={data.sectionColor}
            //         />
            //     );
            // case 'Neptune':
            //     return (
            //         <Neptune
            //             to={data.path}
            //             aria-label={`${data.name} page`}
            //             $isActive={activePlanet === data.path}
            //             $planetColor={data.sectionColor}
            //         />
            //     );
        }
    };
    return <>{planetSwitch()}</>;
};

export default PlanetSwitch;
