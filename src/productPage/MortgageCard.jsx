import { useState } from "react";
import { Field } from "./Field";

export function MortgageCard({ price }) {
  const [down, setDown] = useState(800000);
  const [rate, setRate] = useState(3.75);
  const [years, setYears] = useState(25);

  const principal = Math.max(price - down, 0);
  const r = rate / 100 / 12;
  const n = years * 12;
  const monthly =
    r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));

  return (
    <div className="grid gap-4 rounded-xl border border-neutral-200 p-4 md:grid-cols-2">
      <div className="space-y-3">
        <div>
          <h2 className="text-neutral-400">UAE Residences Status</h2>
          <div>
            <button>National</button>
            <button>Resident</button>
            <button>Non Resident</button>
          </div>
        </div>
        <Field label="Property Price" value={price} readOnly prefix="AED" />
        <Field
          label="Down Payment"
          value={down}
          onChange={setDown}
          prefix="AED"
        />
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Loan Term"
            value={years}
            onChange={setYears}
            suffix="Years"
          />
          <Field
            label="Interest Rate"
            value={rate}
            onChange={setRate}
            suffix="%"
            step="0.01"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-neutral-50 p-4">
        <div className="text-xs text-neutral-500">Monthly Payment</div>
        <div className="text-2xl font-extrabold text-neutral-900">
          AED {fmt(Math.round(monthly))}
        </div>
        <button className="mt-3 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white">
          Get Pre-Approved
        </button>
      </div>
    </div>
  );
}

function fmt(n) {
  return new Intl.NumberFormat("en-AE", { maximumFractionDigits: 0 }).format(n);
}