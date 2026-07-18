"use client";

import { useState } from "react";
import Hero from "./components/Hero";

export default function Home() {
  const [cpuUsage, setCpuUsage] = useState(12);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* Hero */}
      <Hero />

      {/* Dashboard */}
      <section className="mt-20 grid grid-cols-2 gap-6">

        {/* CPU */}
        <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6 transition hover:border-cyan-400 hover:scale-105">
          <h3 className="text-lg font-semibold text-cyan-400">
            CPU
          </h3>

          <p
            className={`mt-3 text-3xl font-bold ${
              cpuUsage >= 80
                ? "text-red-500"
                : cpuUsage >= 50
                ? "text-yellow-400"
                : "text-green-400"
            }`}
          >
            {cpuUsage}%
          </p>
        </div>

        {/* Memory */}
        <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6 transition hover:border-cyan-400 hover:scale-105">
          <h3 className="text-lg font-semibold text-cyan-400">
            Memory
          </h3>

          <p className="mt-3 text-3xl font-bold">
            2.4 GB
          </p>
        </div>

        {/* Neural Core */}
        <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6 transition hover:border-cyan-400 hover:scale-105">
          <h3 className="text-lg font-semibold text-cyan-400">
            Neural Core
          </h3>

          <p className="mt-3 text-3xl font-bold">
            Online
          </p>
        </div>

        {/* Database */}
        <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6 transition hover:border-cyan-400 hover:scale-105">
          <h3 className="text-lg font-semibold text-cyan-400">
            Database
          </h3>

          <p className="mt-3 text-3xl font-bold">
            Connected
          </p>
        </div>

      </section>

      {/* Controls */}
      <div className="mt-8 flex gap-4">

        <button
          onClick={() => {
            if (cpuUsage < 100) {
              setCpuUsage(cpuUsage + 5);
            }
          }}
          className="rounded-lg bg-red-500 px-6 py-3 font-bold text-black transition hover:bg-red-400"
        >
          Stress CPU
        </button>

        <button
          onClick={() => {
            if (cpuUsage > 0) {
              setCpuUsage(cpuUsage - 5);
            }
          }}
          className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-white transition hover:bg-cyan-400"
        >
          Cool CPU
        </button>

        <button
          onClick={() => setCpuUsage(12)}
          className="rounded-lg bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400"
        >
          Reset
        </button>

      </div>
    </main>
  );
}