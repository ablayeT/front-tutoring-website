import React, { useState } from 'react';
import api from '../../services/api';
import { Box, Typography, TextField, Button } from '@mui/material';

function TutoringSessionForm() {
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    price: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/tutors/sessions', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // Handle the response, show success message, etc.
      console.log('Session created:', response.data);
    } catch (error) {
      // Handle the error, show error message, etc.
      console.error('Error creating session:', error);
    }
  };

  return (
    <Box>
      <Typography>Créer une session de tutorat</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Heure de début"
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Heure de fin"
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Emplacement"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Prix"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Créer la session
        </Button>
      </form>
    </Box>
  );
}

export default TutoringSessionForm;
