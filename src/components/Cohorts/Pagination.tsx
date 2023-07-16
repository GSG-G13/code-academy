import { Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React from 'react';

const BasicPagination = ({
  pages,
  currentPage,
  setCurrentPage,
}: {
  pages: string;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}) => {
  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page.toString());
  };

  return (
    <Grid container sx={{ marginTop: '40px', marginBottom: '40px', justifyContent: 'center' }}>
      <Grid item sm={6} lg={12} md={6} xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={+pages}
          page={+currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default BasicPagination;
