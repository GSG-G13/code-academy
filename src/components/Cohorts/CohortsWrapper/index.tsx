import { Grid } from '@mui/material';

import { CohortCard } from '..';
import { Cohort } from '../../../utils';

const CohortsWrapper = ({ cohorts }: { cohorts: Cohort[] }) => (
  <Grid
    container
    spacing={2}
    columns={{
      xs: 15,
      sm: 15,
      md: 15,
      lg: 15,
    }}
  >
    {cohorts.map((cohorts) => (
      <CohortCard
        key={cohorts.id}
        alt={cohorts.name}
        thumbnail={cohorts.thumbnail}
        cohortName={cohorts.name}
        cohortMembers={cohorts.members}
        startDate={new Date(cohorts.start_date).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        })}
        endDate={new Date(cohorts.end_date).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        })}
      />
    ))}
  </Grid>
);

export default CohortsWrapper;
