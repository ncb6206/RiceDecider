'use client';

import { useEffect } from 'react';

import Button from '@/app/components/button/Button';
import ResultButton from '@/app/components/button/ResultButton';
import useLocationModal from '@/app/hooks/useLocationModal';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionFooter = () => {
  const useQuestion = useQuestionStore();
  const useLocation = useLocationModal();

  const {
    selected,
    finished,
    questionNumber,
    questionData,
    disabled,
    onAddKeyword,
  } = useQuestion;

  useEffect(() => {
    if (selected.length === 0) {
      if (finished === true) {
        useQuestionStore.setState({ finished: false });
      }

      return useQuestionStore.setState({ disabled: true });
    }

    if (questionNumber + 1 === questionData.length) {
      useQuestionStore.setState({ finished: true });
    }

    console.log(useQuestion);

    return useQuestionStore.setState({ disabled: false });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, disabled]);

  const onSelect = () => {
    if (
      questionData[questionNumber].answerDtoList[selected[0]].keyword !== 'none'
    ) {
      onAddKeyword(
        questionData[questionNumber].answerDtoList[selected[0]].keyword,
      );
    }

    useQuestionStore.setState({
      questionNumber: questionNumber + 1,
    });

    useQuestion.onResetSelected();
  };

  const onClickFinished = () => {
    if (
      questionData[questionNumber].answerDtoList[selected[0]].keyword !== 'none'
    ) {
      onAddKeyword(
        questionData[questionNumber].answerDtoList[selected[0]].keyword,
      );
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
