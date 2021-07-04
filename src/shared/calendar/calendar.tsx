/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import calendarStyle from './calendar.style';
import { makeStyles } from '@material-ui/styles';
import { Table, TableCell, TableHead, TableRow, TableBody, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import theme from '../../layouts/theme';
import { months, weekdays } from '~/constants/datetime';
import moment from 'moment';
import { OrderProductsAvailabilityCalendarModel } from '~/graphql/graphql';

const useStyles = makeStyles(calendarStyle);

const daysInMonth = (year, month) => {
  const d = new Date(year, month + 1, 0);
  return d.getDate();
};

const firstDayOfMonth = (year, month) => {
  const d = new Date(year, month, 1);
  return d.getDay();
};

interface CalendarInferface {
  extend_func: any;
  start_date: Date;
  end_date: Date;
  className: string;
  is_mobile: boolean;
  productsAvailabilityCalendar: OrderProductsAvailabilityCalendarModel[];
  fetchOrderProductsAvailability(month): void;
}

const Calendar = (props: CalendarInferface): React.ReactElement => {
  const styles = useStyles();

  const {
    start_date,
    end_date,
    extend_func,
    is_mobile,
    productsAvailabilityCalendar,
    fetchOrderProductsAvailability,
    ...rest
  } = props;

  const isMobile = is_mobile ? true : false;

  const now = end_date ? end_date : new Date();
  const [selectDate, setSelectDate] = React.useState(now);
  const [year, setYear] = React.useState(now.getFullYear());
  const [month, setMonth] = React.useState(now.getMonth());

  const equalCompare = (a, b) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const changeMonth = (mode) => {
    let currentMonth = month;
    let currentYear = year;

    // to calculate the next or previous month;
    mode === 0 ? (currentMonth = Math.abs((month + 12 - 1) % 12)) : (currentMonth = Math.abs((month + 1) % 12));
    // if last month was January.
    mode === 0 && month === 0 ? (currentYear = year - 1) : '';
    // if last month was December
    mode === 1 && month === 11 ? (currentYear = year + 1) : '';

    fetchOrderProductsAvailability(moment([currentYear, currentMonth]).startOf('month').format('YYYY-MM-DD'));
    setMonth(currentMonth);
    setYear(currentYear);
  };

  const updatePeriod = (pyear, pmonth, day) => {
    const tempDate = new Date(pyear, pmonth, day);

    let extendDays = 0;
    !(tempDate < end_date) ? setSelectDate(tempDate) : '';
    if (tempDate > end_date) {
      const start = moment(end_date, 'YYYY-MM-DD');
      const end = moment(tempDate, 'YYYY-MM-DD');

      extendDays = Math.ceil(moment.duration(end.diff(start)).asDays());

      extend_func(true, extendDays, tempDate);
    }

    equalCompare(tempDate, end_date) ? extend_func(false, extendDays) : '';
  };

  const Header = (pyear, pmonth) => (
    <div className={styles.header}>
      <span onClick={() => changeMonth(0)}>
        <Button className={styles.iconButton}>
          <ChevronLeftIcon />
        </Button>
      </span>
      <span className={styles.headerDate}>
        <span>{months[pmonth]}</span>
        <span> {pyear} </span>
      </span>
      <span>
        <Button
          onClick={() => changeMonth(1)}
          className={styles.iconButton}
          disabled={!productsAvailabilityCalendar[productsAvailabilityCalendar.length - 1]?.isAvailable}
        >
          <ChevronRightIcon />
        </Button>
      </span>
    </div>
  );

  const WeekDays = () => (
    <TableRow>
      {weekdays.map((weekday) => (
        <TableCell key={weekday} className={styles.cellStyle}>
          {weekday}
        </TableCell>
      ))}
    </TableRow>
  );

  const isWeekend = (pyear, pmonth, day) => {
    return new Date(pyear, pmonth, day).getDay() === 6 || new Date(pyear, pmonth, day).getDay() === 0;
  };

  const isAvailable = (day): boolean => {
    return productsAvailabilityCalendar[day - 1]?.isAvailable;
  };

  const DaysOfMonth = (pyear, pmonth) => {
    let days = Array.from({ length: daysInMonth(pyear, pmonth) }, (k, v) => v + 1);
    const startDay = firstDayOfMonth(pyear, pmonth);
    for (let i = 0; i < startDay; i++) days = [0].concat(days);
    const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (k, v) => v + 1);

    // to set the start date time as start of day.
    const computedStartDate = new Date(new Date(start_date).setHours(0, 0, 0, 0));

    return (
      <TableBody>
        {weeks.map((week) => (
          <TableRow key={week}>
            {days.slice((week - 1) * 7, week * 7).map((day, id) => (
              <TableCell
                key={id}
                className={styles.cellStyle}
                onClick={() =>
                  !isWeekend(pyear, pmonth, day) &&
                  isAvailable(new Date(pyear, pmonth, day).getDate()) &&
                  new Date(pyear, pmonth, day) > end_date
                    ? updatePeriod(pyear, pmonth, day)
                    : ''
                }
                style={
                  !isAvailable(new Date(pyear, pmonth, day).getDate()) && new Date(pyear, pmonth, day) > end_date
                    ? { textDecoration: 'line-through' }
                    : isWeekend(pyear, pmonth, day)
                    ? { color: 'gray' }
                    : new Date(pyear, pmonth, day) < computedStartDate
                    ? { color: theme.palette.grey[300] }
                    : !(new Date(pyear, pmonth, day) < computedStartDate) && new Date(pyear, pmonth, day) < end_date
                    ? { backgroundColor: 'rgba(240, 77, 36, 0.1)' }
                    : equalCompare(new Date(pyear, pmonth, day), end_date) && equalCompare(selectDate, end_date)
                    ? { backgroundColor: theme.palette.primary.main }
                    : equalCompare(new Date(pyear, pmonth, day), end_date) && selectDate > end_date
                    ? { backgroundColor: 'rgba(240, 77, 36, 0.1)' }
                    : new Date(pyear, pmonth, day) < selectDate && new Date(pyear, pmonth, day) > end_date && day > 0
                    ? { backgroundColor: 'rgba(240, 77, 36, 0.5)' }
                    : equalCompare(new Date(pyear, pmonth, day), selectDate)
                    ? { backgroundColor: theme.palette.primary.main }
                    : { color: 'black' }
                }
              >
                {day > 0 ? day : ''}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  };

  const mobileMonth1 = Math.abs((month + 1) % 12);
  const mobileYear1 = month === 11 ? year + 1 : year;
  const mobileMonth2 = Math.abs((month + 2) % 12);
  const mobileYear2 = month === 10 ? year + 1 : year;

  return (
    <div {...rest} ref={React.useRef(null)}>
      {Header(year, month)}
      <Table>
        <TableHead>
          <WeekDays />
        </TableHead>
        {DaysOfMonth(year, month)}
      </Table>
      {isMobile && (
        <div>
          {Header(mobileYear1, mobileMonth1)}
          <Table>
            <TableHead>
              <WeekDays />
            </TableHead>
            {DaysOfMonth(mobileYear1, mobileMonth1)}
          </Table>
        </div>
      )}
      {isMobile && (
        <div>
          {Header(mobileYear2, mobileMonth2)}
          <Table>
            <TableHead>
              <WeekDays />
            </TableHead>
            {DaysOfMonth(mobileYear2, mobileMonth2)}
          </Table>
        </div>
      )}
    </div>
  );
};

export default Calendar;
