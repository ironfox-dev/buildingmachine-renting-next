import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import { ProductFilterProps } from '../helpers/interfaces';
import { LocationModel } from '~/graphql/graphql';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { white } from '~/constants/colors';

const styles = () => ({
  filtersWrapper: {
    margin: '30px 0',
    boxShadow: '1px 1px 5px 1px grey',
    zIndex: 2,
    position: 'relative' as const,
    backgroundColor: white,
  },
  filterContent: {
    position: 'absolute' as const,
    display: (props) => (props.isOpen ? '' : 'none'),
    boxShadow: '1px 1px 5px 1px grey',
    background: 'white',
    top: '35px',
  },
  filterIcon: {
    margin: '5px',
  },
  checkboxWrapper: {
    '& span': {
      padding: 0,
    },
    maxHeight: '26px',
    overflow: 'hidden',
  },
  filterGroup: {
    margin: '10px',
  },
});
const useStyles = makeStyles(styles);

const statuses = [
  {
    id: '1',
    name: 'Offer',
  },
  {
    id: '2',
    name: 'Reserved',
  },
  {
    id: '3',
    name: 'Delivered',
  },
  {
    id: '4',
    name: 'Reserved',
  },
  {
    id: '5',
    name: 'Canceled',
  },
];
const rechnungsstatus = [
  {
    id: '1',
    name: 'Offen',
  },
  {
    id: '2',
    name: 'Bezahlt',
  },
];
const channels = [
  {
    id: '1',
    name: 'Online',
  },
  {
    id: '2',
    name: 'Offline',
  },
];

const ProductsFilter = ({ locations, handleCheckboxToggle }: ProductFilterProps): React.ReactElement => {
  const [isOpen, toggleOpen] = useState(false);
  const classes = useStyles({ isOpen });

  const checkBox = (data) => (
    <Grid key={data.id} container className={classes.checkboxWrapper}>
      <Checkbox onChange={() => undefined} color="primary" name="check" />
      <Grid>{data.name}</Grid>
    </Grid>
  );

  return (
    <Grid className={classes.filtersWrapper}>
      <FilterListIcon onClick={() => toggleOpen(!isOpen)} className={classes.filterIcon} />
      <Grid container className={classes.filterContent}>
        <Grid className={classes.filterGroup} item>
          <h5>Statuses</h5>
          {statuses.length && statuses.map((data) => checkBox(data))}
        </Grid>
        <Grid className={classes.filterGroup} item>
          <h5>Location</h5>
          {locations.length &&
            locations.map((location: LocationModel) => (
              <Grid key={location.id} container className={classes.checkboxWrapper}>
                <Checkbox
                  onChange={(e) => handleCheckboxToggle('locations', location.id, e.target.checked)}
                  color="primary"
                  name="check"
                />
                <Grid>{`${location.city}, ${location.street}`}</Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsFilter;
