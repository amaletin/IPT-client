export default [
  {
    children: [
      {
        name: '3D принтеры',
        route: '/catalog/printers',
      },
      {
        name: '3D сканеры',
        route: '/catalog/scanners',
      },
      {
        name: 'расходные материалы',
        route: '/catalog/consumables',
      },
      {
        name: '3D ручки',
        route: '/catalog/pens',
      },
    ],
    name: 'Каталог',
    route: '',
  },
  {
    name: '3D печать',
    route: '/printing',
  },
  {
    name: 'Статьи',
    route: '/posts',
  },
  {
    name: 'Сервис-центр',
    route: '/service',
  },
  {
    name: 'Аренда',
    route: '/rent',
  },
  {
    name: 'О нас',
    route: '/about',
  },
];
