'use client';

import { ReactElement, useCallback, useEffect, useState } from 'react';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  content: ReactElement;
  disabled?: boolean;
  leftLabel: string;
  rightLabel: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  content,
  disabled,
  leftLabel,
  rightLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onSubmit();
    }, 300);
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/30 outline-none focus:outline-none">
        <div className="relative mx-auto my-6 h-auto w-4/5 ">
          <div
            className={`translate h-full duration-300 
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
              `}
          >
            <div className="translate relative flex h-full w-full flex-col rounded-lg border-0 bg-white py-4 shadow-lg outline-none focus:outline-none">
              <div className="relative flex flex-auto justify-center p-6 ">
                {content}
              </div>
              <div className="flex w-full flex-row items-center gap-4 px-6 pb-6">
                <button
                  onClick={handleClose}
                  className="relative w-full select-none rounded-3xl bg-neutral-200 py-2 text-lg font-medium text-neutral-500 transition hover:opacity-80 "
                >
                  {leftLabel}
                </button>
                <button
                  onClick={handleSubmit}
                  className="relative w-full select-none rounded-3xl bg-rose-500 py-2 text-lg font-medium text-white transition hover:opacity-80"
                >
                  {rightLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
