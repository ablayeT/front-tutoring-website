import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const BackButton = ({ label }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Revenir en arrière d'une page dans l'historique de navigation
    navigate(-1);
  };
  return <Button onClick={handleBackClick}>{label || 'Retour'}</Button>;
};

export default BackButton;
