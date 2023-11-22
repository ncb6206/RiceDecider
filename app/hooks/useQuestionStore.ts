import { create } from 'zustand';

export interface AnswerDtoListProps {
  content: string;
  keyword: string;
}
export interface QuestionDataProps {
  questionContent: string;
  answerDtoList: AnswerDtoListProps[];
}

interface QuestionStore {
  questionNumber: number;
  disabled: boolean;
  finished: boolean;
  selected: Array<number>;
  questionData: Array<QuestionDataProps>;
  keywordList: Array<string>;
  onToggleSelect: (index: number) => void;
  onResetSelected: () => void;
  onResetNumber: () => void;
  onCreateSelect: () => void;
  onAddKeyword: (keyword: string) => void;
}

const useQuestionStore = create<QuestionStore>(set => ({
  questionNumber: 0,
  disabled: true,
  finished: false,
  selected: [],
  keywordList: [],
  questionData: [],
  onToggleSelect: (index: number) =>
    set(state => {
      const newSelected = [...state.selected];

      if (newSelected[0] && newSelected[0] === index) {
        return { selected: [] };
      }

      newSelected[0] = index;

      return { selected: newSelected };
    }),
  onResetSelected: () => set({ selected: [] }),
  onResetNumber: () => set({ questionNumber: 0, finished: false }),
  onCreateSelect: () =>
    set(state => {
      const newSelected =
        state.questionData.length > 0
          ? Array(
              state.questionData[state.questionNumber].answerDtoList.length,
            ).fill(false)
          : [];

      return { selected: newSelected };
    }),
  onAddKeyword: (keyword: string) =>
    set(state => {
      const newKeywordList = [...state.keywordList, keyword];

      return { keywordList: newKeywordList };
    }),
}));

export default useQuestionStore;
