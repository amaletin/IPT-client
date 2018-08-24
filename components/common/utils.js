export const nav = [
  {
    name: 'Каталог',
    route: 'catalog',
    children: [
      {
        name: '3D принтеры',
        route: 'printers',
      },
      {
        name: '3D сканеры',
        route: 'scaners',
      },
      {
        name: 'расходные материалы',
        route: 'materials',
      },
      {
        name: '3D ручки',
        route: 'pens',
      },
    ],
  },
  {
    name: '3D печать',
    route: '3d',
  },
  {
    name: 'Статьи',
    route: 'articles',
  },
  {
    name: 'Сервис-центр',
    route: 'service',
  },
  {
    name: 'Аренда',
    route: 'rent',
  },
  {
    name: 'О нас',
    route: 'about',
  },
];

export default {};
