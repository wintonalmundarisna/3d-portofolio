import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* mesh digunakan u/ menampilkan */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Adrian tidak tahu u apa dibawah ini, tapi seorang jenius memberitahunya u melakukan ini */}
        {/* Tapi jika tidak ada scrippt dibawah, bola tidak akan tampil */}
        <icosahedronGeometry args={[1, 1]} />
        {/* u pewarnaan pada bola */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }} // U/ merender model 3D
    >
      {/* izin u/ meload model canvas */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Membuat gambar bisa di rotate */}
        <OrbitControls enableZoom={false} />
        {/* Gambar meja dan komputer */}
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
      {/* Jika belum tampil, install npm install --legacy-peer-deps three */}
    </Canvas>
  );
};

export default BallCanvas;
