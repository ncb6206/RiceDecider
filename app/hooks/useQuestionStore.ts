import { create } from 'zustand';

export interface QuestionDataProps {
  question: string;
  answers: Array<string>;
}

interface QuestionStore {
  questionNumber: number;
  disabled: boolean;
  finished: boolean;
  selected: Array<boolean>;
  questionData: Array<QuestionDataProps>;
  onToggleSelect: (index: number) => void;
  onResetSelected: () => void;
  onResetNumber: () => void;
  onCreateSelect: () => void;
}

const useQuestionStore = create<QuestionStore>(set => ({
  questionNumber: 0,
  disabled: true,
  finished: false,
  selected: [],
  questionData: [
    {
      question: '몇명이서 먹을건가요?',
      answers: ['1명', '2명', '3명', '4명', '5명'],
    },
    {
      question: '어떤 종류가 끌리나요?',
      answers: ['밥', '면', '국물', '다 좋아요', '다 별로에요'],
    },
    {
      question: '어떤 재료를 선호하시나요?',
      answers: ['고기', '채소', '해산물', '다 좋아요'],
    },
    {
      question: '매운 음식을 즐기나요?',
      answers: ['아예 못먹어요', '보통이에요', '아주 좋아해요'],
    },
    {
      question: '주차 공간이 필요해요?',
      answers: ['네 필요해요', '아니요 필요없어요'],
    },
  ],
  onToggleSelect: (index: number) =>
    set(state => {
      const newSelected = [...state.selected];
      newSelected[index] = !newSelected[index];
      if (newSelected.filter(item => item === true).length > 1) {
        // 어떻게 구현할지에 따라 달라짐
        // newSelected.map(item => (item = false));
        newSelected.fill(false);
        newSelected[index] = !newSelected[index];
      }
      console.log('onToggleSelect 실행');

      return { selected: newSelected };
    }),
  onResetSelected: () =>
    set(state => {
      const newSelected = [...state.selected];
      // 어떻게 구현할지에 따라 달라짐
      // newSelected.map(item => (item = false));
      newSelected.fill(false);

      console.log('onResetSelected 실행', newSelected);
      return { selected: newSelected };
    }),
  onResetNumber: () => set({ questionNumber: 0, finished: false }),
  onCreateSelect: () =>
    set(state => {
      const newSelected =
        state.questionData.length > 0
          ? Array(state.questionData.length).fill(false)
          : [];

      return { selected: newSelected };
    }),
}));

export default useQuestionStore;
