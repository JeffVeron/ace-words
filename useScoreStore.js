// scoreStore.js
import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For persistence

const useScoreStore = create((set) => ({
  score: 0,
  // Load initial state from AsyncStorage
  loadPersistedState: async () => {
    try {
      const persistedScore = await AsyncStorage.getItem('score');
      if (persistedScore !== null) {
        set({ score: parseInt(persistedScore) });
      }
    } catch (error) {
      console.error('Error loading persisted score:', error);
    }
  },
  // Update score
  updateScore: (newScore) => {
    set({ score: newScore });
    // Persist the updated score
    AsyncStorage.setItem('score', newScore.toString())
      .catch((error) => console.error('Error persisting score:', error));
  },
}));

export default useScoreStore;

