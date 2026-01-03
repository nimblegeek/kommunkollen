"use client";

import { BudgetCategory } from "@/lib/types";
import { formatCurrency } from "@/lib/taxCalculations";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface BudgetBarChartProps {
  budget: BudgetCategory[];
  totalAmount: number;
}

export default function BudgetBarChart({ budget, totalAmount }: BudgetBarChartProps) {
  const chartData = budget.map((category) => ({
    name: category.name,
    value: (totalAmount * category.percentage) / 100,
    percentage: category.percentage,
    color: category.color,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="github-card p-3 shadow-lg">
          <p className="text-sm font-semibold text-[#24292f] dark:text-[#e6edf3] mb-1">
            {data.name}
          </p>
          <p className="text-xs text-[#57606a] dark:text-[#8b949e]">
            {formatCurrency(data.value)}
          </p>
          <p className="text-xs text-[#57606a] dark:text-[#8b949e]">
            {data.percentage}% av budget
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d0d7de" opacity={0.3} />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12, fill: "#57606a" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#57606a" }}
            tickFormatter={(value) => formatCurrency(value)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
