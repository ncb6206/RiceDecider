'use client';

import { useEffect } from 'react';

import Button from '@/app/components/button/Button';
import ResultButton from '@/app/components/button/ResultButton';
import useQuestionStore from '@/app/store/question';
import useModalStore from '@/app/store/modal';

const QuestionFooter = () => {
  const questionStore = useQuestionStore();
  const { selected, finished, questionNumber, questionData, disabled } =
    questionStore;
  const modalStore = useModalStore();

  useEffect(() => {
    if (selected.length === 0) {
      if (finished === true) questionStore.setFinished(false);

      return questionStore.setDisabled(true);
    }

    if (questionNumber + 1 === questionData.length)
      questionStore.setFinished(true);

    // console.log(useQuestion);

    return questionStore.setDisabled(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, disabled]);

  const onSelect = () => {
    const AnswerKeyword =
      questionData[questionNumber].answerDtoList[selected[0]].keyword;

    if (AnswerKeyword !== 'none') {
      questionStore.onAddKeyword(AnswerKeyword);
    }

    questionStore.setQuestionNumber(questionNumber + 1);
    questionStore.onResetSelected();
  };

  const onClickFinished = () => {
    const AnswerKeyword =
      questionData[questionNumber].answerDtoList[selected[0]].keyword;

    if (AnswerKeyword !== 'none') {
      questionStore.onAddKeyword(AnswerKeyword);
    }

    modalStore.onOpen();
  };

  return (
    <div className="my-2 mb-10 flex w-full flex-col">
      {!finished && (
        <Button
          label="골랐어요!"
          disabled={disabled}
          onClick={onSelect}
          outline={false}
        />
      )}
      {finished && (
        <ResultButton label="밥정너 결과보기" onClick={onClickFinished} />
      )}
    </div>
  );
};

export default QuestionFooter;
