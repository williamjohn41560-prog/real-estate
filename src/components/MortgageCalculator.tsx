"use client";

import { useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { formatPrice } from "@/lib/utils";

const COLORS = ["#0F172A", "#C8A24D", "#94A3B8", "#E6CD8E"];

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <label className="font-medium text-navy-700">{label}</label>
        <span className="font-semibold text-navy-900">
          {prefix}
          {value.toLocaleString()}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-gold-500"
      />
    </div>
  );
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(550000);
  const [downPayment, setDownPayment] = useState(55000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxRate, setTaxRate] = useState(1.1);
  const [insurance, setInsurance] = useState(120);

  const { monthlyPI, monthlyTax, monthlyInsurance, total } = useMemo(() => {
    const principal = Math.max(homePrice - downPayment, 0);
    const monthlyRate = rate / 100 / 12;
    const n = term * 12;
    const pi =
      monthlyRate === 0
        ? principal / n
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
    const tax = (homePrice * (taxRate / 100)) / 12;
    return {
      monthlyPI: pi,
      monthlyTax: tax,
      monthlyInsurance: insurance,
      total: pi + tax + insurance,
    };
  }, [homePrice, downPayment, rate, term, taxRate, insurance]);

  const chartData = [
    { name: "Principal & Interest", value: monthlyPI },
    { name: "Property Tax", value: monthlyTax },
    { name: "Insurance", value: monthlyInsurance },
  ];

  return (
    <div className="grid gap-10 rounded-xl2 bg-white p-6 shadow-card sm:p-10 lg:grid-cols-2">
      <div className="space-y-6">
        <Field label="Home Price" value={homePrice} onChange={setHomePrice} min={100000} max={2500000} step={5000} prefix="$" />
        <Field label="Down Payment" value={downPayment} onChange={setDownPayment} min={0} max={homePrice} step={2500} prefix="$" />
        <Field label="Interest Rate" value={rate} onChange={setRate} min={2} max={9} step={0.05} />
        <Field label="Loan Term (years)" value={term} onChange={setTerm} min={10} max={30} step={5} />
        <Field label="Annual Property Tax Rate (%)" value={taxRate} onChange={setTaxRate} min={0.4} max={2.5} step={0.05} />
        <Field label="Monthly Insurance" value={insurance} onChange={setInsurance} min={40} max={400} step={10} prefix="$" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="h-64 w-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={chartData} dataKey="value" innerRadius={65} outerRadius={95} paddingAngle={3}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => formatPrice(v)} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-center text-sm text-navy-400">Estimated Monthly Payment</p>
        <p className="text-center font-display text-4xl font-bold text-navy-900">{formatPrice(total)}</p>
        <ul className="mt-6 w-full space-y-2 text-sm">
          {chartData.map((d, i) => (
            <li key={d.name} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-navy-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                {d.name}
              </span>
              <span className="font-semibold text-navy-900">{formatPrice(d.value)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-navy-400">
          Estimate only. Actual payment varies by lender, credit, and HOA dues.
        </p>
      </div>
    </div>
  );
}
