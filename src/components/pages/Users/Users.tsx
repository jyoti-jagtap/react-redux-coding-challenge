import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import Button from '@mui/material/Button';
import SearchForm from '../../molecules/SearchForm';
import axios from 'axios';
import './Users.sass';
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
import { ColDef } from 'ag-grid-community';
import NavConstants from '../../../routes/NavConstants';
const baseURL = 'https://reqres.in/api/users';
const Users = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [saveDisabled, setSaveDisabled] = useState(true);
  const gridRef = useRef<AgGridReact<IUsers>>(null);
  const [gridApi, setGridApi] = useState<null>(null);
  const [page, setPage] = useState<string>();
  const containerStyle = useMemo(
    () => ({ width: '100%', height: '350px' }),
    []
  );
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState<IUsers[]>();
  const [columnDefs] = useState<ColDef[]>([
    {
      field: 'first_name',
      headerName: 'First Name',
      filter: 'agTextColumnFilter',
      menuTabs: ['filterMenuTab']
    },
    { field: 'last_name', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
    {
      checkboxSelection: true,
      headerCheckboxSelection: true
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
      minWidth: 100,
      sortable: false
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
      axios
        .get(baseURL + `?page=${page}`)
        .then((res) => {
          setRowData(res.data.data);
          gridRef.current!.api.hideOverlay();
        })
        .catch((err) => {
          gridRef.current!.api.hideOverlay();
        });
    }
  }, [page, gridApi]);
  const handleSaveSelected = useCallback(() => {
    const selectedRows = gridRef.current!.api.getSelectedRows();
    if (selectedRows) {
      console.log(selectedRows);
      dispatch(saveUsers(selectedRows));
      navigate(NavConstants.SELECTED_USERS, { state: selectedRows[0] });
    }
  }, [dispatch, navigate]);
  const handleSearch = (searchQuery: string) => {
    setPage(searchQuery);
  };
  const methodFromParent = (row: any) => {
    navigate(`/users/${row.id}`, { state: row });
  };
  const onRowSelected = useCallback((event: any) => {
    if (event.type === 'rowSelected')
      event.node.selected ? setSaveDisabled(false) : setSaveDisabled(true);
  }, []);
  return (
    <div style={containerStyle}>
      <Title>Users</Title>
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
            rowData={rowData}
            onGridReady={onGridReady}
            rowSelection={'multiple'}
            reactiveCustomComponents
            overlayLoadingTemplate={`<div aria-live="polite" aria-atomic="true" style="position:absolute;top:0;left:0;right:0; bottom:0;" aria-label="loading">
              <div class="spinner-border" role="status"></div></div>`}
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
