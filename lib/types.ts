export interface BudgetCategory {
  name: string;
  percentage: number;
  color: string;
  description?: string;
}

export interface Municipality {
  code: string;
  name: string;
  county: string;
  municipalTaxRate: number; // Percentage
  countyTaxRate: number; // Percentage
  municipalBudget?: BudgetCategory[];
  countyBudget?: BudgetCategory[];
}

export interface TaxCalculation {
  grossSalary: number;
  municipalTax: number;
  countyTax: number;
  stateTax: number;
  totalTax: number;
  netSalary: number;
}
