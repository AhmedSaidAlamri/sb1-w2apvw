import { create } from 'zustand';

interface ConfiguratorState {
  currentStep: number;
  clientInfo: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  fabricSelection: {
    type: string;
    source: 'stock' | 'client' | 'tailor';
    quantity?: number;
  };
  measurements: Record<string, number>;
  customizations: string[];
  setCurrentStep: (step: number) => void;
  setClientInfo: (info: ConfiguratorState['clientInfo']) => void;
  setFabricSelection: (fabric: ConfiguratorState['fabricSelection']) => void;
  setMeasurements: (measurements: ConfiguratorState['measurements']) => void;
  setCustomizations: (customizations: string[]) => void;
  isStepComplete: (step: number) => boolean;
}

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  currentStep: 0,
  clientInfo: { name: '', phone: '', email: '', address: '' },
  fabricSelection: { type: '', source: 'stock' },
  measurements: {},
  customizations: [],
  setCurrentStep: (step) => set({ currentStep: step }),
  setClientInfo: (info) => set({ clientInfo: info }),
  setFabricSelection: (fabric) => set({ fabricSelection: fabric }),
  setMeasurements: (measurements) => set({ measurements }),
  setCustomizations: (customizations) => set({ customizations }),
  isStepComplete: (step) => {
    const state = get();
    switch (step) {
      case 0:
        return Object.values(state.clientInfo).every(value => value !== '');
      case 1:
        return state.fabricSelection.type !== '' && state.fabricSelection.source !== '';
      case 2:
        return Object.keys(state.measurements).length > 0;
      case 3:
        return true; // Customizations are optional
      case 4:
        return true; // Review is always accessible
      default:
        return false;
    }
  },
}));