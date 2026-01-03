"use client";

import { useState } from "react";
import SalaryInput from "@/components/SalaryInput";
import MunicipalitySelector from "@/components/MunicipalitySelector";
import TaxBreakdown from "@/components/TaxBreakdown";
import BudgetBreakdown from "@/components/BudgetBreakdown";
import { municipalities } from "@/lib/municipalities";
import { Municipality } from "@/lib/types";
import { calculateTax } from "@/lib/taxCalculations";

export default function Home() {
  const [salary, setSalary] = useState(35000);
  const [selectedMunicipality, setSelectedMunicipality] =
    useState<Municipality | null>(null);

  const taxCalculation =
    salary > 0 && selectedMunicipality
      ? calculateTax(salary, selectedMunicipality)
      : null;

  return (
    <main className="min-h-screen bg-[#f6f8fa] dark:bg-[#0d1117]">
      {/* Header */}
      <div className="border-b border-[#d0d7de] dark:border-[#30363d] bg-white dark:bg-[#161b22]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
          <h1 className="text-2xl font-semibold text-[#24292f] dark:text-[#e6edf3]">
            Kommunkollen
          </h1>
          <p className="text-[#57606a] dark:text-[#8b949e] mt-1">
            Se var dina skattepengar går
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left sidebar - Input */}
          <div className="lg:col-span-1 space-y-4">
            <div className="github-card p-4">
              <h2 className="text-base font-semibold text-[#24292f] dark:text-[#e6edf3] mb-4 pb-3 border-b border-[#d0d7de] dark:border-[#30363d]">
                Dina uppgifter
              </h2>
              <div className="space-y-4">
                <SalaryInput value={salary} onChange={setSalary} />
                <MunicipalitySelector
                  municipalities={municipalities}
                  selectedMunicipality={selectedMunicipality}
                  onChange={setSelectedMunicipality}
                />
              </div>
            </div>

            {!selectedMunicipality && salary > 0 && (
              <div className="github-card p-4 bg-[#ddf4ff] dark:bg-[#1c2d41] border-[#54aeff] dark:border-[#1f6feb]">
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-[#0969da] dark:text-[#58a6ff] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                  </svg>
                  <p className="text-sm text-[#0969da] dark:text-[#58a6ff]">
                    Välj din kommun för att se skatteberäkningen
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {taxCalculation && selectedMunicipality ? (
              <>
                <div className="github-card p-6">
                  <TaxBreakdown calculation={taxCalculation} />
                </div>

                <div className="github-card p-6">
                  <BudgetBreakdown
                    municipality={selectedMunicipality}
                    calculation={taxCalculation}
                  />
                </div>
              </>
            ) : (
              <div className="github-card p-12 text-center">
                <svg className="w-12 h-12 text-[#57606a] dark:text-[#8b949e] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-medium text-[#24292f] dark:text-[#e6edf3] mb-2">
                  Kom igång
                </h3>
                <p className="text-[#57606a] dark:text-[#8b949e] text-sm max-w-md mx-auto">
                  Fyll i din månadslön och välj din kommun i sidopanelen för att se en detaljerad skatteberäkning och budgetöversikt
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
