import { Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const BasicPagination = () => (
  <Grid container sx={{ marginTop: '40px', marginBottom: '40px', justifyContent: 'center' }}>
    <Grid item sm={6} lg={12} md={6} xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination count={12} color="primary" />
    </Grid>
  </Grid>
);

export default BasicPagination;
