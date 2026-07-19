type SystemCardProps = {
  title: string;
  value: string;
};

export default function SystemCard({
  title,
  value,
}: SystemCardProps) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6 transition hover:border-cyan-400 hover:scale-105">
      <h3 className="text-lg font-semibold text-cyan-400">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}