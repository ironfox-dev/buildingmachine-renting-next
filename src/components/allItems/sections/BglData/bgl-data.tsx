import React, { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useGetProductBglDataLazyQuery, BglDataModel } from '~/graphql/graphql';
import InfoCard from '../../InfoCard';
import InfoCell from '../../InfoCell';
import InfoLine from '../../InfoLine';
import { Table, TableCell, TableRow, TableBody, Grid, Typography } from '@material-ui/core';
import { FormControl, Select } from '@material-ui/core';
import { CssInput } from '~/shared/inputFields/inputFields';
import { makeStyles } from '@material-ui/core/styles';
import bglDataStyle from './bgl-data.style';

interface BglDataType {
  id: string;
  bglNumberType: string;
  bglData: BglDataModel;
}

const useStyles = makeStyles(bglDataStyle);
const BglDataSection = ({ label }: { label: string }): React.ReactElement => {
  const styles = useStyles();
  const router = useRouter();
  const { t } = useTranslation();

  const { id: currentProductId } = router.query;

  const [getProductBglData, { data: productBglDataList }] = useGetProductBglDataLazyQuery();

  const [currentBglData, setCurrentBglData] = useState({} as BglDataType);
  const [productBglData, setProductBglData] = useState([] as BglDataType[]);

  useEffect(() => {
    if (productBglDataList) {
      setProductBglData(productBglDataList?.productBglData);
      setCurrentBglData(productBglDataList?.productBglData[0]);
    }
  }, [productBglDataList]);

  useEffect(() => {
    (async () => {
      if (currentProductId && getProductBglData) {
        await getProductBglData({ variables: { productId: currentProductId as string } });
      }
    })();
  }, [currentProductId]);

  const handleBglNumberChange = (event) => {
    setCurrentBglData(productBglData[event.target.value]);
  };

  return (
    <>
      {!isEmpty(productBglData) && (
        <InfoCard title={t(label)}>
          <FormControl variant="filled" className={styles.shortInputComponent}>
            <Select native label={t('user:reg_country_code')} input={<CssInput />} onChange={handleBglNumberChange}>
              {productBglData?.map((value, index) => (
                <option key={value.id} value={index}>
                  {value?.bglData?.bglNumber}
                </option>
              ))}
            </Select>
          </FormControl>

          <InfoLine>
            <InfoCell label={`${t('fleet:bgl')}-${t('fleet:number')}`} value={currentBglData?.bglData?.bglNumber} />
            <InfoCell label={t('name')} value={currentBglData?.bglData?.shortName} />
            <InfoCell label={t('type')} value={currentBglData?.bglNumberType} />
            <InfoCell label={t('fleet:version')} value={currentBglData?.bglData?.version} />
          </InfoLine>

          <Grid container className={styles.bglDetailContainer}>
            <Typography variant="h6">{`${t('fleet:bgl')}-${t('fleet:description')}`}</Typography>
            {currentBglData?.bglData?.description && (
              <Table>
                <TableBody>
                  {currentBglData?.bglData?.description.map((param) => (
                    <TableRow key={param.key}>
                      <TableCell>{param.key}</TableCell>
                      <TableCell>{param.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Grid>

          <Grid container className={styles.bglDetailContainer}>
            <Grid item xs={6}>
              <Typography variant="h6">{`${t('fleet:bgl')}-${t('fleet:parameter')}`}</Typography>
              {currentBglData?.bglData?.parameters && (
                <Table>
                  <TableBody>
                    {currentBglData?.bglData?.parameters.map((param) => (
                      <TableRow key={param.key}>
                        <TableCell>{param.key}</TableCell>
                        <TableCell>{param.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">{`${t('fleet:bgl')}-${t('fleet:value')}`}</Typography>
              {currentBglData?.bglData?.values && (
                <Table>
                  <TableBody>
                    {currentBglData?.bglData?.values.map((param) => (
                      <TableRow key={param.key}>
                        <TableCell>{param.key}</TableCell>
                        <TableCell>{param.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Grid>
          </Grid>
        </InfoCard>
      )}
    </>
  );
};

export default memo(BglDataSection);
