export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea22f7382d17fadc8a659ed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jzo8rc77',
                  apiId: '0f50401a-d8f0-4a55-8060-9793ee3251ac'
                },
                {
                  buildHookId: '5ea22f73bd41536f499bf586',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s7p6y88z',
                  apiId: 'a1a68a51-4786-42ef-8a45-b329a0c5e1a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MickCoelho/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s7p6y88z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
