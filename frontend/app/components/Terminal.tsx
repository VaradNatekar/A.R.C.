type TerminalProps = {
  logs: string[];
};

export default function Terminal({
  logs,
}: TerminalProps) {
  return (
    <div className="mt-10 w-[540px] rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-bold text-cyan-400">
        A.R.C. Terminal
      </h2>

      <div className="h-64 overflow-y-auto rounded-lg bg-black p-4 font-mono text-sm">
        {logs.map((log, index) => (
          <p
            key={index}
            className="mb-2 text-green-400"
          >
            {log}
          </p>
        ))}

        <p className="mt-4 text-cyan-400">
          &gt;
          <span className="ml-2 animate-pulse">█</span>
        </p>
      </div>
    </div>
  );
}