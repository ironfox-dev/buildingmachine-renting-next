import React, { useState, useEffect, memo } from 'react';
import { useProductTrackingLazyQuery } from '~/graphql/graphql';
import { useRouter } from 'next/router';
import { Typography, Grid, Box } from '@material-ui/core';
import { isEmpty, get, map, toLower } from 'lodash';
import useStyles from './product-telematics.style';
import { ProductData } from '../interfaces';
import SearchIcon from '@material-ui/icons/Search';
import moment from 'moment';

import { InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const ProductInformation = (): React.ReactElement => {
  const [unitInfoList, setUnitInfoList] = useState([]);
  const [unitExtendedInfo, setUnitExtendedInfo] = useState([]);
  const classes = useStyles();
  const router = useRouter();
  const [productData, setProductData] = useState({} as ProductData);

  const [getProductTracking, { data: productTrackingData }] = useProductTrackingLazyQuery();

  useEffect(() => {
    if (productTrackingData) {
      const productTracking = productTrackingData?.productTracking;
      const product = get(productTracking, ['product']);
      setProductData(product);
      setUnitInfoList(product.unitInfo);
      setUnitExtendedInfo(product.unitExtendedInfo);
    }
  }, [productTrackingData]);

  const { id: currentProductId } = router.query;

  useEffect(() => {
    (async () => {
      if (currentProductId && getProductTracking) {
        await getProductTracking({ variables: { productId: currentProductId as string } });
      }
    })();
  }, [currentProductId]);

  const handleUnitInfoFilter = (event) => {
    const searchText = event.target.value;

    const filteredUnitInfo = productData.unitInfo.filter((value) => toLower(value.name).includes(toLower(searchText)));
    setUnitInfoList(filteredUnitInfo);
  };

  const handleUnitExtendedInfoFilter = (event) => {
    const searchText = event.target.value;

    const filteredUnitExtendedInfo = productData.unitExtendedInfo.filter((value) =>
      toLower(value.name).includes(toLower(searchText))
    );
    setUnitExtendedInfo(filteredUnitExtendedInfo);
  };

  return (
    <Grid container spacing={2}>
      {!isEmpty(productData) && (
        <>
          <Grid item xs={12}>
            <Box className={classes.container}>
              <Box display="flex" justifyContent="space-between" className={classes.headerContainer}>
                <Typography variant="h6">Overview</Typography>

                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(event) => handleUnitInfoFilter(event)}
                  />
                </div>
              </Box>

              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow className={classes.tableRow}>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Value</TableCell>
                      <TableCell align="right">Last Updated</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {map(unitInfoList, (info) => (
                      <TableRow key={info.name} className={classes.tableRow}>
                        <TableCell component="th" scope="row">
                          {info.name}
                        </TableCell>
                        <TableCell align="right">
                          {parseFloat(info?.value || 0).toFixed(2)} {info.uoM}
                        </TableCell>
                        <TableCell align="right">{moment(productData.locationTimestamp).fromNow()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.container}>
              <Box display="flex" justifyContent="space-between" className={classes.headerContainer}>
                <Typography variant="h6">Advanced Sensors</Typography>

                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(event) => handleUnitExtendedInfoFilter(event)}
                  />
                </div>
              </Box>

              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow className={classes.tableRow}>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Value</TableCell>
                      <TableCell align="right">Last Updated</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {map(unitExtendedInfo, (info) => (
                      <TableRow key={info.name} className={classes.tableRow}>
                        <TableCell component="th" scope="row">
                          {info.name}
                        </TableCell>
                        <TableCell align="right">
                          {parseFloat(info?.value || 0).toFixed(2)} {info.uoM}
                        </TableCell>
                        <TableCell align="right">{moment(info.time).fromNow()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default memo(ProductInformation);
