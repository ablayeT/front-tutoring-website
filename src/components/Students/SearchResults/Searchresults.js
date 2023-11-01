import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import api from '../../../services/api';

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log('searchParams in searchresults : ', searchParams);
  const query = searchParams.get('query');

  const [studentSessions, setStudentSessions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const studentId = localStorage.getItem('userId');
    const fetchStudentSessions = async () => {
      try {
        const response = await api.get(`/students/sessions/${studentId}`);
        console.log("Réponse de l'API :", response.data);
        setStudentSessions(response.data.sessions);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des sessions de l'étudiant :",
          error,
        );
      }
    };

    // Effectuer une requête API avec le terme de recaherche
    const fetchSearchResults = async () => {
      try {
        const response = await api.get(`/search/sessions?query=${query}`);
        setSearchResults(response.data.sessions);
      } catch (error) {
        console.error('Erreur lors de la recherche :', error);
      }
    };

    fetchStudentSessions();
    fetchSearchResults();
  }, [query]);

  useEffect(() => {
    console.log('query : ', query);
  });

  console.log('searchResults : ', searchResults);
  console.log('studentSessions:', studentSessions);

  const filteredSearchResults = searchResults.filter((result) => {
    return !studentSessions.some(
      (session) => session.session_id === parseInt(result.id),
    );
  });

  console.log('filteredSearchResults :', filteredSearchResults);
  console.log('seachQuery  in query: ', query);
  return (
    <Box>
      <Typography variant="h4">
        Résultats de la recherche pour "{query}"
      </Typography>
      <ul>
        {filteredSearchResults.map((result) => (
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
