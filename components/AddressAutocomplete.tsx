"use client"

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { omanClients } from '@/data/omanClients';

const AddressAutocomplete: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (inputValue.length > 2) {
      const filteredSuggestions = omanClients
        .map(client => client.address)
        .filter(addr =>
          addr.toLowerCase().includes(inputValue.toLowerCase())
        );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter address"
      />
      {suggestions.length > 0 && (
        <ul className="mt-1 border rounded-md shadow-sm">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;