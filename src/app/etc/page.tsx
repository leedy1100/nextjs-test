import OptimizationTable from "@/components/OptimizationTable";
import PresenceComponent from "@/components/PresenceComponent";
import AnimatedButton from "@/components/ui/AnimatedButton";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>Etc.</h1>
      <div className="flex flex-wrap justify-start items-center gap-4 m-4">
        <AnimatedButton animationType="bounce" text="bounce" />
        <AnimatedButton animationType="float" text="float" />
        <AnimatedButton animationType="spring" text="spring" />
        <AnimatedButton animationType="pulse" text="pulse" />
        <AnimatedButton animationType="wiggle" text="wiggle" />
        <AnimatedButton animationType="shiver" text="shiver" />
        <PresenceComponent />
      </div>
      <OptimizationTable />
    </div>
  );
}
