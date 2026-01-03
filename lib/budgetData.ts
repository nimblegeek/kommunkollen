import { BudgetCategory } from "./types";

// Sample municipal budget breakdown (typical Swedish municipality)
export const defaultMunicipalBudget: BudgetCategory[] = [
  {
    name: "Utbildning",
    percentage: 38,
    color: "#3b82f6",
    description: "Förskola, grundskola och gymnasieskola",
  },
  {
    name: "Vård och omsorg",
    percentage: 32,
    color: "#10b981",
    description: "Äldreomsorg, LSS och funktionsnedsättning",
  },
  {
    name: "Socialtjänst",
    percentage: 10,
    color: "#f59e0b",
    description: "Individ- och familjeomsorg, ekonomiskt bistånd",
  },
  {
    name: "Infrastruktur",
    percentage: 8,
    color: "#6366f1",
    description: "Gator, vatten, avlopp och renhållning",
  },
  {
    name: "Kultur och fritid",
    percentage: 6,
    color: "#ec4899",
    description: "Bibliotek, idrottsanläggningar och kulturverksamhet",
  },
  {
    name: "Administration",
    percentage: 4,
    color: "#8b5cf6",
    description: "Politisk verksamhet och gemensam administration",
  },
  {
    name: "Övrigt",
    percentage: 2,
    color: "#64748b",
    description: "Näringsliv, miljö och räddningstjänst",
  },
];

// Sample county (landsting/region) budget breakdown
export const defaultCountyBudget: BudgetCategory[] = [
  {
    name: "Hälso- och sjukvård",
    percentage: 90,
    color: "#10b981",
    description: "Primärvård, specialistvård och tandvård",
  },
  {
    name: "Kollektivtrafik",
    percentage: 7,
    color: "#3b82f6",
    description: "Busstrafik, tunnelbana och pendeltåg",
  },
  {
    name: "Kultur och regional utveckling",
    percentage: 2,
    color: "#ec4899",
    description: "Regional kulturverksamhet och näringslivsutveckling",
  },
  {
    name: "Administration",
    percentage: 1,
    color: "#8b5cf6",
    description: "Regionförvaltning och politisk verksamhet",
  },
];

// Variant budget for larger cities (e.g., Stockholm)
export const largeCityMunicipalBudget: BudgetCategory[] = [
  {
    name: "Utbildning",
    percentage: 35,
    color: "#3b82f6",
    description: "Förskola, grundskola och gymnasieskola",
  },
  {
    name: "Vård och omsorg",
    percentage: 30,
    color: "#10b981",
    description: "Äldreomsorg, LSS och funktionsnedsättning",
  },
  {
    name: "Socialtjänst",
    percentage: 12,
    color: "#f59e0b",
    description: "Individ- och familjeomsorg, ekonomiskt bistånd",
  },
  {
    name: "Infrastruktur",
    percentage: 10,
    color: "#6366f1",
    description: "Gator, vatten, avlopp och renhållning",
  },
  {
    name: "Kultur och fritid",
    percentage: 8,
    color: "#ec4899",
    description: "Bibliotek, idrottsanläggningar och kulturverksamhet",
  },
  {
    name: "Administration",
    percentage: 3,
    color: "#8b5cf6",
    description: "Politisk verksamhet och gemensam administration",
  },
  {
    name: "Övrigt",
    percentage: 2,
    color: "#64748b",
    description: "Näringsliv, miljö och räddningstjänst",
  },
];
