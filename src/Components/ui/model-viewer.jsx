"use client";;
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { cn } from "@/lib/utils";

const STEP = Math.PI / 12; // 15 degrees per key press

function Model({
  url
}) {
  const { scene } = useGLTF(url);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export function ModelViewer({
  modelUrl = "/models/sample.glb",
  className
}) {
  const controlsRef = useRef(null);

  function rotate(dTheta, dPhi) {
    const controls = controlsRef.current;
    if (!controls) return;

    // camera position relative to the model, as angles
    const offset = controls.object.position.clone().sub(controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);

    spherical.theta += dTheta;
    spherical.phi = THREE.MathUtils.clamp(spherical.phi + dPhi, 0.1, Math.PI - 0.1);

    offset.setFromSpherical(spherical);
    controls.object.position.copy(controls.target).add(offset);
    controls.update();
  }

  function handleKeyDown(e) {
    switch (e.key) {
      case "ArrowLeft":
        rotate(-STEP, 0);
        break;
      case "ArrowRight":
        rotate(STEP, 0);
        break;
      case "ArrowUp":
        rotate(0, -STEP);
        break;
      case "ArrowDown":
        rotate(0, STEP);
        break;
      default:
        return; // ignore other keys
    }
    e.preventDefault(); // stop the page from scrolling
  }

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="3D model viewer. Use arrow keys to rotate."
      className={cn("h-[400px] w-full outline-none focus-visible:ring-2 focus-visible:ring-white/40", className)}
    >
      <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls ref={controlsRef} />
      </Canvas>
    </div>
  );
}

export default ModelViewer;