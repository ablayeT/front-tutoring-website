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
import useStyles from './style';
import { useNavigate } from 'react-router-dom';

function CreateSession({ mode, sessionToEdit, handleCancelCreate }) {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);

  const { classes } = useStyles();
  const tutorId = localStorage.getItem('userId');

  const updateSessions = (newSession) => {
    setSessions([...sessions, newSession]);
  };

  const [formData, setFormData] = useState({
    tutor_id: tutorId,
    subject_id: '',
    date: '',
    start_time: '',
    end_time: '',
    location: '',
    price: '',
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
  const handleCancel = () => {
    console.log('teste');
    console.log(typeof onCancel);
    handleCancelCreate();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiEndPoint =
      mode === 'edit'
        ? `/tutors/sessions/${sessionToEdit.id}`
        : '/tutors/sessions';

    const httpMethod = mode === 'edit' ? 'PUT' : 'POST';

    api
      .request({
        method: httpMethod,
        url: apiEndPoint,
        data: formData,
      })
      .then((response) => {
        console.log('response.data.session :', response.data.session);
        updateSessions(response.data.session);

        navigate('/tutor-dashboard/sessions');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className={classes.createSessionContainer}>
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
        <Box display="flex" justifyContent="center" gap="1rem" marginTop="2rem">
          <Button onClick={handleCancel}>Annuler</Button>
          <Button>Créer la session</Button>
        </Box>
        {/* </form> */}
      </FormControl>
    </Box>
  );
}

export default CreateSession;
