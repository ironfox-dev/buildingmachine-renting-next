import React from 'react';
import Router, { useRouter } from 'next/router';
import { FormikHelpers } from 'formik';
import { FormValues, OperatingHours, SnackBar } from './interfaces/interfaces';
import * as _ from 'lodash';
import LocationEditComponent from './location-edit.component';
import { useSaveLocationMutation, useUpdateLocationMutation, useLocationQuery } from '~/graphql/graphql';

const CREATE = 'create';

const defaultDay = {
  startTime: null,
  endTime: null,
  open: false,
};

const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function extractPayload(payload) {
  const locationInput = {
    name: payload.name,
    city: payload.city,
    dieselPrice: Number(payload.dieselPrice),
    gasolinePrice: Number(payload.gasolinePrice),
    postalCode: payload.postalCode,
    street: payload.street,
    telephone: payload.telephone,
  };

  const operatingHourInput = _.map(payload.weeklyOperatingHours, (day) => {
    return _.assign({
      weekDay: day.weekDay,
      startTime: day.open ? day.startTime : null,
      endTime: day.open ? day.endTime : null,
    });
  });
  return { locationInput, operatingHourInput };
}

export default function LocationEditContainer(): React.ReactElement {
  const router = useRouter();
  const id = router.query.id as string;

  const { data } = useLocationQuery({ variables: { id: id === CREATE ? null : id } });
  const [saveLocation] = useSaveLocationMutation();
  const [updateLocation] = useUpdateLocationMutation();

  const [snackbar, setSnackbar] = React.useState<SnackBar>({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const location =
    data && data.location
      ? data.location
      : {
          id: '',
          name: '',
          city: '',
          dieselPrice: '',
          gasolinePrice: '',
          postalCode: '',
          street: '',
          telephone: '',
          operatingHour: [],
        };

  const locationOperatingHour = location ? location.operatingHour : '';

  const operatingHour = _.times(7, (index: number) => {
    const dayData = _.find(locationOperatingHour, { weekDay: weekDays[index] });
    return _.isUndefined(dayData)
      ? _.assign({ weekDay: weekDays[index] }, defaultDay)
      : _.assign(
          { open: !(dayData.startTime === null || dayData.endTime === null || weekDays[index] === 'sunday') },
          dayData
        );
  });

  const defaultSchedule = () => {
    const computedDefaultSchedule = _.times(
      7,
      (index): OperatingHours => {
        return {
          weekDay: weekDays[index],
          startTime: null,
          endTime: null,
          open: false,
        };
      }
    );

    return computedDefaultSchedule;
  };

  const computedLocation = {
    weeklyOperatingHours: id === CREATE ? defaultSchedule() : operatingHour,
  };
  const values = _.assign(computedLocation, location);

  /**
   * Send data to backend
   */
  const handleSubmit = async (payload: FormValues, formikHelpers: FormikHelpers<FormValues>): Promise<void> => {
    const { locationInput, operatingHourInput } = extractPayload(payload);
    let message;

    if (id === CREATE) {
      await saveLocation({
        variables: {
          // @ts-ignore
          locationInput,
          operatingHourInput,
        },
      });
      message = 'Location saved';
    } else {
      await updateLocation({
        variables: {
          id: id.toString(),
          // @ts-ignore
          locationInput,
          operatingHourInput,
        },
      });
      message = 'Location updated';
    }

    formikHelpers.resetForm();

    setSnackbar({ isOpen: true, type: 'success', message });

    Router.push('/locations', '/locations');
  };

  return React.createElement(LocationEditComponent, { values, handleSubmit, snackbar, setSnackbar });
}
