/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // Menyediakan empty canvas untuk meletakkan sesuatu didalamnya
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // OrbitControls (untuk draw/menggerakkan objek di dalam canvas), useGLTF (untuk mengizinkan import model 3D)
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // Mesh adalah 3d element u/ mengawali pembuatan 3d
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Untuk pencahayaan, kunjungi web three js */}
      <pointLight intensity={1} />

      {/* Object/gambar komputer */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Cek ukuran layar untuk tampilan mobile
  useEffect(() => {
    // Buat listener u/ perubahan ukuran layar
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set nilai var isMobile
    setIsMobile(mediaQuery.matches);

    // Buat func callback u/ handel perubahan kedalam mediaQuery
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Masukkan fungsi callback diatas sebagai listener untuk perubahan ke mediaQuery
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Hapus listener ketika komponen sudah tidak digunakan (pada saat ukuran layar > 500)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // props frameloop digunakan u/ pass frame loop
    <Canvas
      frameloop="demand"
      shadows
      // sumbu: 20(x), 3(y), 5(z), fov(luas sudut pandang)
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }} // U/ merender model 3D
    >
      {/* izin u/ meload model canvas */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Membuat gambar bisa di rotate */}
        <OrbitControls
          enableZoom={false}
          // max/minAngle membuat only rotasi x, gabisa y
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Gambar meja dan komputer */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
      {/* Jika belum tampil, install npm install --legacy-peer-deps three */}
    </Canvas>
  );
};

export default ComputersCanvas;
