import {create} from 'zustand';
//import { theWords } from "./theWords";
import {easyWordList} from './easyWordList'


//const words4 = theWords.filter((item) => item.length === 6);

const easyWords = easyWordList


const useWordStore = create((set) => ({
 // words: words4, // Initial state is an empty array
  eayWordStore:easyWords,
  setEasyWordrds:(newWords) =>set({eayWordStore:newWords}),

  setWords: (newWords) => set({ words: newWords }),
}));

export default useWordStore;
