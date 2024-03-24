import { create } from 'zustand';

interface SwipeStore {
  isSwipe: boolean;
  onSwipe: () => void;
}

const useSwipeStore = create<SwipeStore>(set => ({
  isSwipe: true,
  onSwipe: () =>
    set(state => {
      return { isSwipe: !state.isSwipe };
    }),
}));

export default useSwipeStore;
