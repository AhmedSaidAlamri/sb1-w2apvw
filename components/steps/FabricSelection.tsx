"use client"

import React from 'react';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const FabricSelection: React.FC = () => {
  const { fabricSelection, setFabricSelection } = useConfiguratorStore();

  const handleSourceChange = (value: 'stock' | 'client' | 'tailor') => {
    setFabricSelection({ ...fabricSelection, source: value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFabricSelection({ ...fabricSelection, type: e.target.value });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFabricSelection({ ...fabricSelection, quantity: Number(e.target.value) });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Fabric Selection</h2>
      <div className="space-y-4">
        <Label>Fabric Source</Label>
        <RadioGroup
          value={fabricSelection.source}
          onValueChange={handleSourceChange}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="stock" id="stock" />
            <Label htmlFor="stock">Stock Fabric</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="client" id="client" />
            <Label htmlFor="client">Client-Provided Fabric</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tailor" id="tailor" />
            <Label htmlFor="tailor">Tailor-Provided Fabric</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="fabricType">Fabric Type</Label>
        <Input
          id="fabricType"
          value={fabricSelection.type}
          onChange={handleTypeChange}
          placeholder="Enter fabric type"
        />
      </div>
      {fabricSelection.source === 'client' && (
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity (meters)</Label>
          <Input
            id="quantity"
            type="number"
            value={fabricSelection.quantity || ''}
            onChange={handleQuantityChange}
            placeholder="Enter fabric quantity"
          />
        </div>
      )}
    </div>
  );
};

export default FabricSelection;