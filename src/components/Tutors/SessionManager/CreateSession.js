import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, Stack, FormLabel } from '@mui/material';



function TutoringSessionForm() {
  const [formData, setFormData] = useState({
    tutor_id: localStorage.getItem('userId'),
    subject_id: '',
    date: '',
    start_time: '',
    end_time: '',
    location: '',
    price: '',
  });

  const [subjects, setSubjects] = useState([]);

//   const subjectId = localStorage.getItem('subjectid');
// console.log('subjectId', subjectId);
  useEffect(() => {
    api.get('/tutors/subjects')
      .then((response) => {
        if (Array.isArray(response.data.subjects)) {
          setSubjects(response.data.subjects);
        } else {
          console.error('Subjects data is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
 
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('tutor_id', formData.tutor_id);
    formDataToSend.append('subject_id', formData.subject_id);
    formDataToSend.append('date', formData.date);
    formDataToSend.append('start_time', formData.start_time);
    formDataToSend.append('end_time', formData.end_time);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('price', formData.price);

    

   
    api.post('/tutors/sessions', formDataToSend, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
    .then((response)=> {
      console.log(response.data); // Utilisez response.data au lieu de response.json
    })
    .catch(error => console.log(error));
    
    
     

      // console.log('Session created:', response.data);
   
  };

  return (
    <Box display='flex' flexDirection='column' justifyContent='center'  width='30%' margin ='auto' borderRadius='15px' padding='15px'>
      <Typography variant='h4' marginBottom='15px' >Créer une session de tutorat</Typography>
      
      <FormControl sx={{display:'flex', width:'95%', gap:'20px', flexDirection:'column', padding:'10px', borderRadius:'15px', border:'1px solid gray'}} >
      <form onSubmit={handleSubmit}>
        <Stack>
          <FormLabel>Tutor ID</FormLabel>
        <TextField
          type="text"
          name="tutor_id"
          value={formData.tutor_id}
          onChange={handleInputChange}
          disabled
          
        />
        </Stack>
        <FormControl >
          <FormLabel>Sélectionner un sujet</FormLabel>
          <Select name="subject_id" value={formData.subject_id} onChange={handleInputChange} required>
            {subjects.map((subject) => (
              <MenuItem key={subject.id} value={subject.id}>
                {subject.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack>
          <FormLabel>Date</FormLabel>
        <TextField
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        </Stack>
        <Stack>
        <FormLabel>Heure de début</FormLabel>
        <TextField
          type="time"
          name="start_time"
          value={formData.start_time}
          onChange={handleInputChange}
          required
        />
        </Stack>
        <Stack>
        <FormLabel>Heure de fin</FormLabel>
        <TextField
          type="time"
          name="end_time"
          value={formData.end_time}
          onChange={handleInputChange}
          required
          variant='outlined'
        />
        </Stack>
        <Stack>
        <FormLabel>Emplacement</FormLabel>
        <TextField
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
        </Stack>
        <Stack>
        <FormLabel>Prix</FormLabel>
        <TextField
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        </Stack>
        <Button  type="submit" variant="contained" sx={{width:'50%', margin:'auto'}} color="primary">
          Créer la session
        </Button>
        </form>
      </FormControl>
     
    </Box>
  );
}

export default TutoringSessionForm;
