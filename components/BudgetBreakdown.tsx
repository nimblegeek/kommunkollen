"use client";

import { Municipality, TaxCalculation } from "@/lib/types";
import { formatCurrency } from "@/lib/taxCalculations";
import { useState } from "react";

interface BudgetBreakdownProps {
  municipality: Municipality;
  calculation: TaxCalculation;
}

export default function BudgetBreakdown({
  municipality,
  calculation,
}: BudgetBreakdownProps) {
  const [activeTab, setActiveTab] = useState<"municipal" | "county">("municipal");

  const municipalBudget = municipality.municipalBudget || [];
  const countyBudget = municipality.countyBudget || [];

  const currentBudget = activeTab === "municipal" ? municipalBudget : countyBudget;
  const currentTax = activeTab === "municipal" ? calculation.municipalTax : calculation.countyTax;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-semibold text-[#24292f] dark:text-[#e6edf3] mb-1">
          Budgetfördelning
        </h3>
        <p className="text-xs text-[#57606a] dark:text-[#8b949e] mb-4">
          Se hur din kommun och landsting fördelar budgeten
        </p>

        {/* Tab buttons */}
        <div className="flex gap-2 mb-6 border-b border-[#d0d7de] dark:border-[#30363d]">
          <button
            onClick={() => setActiveTab("municipal")}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === "municipal"
                ? "border-[#fd8c73] text-[#24292f] dark:text-[#e6edf3]"
                : "border-transparent text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#e6edf3] hover:border-[#d0d7de] dark:hover:border-[#30363d]"
            }`}
          >
            Kommunalskatt
            <span className="ml-2 text-xs font-semibold">
              {formatCurrency(calculation.municipalTax)}
            </span>
          </button>
          {calculation.countyTax > 0 && (
            <button
              onClick={() => setActiveTab("county")}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeTab === "county"
                  ? "border-[#fd8c73] text-[#24292f] dark:text-[#e6edf3]"
                  : "border-transparent text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#e6edf3] hover:border-[#d0d7de] dark:hover:border-[#30363d]"
              }`}
            >
              Landstingsskatt
              <span className="ml-2 text-xs font-semibold">
                {formatCurrency(calculation.countyTax)}
              </span>
            </button>
          )}
        </div>

        {/* Budget breakdown */}
        <div className="space-y-4">
          {currentBudget.length === 0 ? (
            <p className="text-[#57606a] dark:text-[#8b949e] text-center py-8 text-sm">
              Ingen budgetdata tillgänglig för denna kommun
            </p>
          ) : (
            currentBudget.map((category, index) => {
              const amount = (currentTax * category.percentage) / 100;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3]">
                        {category.name}
                      </h4>
                      {category.description && (
                        <p className="text-xs text-[#57606a] dark:text-[#8b949e] mt-0.5">
                          {category.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-semibold text-[#24292f] dark:text-[#e6edf3]">
                        {formatCurrency(amount)}
                      </div>
                      <div className="text-xs text-[#57606a] dark:text-[#8b949e]">
                        {category.percentage}%
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-[#d0d7de] dark:bg-[#30363d] rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${category.percentage}%`,
                        backgroundColor: category.color,
                      }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Summary */}
        {currentBudget.length > 0 && (
          <div className="mt-6 p-3 bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3]">
                {activeTab === "municipal"
                  ? `Total kommunalskatt i ${municipality.name}`
                  : `Total landstingsskatt i ${municipality.county}`}
              </span>
              <span className="text-base font-bold text-[#24292f] dark:text-[#e6edf3]">
                {formatCurrency(currentTax)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-[#ddf4ff] dark:bg-[#1c2d41] border border-[#54aeff] dark:border-[#1f6feb] rounded-md">
        <div className="flex gap-2">
          <svg className="w-4 h-4 text-[#0969da] dark:text-[#58a6ff] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
          </svg>
          <p className="text-xs text-[#0969da] dark:text-[#58a6ff]">
            Budgetfördelningen är en uppskattning baserad på typiska svenska kommuner och landsting. För exakta siffror, besök {municipality.name}s officiella webbplats.
          </p>
        </div>
      </div>
    </div>
  );
}
