export function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
  readOnly,
  step = "1",
}) {
  return (
    <label className="block text-sm">
      <span className="text-neutral-600">{label}</span>
      <div className="mt-1 flex items-center rounded-md border border-neutral-200 px-2">
        {prefix && <span className="mr-1 text-neutral-500">{prefix}</span>}
        <input
          type="number"
          step={step}
          readOnly={readOnly}
          className="h-9 w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => onChange && onChange(Number(e.target.value))}
        />
        {suffix && <span className="ml-1 text-neutral-500">{suffix}</span>}
      </div>
    </label>
  );
}