"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import SystemCard from "./components/SystemCard";
import Terminal from "./components/Terminal";

export default function Home() {
  const [cpuUsage, setCpuUsage] = useState(12);

  const [logs, setLogs] = useState<string[]>([
    "A.R.C. Boot Sequence Started...",
  ]);

  const getTime = () => {
    return new Date().toLocaleTimeString();
  };

  const systemModules = [
    {
      title: "Memory",
      value: "2.4 GB",
    },
    {
      title: "Neural Core",
      value: "Online",
    },
    {
      title: "Database",
      value: "Connected",
    },
    {
      title: "Storage",
      value: "512 GB",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-black py-10 text-white">
      {/* Hero */}
      <Hero />

      {/* Dashboard */}
      <section className="mt-20 grid grid-cols-2 gap-6">
        {/* CPU Card */}
        <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6 transition hover:scale-105 hover:border-cyan-400">
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

        {/* Generated Cards */}
        {systemModules.map((module) => (
          <SystemCard
            key={module.title}
            title={module.title}
            value={module.value}
          />
        ))}
      </section>

      {/* Controls */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => {
            if (cpuUsage < 100) {
              const newCpu = cpuUsage + 5;

              setCpuUsage(newCpu);

              setLogs([
                `[${getTime()}] CPU increased to ${newCpu}%`,
                ...logs,
              ]);
            }
          }}
          className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
        >
          Stress CPU
        </button>

        <button
          onClick={() => {
            if (cpuUsage > 0) {
              const newCpu = cpuUsage - 5;

              setCpuUsage(newCpu);

              setLogs([
                `[${getTime()}] CPU cooled to ${newCpu}%`,
                ...logs,
              ]);
            }
          }}
          className="rounded-lg bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-400"
        >
          Cool CPU
        </button>

        <button
          onClick={() => {
            setCpuUsage(12);

            setLogs([
              `[${getTime()}] CPU reset to 12%`,
              ...logs,
            ]);
          }}
          className="rounded-lg bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400"
        >
          Reset
        </button>
      </div>

      {/* Terminal */}
      <Terminal logs={logs} />
    </main>
  );
}