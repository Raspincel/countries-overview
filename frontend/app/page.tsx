import React from "react";
import CountriesList from "@/src/components/countries-list";

export default function Page() {
  return (
    <div className="flex justify-center">
      <CountriesList filter="" />
    </div>
  );
}
