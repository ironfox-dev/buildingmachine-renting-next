import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import format from 'date-fns/format';
import deLocale from 'date-fns/locale/de';
import DateFnsUtils from '@date-io/date-fns';

class DeLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, 'LLLL', { locale: this.locale });
  }

  getDatePickerHeaderText(date) {
    return format(date, 'EEEEEE, MMMM dd', { locale: this.locale });
  }
}

const PickerProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }): React.ReactElement => {
  return (
    <MuiPickersUtilsProvider utils={DeLocalizedUtils} locale={deLocale}>
      {children}
    </MuiPickersUtilsProvider>
  );
};

export default PickerProvider;
