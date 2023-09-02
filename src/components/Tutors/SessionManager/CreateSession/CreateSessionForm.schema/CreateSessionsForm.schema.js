const tutoringSessionFields = [
  {
    key: 'tutor_id',
    label: 'Tutor ID',
    type: 'text',
    disabled: true,
  },
  {
    key: 'subject_id',
    label: 'Sélectionner un sujet',
    type: 'select',
    options: [],
    required: true,
  },
  {
    key: 'date',
    label: 'Date',
    type: 'date',
    required: true,
  },
  {
    key: 'start_time',
    label: 'Heure de début',
    type: 'time',
    required: true,
  },
  {
    key: 'end_time',
    label: 'Heure de fin',
    type: 'time',
    required: true,
  },
  {
    key: 'location',
    label: 'Emplacement',
    type: 'text',
    required: true,
  },
  {
    key: 'price',
    label: 'Tarif',
    type: 'Number',
    required: true,
  },
  {
    key: 'description',
    label: 'Description',
    type: 'text',
    required: true,
  },
];

export default tutoringSessionFields;
