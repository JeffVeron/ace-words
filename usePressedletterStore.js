/*   // arrayStore.js
import { create } from "zustand";

const usePressedLetterStore = create((set) => ({
  values: [],
  addToValues: (newValue) =>
    set((state) => ({ values: [...state.values, newValue] })),
  removeLastValue: () =>
    set((state) => ({ values: state.values.slice(0, -1) })),
  addLastRemovedValue: () =>
    set((state) => {
      const lastRemoved = state.values.pop();
      const newValues= state.values.push(lastRemoved)
      return { 
       values: [...state.values,/*  lastRemoved  */ /* newValues] 
     
   }}),
}));

export default usePressedLetterStore;   */ 


/* // arrayStore.js
import { create } from 'zustand';

 
 
const usePressedLetterStore = create((set) => ({
  values: [],
  removedValues: [],

  const removeOneValue =  state.values.slice(0, -1)
  
  addToValues: (newValue) => set((state) => ({ values: [...state.values, newValue] })),
  
  removeLastValue: () =>
 set((state) => ({ values: state.values.slice(0, -1) })),
 
  addLastRemovedValue: () => set((state) => {
    const newRemovedValues = [...state.removedValues];
    const lastAddedValue = newRemovedValues.pop();
    return {
      values: [...state.values, lastAddedValue],
      removedValues: newRemovedValues,
    };
  }),
}));

export default usePressedLetterStore;
 */

//third try 
import { create } from 'zustand';

const usePressedLetterStore = create((set) => ({
  values: [],
  addToValues: (newValue) =>
    set((state) => ({ values: [...state.values, newValue] })),
  /* removeLastValue: () =>
    set((state) => ({ values: state.values.slice(0, -1) })), */
/* removeLastValue: () =>
    set((state) => ({ values: removeLast(state.values) })), */
    slicedState: ()=>set( (state) =>sliceFunction(state)),
    modifiedState:()=>set( (slicedState) =>addBackFunction(slicedState)),
    
}));

const removeAndSaveLastValue = () => {
  let savedValue = null;

  const sliceFunction = (state) => {
    savedValue = state.values[state.values.length - 1];
    return { values: state.values.slice(0, -1) };
  };

  const addBackFunction = (state) => {
    return { values: [...state.values, savedValue] };
  };

  return [sliceFunction, addBackFunction];
};

const [sliceFunction, addBackFunction] = removeAndSaveLastValue();
export default usePressedLetterStore;
