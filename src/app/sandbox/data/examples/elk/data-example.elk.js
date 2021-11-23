const nodes = [
  { id: '1', label: 'Дедушка' },
  { id: '2', label: 'Бабушка' },
  { id: '3', label: 'Дедушка' },
  { id: '4', label: 'Бабушка' },
  { id: '5', label: 'Отец' },
  { id: '6', label: 'Мать' },
  {
    id: '7',
    label: 'Жена',
    /*     layoutOptions: {
          'elk.partitioning.partition': 1
        } */
  },
  {
    id: '8',
    label: 'Это я',
    /*     layoutOptions: {
          'elk.partitioning.partition': 1
        } */
  },
  {
    id: '9',
    label: 'Мать ребенка',
    // layout: [position: 100, 0]
    // layoutOptions: { 'elk.position': '(200,0)' }
    /*     layoutOptions: {
          'elk.partitioning.partition': 1
        } */
  },
  {
    id: '10',
    label: 'Сын',
    /*     layoutOptions: {
          'elk.partitioning.partition': 3
        } */
  },
  {
    id: '11',
    label: 'Сын',
    /*     layoutOptions: {
          'elk.partitioning.partition': 3
        } */
  },
  {
    id: '12',
    label: 'Сын',
    /*     layoutOptions: {
          'elk.partitioning.partition': 3
        } */
  },
  {
    id: '13',
    label: 'Сын',
    /*     layoutOptions: {
          'elk.partitioning.partition': 3
        } */
  },
  {
    id: '14',
    label: 'Сын',
    layoutOptions: {
      'elk.partitioning.partition': 3
    }
  },
];

const edges = [
  ['1', '5'],
  ['2', '5'],
  ['3', '6'],
  ['4', '6'],
  ['5', '8'],
  ['6', '8'],
  // ['7', '8'],
  ['7', '10', '1'],
  ['7', '11', '1'],
  ['7', '12', '1'],
  ['7', '13', '1'],
  // ['8', '7', '1'],
  ['8', '10', '1'],
  ['8', '11', '1'],
  ['8', '12', '1'],
  ['8', '13', '1'],
  ['8', '14'],
  // ['9', '8', '2'],
  ['9', '14'],
];

export {
  nodes,
  edges
};