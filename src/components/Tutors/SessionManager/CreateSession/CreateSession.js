import React, { useState, useEffect } from 'react';
import api from '../../../../services/api';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Stack,
  FormLabel,
} from '@mui/material';
import Button from '../../../Buttons/Button';
import tutoringSessionFields from './CreateSessionForm.schema/CreateSessionsForm.schema';

function TutoringSessionForm({ mode, sessionToEdit }) {
  const [formData, setFormData] = useState({
    tutor_id: localStorage.getItem('userId'),
    subject_id: '',
    date: '',
    start_time: '',
    end_time: '',
    location: '',
    price: '',
    description: '',
  });

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    api
      .get('/tutors/subjects')
      .then((response) => {
        if (Array.isArray(response.data.subjects)) {
          setSubjects(response.data.subjects);
        } else {
          console.error('Subjects data is not an array:', response.data);
        }

        if (mode === 'edit') {
          setFormData((prevData) => ({
            ...prevData,
            subject_id: sessionToEdit.subject_id,
          }));
        }
      })
      .catch((error) => {
        console.error('Error fetching subjects:', error);
      });
  }, [mode, sessionToEdit]);

  useEffect(() => {
    if (mode === 'edit') {
      setFormData(sessionToEdit);
    }
  }, [mode, sessionToEdit]);

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
    formDataToSend.append('description', formData.description);

    const apiEndPoint =
      mode === 'edit'
        ? `/tutors/sessions/${sessionToEdit.id}`
        : '/tutors/sessions';

    const httpMethod = mode === 'edit' ? 'PUT' : 'POST';

    api
      .request({
        method: httpMethod,
        url: apiEndPoint,
        data: formDataToSend,
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingTop="8rem"
      paddingBottom="8rem"
    >
      <Typography variant="h4" marginBottom="15px">
        Créer une session
      </Typography>

      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          width: '95%',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        {/* <form onSubmit={handleSubmit}> */}
        {tutoringSessionFields.map((field) => (
          <Stack key={field.key}>
            <FormLabel>{field.label}</FormLabel>
            {field.type === 'select' ? (
              <FormControl>
                <Select
                  name="subject_id"
                  value={formData.subject_id}
                  onChange={handleInputChange}
                  required
                >
                  {subjects.map((subject) => (
                    <MenuItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                type={field.type}
                name={field.key}
                value={formData[field.key]}
                onChange={handleInputChange}
                required={field.required}
                disabled={field.disabled}
              />
            )}
          </Stack>
        ))}
        <Box display="flex" justifyContent="center" marginTop="2rem">
          <Button>Créer la session</Button>
        </Box>
        {/* </form> */}
      </FormControl>
    </Box>
  );
}

export default TutoringSessionForm;
