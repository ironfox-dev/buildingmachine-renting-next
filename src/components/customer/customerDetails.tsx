import React, { ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Grid, Box, Typography, Modal, Backdrop, makeStyles } from '@material-ui/core';
import { MoreVert, GetApp, Close, Check, Edit, ChevronLeft } from '@material-ui/icons';
import { Formik } from 'formik';
import MaterialTable from 'material-table';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { TableIcons } from '../icon/Table';
import EditCustomerDetails from './editCustomerDetails';
import { validateEmail } from '~/utils/validation';
import { useUpdateCustomerMutation, useSetCustomerDiscountMutation, useCustomerLazyQuery } from '~/graphql/graphql';
import { CustomerOrder } from './customer.interfaces';
import useStyles from './customer.styles';
import Link from 'next/link';
import { CssTextField, PercentageDiscountField } from '../../shared/';
import { buttonCustomStyle } from '../../shared/inputFields/inputFields.styles';

const useStylesButtonCustom = makeStyles(buttonCustomStyle);

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Required'),
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  phoneCode: Yup.string().required('Required'),
  email: Yup.string().email('Invalid eamil').required('Email required'),
});

const CustomerDetails = (): ReactElement => {
  const {
    query: { id: customerId },
  } = useRouter();

  const {t} = useTranslation();
  const classes = useStyles();
  const textFieldStyles = useStylesButtonCustom();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [discount, setDiscount] = React.useState<number>(0);

  const toggleModal = (status: boolean) => setIsOpen(status);

  const [updateCustomer, { data: updateData }] = useUpdateCustomerMutation();
  const [setCustomerDiscount, { data: discountData }] = useSetCustomerDiscountMutation();
  const [getCustomer, {data: customerData}] = useCustomerLazyQuery();

  useEffect(() => {
    if(customerId && discount !== discountData?.setCustomerDiscount?.discount){
      setCustomerDiscount({
        variables: {
          discountData: {
            companyId: customerId as string,
            discount
          }
        }
      });
    }
  }, [discount])

  useEffect(() => {
    if(customerId){
      getCustomer({
        variables: { id: customerId as string }
      });
    }
  }, [customerId])

  useEffect(() => {
    if(updateData?.updateCustomer?.isSuccessful){
      setIsOpen(false);
    }
  }, [updateData]);

  const customer = customerData?.customer;
  const customerDiscount = customer?.discount || 0;
  const firstBooking = '05.08.20';
  const lastBooking = '05.08.20';
  let user;
  let address;

  if(customer){
    user = customer?.users?.[0];
    address = customer?.addresses?.[0];
  }

  // Fake data, please load real data from the database.
  const rows: CustomerOrder[] = [
    {
      orderReference: '1287589',
      orderStatus: 'delivered',
      machineModel: 'Kubota K08-3',
      machineType: 'Minibager',
      invoiceId: '332087',
      invoiceStatus: 'paid',
      cost: 6.34,
      street: 'Ludwigstraße',
      city: 'Rosenhiem',
      startedOn: '04.05.20',
      endedOn: '21.04.20',
      rentalPark: 'Rosenhiem', 
      channel: 'offline'
    }
  ];

  return (
    <>
      <Paper className={classes.discountSection}>
        <Grid container alignItems="center" className={classes.goBackButton}>
          <ChevronLeft />
          <Link href="/customers">
            <span>{t('user:customers')}</span>
          </Link>
        </Grid>

        <Grid container alignItems="center" className={classes.discountRow}>
          <Typography variant="h6">
            {!!user && user.firstname} {!!user && user.lastname} - {customer && customer.name}
          </Typography>

          <CssTextField
            InputProps={{
              inputComponent: PercentageDiscountField as any,
              classes: textFieldStyles,
              disableUnderline: true
            }}
            style={{marginLeft: 35}}
            variant="filled"
            label={t('discount')}
            placeholder={t('discount')}
            name="firstname"
            value={discount || customerDiscount}
            onChange={evt => setDiscount(parseFloat(evt.target.value))}
          />
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h6" display="block" gutterBottom style={{marginTop: 10}}>
          {t('user:customer_details')}
        </Typography>

        <Grid container className={classes.detailsRow}>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:company')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {customer?.name || ''}
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:company')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {user ? `${user.firstname} ${user.lastname}` : ''}
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:company_address')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {address?.street || ''} {address?.postalCode || ''} {address?.city || ''}  
            </Typography>
          </Box>
        </Grid>

        <Grid container className={classes.detailsRow}>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:email')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {user?.email || ''}
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:phone')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {user?.phone || ''}
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:account')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {!!user?.isEmailVerified ? <Check /> : <Close />}
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:first_booking')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {firstBooking}
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="caption" display="block" gutterBottom>
              {t('user:last_booking')}
            </Typography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              {lastBooking}
            </Typography>
          </Box>
        </Grid>

        <Edit className={classes.editButton} onClick={() => toggleModal(true)} />
      </Paper>

      <Paper className={classes.noPaddingPaper}>
        <MaterialTable
          title={t('user:all_leases')}
          icons={TableIcons}
          columns={[
            {
              field: 'orders',
              title: t('user:orders'),
              render: (rowData: CustomerOrder) => (<Grid container direction="column">
                <Typography variant="subtitle2">{rowData.orderReference}</Typography>
                <span className={rowData.orderStatus === 'canceled' ? classes.canceled : classes.done}>{t(`user:${rowData.orderStatus}`)}</span>
              </Grid>)
            },
            {
              field: 'machine',
              title: t('user:machine'),
              render: (rowData: CustomerOrder) => (<Grid container direction="column">
                <Typography variant="body2">{rowData.machineModel}</Typography>
                <Typography variant="caption">{rowData.machineType}</Typography>
              </Grid>)
            },
            {
              field: 'invoice',
              title: t('user:invoice'),
              render: (rowData: CustomerOrder) => (<Grid container direction="column">
                <Typography variant="body2">{rowData.invoiceId}</Typography>
                <span className={rowData.invoiceStatus === 'canceled' ? classes.canceled : classes.done}>{t(`user:${rowData.invoiceStatus}`)}</span>
              </Grid>)
            },
            { field: 'cost', title: t('user:costs'), type: "currency", currencySetting: {locale: 'de-DE', currencyCode: 'EUR'} },
            {
              field: 'project_address',
              title: t('user:project_address'),
              render: (rowData: CustomerOrder) => (<Grid container direction="column">
                <Typography variant="body2">{rowData.street}</Typography>
                <Typography variant="body2">{rowData.city}</Typography>
              </Grid>)
            },
            {
              field: 'rental_period',
              title: t('user:rental_period'),
              render: (rowData: CustomerOrder) => <Typography variant="body2">{rowData.startedOn} {rowData.endedOn}</Typography>
            },
            { field: 'rentalPark', title: t('user:rental_park') },
            {
              field: 'channel',
              title: t('user:channel'),
              render: (rowData: CustomerOrder) => <Typography variant="body2">{rowData.channel}</Typography>
            },
          ]}
          data={rows}
          options={{
            rowStyle: (e, index) => ({
              backgroundColor: index % 2 ? '#EEE' : '#FFF',
            }),
            pageSize: 10,
            actionsColumnIndex: -1,
            search: false
          }}
          actions={[
            {
              icon: GetApp,
              tooltip: '',
              onClick: (event, row) => console.log(row),
            },
            {
              icon: MoreVert,
              tooltip: '',
              onClick: (event, row) => console.log(row),
            },
          ]}
          localization={{
            pagination: {
              labelDisplayedRows: `{from}-{to} ${t('of')} {count}`,
              labelRowsSelect: t('rows')
            },
          }}
        />
      </Paper>

      <Modal
        open={isOpen}
        onClose={() => toggleModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <>
          <Formik
            initialValues={{
              companyName: customer?.name,
              firstname: user?.firstname,
              lastname: user?.lastname,
              email: user?.email,
              phone: user?.phone,
              phoneCode: user?.phoneCode,
              street: address?.street,
              city: address?.city,
              country: address?.country,
              postalCode: address?.postalCode,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                await updateCustomer({
                  variables: {
                    customer: {
                      userId: user?.id,
                      companyId: customer?.id,
                      addressId: address?.id,
                      companyName: values.companyName,
                      firstname: values.firstname,
                      lastname: values.lastname,
                      email: values.email,
                      street: values.street,
                      city: values.city,
                      postalCode: values.postalCode,
                      country: values.country,
                      phone: values.phone,
                      phoneCode: values.phoneCode
                    },
                  },
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <EditCustomerDetails />
          </Formik>
        </>
      </Modal>
    </>
  );
}

export default CustomerDetails;