import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api'

function TutorProfileForm() {
  const [formData, setFormData] = useState({
    imageUrl: '',
    skills: '',
    experience: '',
    hourly_rate: '',
    availability: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name === 'imageUrl' && files && files.length > 0) {
      setFormData({...formData, imageUrl: files[0]});
    }else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Récupérer l'id de l'utilisateur à partir du localStorage
      const userId = localStorage.getItem('userId');

      // Créer un objet FormData pour envoyer les données du formulaire (y compris l'image)
      const formDataToSend = new FormData();
      formDataToSend.append('imageUrl', formData.imageUrl);
      formDataToSend.append('skills', formData.skills);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('hourly_rate', formData.hourly_rate);
      formDataToSend.append('availability', formData.availability);

      console.log('formDataTosend:', formDataToSend)

      // Envoyer une requête POST au backend pour enregistrer le profil du tuteur
      const response = await api.post(`/tutors/profile/${userId}`, formDataToSend, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data', // ajouter le Content-Type correct pour les envois multipart
        },
      });
      console.log(response.data); // Un message de succès

       // Une fois le profil créé avec succès, rediriger l'utilisateur vers le tableau de bord
      navigate('/tutor-dashboard'); 

    } catch (error) {
      console.error(error); // Pour afficher toute erreur survenue lors de la requête
    }
  };

 

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Remplir le profil</h2>
      <div>
        <label htmlFor="imageUrl">Photo de profil</label>
        <input type="file" name="imageUrl" id="imageUrl" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="skills">Compétences</label>
        <textarea name="skills" id="skills" value={formData.skills} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="experience">Expérience</label>
        <textarea name="experience" id="experience" value={formData.experience} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="hourly_rate">Taux horaire</label>
        <input type="text" name="hourly_rate" id="hourly_rate" value={formData.hourly_rate} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="availability">Disponibilité</label>
        <textarea name="availability" id="availability" value={formData.availability} onChange={handleChange} />
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default TutorProfileForm;
