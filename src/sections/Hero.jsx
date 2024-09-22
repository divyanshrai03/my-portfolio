import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import {calculateSizes} from "../constants/Index.js"
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';


const Hero = () => {

  // const x =useControls(
  //   'HackerRoom', {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     rotationX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     rotationY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     rotationZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //     scale: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10
  //     },
  //   })

const isSmall = useMediaQuery({maxWidth: 440})
const isMobile = useMediaQuery({maxWidth: 768})
const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-col relative" id='home'>
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Divyansh Rai <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Turning Ideas into Digital Reality
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
      {/* <Leva/> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[ 0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom 
              // scale={0.07}
              scale={sizes.deskScale}
              position={sizes.deskPosition} 
              rotation={[0, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition}/>
            </group>

              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
          </Suspense>
        </Canvas>
      </div>

      <div className='absolute bottom-5 left-0 right-0 w-full z-10 c-space'>
        <a
          href='https://drive.google.com/file/d/1rciLWeB9eOqXYovru4oWUqkx6YPDksUn/view?usp=drivesdk '
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            name="Take a moment to review my resume."
            isBeam
            containerClass='sm:w-fit w-full sm:min-w-96'
          />
        </a>
      </div>

    </section>
  );
};

export default Hero;
