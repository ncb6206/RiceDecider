'use client';

interface TitleProps {
  title: string;
  content?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Title = ({
  title,
  content,
  titleClassName,
  contentClassName,
}: TitleProps) => {
  return (
    <div className="flex flex-col items-start">
      <p className={`font-SBAggro text-2xl ${titleClassName}`}>{title}</p>
      <p className={`text-sm font-normal ${contentClassName}`}>{content}</p>
    </div>
  );
};

export default Title;
