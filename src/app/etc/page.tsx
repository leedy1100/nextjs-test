import OptimizationTable from "@/components/OptimizationTable";
import CircleButton from "@/components/ui/CircleButton";
import React from "react";

export default function page() {
  return (
    <div className="h-[300px]">
      <h1>Etc.</h1>
      <div className="m-4">
        <CircleButton />
      </div>
      <OptimizationTable />
    </div>
  );
}
