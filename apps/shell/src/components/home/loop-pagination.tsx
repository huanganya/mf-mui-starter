import { useState } from "react";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import IconButton from '@mui/material/IconButton';
import { List, ListItemIcon } from "@mui/material";
import { ListItem } from "@mui/material";
import { Typography } from "@mui/material";

export const LoopPagination = ({
  totalPage,
  onPageChange,
}: {
  totalPage: number;
  onPageChange: (arg0: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageNext = () => {
    const pageSet = currentPage >= totalPage
      ? 1
      : currentPage + 1;

    setCurrentPage(pageSet);
    onPageChange(pageSet - 1);
  };

  const handlePageBack = () => {
    const pageSet = currentPage <= 1
      ? totalPage
      : currentPage - 1

    setCurrentPage(pageSet);
    onPageChange(pageSet - 1);
  };

  return (
    <List>
      <ListItem className="unclickableHorizontalList">
        <IconButton
          onClick={handlePageBack}
          size="small"
        >
          <KeyboardArrowLeftOutlinedIcon style={{ color: "#313841" }} />
        </IconButton>
      </ListItem>

      <ListItem
        className="unclickableHorizontalList paddingTopBottomZero"
      >
        <Typography variant="body16SemiBold">
          {currentPage}
        </Typography>
      </ListItem>

      <ListItem
        className="unclickableHorizontalList paddingTopBottomZero"
      >
        <Typography variant="body16SemiBold">
          /
        </Typography>
      </ListItem>

      <ListItem
        className="unclickableHorizontalList paddingTopBottomZero"
      >
        <Typography variant="body16SemiBold">
          {totalPage}
        </Typography>
      </ListItem>

      <ListItem className="unclickableHorizontalList">
        <IconButton
          onClick={handlePageNext}
          size="small"
        >
          <KeyboardArrowRightOutlinedIcon style={{ color: "#313841" }} />
        </IconButton>
      </ListItem>
    </List>
  )
};