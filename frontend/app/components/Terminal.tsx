"use client";

import { useState } from "react";

type TerminalProps = {
  logs: string[];
};

export default function Terminal({ logs }: TerminalProps) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([
  "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
  "A.R.C. Operating System v0.1",
  "",
  "✔ Neural Core Online",
  "✔ Database Connected",
  "✔ Memory Allocated",
  "✔ Terminal Ready",
  "",
  'Type "help" to view available commands.',
  "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
   ]);

  const runCommand = () => {
    const cmd = command.trim().toLowerCase();

    if (cmd === "help") {
      setOutput([
         "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
         "Available Commands",
         "",
         "help   - Show all commands",
         "status - System status",
         "about  - About A.R.C.",
         "clear  - Clear terminal",
         "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
       ]);
    } else if (cmd === "status") {
      setOutput([
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "SYSTEM STATUS",
        "",
        "CPU ............. Online",
        "Memory .......... 2.4 GB",
        "Database ........ Connected",
        "Neural Core ..... Active",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
       ]);      
    } else if (cmd === "about") {
      setOutput([
       "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
       "A.R.C.",
       "",
       "Autonomous Reasoning Core",
       "Version : 0.1",
       "Frontend : Next.js",
       "Language : TypeScript",
       "",
       "Built by Varad",
       "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
     ]);
    } else if (cmd === "clear") {
      setOutput([]);
    } else if (cmd !== "") {
      setOutput([
       `Unknown command: ${cmd}`,
       "",
       'Type "help" to view available commands.',
     ]);     
    }

    setCommand("");
  };

  return (
    <div className="mt-10 w-[540px] rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-bold text-cyan-400">
        A.R.C. Terminal
      </h2>

      <div className="h-64 overflow-y-auto rounded-lg bg-black p-4 font-mono text-sm">
        {/* System Logs */}
        {logs.map((log, index) => (
          <p
            key={`log-${index}`}
            className="mb-2 text-green-400"
          >
            {log}
          </p>
        ))}

        {/* Command Output */}
        {output.map((line, index) => (
          <p
            key={`output-${index}`}
            className="mb-2 text-cyan-300"
          >
            {line}
          </p>
        ))}

        {/* Command Input */}
        <div className="mt-4 flex items-center text-cyan-400">
          <span>&gt;</span>

          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand();
              }
            }}
            className="ml-2 flex-1 bg-transparent outline-none"
            placeholder="Type a command..."
          />
        </div>
      </div>
    </div>
  );
}