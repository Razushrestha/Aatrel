"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// CONFIG: Replace with your real API endpoint(s) as needed
const DEFAULT_API_ENDPOINT = "/api/earth-stats"; // configurable
const POLL_INTERVAL_MS = 60000; // 60s default poll

type EarthStats = {
  co2: string;
  credits: string;
  population: string;
  pollution: string;
  timestamp?: string;
};

const MOCK_DATA: EarthStats = {
  co2: "37.4 Bt",
  credits: "1.2M+",
  population: "8.1B",
  pollution: "High",
  timestamp: new Date().toISOString(),
};

function useDeviceHints() {
  // Lightweight device heuristic for perf fallbacks
  const getInitial = () => {
    const dm = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    const deviceMemory = typeof navigator !== "undefined" ? (navigator as unknown as { deviceMemory?: number }).deviceMemory : undefined;
    const lowPerf = !!(deviceMemory && deviceMemory <= 2);
    const prefersReducedMotion = dm ? dm.matches : false;
    return { lowPerf, prefersReducedMotion };
  };

  const [hints, setHints] = useState(getInitial);

  useEffect(() => {
    const dm = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    const onDMChange = () => setHints((s) => ({ ...s, prefersReducedMotion: dm ? dm.matches : s.prefersReducedMotion }));
    if (dm) dm.addEventListener("change", onDMChange);
    return () => { if (dm) dm.removeEventListener("change", onDMChange); };
  }, []);

  return hints;
}

// Small Reusable Stat Marker (responsive + accessible)
function StatMarker({ label, value, color, position, delay = 0 }: { label: string; value: string; color: string; position: [number, number, number]; delay?: number }) {
  return (
    <Html position={position} center distanceFactor={8} zIndexRange={[100, 0]}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.4 }}
        className="pointer-events-auto"
      >
        <div
          role="button"
          tabIndex={0}
          aria-label={`${label}: ${value}`}
          className="backdrop-blur-lg bg-black/45 border border-white/10 rounded-xl px-4 py-3 shadow-lg min-w-35 sm:min-w-45 lg:min-w-55 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ outlineColor: color }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${color}22`, boxShadow: `0 0 8px ${color}22` }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.2" fill="rgba(255,255,255,0.02)" />
                <path d="M8 12h8" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">{label}</span>
              <span className="text-lg sm:text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" aria-live="polite">
                {value}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Html>
  );
}

function EarthMesh({ hints }: { hints: { lowPerf: boolean; prefersReducedMotion: boolean } }) {
  const earthRef = useRef<THREE.Mesh | null>(null);
  const cloudsRef = useRef<THREE.Mesh | null>(null);

  const [colorMap, normalMap, specMap, cloudsMap] = useTexture([
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png",
  ]);

  // rotate and breathing pulse
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = t / 12;
    if (cloudsRef.current) cloudsRef.current.rotation.y = t / 10;
  });

  const sphereSegments = hints.lowPerf ? 24 : 64;
  const cloudsOpacity = hints.lowPerf ? 0.45 : 0.7;

  return (
    <group>
      {/* subtle atmosphere ring */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[1, sphereSegments, sphereSegments]} />
        <meshBasicMaterial color="#22B14C" transparent opacity={0.12} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
      </mesh>

      <mesh ref={earthRef}>
        <sphereGeometry args={[1, sphereSegments, sphereSegments]} />
        <meshPhongMaterial map={colorMap} normalMap={normalMap} specularMap={specMap} shininess={10} />
      </mesh>

      {!hints.lowPerf && (
        <mesh ref={cloudsRef} scale={[1.008, 1.008, 1.008]}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial map={cloudsMap} transparent opacity={cloudsOpacity} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}

export default function BreathingEarth({ apiEndpoint = DEFAULT_API_ENDPOINT, pollIntervalMs = POLL_INTERVAL_MS }: { apiEndpoint?: string; pollIntervalMs?: number }) {
  // data state
  const [data, setData] = useState<EarthStats>(MOCK_DATA);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(MOCK_DATA.timestamp || null);

  const hints = useDeviceHints();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let mounted = true;
    let controller: AbortController | null = null;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        if (controller) controller.abort();
        controller = new AbortController();
        const res = await fetch(apiEndpoint, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        // Validate minimal shape
        const payload: EarthStats = {
          co2: json.co2 ?? json.CO2 ?? MOCK_DATA.co2,
          credits: json.credits ?? json.credits ?? MOCK_DATA.credits,
          population: json.population ?? MOCK_DATA.population,
          pollution: json.pollution ?? MOCK_DATA.pollution,
          timestamp: new Date().toISOString(),
        };
        if (mounted) {
          setData(payload);
          setLastUpdated(payload.timestamp || new Date().toISOString());
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        // fallback to mock and surface non-fatal errors
        if (mounted) {
          setError(message || "Failed to load data");
          setData(prev => ({ ...prev, timestamp: new Date().toISOString() }));
          setLastUpdated(new Date().toISOString());
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    // initial fetch
    fetchData();

    // polling
    const interval = setInterval(fetchData, pollIntervalMs);

    return () => {
      mounted = false;
      clearInterval(interval);
      if (controller) controller.abort();
    };
  }, [apiEndpoint, pollIntervalMs]);

  // Layout helpers: on mobile, render a stacked panel under the canvas instead of Html markers
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-75 h-75 sm:w-105 sm:h-105 lg:w-135 lg:h-135">
        <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
          <ambientLight intensity={hints.lowPerf ? 0.4 : 0.7} />
          <directionalLight position={[5, 3, 5]} intensity={hints.lowPerf ? 2 : 4} />
          <pointLight position={[0, -5, 0]} intensity={0.6} color="#0E3B2E" />

          <React.Suspense fallback={null}>
            <EarthMesh hints={hints} />
          </React.Suspense>

          <Stars radius={100} depth={50} count={hints.lowPerf ? 300 : 3000} factor={4} saturation={0} fade speed={hints.prefersReducedMotion ? 0 : 1} />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate={!hints.prefersReducedMotion} autoRotateSpeed={0.6} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />
        </Canvas>
      </div>
    </div>
  );
}
