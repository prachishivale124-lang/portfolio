"use client";

import dynamic from "next/dynamic";

const ParticleNetwork = dynamic(() => import("@/components/3d/ParticleNetwork"), {
  ssr: false,
});

export default function ParticleWrapper() {
  return <ParticleNetwork />;
}
