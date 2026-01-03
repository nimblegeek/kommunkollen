"use client";

import { TaxCalculation } from "@/lib/types";
import { formatCurrency } from "@/lib/taxCalculations";

interface TaxBreakdownProps {
  calculation: TaxCalculation;
}

export default function TaxBreakdown({ calculation }: TaxBreakdownProps) {
  const taxPercentage = (
    (calculation.totalTax / calculation.grossSalary) *
    100
  ).toFixed(2);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-semibold text-[#24292f] dark:text-[#e6edf3] mb-4">
          Skatteöversikt
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-[#ddf4ff] dark:bg-[#1c2d41] border border-[#54aeff] dark:border-[#1f6feb] rounded-md">
            <span className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3]">
              Bruttolön
            </span>
            <span className="text-base font-semibold text-[#24292f] dark:text-[#e6edf3]">
              {formatCurrency(calculation.grossSalary)}
            </span>
          </div>

          <div className="space-y-2 pl-4 border-l-2 border-[#d0d7de] dark:border-[#30363d]">
            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-[#57606a] dark:text-[#8b949e]">
                Kommunalskatt
              </span>
              <span className="text-sm font-medium text-[#cf222e] dark:text-[#ff7b72]">
                -{formatCurrency(calculation.municipalTax)}
              </span>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-sm text-[#57606a] dark:text-[#8b949e]">
                Landstingsskatt
              </span>
              <span className="text-sm font-medium text-[#cf222e] dark:text-[#ff7b72]">
                -{formatCurrency(calculation.countyTax)}
              </span>
            </div>

            {calculation.stateTax > 0 && (
              <div className="flex justify-between items-center py-1">
                <span className="text-sm text-[#57606a] dark:text-[#8b949e]">
                  Statlig skatt
                </span>
                <span className="text-sm font-medium text-[#cf222e] dark:text-[#ff7b72]">
                  -{formatCurrency(calculation.stateTax)}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center pt-3 mt-2 border-t border-[#d0d7de] dark:border-[#30363d]">
              <span className="text-sm font-medium text-[#24292f] dark:text-[#e6edf3]">
                Total skatt ({taxPercentage}%)
              </span>
              <span className="text-base font-semibold text-[#cf222e] dark:text-[#ff7b72]">
                -{formatCurrency(calculation.totalTax)}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-[#dafbe1] dark:bg-[#1c2d20] border-2 border-[#2da44e] dark:border-[#3fb950] rounded-md mt-4">
            <span className="text-base font-semibold text-[#24292f] dark:text-[#e6edf3]">
              Nettolön
            </span>
            <span className="text-xl font-bold text-[#1a7f37] dark:text-[#3fb950]">
              {formatCurrency(calculation.netSalary)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#fff8c5] dark:bg-[#3d2f00] border border-[#d4a72c] dark:border-[#9e6a03] rounded-md">
        <div className="flex gap-2">
          <svg className="w-4 h-4 text-[#9a6700] dark:text-[#f8e3a1] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
          </svg>
          <p className="text-xs text-[#9a6700] dark:text-[#f8e3a1]">
            Beräkningen är förenklad och tar inte hänsyn till jobbskatteavdrag, grundavdrag eller andra avdrag.
          </p>
        </div>
      </div>
    </div>
  );
}
