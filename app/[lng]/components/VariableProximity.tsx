"use client";
import { useRef } from "react";
import VariableProximityAN from "./animation/VariableProximity";

export default function VariableProximity({ label }: { label: string }) {
  const containerRef = useRef(null);
  return (
    <h2
      className="text-center text-3xl pb-3 opacity-75"
      ref={containerRef}
      style={{
        position: "relative",
      }}
    >
      <VariableProximityAN
        label={label}
        className={"variable-proximity-demo"}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </h2>
  );
}
