import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import api from '../../../services/api';

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams);
  const searchQuery = searchParams.get('query');
  console.log('seachQuery2: ', searchQuery);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Effectuer une requête API avec le terme de recaherche
    const fetchSearchResults = async () => {
      try {
        const response = await api.get(`/search/sessions?query=${searchQuery}`);
        console.log("Réponse de l'API :", response.data);
        setSearchResults(response.data.sessions);
      } catch (error) {
        console.error('Erreur lors de la recherche :', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);
  console.log('searchResults :', searchResults);
  return (
    <Box>
      <Typography variant="h4">
        Résultats de la recherche pour "{searchQuery}"
      </Typography>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <Typography>
              Date : {result.date}
              <br />
              Heure de début : {result.start_time}
              <br />
              Heure de fin : {result.end_time}
              <br />
              Lieu : {result.location}
              <br />
              Prix : {result.price}
              <br />
              Statut : {result.status}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default SearchResults;
