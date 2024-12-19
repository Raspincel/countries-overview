import React from "react";
import { Country } from "@/src/types/countries";
import { LineChart } from "@mui/x-charts";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Head from "next/head";

type Props = {
  params: Promise<Record<string, string>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;

  const res = await fetch(`${process.env.API_URL}/countries/${code}`, {
    cache: "force-cache",
  });
  const data = (await res.json()) as Country;

  return {
    title: data.name,
    description: `Population and borders of ${data.name}`,
  };
}

export default async function Page({ params }: Props) {
  const { code } = await params;

  const res = await fetch(`${process.env.API_URL}/countries/${code}`, {
    cache: "force-cache",
  });
  const data = (await res.json()) as Country;

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={data.flagURL} />
      </Head>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold mx-auto">{data.name}</h1>
          <Image
            src={data.flagURL}
            alt={`${data.name}'s flag`}
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-2 w-[min(100%,1200px)] h-[min(500px,90vh)]">
          <h2 className="text-md font-medium mx-auto">Population per year</h2>
          <LineChart
            margin={{ left: 100, right: 100 }}
            xAxis={[{ data: data.population.map((p) => p.year) }]}
            series={[
              {
                data: data.population.map((p) => p.value),
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-2 w-[min(100%,1200px)] h-[min(500px,90vh)]">
          <h2 className="text-md font-medium mx-auto">Borders</h2>
          {data.borders.length ? (
            <div className="w-full flex justify-center">
              <ul className="flex gap-4 flex-wrap p-2 border border-1 border-slate-600 rounded-md w-fit">
                {data.borders.map((border) => (
                  <li key={border.countryCode}>
                    <Link href={`/${border.countryCode}`}>
                      <p className="text-sm text-blue-800">
                        {border.countryCode} - {border.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-center">No borders</p>
          )}
        </div>
      </div>
    </>
  );
}
