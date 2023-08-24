import {create} from 'zustand';
import { theWords } from "./theWords";


const words4 = theWords.filter((item) => item.length === 6);

const useWordStore = create((set) => ({
  words: words4, // Initial state is an empty array

  setWords: (newWords) => set({ words: newWords }),
}));

export default useWordStore;
