import { FC } from "react";

interface IProps {
  showPrev: boolean;
  showNext: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const Pagination: FC<IProps> = ({
  showPrev,
  showNext,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="inline-flex">
      {showPrev && (
        <button
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={onPrevPage}
        >
          Prev
        </button>
      )}
      {showNext && (
        <button
          className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={onNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};
