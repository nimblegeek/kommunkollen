"use client";

import { BudgetCategory } from "@/lib/types";
import { formatCurrency } from "@/lib/taxCalculations";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface BudgetChartProps {
  budget: BudgetCategory[];
  totalAmount: number;
}

export default function BudgetChart({ budget, totalAmount }: BudgetChartProps) {
  const chartData = budget.map((category) => ({
    name: category.name,
    value: category.percentage,
    amount: (totalAmount * category.percentage) / 100,
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
            {formatCurrency(data.amount)} ({data.value}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs text-[#24292f] dark:text-[#e6edf3] truncate">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${value}%`}
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={2}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
