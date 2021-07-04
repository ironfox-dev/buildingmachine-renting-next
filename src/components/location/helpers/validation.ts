import * as yup from 'yup';

const TIME = /(2[0-3]|[01]?[0-9]):([0-5][0-9])$/;
const FLOAT = /^[+]?([0-9]{1,2})?(\d*[.])?([0-9]{1,2})$/;

const ValidationSchema = yup.object().shape({
  name: yup.string().max(100).required('Name is Required'),
  city: yup.string().max(50).required('City is Required'),
  street: yup.string().required('Street is Required'),
  postalCode: yup
    .number()
    .required()
    .min(10000, 'Must be exactly 5 characters')
    .max(99999, 'Must be exactly 5 characters')
    .label('Postal Code'),
  telephone: yup.string().required('Telephone is Required'),
  dieselPrice: yup
    .number()
    .positive()
    .test('Diesel Price is Required', 'Diesel Price is Required', (value) => {
      const result = FLOAT.test(value);
      return result || !value;
    })
    .required('Diesel Price is Required'),
  gasolinePrice: yup
    .number()
    .positive()
    .test('Gasoline Price is Required', 'Gasoline Price is Required', (value) => {
      const result = FLOAT.test(value);
      return result || !value;
    })
    .required('Gasoline Price is Required'),
  weeklyOperatingHours: yup.array().of(
    yup.object().shape({
      open: yup.bool(),
      startTime: yup.mixed().when('open', {
        is: true,
        then: yup
          .string()
          .test('Start Time is Required', 'Start Time is Required', (value) => {
            const result = TIME.test(value);
            return result || !value;
          })
          .required('Start Time is Required')
          .label('Start Time')
          .typeError('Start Time(HH:mm) is Required'),
      }),
      endTime: yup.mixed().when('open', {
        is: true,
        then: yup
          .string()
          .test('End Time is Required', 'End Time is Required', (value) => {
            const result = TIME.test(value);
            return result || !value;
          })
          .required('End Time is Required')
          .typeError('End Time(HH:mm) is Required'),
      }),
    })
  ),
});

export default ValidationSchema;
