import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import rentalStyle from '../rental.style';
import Link from 'next/link';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Button,
  Grid,
  Dialog,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EditAddressForm from '../editAddress/editAddressForm';
import EditPeriodForm from '../editPeriod/editPeriodForm';
import EditServicesForm from '../editServices/editServices.view';
import { currencyFormat } from '~/utils/format';
import { useRouter } from 'next/router';
import useRentalDetailHoc from './rentalDetail';
import { EditServicesViewProps, EditPeriodViewProps } from '../interfaces/interfaces';
import { vatPercentage } from '~/constants/common';
import AddressMap from '../OrderAddressMap/order-address-map';
import { orderStatusTypes, headerCells } from '../constants/constants';

const useStyles = makeStyles(rentalStyle);

const RentalDetail = (): ReactElement => {
  const styles = useStyles();
  const { t } = useTranslation();

  const router = useRouter();
  const orderId = router.query.id as string;

  const { isLoading, order, orderStatusUpdate, Snackbar } = useRentalDetailHoc(orderId as string);
  const shippingAddress = order?.salesOrderAddresses.find((val) => val.type === 'shipping');

  const SimpleInfo = (class_name, title, name, sub_classname, sub_value = null) => (
    <div className={class_name}>
      <p className={styles.simpleTitle}>{title}</p>
      <p className={sub_classname}>
        {name} {sub_value}
      </p>
    </div>
  );

  const [openEditAddress, setOpenEditAddress] = React.useState<boolean>(false);
  const [openEditServices, setOpenEditServices] = React.useState<boolean>(false);

  const EditAddress = (props) => (
    <Dialog maxWidth="lg" {...props}>
      <EditAddressForm />
    </Dialog>
  );

  const EditServices = (props: EditServicesViewProps) => (
    <Dialog maxWidth="lg" open={props.open} onClose={props.onClose} className={props.className}>
      <EditServicesForm
        productServices={props.productServices}
        itemServices={props.itemServices}
        handleClose={props.onClose}
        orderId={props.orderId}
        productId={props.productId}
      />
    </Dialog>
  );

  const [openEditPeriod, setOpenEditPeriod] = React.useState<boolean>(false);

  const EditPeriod = (props: EditPeriodViewProps) => (
    <Dialog maxWidth="lg" open={props.open} onClose={props.onClose} className={props.className}>
      <EditPeriodForm
        startDate={props.startDate}
        endDate={props.endDate}
        orderItems={props.orderItems}
        orderId={orderId}
        orderTotal={props.orderTotal}
        onClose={props.onClose}
      />
    </Dialog>
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <Snackbar />
          <div className={styles.detailTitlePanel}>
            <img src="/images/test.png" className={styles.smallImage} />
            <Link href="/rental">
              <a className={styles.linkStyle}>
                {'<  '}
                {t('rental:title_rental')}
              </a>
            </Link>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <p className={styles.detailTitlePara}>#{order?.orderId}</p>
              </Grid>
              <Grid item md={2} xs={12}>
                <FormControl variant="filled" className={styles.selectComponent}>
                  <InputLabel>{t('rental:status')}</InputLabel>
                  <Select
                    native
                    label={t('rental:status')}
                    value={order?.status}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => orderStatusUpdate(event?.target?.value)}
                  >
                    {orderStatusTypes.map((val, idx) => (
                      <option style={{ backgroundColor: 'orange' }} key={idx} value={val.value}>
                        {t(val.title)}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={3} xs={12}>
                <div className={styles.headerDetail}>
                  {SimpleInfo(
                    styles.simplePanel,
                    t('rental:extend_rent'),
                    t(`rental:${order?.channel}`),
                    styles.simpleName
                  )}
                  {SimpleInfo(
                    styles.simplePanel,
                    t('rental:responsible_person'),
                    'Andreas Herrmann',
                    styles.simpleName
                  )}
                </div>
              </Grid>
              <Grid item md={3} xs={12}>
                <Button className={styles.buttonExtend} variant="contained" onClick={() => setOpenEditPeriod(true)}>
                  {t('rental:extend_rent')}
                </Button>
                <EditPeriod
                  className={styles.periodDlg}
                  open={openEditPeriod}
                  onClose={() => setOpenEditPeriod(false)}
                  startDate={order?.startDate}
                  endDate={order?.endDate}
                  orderItems={order?.salesOrderItems}
                  orderTotal={order?.price}
                />
                <Button className={styles.buttonBill} variant="contained">
                  {t('rental:bill')}
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className={styles.detailPanel}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <div className={styles.detailCustomerPanel}>
                  <p className={styles.subTitlePara}>{t('rental:customer')}</p>
                  <p className={styles.companyNamePara}>{order?.companyName}</p>
                  <p className={styles.customerPara}>
                    {order?.firstName} {order?.lastName}
                  </p>
                  <p className={styles.emailPara}>{order?.email}</p>
                </div>
                <div className={styles.detailPeriodPanel}>
                  <p className={styles.subTitlePara}>{t('rental:rental_period')}</p>
                  <p className={styles.periodPara}>
                    <span>
                      {moment(order?.startDate).format('DD-MM-YYYY hh:mm')}
                      <ArrowForwardIcon className={styles.arrowIcon} />
                    </span>
                    <span>{moment(order?.endDate).format('DD-MM-YYYY hh:mm')}</span>
                  </p>
                  <Button className={styles.buttonPeriod} variant="contained" onClick={() => setOpenEditPeriod(true)}>
                    {t('rental:extend')}
                  </Button>
                </div>
              </Grid>
              <Grid item sm={6} xs={12} className={styles.mapCell}>
                <div className={styles.detailMapPanel}>
                  <p className={styles.subTitlePara}>Information</p>
                  <Button className={styles.createIcon} />
                  <EditAddress
                    className={styles.modalWindow}
                    open={openEditAddress}
                    onClose={() => setOpenEditAddress(false)}
                  />
                  <span className={styles.mapSubPara}>
                    {SimpleInfo(
                      styles.addressPara,
                      t('rental:proj_address'),
                      shippingAddress?.address,
                      styles.simpleName,
                      shippingAddress?.city
                    )}
                    {SimpleInfo(styles.addressPara, t('rental:transport'), order?.deliveryMethod, styles.simpleName)}
                  </span>
                  <div className={styles.mapView}>
                    <AddressMap currentAddress={shippingAddress?.address} city={shippingAddress?.city} />
                  </div>
                </div>
              </Grid>
              <Grid item sm={12} xs={12}>
                <div className={styles.detailProductPanel}>
                  <p className={styles.subProductTitlePara}>{t('rental:products')}</p>
                  <Table className={styles.cellStyle}>
                    <TableHead>
                      <TableRow>
                        {headerCells.map((val, idx) => (
                          <TableCell key={idx} className={styles.tableHeader} align={idx === 2 ? 'center' : 'left'}>
                            {t(val)}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order?.salesOrderItems.map((val, idx) => (
                        <TableRow key={idx}>
                          <TableCell>
                            {val?.productManufacturer} {val?.productModel}
                          </TableCell>
                          <TableCell>{order?.location}</TableCell>
                          <TableCell align="center">{currencyFormat(val?.pricePerDay)}</TableCell>
                          <TableCell>{val.days} days</TableCell>
                          <TableCell>{currencyFormat(val?.totalPrice)}</TableCell>
                          <TableCell>
                            {val.salesOrderItemServices.map((value, index) => (
                              <ListItem key={index}>
                                <ListItemText
                                  primary={value.serviceName}
                                  secondary={`${currencyFormat(value.totalPrice)} ${value.pricingStructure}`}
                                />
                              </ListItem>
                            ))}
                          </TableCell>
                          {!val?.parentSalesOrderItem && (
                            <>
                              <EditServices
                                orderId={order?.id}
                                productId={val?.product?.id}
                                itemServices={val?.salesOrderItemServices}
                                productServices={val?.product?.services}
                                className={styles.modalWindow}
                                open={openEditServices}
                                onClose={() => setOpenEditServices(false)}
                              />
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className={styles.mobileProducts}>
                    <p className={styles.calculateSeperateLine} />
                    {order?.salesOrderItems.map((val, idx) => (
                      <div key={idx}>
                        <Grid container spacing={2} className={styles.mobileContainer}>
                          <Grid item xs={6}>
                            <p className={styles.mobileTitle}>
                              {val.productManufacturer} {val.productModel}
                            </p>
                          </Grid>
                          <Grid item xs={6}>
                            {SimpleInfo('', t(headerCells[1]), order?.location, styles.mobileSimple)}
                          </Grid>
                          <Grid item xs={6} className={styles.mobilePriceCell}>
                            {SimpleInfo(
                              '',
                              t(headerCells[2]),
                              currencyFormat(val.pricePerDay),
                              styles.mobileSimplePrice
                            )}
                          </Grid>
                          <Grid item xs={3}>
                            {SimpleInfo('', t(headerCells[3]), val?.days + 'days', styles.mobileSimple)}
                          </Grid>
                          <Grid item xs={3}>
                            {SimpleInfo('', t(headerCells[4]), currencyFormat(val?.totalPrice), styles.mobileSimple)}
                          </Grid>
                        </Grid>
                        <p className={styles.calculateSeperateLine} />
                      </div>
                    ))}
                  </div>
                  <Box display="flex" justifyContent="space-between" p={4}>
                    <Button
                      className={styles.buttonServices}
                      variant="contained"
                      onClick={() => setOpenEditServices(true)}
                    >
                      {t('common:edit_services')}
                    </Button>
                    <div className={styles.calculatePara}>
                      <p className={styles.calculateSubPara}>
                        <span>{t('rental:subtotal')}</span>
                        <span>{currencyFormat(order?.subTotal)}</span>
                      </p>
                      <p className={styles.calculateSubPara}>
                        <span>
                          {vatPercentage}% {t('rental:VAT')}.
                        </span>
                        <span>{currencyFormat(order?.vat)}</span>
                      </p>
                      <p className={styles.calculateSeperateLine} />
                      <p className={styles.totalPara}>
                        <span>{t('rental:total_amount')}</span>
                        <span>{currencyFormat(order?.price)}</span>
                      </p>
                    </div>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </div>
        </>
      )}
    </div>
  );
};

export default RentalDetail;
