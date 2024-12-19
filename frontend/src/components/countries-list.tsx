import React from 'react'
import Link from "next/link";
import { Countries } from "../types/countries";

interface CountriesListProps {
  filter: string;
}

export default async function CountriesList({ filter }: CountriesListProps) {
  const res = await fetch(`${process.env.API_URL}/countries`, {
    cache: "force-cache",
  });
  const data = (await res.json()) as { countries: Countries };

  return (
    <div className="w-full grid gap-2 grid-cols-[repeat(auto-fit,minmax(225px,1fr))] px-10 py-4">
      {data.countries
        .filter(
          (country) =>
            country.countryCode.toLowerCase().includes(filter) ||
            country.name.toLowerCase().includes(filter)
        )
        .map((country) => (
          <Link
            href={`/${country.countryCode}`}
            key={country.countryCode}
            className="p-1 rounded-sm bg-slate-500"
          >
            <p className="text-white px-2 whitespace-nowrap">
              {country.countryCode} - {country.name}
            </p>
          </Link>
        ))}
    </div>
  );
}
