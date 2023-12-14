import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const timerWorker = new Worker(`./timerWorker.js`);

type TimerState = {
  time?: number;
  isRunning?: boolean;
  startTime?: number | null;
  matchingEndTime?: number | null;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  setStartTime: (startTime: number | null) => void;
  setMatchingEndTime: (matchingEndTime: number | null) => void;
};

const useTimerStore = create(
  persist<TimerState>(
    (set, get) => ({
      startTimer: async () => {
        const startTime = get().startTime || Date.now();
        timerWorker.postMessage({ type: "START", startTime });
        set({ isRunning: true, startTime });
      },
      stopTimer: () => {
        set({ isRunning: false, startTime: null });
        timerWorker.postMessage({ type: "STOP" });
      },
      resetTimer: () => {
        const matchingEndTime = Date.now();
        set({ time: 0, isRunning: false, startTime: null, matchingEndTime });
        timerWorker.postMessage({ type: "RESET" });
      },
      setStartTime: (startTime) => set({ startTime }),
      setMatchingEndTime: (matchingEndTime) => set({ matchingEndTime }),
    }),
    {
      name: "timer-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

timerWorker.onmessage = (event) => {
  const { type, time } = event.data;
  if (type === "TICK") {
    useTimerStore.setState({ time });
  }
};

export default useTimerStore;
