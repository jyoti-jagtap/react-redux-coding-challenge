import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import Button from '@mui/material/Button';
import SearchForm from '../../molecules/SearchForm';
import './Users.sass';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo
} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUsers } from '../../../store/users/usersSlice';
import { getUsers } from '../../../services/users';
import ActionCellRenderer from '../../molecules/ActionCellRenderer';
import { IUsers } from '../../../services/users.model';
import Title from '../../atoms/Title';
// Row Data interface

const Users = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [saveDisabled, setSaveDisabled] = useState(true);
  const gridRef = useRef<AgGridReact<IUsers>>(null);
  const [gridApi, setGridApi] = useState<null>(null);
  const [page, setPage] = useState(null);
  const containerStyle = useMemo(
    () => ({ width: '100%', height: '350px' }),
    []
  );
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [columnDefs] = useState<ColDef[]>([
    { field: 'first_name', headerName: 'First Name' },
    { field: 'last_name', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    {
      //headerCheckboxSelection: true,
      checkboxSelection: true
    },
    {
      field: 'action',
      headerName: 'Action',
      minWidth: 190,
      editable: false,
      cellRenderer: ActionCellRenderer
    }
  ]);

  // a default column definition with properties that get applied to every column
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100
    };
  }, []);
  const paginationPageSize = 3;
  const paginationPageSizeSelector = [3, 6, 9, 12, 15];
  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };
  useEffect(() => {
    if (page !== null && gridApi !== null) {
      gridRef.current!.api.showLoadingOverlay();
      const dataSource = {
        getRows: (params: any) => {
          // Use startRow and endRow for sending pagination to Backend
          // params.startRow : Start Page
          // params.endRow : End Page
          const users$ = getUsers(`https://reqres.in/api/users?&page=${page}`);
          console.log(users$);
          users$
            .then((res) => {
              // take a slice of the total rows
              const rowsThisPage = res.data.slice(
                params.startRow,
                params.endRow
              );
              // if on or after the last page, work out the last row.
              let lastRow = -1;
              if (res.data.length <= params.endRow) {
                lastRow = res.data.length;
              }
              // call the success callback
              gridRef.current!.api.hideOverlay();
              params.successCallback(rowsThisPage, lastRow);
            })
            .catch((e) => {
              gridRef.current!.api.hideOverlay();
              params.successCallback([], 0);
            });
        }
      };
      gridRef.current!.api.updateGridOptions({ datasource: dataSource });
    }
  }, [page, gridApi]);
  const handleSaveSelected = useCallback(() => {
    const selectedRows = gridRef.current!.api.getSelectedRows();
    if (selectedRows) {
      console.log(selectedRows);
      dispatch(saveUsers(selectedRows));
      navigate(`/users/selected`, { state: selectedRows[0] });
    }
  }, [dispatch, navigate]);
  // const onSelectionChanged = useCallback(() => {
  //   const selectedRows = gridRef.current!.api.getSelectedRows();
  //   if (selectedRows) {
  //     console.log(selectedRows);
  //     dispatch(saveUsers(selectedRows));
  //     navigate(`/users/${selectedRows[0]}`, { state: selectedRows[0] });
  //   }
  // }, []);
  const handleSearch = (searchQuery: any) => {
    setPage(searchQuery);
  };
  const methodFromParent = (row: any) => {
    navigate(`/user/${row.id}`, { state: row });
  };
  const onRowSelected = useCallback((event: any) => {
    console.log('onRowSelected event', event);

    if (event.source === 'checkboxSelected')
      event.node.isSelected() ? setSaveDisabled(false) : setSaveDisabled(true);
  }, []);
  return (
    <div style={containerStyle}>
      <Title heading="Users List" />
      <div className="filter-group">
        <SearchForm handleSearch={handleSearch} />
        <Button
          variant="contained"
          disabled={saveDisabled}
          onClick={handleSaveSelected}
        >
          Save Selected
        </Button>
      </div>
      {page ? (
        <div style={gridStyle} className={'ag-theme-quartz'}>
          <AgGridReact
            ref={gridRef}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
            pagination={true}
            cacheBlockSize={2}
            rowModelType={'infinite'}
            onGridReady={onGridReady}
            rowSelection={'multiple'}
            reactiveCustomComponents
            overlayLoadingTemplate={
              '<div aria-live="polite" aria-atomic="true" style="position:absolute;top:0;left:0;right:0; bottom:0; background: url(https://ag-grid.com/images/ag-grid-loading-spinner.svg) center no-repeat" aria-label="loading"></div>'
            }
            suppressRowClickSelection={true}
            onRowSelected={onRowSelected}
            context={{
              methodFromParent
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
export default Users;
