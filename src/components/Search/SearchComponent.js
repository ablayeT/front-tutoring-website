import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase, useStyles } from './style';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function SearchComponent() {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      // Redirigez l'utilisateur vers la page de recherche avec le terme de recherche en tant que paramètre
      navigate(`search/${searchQuery}`);
    }
  };
  console.log(searchQuery);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography color="black" fontSize="18px">
        Recherche{' '}
      </Typography>
      <Search className={classes.search}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </Search>
    </Box>
  );
}

export default SearchComponent;
