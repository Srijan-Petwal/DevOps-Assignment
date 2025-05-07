import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model.jsx';
import Scene from './Scene.jsx';
import Dragon from './Shenron_dragon_ball.jsx';
const ModelComponent = () => {
  return (
    <Canvas style={{ background: '#133b40', width: '100vw', height: '100vh' }} camera={{ position: [0, 3, -10], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 10]} color="red" intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.45}
        intensity={100}
        penumbra={0.2}
        color="#30db16"
      />
      <spotLight
        position={[0, 5, 10]}
        angle={0.3}
        intensity={100}
        penumbra={0.1}
        color="#210f96"
        castShadow
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model position={[0,1,5]} scale={1.5} />
      <Scene position={[0,0,0]} />
      <Dragon position={[0,-10,0]} scale={0.025}/>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelComponent;
