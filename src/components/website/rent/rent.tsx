import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Button, Container, Grid, Hidden, Icon, makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import websiteStyle from '../website.style';
const useWebsiteStyles = makeStyles(websiteStyle);
import rentStyle from './rent.style';
const useStyles = makeStyles(rentStyle);

import theme from '~/layouts/theme';
import { currencyFormat } from '~/utils/format';
import { RentItem } from '../website.interfaces';

// Hardcoded for now. Fetch from database
const rentItems: RentItem[] = [
  {
    key: 'BomagBPR3560D',
    machineType: 'Rüttelplatte',
    machineWeightClass: 'Arbeitsbreite 600 mm',
    image: '/images/ruttelplatte.png',
    modelName: 'Bomag 35/60',
    price: 35,
  },
  {
    key: 'KubotaKC70SL',
    machineType: 'Kettendumper',
    machineWeightClass: 'Gewichtsklasse 0-1t',
    image: '/images/product_models/KubotaKC70SL.webp',
    modelName: 'Kubota KC 70',
    price: 53,
  },
  {
    key: 'KubotaU274',
    machineType: 'Minibagger',
    machineWeightClass: 'Gewichtsklasse 2-3t',
    image: '/images/product_models/KubotaU274.webp',
    modelName: 'Kubota U 27-4',
    price: 85,
  },
  {
    key: 'KubotaR090',
    machineType: 'Radlader',
    machineWeightClass: 'Gewichtsklasse 4-5t',
    image: '/images/product_models/KubotaR090.webp',
    modelName: 'Kubota R090',
    price: 114,
  },
  {
    key: 'EpirocSB102',
    machineType: 'Zubehör',
    machineWeightClass: 'Hydraulikhammer',
    image: '/images/product_models/EpirocSB102.webp',
    modelName: 'Epiroc SB102',
    price: 44,
  },
  {
    key: 'DoosanDX225LC5',
    machineType: 'Raupenbagger',
    machineWeightClass: 'Gewichtsklasse 20-25t',
    image: '/images/product_models/DoosanDX225LC5.webp',
    modelName: 'Doosan DX 225 LC-5',
    price: 258,
  },
];

const Rent = (): ReactElement => {
  const websiteClasses = useWebsiteStyles();
  const classes = useStyles();
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [carouselShowableCount, setCarouselShowableCount] = useState(0);
  const [bookingItems, setBookingItems] = useState<RentItem[]>(rentItems);

  useEffect(() => {
    const carouselWidth = carouselRef.current?.clientWidth;
    const bookingItemWidth = carouselRef.current?.children[0].clientWidth || 0;
    const count = carouselWidth && bookingItemWidth ? Math.round(carouselWidth / bookingItemWidth) : 0;

    setCarouselShowableCount(count);
  }, [carouselRef.current?.children]);

  const scrollRight = () => {
    const items = bookingItems;
    const firstItem = items.shift();
    setBookingItems([...items, firstItem]);
  };

  const scrollLeft = () => {
    const items = bookingItems;
    const lastItem = items.pop();
    setBookingItems([lastItem, ...items]);
  };

  return (
    <>
      <Grid className={`${websiteClasses.content} ${classes.content}`}>
        <Container>
          <Grid container>
            <Grid container justify="center" alignItems="center" direction="column" className={classes.titleSection}>
              <h1 className={`${websiteClasses.mainTitle} ${classes.mainTitle}`}>{t('website:rent_primary_title')}</h1>
              <h4 className={`${websiteClasses.mainSubtitle} ${classes.mainSubtitle}`}>
                {t('website:rent_primary_subtitle')}
              </h4>
              <Link href="/categories">
                <Button variant="contained" color="primary" size={isMobile ? 'large' : 'small'}>
                  {t('website:rent_now')}
                </Button>
              </Link>
            </Grid>

            <Grid container direction="row" spacing={2}>
              <Grid item sm={4} xs={12}>
                <Grid container justify="center" alignItems="center" direction="column">
                  <Icon className={websiteClasses.mainFeaturesIcon}>
                    <img src="/icons/one-stop-shop-icon.svg" />
                  </Icon>

                  <Typography className={`${websiteClasses.mainFeaturesTitle} ${classes.mainFeaturesTitle}`}>
                    {t('website:rent')}
                  </Typography>
                  <Typography
                    align="center"
                    className={`${websiteClasses.mainFeaturesDescription} ${classes.mainFeaturesDescription}`}
                  >
                    {t('website:one_stop_shop_paragraph')}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item sm={4} xs={12}>
                <Grid container justify="center" alignItems="center" direction="column">
                  <Icon className={websiteClasses.mainFeaturesIcon}>
                    <img src="/icons/book-now-icon.svg" />
                  </Icon>

                  <Typography className={`${websiteClasses.mainFeaturesTitle} ${classes.mainFeaturesTitle}`}>
                    {t('website:book_now')}
                  </Typography>
                  <Typography
                    align="center"
                    className={`${websiteClasses.mainFeaturesDescription} ${classes.mainFeaturesDescription}`}
                  >
                    {t('website:book_now_paragraph')}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item sm={4} xs={12}>
                <Grid container justify="center" alignItems="center" direction="column">
                  <Icon className={websiteClasses.mainFeaturesIcon}>
                    <img src="/icons/100-security-icon.svg" />
                  </Icon>

                  <Typography className={`${websiteClasses.mainFeaturesTitle} ${classes.mainFeaturesTitle}`}>
                    {t('website:100_security')}
                  </Typography>
                  <Typography
                    align="center"
                    className={`${websiteClasses.mainFeaturesDescription} ${classes.mainFeaturesDescription}`}
                  >
                    {t('website:100_security_paragraph')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Hidden smDown>
          <div className={websiteClasses.orangeTriangle} />
        </Hidden>
      </Grid>

      <Grid>
        <Typography variant="h1" className={classes.secondTitle}>
          {t('website:rent_secondary_title')}
        </Typography>
      </Grid>

      <Grid className={classes.rentFlowWrapper}>
        <Grid container direction="row" alignItems="center" justify="center" className={classes.rentFlowSection}>
          <Grid item xs={12} sm={5} container alignItems="center" justify="center">
            <img src="/images/search.png" className={classes.rentFlowImage} />
          </Grid>
          <Grid item xs={12} sm={5} container alignItems="center" justify="flex-start">
            <Typography variant="h3" className={classes.rentFlowTitle}>
              {t('website:search')}
            </Typography>
            <Typography variant="subtitle2" className={classes.rentFlowDescription}>
              {t('website:rent_search_paragraph')}
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction={isMobile ? 'column-reverse' : 'row'} alignItems="center" justify="center" className={classes.rentFlowSection}>
          <Grid item xs={12} sm={5} container alignItems="center" justify="flex-start">
            <Typography variant="h3" className={classes.rentFlowTitle}>
              {t('website:order')}
            </Typography>
            <Typography variant="subtitle2" className={classes.rentFlowDescription}>
              {t('website:rent_order_paragraph')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} container alignItems="center" justify="center">
            <img src="/images/order.png" className={classes.rentFlowImage} />
          </Grid>
        </Grid>

        <Grid container direction="row" alignItems="center" justify="center" className={classes.rentFlowSection}>
          <Grid item xs={12} sm={5} container alignItems="center" justify="center">
            <img src="/images/lean-back.png" className={classes.rentFlowImage} />
          </Grid>
          <Grid item xs={12} sm={5} container alignItems="center" justify="flex-start">
            <Typography variant="h3" className={classes.rentFlowTitle}>
              {t('website:lean_back')}
            </Typography>
            <Typography variant="subtitle2" className={classes.rentFlowDescription}>
              {t('website:rent_lean_back_paragraph')}
            </Typography>
          </Grid>
        </Grid>

        <Hidden smDown>
          <div className={websiteClasses.orangeTriangle} />
        </Hidden>
      </Grid>

      <Grid className={classes.bookingSection}>
        <Typography variant="h1" className={`${classes.secondTitle} ${classes.rentBookingTitle}`}>
          {t('website:rent_booking_title')}
        </Typography>

        <Grid container className={classes.bookingCarousel}>
          <Grid
            container
            direction="row"
            justify="space-between"
            wrap="nowrap"
            ref={carouselRef}
            className={classes.bookingItemsWrap}
          >
            {bookingItems.map((item: RentItem, index: number) => (
              <Grid
                key={`booking-item-${item.key}`}
                container
                justify="center"
                alignItems="center"
                direction="column"
                className={classes.bookingItem}
                style={{
                  opacity:
                    carouselShowableCount &&
                    (index === 0 || index === (carouselShowableCount - 1))
                      ? 0.57
                      : 1,
                }}
              >
                <Typography variant="h3" className={classes.bookingItemTitle}>
                  {item.machineType}
                </Typography>
                <Typography variant="h5" className={classes.bookingItemDescription}>
                  {item.machineWeightClass}
                </Typography>

                <img src={item.image} className={classes.bookingItemImage} />

                <span className={classes.bookingItemModel}>{item.modelName}</span>
                <span className={classes.bookingItemPriceTag}>
                  {t('website:from')} <span className={classes.bookingItemPrice}>{currencyFormat(item.price)}</span> |{' '}
                  {t('website:day')}
                </span>

                <Button variant="contained" color="primary" href={`/product/${item.key}/machine`}>
                  {t('choose')}
                </Button>
              </Grid>
            ))}
          </Grid>

          <Icon
            className={`${classes.bookingNavigationIconWrap} ${classes.bookingNavigationRight}`}
            onClick={scrollRight}
          >
            <img src={`/icons/chevron-left${isMobile ? '-white' : ''}.svg`} className={classes.bookingNavigationIcon} />
          </Icon>

          <Icon
            className={`${classes.bookingNavigationIconWrap} ${classes.bookingNavigationLeft}`}
            onClick={scrollLeft}
          >
            <img
              src={`/icons/chevron-right${isMobile ? '-white' : ''}.svg`}
              className={classes.bookingNavigationIcon}
            />
          </Icon>
        </Grid>
      </Grid>

      <Typography variant="h1" className={classes.secondTitle}>
        {t('website:rent_third_title')}
      </Typography>

      <Container className={classes.benefitsSectionContainer}>
        <Grid container className={classes.benefitsSection} spacing={6}>
          <Grid item md={6} sm={12} className={classes.benefitsColumn}>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_1')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_1')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_2')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_2')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_3')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_3')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_4')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_4')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6} sm={12} className={classes.benefitsColumn}>
            <Grid
              container
              direction="row"
              wrap={isMobile ? 'nowrap' : 'wrap'}
              style={{ marginTop: isMobile||isTablet ? 0 : 60 }}
            >
              <Grid item sm={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_5')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_5')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_6')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_6')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_7')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_7')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={2}>
                <Icon className={classes.benefitIcon}>
                  <img src="/icons/checkbox-tick-icon.svg" width={60} />
                </Icon>
              </Grid>

              <Grid item xs={10}>
                <Grid container direction="column">
                  <Typography variant="h4" className={classes.benefitTitle}>
                    {t('website:rent_benefit_title_8')}
                  </Typography>
                  <Typography variant="h4" className={classes.benefitSubtitle}>
                    {t('website:rent_benefit_subtitle_8')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Rent;
