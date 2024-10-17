"use client"

import React from 'react';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const customizationOptions = [
  'Embroidery',
  'Lace Trim',
  'Adjustable Waist',
  'Extra Pockets',
  'Contrast Stitching',
  'Custom Buttons',
];

const Customizations: React.FC = () => {
  const { customizations, setCustomizations } = useConfiguratorStore();

  const handleCustomizationChange = (option: string) => {
    setCustomizations(
      customizations.includes(option)
        ? customizations.filter((item) => item !== option)
        : [...customizations, option]
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Customizations</h2>
      <div className="space-y-4">
        {customizationOptions.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={option}
              checked={customizations.includes(option)}
              onCheckedChange={() => handleCustomizationChange(option)}
            />
            <Label htmlFor={option}>{option}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customizations;