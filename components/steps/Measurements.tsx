"use client"

import React from 'react';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const measurementFields = [
  'bust', 'waist', 'hips', 'shoulderWidth', 'sleeveLength', 'inseam', 'outseam'
];

const Measurements: React.FC = () => {
  const { measurements, setMeasurements } = useConfiguratorStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeasurements({ ...measurements, [e.target.name]: Number(e.target.value) });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Measurements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {measurementFields.map((field) => (
          <div key={field} className="space-y-2">
            <Label htmlFor={field} className="capitalize">{field}</Label>
            <Input
              id={field}
              name={field}
              type="number"
              value={measurements[field] || ''}
              onChange={handleChange}
              placeholder={`Enter ${field} measurement`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Measurements;