export const nav = [
  {
    name: 'Каталог',
    route: '',
    children: [
      {
        name: '3D принтеры',
        route: '/catalog/printers',
      },
      {
        name: '3D сканеры',
        route: '/catalog/scaners',
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
  },
  {
    name: '3D печать',
    route: '/3d',
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

export const canUseDOM = !!(
  (typeof window !== 'undefined'
  && window.document && window.document.createElement)
);

export default {};
