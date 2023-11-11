'use client';

import { useEffect } from 'react';

import Button from '@/app/components/button/Button';
import ResultButton from '@/app/components/button/ResultButton';
import useLocationModal from '@/app/hooks/useLocationModal';
import useQuestionStore from '@/app/hooks/useQuestionStore';

const QuestionFooter = () => {
  const useQuestion = useQuestionStore();
  const useLocation = useLocationModal();

  useEffect(() => {
    if (useQuestion.selected.filter(select => select === true).length === 0) {
      if (useQuestion.finished === true) {
        useQuestionStore.setState({ finished: false });
      }

      return useQuestionStore.setState({ disabled: true });
    }

    if (useQuestion.selected.filter(select => select === true).length !== 0) {
      if (useQuestion.questionNumber + 1 === useQuestion.questionData.length) {
        useQuestionStore.setState({ finished: true });
      }

      useQuestionStore.setState({ disabled: false });
    }
    console.log(useQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useQuestion.selected, useQuestion.disabled]);

  const onSelect = () => {
    if (useQuestion.questionNumber < useQuestion.questionData.length - 1) {
      useQuestionStore.setState({
        questionNumber: useQuestion.questionNumber + 1,
      });

      useQuestion.onResetSelected();
    }
  };

  const onClickFinished = () => {
    useLocation.onOpen();
  };

  return (
    <div className="my-2 mb-10 flex w-full flex-col">
      {!useQuestion.finished && (
        <Button
          label="골랐어요!"
          disabled={useQuestion.disabled}
          onClick={onSelect}
          outline={false}
        />
      )}
      {useQuestion.finished && (
        <ResultButton label="밥정너 결과보기" onClick={onClickFinished} />
      )}
    </div>
  );
};

export default QuestionFooter;
