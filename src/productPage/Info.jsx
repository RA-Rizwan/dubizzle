export function Info({ label, value }) {
  return (
    <div className="flex items-center gap-10 rounded-lg text-sm bg-white px-3 py-2">
      <span className="text-neutral-500">{label}</span>
      <span className="font-bold text-neutral-800">{value}</span>
    </div>
  );
}