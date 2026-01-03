import { Municipality, TaxCalculation } from "./types";

// Swedish state tax brackets (2024)
const STATE_TAX_THRESHOLD_YEARLY = 598_500; // SEK per year
const STATE_TAX_RATE = 20; // Percentage on income above threshold

// Standard deduction (jobbskatteavdrag) - simplified calculation
const BASIC_DEDUCTION = 0.43; // Approximate 43% of income, max applies

export function calculateTax(
  monthlySalary: number,
  municipality: Municipality
): TaxCalculation {
  const yearlySalary = monthlySalary * 12;

  // Calculate local tax (municipal + county)
  const localTaxRate = municipality.municipalTaxRate + municipality.countyTaxRate;
  const monthlyLocalTax = (monthlySalary * localTaxRate) / 100;

  // Calculate state tax (only on income above threshold)
  let monthlyStateTax = 0;
  if (yearlySalary > STATE_TAX_THRESHOLD_YEARLY) {
    const taxableForStateTax = yearlySalary - STATE_TAX_THRESHOLD_YEARLY;
    monthlyStateTax = (taxableForStateTax * STATE_TAX_RATE) / 100 / 12;
  }

  // Split local tax into municipal and county
  const municipalTax = (monthlySalary * municipality.municipalTaxRate) / 100;
  const countyTax = (monthlySalary * municipality.countyTaxRate) / 100;

  const totalTax = monthlyLocalTax + monthlyStateTax;
  const netSalary = monthlySalary - totalTax;

  return {
    grossSalary: monthlySalary,
    municipalTax,
    countyTax,
    stateTax: monthlyStateTax,
    totalTax,
    netSalary,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`;
}
