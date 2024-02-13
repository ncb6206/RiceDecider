'use client';

import { useEffect } from 'react';

import Button from '@/app/components/button/Button';
import ResultButton from '@/app/components/button/ResultButton';
import useLocationModal from '@/app/hooks/useLocationModal';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionFooter = () => {
  const {
    selected,
    finished,
    questionNumber,
    questionData,
    disabled,
    setQuestionNumber,
    setFinished,
    setDisabled,
    onAddKeyword,
    onResetSelected,
  } = useQuestionStore();
  const useLocation = useLocationModal();

  useEffect(() => {
    if (selected.length === 0) {
      if (finished === true) setFinished(false);

      return setDisabled(true);
    }

    if (questionNumber + 1 === questionData.length) setFinished(true);

    // console.log(useQuestion);

    return setDisabled(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, disabled]);

  const onSelect = () => {
    const AnswerKeyword =
      questionData[questionNumber].answerDtoList[selected[0]].keyword;

    if (AnswerKeyword !== 'none') {
      onAddKeyword(AnswerKeyword);
    }

    setQuestionNumber(questionNumber + 1);
    onResetSelected();
  };

  const onClickFinished = () => {
    const AnswerKeyword =
      questionData[questionNumber].answerDtoList[selected[0]].keyword;

    if (AnswerKeyword !== 'none') {
      onAddKeyword(AnswerKeyword);
    }

    useLocation.onOpen();
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
