import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TypeAttributesFormProps } from '../product-model.interfaces';

const TypeAttributesForm = ({ attributes, formSubmitHandler }: TypeAttributesFormProps): React.ReactElement => {
  const fields = {};
  const validationSchema = {};
  Object.keys(attributes).forEach((key) => {
    fields[key] = '';

    let yup = Yup[attributes[key].type]('Invalid value');
    if (attributes[key].isRequired) yup = yup.required('Required');
    if (attributes[key].minValue !== null) {
      yup = yup.min(attributes[key].minValue, `min ${attributes[key].minValue}`);
    }
    if (attributes[key].maxValue !== null) {
      yup = yup.max(attributes[key].maxValue, `max ${attributes[key].maxValue}`);
    }
    if (attributes[key].maxLength !== null) {
      yup = yup.max(attributes[key].maxLength, `max length ${attributes[key].maxLength}`);
    }
    validationSchema[key] = yup;
  });

  return (
    <Formik initialValues={fields} onSubmit={formSubmitHandler} validationSchema={Yup.object(validationSchema)}>
      <Form>
        {Object.keys(attributes).map((key) => {
          return (
            <div key={key}>
              <div>
                <label htmlFor={key}>
                  {attributes[key].name}
                  {attributes[key].unit && ` in ${attributes[key].unit}`}
                </label>

                <Field
                  name={key}
                  type={attributes[key].type}
                  min={attributes[key].minValue}
                  max={attributes[key].maxValue}
                  maxLength={attributes[key].maxLength}
                />
              </div>

              <ErrorMessage name={key}>{(msg) => <div>{msg}</div>}</ErrorMessage>
            </div>
          );
        })}

        <button disabled type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default TypeAttributesForm;
