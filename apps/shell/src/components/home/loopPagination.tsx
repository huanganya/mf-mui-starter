import { useState } from "react";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import IconButton from '@mui/material/IconButton';

export const LoopPagination = ({
  totalPage,
  setCurrentPageIndex,
}: {
  totalPage: number;
  setCurrentPageIndex: (arg0: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageNext = () => {
    const pageSet = currentPage >= totalPage
    ? 1
    : currentPage + 1;

    setCurrentPage(pageSet);
    setCurrentPageIndex(pageSet-1);
  };

  const handlePageBack = () => {
    const pageSet = currentPage <= 1
    ? totalPage
    : currentPage - 1

    setCurrentPage(pageSet);
    setCurrentPageIndex(pageSet-1);
  };

  return (
    <nav>
      <ul style={{ listStyleType: "none" }}>
        <li className="inlineLi">
          <IconButton
            onClick={handlePageBack}
            size="small"
          >
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
        </li>
        <li className="inlineLi">
          <IconButton
            size="small"
          >
            {currentPage}
          </IconButton>
        </li>
        <li className="inlineLi">
          <span>
            /
          </span>
        </li>
        <li className="inlineLi">
          <IconButton
            size="small"
          >
            {totalPage}
          </IconButton>
        </li>

        <li className="inlineLi">
          <IconButton
            onClick={handlePageNext}
            size="small"
          >
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </li>
      </ul>
    </nav>
  )
};