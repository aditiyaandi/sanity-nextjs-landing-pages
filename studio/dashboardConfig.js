export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e6f0cf9a4ac10b6ce965cb1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y831ssew',
                  apiId: '091c1647-82f1-47b1-9d0a-b3ab0a76eb0c'
                },
                {
                  buildHookId: '5e6f0cf9fb5f316b05961f37',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xbnwq2fw',
                  apiId: 'ed599dd4-b604-487a-94bb-54615562d5d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aditiyaandi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xbnwq2fw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
