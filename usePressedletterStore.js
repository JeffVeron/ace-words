// arrayStore.js
import {create} from 'zustand';

const usePressedLetterStore = create((set) => ({
  values: [],
  addToValues: (newValue) => set((state) => ({ values: [...state.values, newValue] })),
}));

export default usePressedLetterStore ;
