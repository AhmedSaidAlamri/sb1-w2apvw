"use client"

import React from 'react';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const ReviewConfirmation: React.FC = () => {
  const { clientInfo, fabricSelection, measurements, customizations } = useConfiguratorStore();

  const handleSubmit = () => {
    // Here you would typically send the order data to your backend
    console.log('Order submitted:', { clientInfo, fabricSelection, measurements, customizations });
    alert('Order submitted successfully!');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Review and Confirmation</h2>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Client Information</h3>
        <Table>
          <TableBody>
            {Object.entries(clientInfo).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium capitalize">{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Fabric Selection</h3>
        <Table>
          <TableBody>
            {Object.entries(fabricSelection).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium capitalize">{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Measurements</h3>
        <Table>
          <TableBody>
            {Object.entries(measurements).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium capitalize">{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Customizations</h3>
        <ul className="list-disc list-inside">
          {customizations.map((customization) => (
            <li key={customization}>{customization}</li>
          ))}
        </ul>
      </div>

      <Button onClick={handleSubmit} className="w-full">
        Confirm and Submit Order
      </Button>
    </div>
  );
};

export default ReviewConfirmation;