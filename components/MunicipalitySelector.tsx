"use client";

import { Municipality } from "@/lib/types";

interface MunicipalitySelectorProps {
  municipalities: Municipality[];
  selectedMunicipality: Municipality | null;
  onChange: (municipality: Municipality) => void;
}

export default function MunicipalitySelector({
  municipalities,
  selectedMunicipality,
  onChange,
}: MunicipalitySelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const municipality = municipalities.find((m) => m.code === e.target.value);
    if (municipality) {
      onChange(municipality);
    }
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="municipality"
        className="block text-sm font-medium text-[#24292f] dark:text-[#e6edf3] mb-2"
      >
        Kommun
      </label>
      <select
        id="municipality"
        value={selectedMunicipality?.code || ""}
        onChange={handleChange}
        className="github-input w-full text-[#24292f] dark:text-[#e6edf3]"
      >
        <option value="">Välj kommun...</option>
        {municipalities.map((municipality) => (
          <option key={municipality.code} value={municipality.code}>
            {municipality.name}
          </option>
        ))}
      </select>
      {selectedMunicipality && (
        <div className="mt-3 p-3 bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded-md space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-[#57606a] dark:text-[#8b949e]">Kommunalskatt:</span>
            <span className="font-medium text-[#24292f] dark:text-[#e6edf3]">
              {selectedMunicipality.municipalTaxRate.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#57606a] dark:text-[#8b949e]">Landstingsskatt:</span>
            <span className="font-medium text-[#24292f] dark:text-[#e6edf3]">
              {selectedMunicipality.countyTaxRate.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between pt-1.5 border-t border-[#d0d7de] dark:border-[#30363d]">
            <span className="font-medium text-[#24292f] dark:text-[#e6edf3]">Total:</span>
            <span className="font-semibold text-[#24292f] dark:text-[#e6edf3]">
              {(
                selectedMunicipality.municipalTaxRate +
                selectedMunicipality.countyTaxRate
              ).toFixed(2)}
              %
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
