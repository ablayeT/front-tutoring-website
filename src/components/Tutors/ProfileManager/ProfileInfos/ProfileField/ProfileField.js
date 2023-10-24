// ProfileField.jsx
import React, { useState } from 'react';
import { Stack, FormLabel, TextField } from '@mui/material';
import MuiButton from '../../../../Buttons/Button';

function ProfileField({ label, value, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleUpdate = () => {
    setIsEditing(false);
    onUpdate(editedValue);
  };

  return (
    <Stack>
      <FormLabel sx={{ fontSize: '19px', fontWeight: 'bold' }}>
        {label}
      </FormLabel>
      {isEditing ? (
        <Stack direction="row">
          <TextField
            sx={{
              width: '100%',
              type: 'text',
            }}
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
        </Stack>
      ) : (
        <Stack direction="row">
          <TextField
            readOnly
            sx={{
              width: '100%',
              type: 'text',
            }}
            value={value}
          />
        </Stack>
      )}
    </Stack>
  );
}

export default ProfileField;
