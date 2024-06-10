import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { setSelectedItem } from './SelectSlice';
import Swal from 'sweetalert2';
import LoadingSpinner from './LoadingSpinner';
import { Button, Col, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function createData(id, name, place, pickup_date,pickup_time,phone, mode,salesman,driver, status) {
    return {
      id,
      name,
      place,
      pickup_date,
      pickup_time,
      phone,
      mode,
      salesman,
      driver,
      status,
    };
  }
  



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'place',
      numeric: false,
      disablePadding: false,
      label: 'Place',
    },
    {
      id: 'pickup_date',
      numeric: false,
      disablePadding: false,
      label: 'Pickup Date',
    },
    {
      id: 'pickup_time',
      numeric: false,
      disablePadding: false,
      label: 'Time',
    },
    {
        id: 'phone',
        numeric: false,
        disablePadding: false,
        label: 'Phone',
      },
      {
        id: 'mode',
        numeric: false,
        disablePadding: false,
        label: 'Mode',
      },
      {
        id: 'salesman',
        numeric: false,
        disablePadding: false,
        label: 'Salesman',
      },
      {
        id: 'driver',
        numeric: false,
        disablePadding: false,
        label: 'Driver',
      },
    {
      id: 'status',
      numeric: false,
      disablePadding: false,
      label: 'Status',
    },
  ];
  

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <>
  
    <TableHead>
   

      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    </>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;


  return (
    <>
<br/>

<div style={{backgroundColor:"#F0F0F0",padding:"20px"}}>
        <div className="input-group">
      <div className="form-outline" data-mdb-input-init>
      <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search"
            style={{ width: "100%" }}
            value={props.handleSearchQuery}
            onChange={(e) =>props.handleSetSearchQuery(e.target.value)}
          />      </div>
<br/>
   
    </div>      
 
    </div>

    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
     
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Pickup List
        </Typography>
      )}




      {numSelected > 0 ? (
        <div style={{display:"flex"}}>
<Tooltip title="Edit">
<IconButton onClick={props.handleEditClick} disabled={numSelected !== 1}>
        <EditIcon />
  </IconButton>
</Tooltip>


        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon  onClick={props.handleDeleteClick}   />
          </IconButton>
          
        </Tooltip>


</div>
      ) : (
      ""
      )}
   
    </Toolbar>
    </>
  );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    handleEditClick: PropTypes.func.isRequired, 
    handleDeleteClick: PropTypes.func.isRequired,
    handleSearchQuery: PropTypes.func.isRequired,
    handleSetSearchQuery: PropTypes.func.isRequired,

  };
  
export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  

  const dispatch=useDispatch()

  React.useEffect(() => {
    fetchdetails();
  }, []);

  React.useEffect(() => {
    const results = rows.filter(row =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.pickup_date.toLowerCase().includes(searchQuery.toLowerCase())||
      row.pickup_time.toLowerCase().includes(searchQuery.toLowerCase())||
      row.salesman.toLowerCase().includes(searchQuery.toLowerCase())||
      row.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.mode.toLowerCase().includes(searchQuery.toLowerCase())



    );
    setFilteredRows(results);
  }, [searchQuery, rows]);
  
  const fetchdetails = async () => {
    try {
      const response = await axios.get('https://cargo-backend-2log.onrender.com/api/enquiryview/');
      console.log( response.data.data,'');

      const formattedData = response.data.data.map((item) => ({
        id: item.id,
        name: item.name,
        place: item.place,
        pickup_date:item.pickup_date,
        pickup_time:item.pickup_time,
        phone:item.phone,
        mode:item.mode,
        salesman:item.salesman ? item.salesman.username : 'Nill',
        driver:item.driver? item.driver :'Nill',
        status: item.status
      }));
      setRows(formattedData);
      setFilteredRows(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleEdit = () => {
    console.log(data); 
    dispatch(setSelectedItem(data))

  
  };


  
  const handleDeleteClick = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true)
        try {
            const deletePromises = selected.map((id) =>
                axios.delete(`https://cargo-backend-2log.onrender.com/api/enquiries_delete/${id}/`)
              );
              await Promise.all(deletePromises);
              const newRows = rows.filter((row) => !selected.includes(row.id));
              setRows(newRows);
              setSelected([]);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          setIsLoading(false)
        } catch (error) {
          console.error('Failed to delete rows:', error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting your file.",
            icon: "error"
          });
        }
      }
    });
  };
  


  

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
  
    // If the clicked item is already selected, remove it from the selection
    if (selectedIndex !== -1) {
      newSelected = selected.filter((itemId) => itemId !== id);
    } else {
      // If the clicked item is not already selected, add it to the selection
      newSelected = [...selected, id];
    }
  
    setSelected(newSelected);
    console.log(selected,'sssssssssss');
  
    // Set the data for the last selected item
    const lastSelectedId = newSelected.length > 0 ? newSelected[newSelected.length - 1] : null;
    const selectedRow = rows.find((row) => row.id === lastSelectedId);
    setData(selectedRow);
    
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(() => {
        return stableSort(filteredRows, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        );
      }, [order, orderBy, page, rowsPerPage, filteredRows]);
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} handleEditClick={() => handleEdit(data)}  
               handleDeleteClick={handleDeleteClick}
               handleSearchQuery={searchQuery}
               handleSetSearchQuery={setSearchQuery}
/>
        <TableContainer>
        {isLoading && (
        <div
          className="position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center bg-light bg-opacity-50"
          aria-hidden="true"
          style={{ zIndex: 50 }}
        >
          <LoadingSpinner/>
        </div>
      )}
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <>


                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.place}</TableCell>
                    <TableCell align="left">{row.pickup_date}</TableCell>
                    <TableCell align="left">{row.pickup_time}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.mode}</TableCell>
                    <TableCell align="left">{row.salesman}</TableCell>
                    <TableCell align="left">{row.driver}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>

                  </TableRow>
                  </>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
