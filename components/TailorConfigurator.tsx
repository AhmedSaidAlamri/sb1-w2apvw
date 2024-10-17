"use client"

import React from 'react';
import { useConfiguratorStore } from '@/store/configuratorStore';
import ClientInformation from './steps/ClientInformation';
import FabricSelection from './steps/FabricSelection';
import Measurements from './steps/Measurements';
import Customizations from './steps/Customizations';
import ReviewConfirmation from './steps/ReviewConfirmation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const steps = [
  { id: 'clientInfo', label: 'Client Info', component: ClientInformation },
  { id: 'fabricSelection', label: 'Fabric', component: FabricSelection },
  { id: 'measurements', label: 'Measurements', component: Measurements },
  { id: 'customizations', label: 'Customizations', component: Customizations },
  { id: 'review', label: 'Review', component: ReviewConfirmation },
];

const TailorConfigurator: React.FC = () => {
  const { currentStep, setCurrentStep } = useConfiguratorStore();

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs value={steps[currentStep].id} onValueChange={(value) => setCurrentStep(steps.findIndex(step => step.id === value))}>
        <TabsList className="grid w-full grid-cols-5">
          {steps.map((step) => (
            <TabsTrigger key={step.id} value={step.id}>{step.label}</TabsTrigger>
          ))}
        </TabsList>
        {steps.map((step) => (
          <TabsContent key={step.id} value={step.id}>
            <step.component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TailorConfigurator;