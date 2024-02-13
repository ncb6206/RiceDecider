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
  categoryName: string;
  disabled: boolean;
  finished: boolean;
  selected: Array<number>;
  keywordList: Array<string>;
  questionData: Array<QuestionDataProps>;
  setQuestionNumber: (questionNum: number) => void;
  setFinished: (finish: boolean) => void;
  setDisabled: (disable: boolean) => void;
  setQuestionData: (question: Array<QuestionDataProps>) => void;
  setCategoryName: (category: string) => void;
  onToggleSelect: (index: number) => void;
  onResetSelected: () => void;
  onResetNumber: () => void;
  onCreateSelect: () => void;
  onAddKeyword: (keyword: string) => void;
  onResetkeywordList: () => void;
}

const useQuestionStore = create<QuestionStore>(set => ({
  questionNumber: 0,
  categoryName: '',
  disabled: true,
  finished: false,
  selected: [],
  keywordList: [],
  questionData: [],
  setQuestionNumber: questionNum => set({ questionNumber: questionNum }),
  setFinished: finish => set({ finished: finish }),
  setDisabled: disable => set({ disabled: disable }),
  setQuestionData: question => set({ questionData: question }),
  setCategoryName: category => set({ categoryName: category }),
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
  onResetkeywordList: () => set({ keywordList: [] }),
}));

export default useQuestionStore;
