import { useState } from 'react';
import './SearchForm.sass';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
const SearchForm = ({ handleSearch }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchInput = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = (event: any) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };
  return (
    <form className="search-form-container" name="searchForm">
      <InputLabel htmlFor="inputSearch">Get data from page</InputLabel>
      <TextField
        data-testid="inputSearch"
        id="inputSearch"
        onChange={handleSearchInput}
        aria-label="Page Number"
        placeholder="Page number"
        size="small"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSearchClick} type="submit">
        Go
      </Button>
    </form>
  );
};
export default SearchForm;
