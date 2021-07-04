import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import rentalStyle from './rental.style';
import { useTranslation } from 'react-i18next';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import { Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@material-ui/core';
import { Button, InputBase, Checkbox, MenuItem, Popover } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Router from 'next/router';

const useStyles = makeStyles(rentalStyle);

const RentalTable = (): React.ReactElement => {
  const { t } = useTranslation();
  const classes = useStyles();

  //Table data
  const createData = (
    order: string,
    machine: string,
    invoice: string,
    cost: string,
    address: string,
    period: string,
    customer: string,
    park: number,
    channel: number,
    order_type: number,
    invoice_type: number
  ) => ({ order, machine, invoice, cost, address, period, customer, park, channel, order_type, invoice_type });

  const data = [
    createData('2340820', 'Kubota K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 2, 1),
    createData('2340820', 'Abcd K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 4, 2),
    createData('2340820', 'Cdef K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 1, 0),
    createData('2340820', 'Efgh K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 2, 1),
    createData('2340820', 'Ghij K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 4, 2),
    createData('2340820', 'ijkl K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 1, 0),
    createData('2340820', 'klmn K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 2, 1),
    createData('2340820', 'mnop K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 4, 2),
    createData('2340820', 'opqr K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 1, 0),
    createData('2340820', 'qrst K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 2, 1),
    createData('2340820', 'stuv K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 4, 2),
    createData('2340820', 'uvwx K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 1, 0),
    createData('2340820', 'wxyz K008-3', '4040239', '1000$', 'Rosenheim', '2019-2021', 'Karl', 0, 1, 1, 0),
  ];

  const headerCells = [
    t('rental:order'),
    t('rental:machine'),
    t('rental:invoice/status'),
    t('rental:cost'),
    t('rental:proj_address'),
    t('rental:rental_period'),
    t('rental:customer'),
    t('rental:rental_park'),
    t('rental:channel'),
    '',
  ];

  //Filter part
  const status = [
    t('rental:offer'),
    t('rental:reserved'),
    t('rental:delivered'),
    t('rental:return'),
    t('rental:canceled'),
  ];
  const invoice_status = [t('rental:open'), t('rental:paid')];
  const channel = [t('rental:online'), t('rental:offline')];
  const place = [t('rental:Rosenheim'), t('rental:Stuttgart')];

  const [filterData, setFilterData] = React.useState({
    status: [],
    invoice_status: [],
    channel: [],
    place: [],
  });
  const [filterText, setFilterText] = React.useState('');
  const [subFilterText, setSubFilterText] = React.useState(['', '', '', '', '', '', '']);

  const setItemFilterText = (idx: number, val: string) => {
    const temp = [...subFilterText];
    temp[idx] = val;
    setSubFilterText(temp);
  };

  const isGetItemFilterText = () => {
    const res = subFilterText.filter((val) => val.length > 0).length > 0;
    return res;
  };

  const getAllText = () => {
    const resArr = [];
    data.map((val) =>
      Object.keys(val).map((key) => {
        if (typeof val[key] === 'string') {
          if (resArr.indexOf(val[key]) === -1) resArr.push(val[key] + '');
        }
      })
    );
    return resArr.sort();
  };

  const getSubText = (idx: number) => {
    const resArr = [];
    data.map((val) =>
      Object.keys(val).map((key, id) => {
        if (id === idx) {
          if (resArr.indexOf(val[key]) === -1) resArr.push(val[key] + '');
        }
      })
    );
    return resArr.sort();
  };

  const getFilterBarText = () => {
    const resTexts = [];
    if (filterData.status.length > 0)
      resTexts.push(
        status
          .filter((val, id) => filterData.status.indexOf(id) !== -1)
          .reduce((total, val) => total + val + ', ', t('rental:order') + ': ') + '0'
      );
    if (filterData.invoice_status.length > 0)
      resTexts.push(
        invoice_status
          .filter((val, id) => filterData.invoice_status.indexOf(id) !== -1)
          .reduce((total, val) => total + val + ', ', t('rental:invoice/status') + ': ') + '1'
      );
    if (filterData.channel.length > 0)
      resTexts.push(
        channel
          .filter((val, id) => filterData.channel.indexOf(id) !== -1)
          .reduce((total, val) => total + val + ', ', t('rental:channel') + ': ') + '2'
      );
    if (filterData.place.length > 0)
      resTexts.push(
        place
          .filter((val, id) => filterData.place.indexOf(id) !== -1)
          .reduce((total, val) => total + val + ', ', t('rental:rental_park') + ': ') + '3'
      );
    return resTexts;
  };

  const filteredData = () => {
    return data.filter(
      (val) =>
        Object.keys(val).every((key, idx) =>
          typeof val[key] === 'string' ? val[key].toLowerCase().includes(subFilterText[idx].toLowerCase()) : true
        ) &&
        Object.keys(val).some((key) =>
          typeof val[key] === 'string' ? val[key].toLowerCase().includes(filterText.toLowerCase()) : false
        ) &&
        (filterData.status.length === 0 || filterData.status.indexOf(val.order_type) !== -1) &&
        (filterData.invoice_status.length === 0 || filterData.invoice_status.indexOf(val.invoice_type) !== -1) &&
        (filterData.channel.length === 0 || filterData.channel.indexOf(val.channel) !== -1) &&
        (filterData.place.length === 0 || filterData.place.indexOf(val.park) !== -1)
    );
  };

  const onRemoveFilter = (idx) => {
    const temp = { ...filterData };
    const isWhat = getFilterBarText()[idx][getFilterBarText()[idx].length - 1];
    isWhat === '0'
      ? (temp.status = [])
      : isWhat === '1'
      ? (temp.invoice_status = [])
      : isWhat === '2'
      ? (temp.channel = [])
      : (temp.place = []);
    setFilterData(temp);
  };

  const onRemoveSearchFilter = () => {
    setFilterText('');
    setSubFilterText(['', '', '', '', '', '', '']);
  };

  const FilterBar = () => (
    <div style={{ display: 'flex' }}>
      {(filterText.length > 0 || isGetItemFilterText()) && (
        <p className={classes.filterBarText}>
          <span>Search: </span>
          {filterText.length > 0 && (
            <span>
              All- {"'"}
              {filterText}
              {"'"}
            </span>
          )}
          {subFilterText.map((val, idx) =>
            val.length > 0 ? (
              <span key={idx}>
                {headerCells[idx]}- {"'"}
                {val}
                {"', "}
              </span>
            ) : (
              ''
            )
          )}
          <Button className={classes.itemFilter} onClick={onRemoveSearchFilter}>
            <CloseIcon fontSize="small" />
          </Button>
        </p>
      )}
      {getFilterBarText().length > 0 &&
        getFilterBarText().map((val, idx) => (
          <p className={classes.filterBarText} key={idx}>
            {val.slice(0, val.length - 2)}
            <Button className={classes.itemFilter} onClick={() => onRemoveFilter(idx)}>
              <CloseIcon fontSize="small" />
            </Button>
          </p>
        ))}
    </div>
  );

  //filter check part

  const onCheck = (type, id) => {
    const temp = { ...filterData };
    if (temp[type].indexOf(id) === -1) temp[type].push(id);
    else temp[type].splice(temp[type].indexOf(id), 1);
    setFilterData(temp);
  };

  const checkBox = (id, data, type) => (
    <Grid key={id} container className={classes.checkboxWrapper}>
      <Checkbox
        checked={filterData[type].indexOf(id) !== -1}
        onChange={() => onCheck(type, id)}
        color="primary"
        name="check"
      />
      <Grid className={classes.itemLabel}>{data}</Grid>
    </Grid>
  );

  //Pagination part
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Popover part
  const [filterView, setFilterView] = React.useState<null | HTMLElement>(null);
  const [menuView, setMenuView] = React.useState<null | HTMLElement>(null);
  const [itemFilterView, setItemFilterView] = React.useState<null | HTMLElement>(null);
  const [itemFilterViewIdx, setItemFilterViewIdx] = React.useState<null | number>(null);

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterView(event.currentTarget);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuView(event.currentTarget);
  };

  const handleItemFilterClick = (event: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    setItemFilterView(event.currentTarget);
    setItemFilterViewIdx(idx);
  };

  const handleClose = () => {
    setFilterView(null);
    setMenuView(null);
    setItemFilterView(null);
    setItemFilterViewIdx(null);
  };

  const ActionMenu = () => (
    <div className={classes.menuPanel}>
      <Button className={classes.menuButton} onClick={handleMenuClick}>
        <MoreVertIcon />
      </Button>
      <Popover
        classes={{ paper: classes.popShadow }}
        anchorEl={menuView}
        open={Boolean(menuView)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem className={classes.actionMenuItem1} onClick={handleClose}>
          {t('rental:extend_rent')}
        </MenuItem>
        <MenuItem className={classes.actionMenuItem2} onClick={handleClose}>
          {t('user:abort')}
        </MenuItem>
      </Popover>
    </div>
  );

  const ItemFilter = (idx: number) => (
    <div className={classes.menuPanel}>
      <Button className={classes.itemFilter} onClick={(e) => handleItemFilterClick(e, idx)}>
        <FilterListIcon fontSize="small" />
      </Button>
      <Popover
        classes={{ paper: classes.popShadow }}
        anchorEl={itemFilterView}
        open={itemFilterViewIdx === idx}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.itemFilterPanel}>
          {!(idx === 7 || idx === 8) && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Autocomplete
                freeSolo
                options={getSubText(idx)}
                renderInput={(params) => (
                  <InputBase
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    placeholder="Search"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                )}
                value={subFilterText[idx]}
                inputValue={subFilterText[idx]}
                onInputChange={(_e, val) => setItemFilterText(idx, val)}
              />
            </div>
          )}
          <div className={classes.seperateLine}></div>
          <Grid container spacing={2}>
            {idx === 0 && (
              <Grid className={classes.filterGroup} item>
                <p className={classes.filterTitle}>{t('rental:status')}</p>
                {status.length && status.map((data, index) => checkBox(index, data, 'status'))}
              </Grid>
            )}
            {idx === 2 && (
              <Grid className={classes.filterGroup} item>
                <p className={classes.filterTitle}>{t('rental:invoice_status')}</p>
                {invoice_status.length && invoice_status.map((data, index) => checkBox(index, data, 'invoice_status'))}
              </Grid>
            )}
            {idx === 7 && (
              <Grid className={classes.filterGroup} item>
                <p className={classes.filterTitle}>{t('rental:channel')}</p>
                {channel.length && channel.map((data, index) => checkBox(index, data, 'channel'))}
              </Grid>
            )}
            {idx === 8 && (
              <Grid className={classes.filterGroup} item>
                <p className={classes.filterTitle}>{t('rental:place')}</p>
                {place.length && place.map((data, index) => checkBox(index, data, 'place'))}
              </Grid>
            )}
            <Grid className={classes.filterGroup} item></Grid>
            <Button className={classes.shutdownButton} onClick={handleClose}>
              {t('rental:shutdown')}
            </Button>
          </Grid>
        </div>
      </Popover>
    </div>
  );

  return (
    <form>
      <div className={classes.filterPanel}>
        <Button className={classes.filterIcon} onClick={handleFilterClick}>
          <FilterListIcon />
        </Button>
        {FilterBar()}
        <Popover
          classes={{ paper: classes.mainFilter }}
          open={Boolean(filterView)}
          anchorEl={filterView}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <div className={classes.filterContent}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Autocomplete
                freeSolo
                options={getAllText()}
                renderInput={(params) => (
                  <InputBase
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                    placeholder={t('rental:search_comment')}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                )}
                value={filterText}
                inputValue={filterText}
                onInputChange={(_e, val) => setFilterText(val)}
              />
            </div>
            <div className={classes.seperateLine}></div>
            <Grid container>
              <Grid className={classes.filterGroup} item md={2} xs={6}>
                <p className={classes.filterTitle}>{t('rental:status')}</p>
                {status.length && status.map((data, index) => checkBox(index, data, 'status'))}
              </Grid>
              <Grid className={classes.filterGroup} item md={2} xs={6}>
                <p className={classes.filterTitle}>{t('rental:invoice_status')}</p>
                {invoice_status.length && invoice_status.map((data, index) => checkBox(index, data, 'invoice_status'))}
                <p className={classes.filterTitle}>{t('rental:channel')}</p>
                {channel.length && channel.map((data, index) => checkBox(index, data, 'channel'))}
              </Grid>
              <Grid className={classes.filterGroup} item md={2} xs={6}>
                <p className={classes.filterTitle}>{t('rental:place')}</p>
                {place.length && place.map((data, index) => checkBox(index, data, 'place'))}
              </Grid>
              <Grid className={classes.filterGroup} item md={2} xs={6}>
                <p className={classes.filterTitle}>{t('rental:date_range')}</p>
                <p>{t('rental:entire_area')}</p>
              </Grid>
              <Button className={classes.shutdownButton} onClick={handleClose}>
                {t('rental:shutdown')}
              </Button>
            </Grid>
          </div>
        </Popover>
      </div>
      <div className={classes.listPanel}>
        <Grid className={classes.tableWrapper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {headerCells.map((val, idx) => (
                  <TableCell key={idx} className={idx > 2 ? classes.cellStyle : ''}>
                    {val}
                    {idx < headerCells.length - 1 ? ItemFilter(idx) : ''}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((val, idx) => (
                  <TableRow
                    className={classes.rowStyle}
                    key={idx}
                    onClick={() => Router.push({ pathname: '/rental/detail', query: val })}
                  >
                    <TableCell>
                      <p>{val.order}</p>
                      <p className={val.order_type === 4 ? classes.statusPanel2 : classes.statusPanel1}>
                        {status[val.order_type]}
                      </p>
                    </TableCell>
                    <TableCell>{val.machine}</TableCell>
                    <TableCell>
                      <p>{val.invoice}</p>
                      <p className={val.invoice_type === 2 ? classes.statusPanel2 : classes.statusPanel1}>
                        {val.invoice_type === 2 ? status[4] : invoice_status[val.invoice_type]}
                      </p>
                    </TableCell>
                    <TableCell className={classes.cellStyle}>{val.cost}</TableCell>
                    <TableCell className={classes.cellStyle}>{val.address}</TableCell>
                    <TableCell className={classes.cellStyle}>{val.period}</TableCell>
                    <TableCell className={classes.cellStyle}>{val.customer}</TableCell>
                    <TableCell className={classes.cellStyle}>{place[val.park]}</TableCell>
                    <TableCell className={classes.cellStyle}>{channel[val.channel]}</TableCell>
                    <TableCell className={classes.cellStyle}>{ActionMenu()}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={filteredData().length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage={t('rental:line_per_page') + ':'}
          />
        </Grid>
      </div>
    </form>
  );
};

export default RentalTable;
