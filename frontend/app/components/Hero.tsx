"use client";

import { useState } from "react";

export default function Hero() {
  const [status, setStatus] = useState("Offline");

  return (
    <>
      <div className="mb-6 h-32 w-32 rounded-full bg-cyan-400 blur-3xl"></div>

      <h1 className="text-8xl font-black tracking-widest text-cyan-400">
        A.R.C.
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Autonomous Reasoning Core
      </h2>

      <p className="mt-6 text-xl text-green-400">
        Status: {status}
      </p>

      <button
       onClick={() =>
      setStatus(status === "Offline" ? "Online" : "Offline")
}
        className="mt-10 rounded-full bg-cyan-500 px-10 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
      >
        Initialize A.R.C.
      </button>
    </>
  );
}