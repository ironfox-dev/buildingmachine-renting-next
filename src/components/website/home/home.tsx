import React, { ReactElement, useState } from 'react';
import { Button, Container, Grid, Hidden, Icon, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ProductSearchBar from '~/shared/ProductSearchBar/product-search-bar';

import 'react-dates/initialize';
import websiteStyle from './home.style';
import { currencyFormat } from '~/utils/format';
import { RentItem } from '../website.interfaces';

const useStyles = makeStyles(websiteStyle);

const quotes = [
  {
    owner: 'Gartenbaufirma | Region Rosenheim',
    body:
      'Ich bin sehr zufrieden, es hat alles einwandfrei geklappt – einfache online Buchung, klasse Service und keine versteckten Nebenkosten.',
  },
  {
    owner: 'Landschaftsbaufirma | Region Rosenheim',
    body:
      'Euer junges und dynamisches Team begeistert mich. Flexcavo bietet einen super Service und einwandfreie Maschinen. Jederzeit wieder.',
  },
  {
    owner: 'Straßenbaufirma | Region Rosenheim',
    body:
      'Die einfache, schnelle und kurzfristige Buchung und flexible Rückgabezeiten passen ideal für meine Bauprojekte. Ich kann Flexcavo weiterempfehlen.',
  },
  {
    owner: 'Tiefbaufirma | Region Rosenheim',
    body:
      'Flexcavo geht auf meine individuellen Wünsche ein und der Kundenservice ist ausgezeichnet. Flexcavo spart mir einfach Zeit und Geld.',
  },
];

const categories = [
  {
    label: 'website:rent_mini_excavators',
    img: 'minibagger.png',
  },
  {
    label: 'website:rent_loader',
    img: 'product_models/KubotaR090.webp',
  },
  {
    label: 'website:rent_vibratory_plates',
    img: 'ruttelplatte.png',
  },
  {
    label: 'website:view_all_construction_machines',
    img: 'all-construction-machines.png',
  },
];

const partnerImg = ['kubota', 'doosan', 'bomag', 'kramer'];

// Hardcoded for now
const bestSellers: RentItem[] = [
  {
    key: 'KubotaU274',
    modelName: 'Kubota U27-4',
    machineType: 'Minibagger',
    machineWeightClass: 'Gewichtsklasse bis 3t',
    accessories: ['Schnellwechsler', 'Tieflöffel', 'Humusschaufel'],
    image: '/images/product_models/KubotaU274.webp',
    price: 85,
  },
  {
    key: 'WNDW30',
    modelName: 'Wacker Neuson DW 30',
    machineType: 'Raddumper',
    machineWeightClass: 'Nutzlast 3t',
    image: '/images/product_models/WNDW30.webp',
    price: 71,
  },
  {
    key: 'Kramer5050',
    modelName: 'Kramer 5050',
    machineType: 'Radlader',
    machineWeightClass: 'max. Kipplast 1.700 kg',
    accessories: ['Palettengabel 120 cm', 'Schaufel 0,65 m3'],
    image: '/images/product_models/Kramer5050.png',
    price: 91,
  },
];

const Home = (): ReactElement => {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

  const [quoteIndex, setQuoteIndex] = useState<number>(0);
  const [bestSellerIndex, setBestSellerIndex] = useState<number>(0);

  const changeQuoteIndex = (increamentAs) => {
    if (increamentAs === 'add') {
      if (quoteIndex < quotes.length - 1) {
        setQuoteIndex((value) => value + 1);
      } else if (quoteIndex === quotes.length - 1) {
        setQuoteIndex(0);
      }
    } else if (increamentAs === 'subtract') {
      if (quoteIndex >= 1) {
        setQuoteIndex((value) => value - 1);
      } else if (quoteIndex === 0) {
        setQuoteIndex(quotes.length - 1);
      }
    }
  };

  const changeBestSellerIndex = (increamentAs) => {
    if (increamentAs === 'add') {
      if (bestSellerIndex < bestSellers.length - 1) {
        setBestSellerIndex((value) => value + 1);
      } else {
        setBestSellerIndex(0);
      }
    } else if (increamentAs === 'subtract') {
      if (bestSellerIndex >= 1) {
        setBestSellerIndex((value) => value - 1);
      } else {
        setBestSellerIndex((value) => bestSellers.length - 1);
      }
    }
  };

  return (
    <>
      <div className={classes.content}>
        <h1 className={classes.mainTitle1}>{t('website:home_main_title_1')}</h1>
        <h1 className={`${classes.mainTitle1} ${classes.mainTitle2}`}>{t('website:home_main_title_2')}</h1>

        <div className={classes.subtitle}>
          {t('website:home_main_subtitle_1')}
          <br />
          {t('website:home_main_subtitle_2')}
        </div>

        <ProductSearchBar />

        <Grid container justify="space-between" className={classes.partnersWrap}>
          {partnerImg.map((img, index) => (
            <Grid key={index} item md={3} xs={6}>
              <img src={`/images/${img}.svg`} className={classes.partnerLogo} />
            </Grid>
          ))}
        </Grid>

        <Hidden xsDown>
          <div className={classes.orangeTriangle} />
        </Hidden>
      </div>

      <div className={classes.categoriesSection}>
        <Grid container direction={isMobile ? 'column' : 'row'} className={classes.categoriesWrap}>
          {categories.map((category) => (
            <Link key={category.label} href="/categories">
              <Grid item xs={12} sm={3} className={classes.categoryWrap}>
                <Grid
                  container
                  justify={isMobile ? 'flex-start' : 'center'}
                  direction={!isMobile ? 'column' : 'row'}
                  alignItems="center"
                  className={classes.category}
                >
                  <img className={classes.categoryImage} src={`/images/${category.img}`} />
                  <span className={classes.categoryName}>{t(category.label)}</span>
                </Grid>
              </Grid>
            </Link>
          ))}
        </Grid>

        <Link href="/categories">
          <h4 className={classes.viewAllCategories}>{t('website:view_all_categories')}</h4>
        </Link>
      </div>

      <Grid container direction="column" className={classes.grayBackgroundSection}>
        <h1 className={classes.bestSellersTitle}>{t('website:our_bestsellers')}</h1>

        <Container className={classes.bestSellersContainer}>
          <Grid container direction="row" wrap="nowrap" className={classes.bestSellersWrap}>
            <Hidden mdUp>
              <Icon className={classes.bestSellersIconWrap}>
                <img
                  src="/icons/chevron-left-white.svg"
                  className={classes.bestSellersIcon}
                  onClick={() => changeBestSellerIndex('subtract')}
                />
              </Icon>
            </Hidden>

            <Grid className={classes.bestSellers} style={{ marginLeft: `-${bestSellerIndex * 100}%` }}>
              {bestSellers.map((item) => (
                <Grid item key={item.key} sm={12} md={4} className={classes.bestSellerItem}>
                  <Grid container direction="column" justify="center" alignItems="center">
                    <img className={classes.bestSellerItemImage} src={item.image} />

                    <Grid container alignItems="center" className={classes.bestSellerItemTitleRow}>
                      <span className={classes.bestSellerItemTitle}>{item.modelName}</span>
                    </Grid>

                    <Grid container direction="row" className={classes.bestSellerItemDetailsRow}>
                      <span>{item.machineType}</span>
                      &nbsp;&nbsp;
                      <span>{item.machineWeightClass}</span>
                    </Grid>

                    <Grid container justify="space-between" alignItems="center">
                      <Grid item sm={6}>
                        <span className={classes.bestSellerItemPriceTag}>
                          {t('website:from')}{' '}
                          <span className={classes.bestSellerItemPrice}>{currencyFormat(item.price)}</span>
                          {item.priceNotAvailable ? ` (${t('website:price_is_coming')})` : ` | ${t('website:day')}`}
                        </span>
                      </Grid>
                      <Grid item sm={6}>
                        <Grid container justify="flex-end">
                          <Button variant="contained" color="primary" href={`/product/${item.key}/machine`}>
                            {t('website:rent_now')}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Hidden mdUp>
              <Icon className={`${classes.bestSellersIconWrap} ${classes.bestSellersRightIconWrap}`}>
                <img
                  src="/icons/chevron-right-white.svg"
                  className={classes.bestSellersIcon}
                  onClick={() => changeBestSellerIndex('add')}
                />
              </Icon>
            </Hidden>
          </Grid>
        </Container>

        <Grid container direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item sm={12} md={6} className={classes.rentEasilyTextSection}>
            <Hidden xsDown>
              <h1 className={classes.rentEasilyTitle}>{t('website:rent_easily_title')}</h1>
            </Hidden>

            <p className={classes.rentEasilyParagraph}>{t('website:rent_easily_paragraph_1')}</p>
            <p className={classes.rentEasilyParagraph}>{t('website:rent_easily_paragraph_2')}</p>
            <p className={classes.rentEasilyParagraph}>{t('website:rent_easily_paragraph_3')}</p>

            <Button variant="contained" color="primary" href="/functionality">
              {t('website:to_flexcavo_manager')}
            </Button>
          </Grid>

          <Grid item sm={12} md={6} className={classes.deviceMockupContainer}>
            <img
              src={`/images/laptop-phone-preview${isMobile || isTablet ? '-full' : ''}.webp`}
              className={classes.devicesMockups}
            />
          </Grid>

          <Hidden smUp>
            <h1 className={classes.rentEasilyTitle}>{t('website:rent_easily_title')}</h1>
          </Hidden>
        </Grid>
      </Grid>

      <Grid container className={classes.quotesSection}>
        <Container>
          <Grid container alignItems="center" justify="center" className={classes.quoteIconWrap}>
            <img className={classes.quoteIcon} src="/icons/quotes-icon.png" />
          </Grid>

          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={1}>
              <Grid className={classes.quoteButton}>
                <img
                  src="/icons/chevron-left.svg"
                  className={classes.quoteButtonIcon}
                  onClick={() => changeQuoteIndex('subtract')}
                />
              </Grid>
            </Grid>

            <Grid item xs={10}>
              <div className={classes.quoteText}>“{quotes[quoteIndex].body}”</div>

              <span className={classes.quoteOwner}>{quotes[quoteIndex].owner}</span>
            </Grid>

            <Grid item xs={1}>
              <Grid container justify="flex-end" className={classes.quoteButton}>
                <img
                  src="/icons/chevron-right.svg"
                  className={`${classes.quoteButtonIcon} ${classes.quoteButtonIconRight}`}
                  onClick={() => changeQuoteIndex('add')}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Home;
