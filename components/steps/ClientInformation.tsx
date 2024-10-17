"use client"

import React, { useState, useEffect } from 'react';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { omanClients, Client } from '@/data/omanClients';
import AddressAutocomplete from '@/components/AddressAutocomplete';

const ClientInformation: React.FC = () => {
  const { clientInfo, setClientInfo, setCurrentStep } = useConfiguratorStore();
  const [clientType, setClientType] = useState<'new' | 'returning'>('new');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Client[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setCurrentStep(1);
  };

  const handleSearch = () => {
    const results = omanClients.filter(client => 
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery)
    );
    setSearchResults(results);
  };

  const handleSelectClient = (client: Client) => {
    setClientInfo({
      name: client.name,
      phone: client.phone,
      email: client.email,
      address: client.address
    });
    setSearchResults([]);
    setSearchQuery('');
  };

  useEffect(() => {
    if (searchQuery.length > 2) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Client Information</h2>
      
      <RadioGroup
        value={clientType}
        onValueChange={(value) => setClientType(value as 'new' | 'returning')}
        className="flex space-x-4 mb-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="new" id="new" />
          <Label htmlFor="new">New Client</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="returning" id="returning" />
          <Label htmlFor="returning">Returning Client</Label>
        </div>
      </RadioGroup>

      {clientType === 'returning' && (
        <div className="space-y-4 mb-6">
          <Label htmlFor="search">Search for Returning Client</Label>
          <div className="flex space-x-2">
            <Input
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter name or phone number"
            />
          </div>
          {searchResults.length > 0 && (
            <ul className="mt-2 border rounded-md shadow-sm">
              {searchResults.map((client) => (
                <li
                  key={client.id}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectClient(client)}
                >
                  {client.name} - {client.phone}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={clientInfo.name}
            onChange={handleChange}
            placeholder="Enter client name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={clientInfo.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={clientInfo.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>
        <AddressAutocomplete
          value={clientInfo.address}
          onChange={(value) => setClientInfo({ ...clientInfo, address: value })}
        />
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Your personal information is securely stored and used only for order processing. We comply with all applicable privacy laws.
        </AlertDescription>
      </Alert>

      <Button onClick={handleNext} className="mt-4">Next</Button>
    </div>
  );
};

export default ClientInformation;