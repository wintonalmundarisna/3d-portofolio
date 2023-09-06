import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    // Position dan rotation y={0} u memastikan kita hanya bisa memutar kesamping (sumbu x)
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      // Frameloop sesuai permintaan
      frameloop="demand"
      // preserveDrawingBuffer (pertahankan gambar buffer)
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Suspense (memastikan) ada yang ditampilkan ketika gambar masih lading*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* Jika model/gambar sudah diload maka render orbit u mengizinkan model bumi bisa dirotasi oleh kita */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Render model bumi */}
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
