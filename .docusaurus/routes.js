import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/coding-questions/docs',
    component: ComponentCreator('/coding-questions/docs', '9b9'),
    routes: [
      {
        path: '/coding-questions/docs',
        component: ComponentCreator('/coding-questions/docs', '0ea'),
        routes: [
          {
            path: '/coding-questions/docs',
            component: ComponentCreator('/coding-questions/docs', '621'),
            routes: [
              {
                path: '/coding-questions/docs/category/coding-questions',
                component: ComponentCreator('/coding-questions/docs/category/coding-questions', '278'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coding-questions/docs/Coding Questions/coding-preparation',
                component: ComponentCreator('/coding-questions/docs/Coding Questions/coding-preparation', '41f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coding-questions/docs/Coding Questions/Service Companies/coding-questions',
                component: ComponentCreator('/coding-questions/docs/Coding Questions/Service Companies/coding-questions', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coding-questions/docs/Coding Questions/Service Companies/DSA-question',
                component: ComponentCreator('/coding-questions/docs/Coding Questions/Service Companies/DSA-question', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coding-questions/docs/Coding Questions/Service Companies/interview-process',
                component: ComponentCreator('/coding-questions/docs/Coding Questions/Service Companies/interview-process', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coding-questions/docs/Coding Questions/Service Companies/System-design',
                component: ComponentCreator('/coding-questions/docs/Coding Questions/Service Companies/System-design', 'f3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coding-questions/docs/intro',
                component: ComponentCreator('/coding-questions/docs/intro', 'ac9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/coding-questions/',
    component: ComponentCreator('/coding-questions/', 'd08'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
