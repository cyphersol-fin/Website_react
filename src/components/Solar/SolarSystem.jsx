// KeyVisual
import { Container, Sun, AsteroidsBelt } from './KeyVisualStyles';
import { planets } from './data';
import PlanetSwitch from './PlanetSwitch';

const KeyVisual = ({ activePlanet }) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 6,
            rotate: '-40deg',
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { delay: 1, duration: 3 },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            rotate: '-10deg',
            transition: { duration: 1 },
        },
    };

    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=''
        >
            <Sun />
            {planets.map((planet,index) => (
                <PlanetSwitch
                    data={planet}
                    key={planet.id}
                    activePlanet={activePlanet}
                    orbitIndex={index}  // This index will be used in the calc() above

                />
            ))}
            
            <AsteroidsBelt />
        </Container>
    );
};

export default KeyVisual;
