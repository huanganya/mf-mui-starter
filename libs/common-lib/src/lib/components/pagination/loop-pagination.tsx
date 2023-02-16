import { useState } from "react";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import IconButton from '@mui/material/IconButton';
import { Grid, Typography } from "@mui/material";

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
    <Grid container>
      <Grid item xs={4} md={4}>
        <IconButton
          onClick={handlePageBack}
          size="small"
        >
          <KeyboardArrowLeftOutlinedIcon style={{ color: "#313841" }} />
        </IconButton>
      </Grid>

      <Grid item xs={1} md={1} display="inline-grid" alignItems="center">
        <Typography variant="body16SemiBold">
          {currentPage}
        </Typography>
      </Grid>

      <Grid item xs={1} md={1} display="inline-grid" alignItems="center">
        <Typography variant="body16SemiBold">
          /
        </Typography>

      </Grid>

      <Grid item xs={1} md={1} display="inline-grid" alignItems="center">
        <Typography variant="body16SemiBold">
          {totalPage}
        </Typography>
      </Grid>

      <Grid item xs={4} md={4}>
        <IconButton
          onClick={handlePageNext}
          size="small"
        >
          <KeyboardArrowRightOutlinedIcon style={{ color: "#313841" }} />
        </IconButton>
      </Grid>
    </Grid>
  )
};