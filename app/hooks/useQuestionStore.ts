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
}

const useQuestionStore = create<QuestionStore>(set => ({
  questionNumber: 0,
  disabled: true,
  finished: false,
  selected: [false, false, false, false, false],
  questionData: [
    {
      question: '몇명이서 먹을건가요?1',
      answers: ['1명', '2명', '3명', '4명', '5명'],
    },
    {
      question: '몇명이서 먹을건가요?2',
      answers: ['1명', '2명', '3명', '4명', '5명'],
    },
    {
      question: '몇명이서 먹을건가요?3',
      answers: ['1명', '2명', '3명', '4명', '5명'],
    },
    {
      question: '몇명이서 먹을건가요?4',
      answers: ['1명', '2명', '3명', '4명', '5명'],
    },
    {
      question: '몇명이서 먹을건가요?5',
      answers: ['1명', '2명', '3명', '4명', '5명'],
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
}));

export default useQuestionStore;
