import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, Stats } from "@react-three/drei";
import { Model } from "./assets/microphone/Scene";

export default function App() {
  return (
    <>
      <Canvas style={{ height: "100vh", background: "black" }}>
        <Environment preset="forest" />
        <ambientLight />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
          {/* <ContactShadows position={[0.1, -1.3, 0]} color="#ffffff" /> */}
        <spotLight
          position={[10, 15, 10]}
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          castShadow
        />
        <OrbitControls enablePan enableZoom enableRotate autoRotate />
        <axesHelper args={[5]} />
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      {/* <primitive object={/gltf.scene} position={[0, 1, 0]} /> */}
        <Stats />
      </Canvas>
    </>
  );
}
