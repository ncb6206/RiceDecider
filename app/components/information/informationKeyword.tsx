'use client';

interface InformationKeywordProps {
  label: string;
}

const InformationKeyword = ({ label }: InformationKeywordProps) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-pink-100 px-3 py-1.5">
      <div className="text-center text-sm text-gray-900">{label}</div>
    </div>
  );
};

export default InformationKeyword;
