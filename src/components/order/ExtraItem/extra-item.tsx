import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

import { ExtraItemProps } from '../interfaces/interfaces';
import useStyles from './extra-item.styles';

const ExtraItem = ({
  title,
  description,
  price,
  pricingStructure,
  selected,
  handleSelect,
  handleUnselect,
}: ExtraItemProps): React.ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleButtonClick = () => {
    selected ? handleUnselect() : handleSelect();
  };

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Grid container justify="space-between" wrap="nowrap">
          <Grid container alignItems="center" className={[classes.checkIconWrapper, selected && 'selected'].join(' ')}>
            <CheckIcon className={classes.checkIcon} />
          </Grid>

          <div className={classes.cardText}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </div>

          <Grid container direction="column" alignItems="flex-end" className={classes.cardActions}>
            <Typography variant="h6" component="div" gutterBottom color="primary">
              {pricingStructure === 'daily' && `€${price} | ${t('order:day')}`}
              {pricingStructure === 'fixed' && `€${price} ${t('order:fixed_price')}`}
            </Typography>

            <Button
              variant="outlined"
              size="large"
              color={selected ? 'default' : 'primary'}
              onClick={handleButtonClick}
            >
              {selected ? t('order:unselect') : t('order:select')}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExtraItem;
