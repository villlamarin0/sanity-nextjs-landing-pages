export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '623125f3a36aa047301c2e4c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xbevy9ig',
                  apiId: 'c3113f02-324e-4320-b6cb-ce7577347f63'
                },
                {
                  buildHookId: '623125f3685c880d7f2200f5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-horty98u',
                  apiId: '99587ff5-472d-4300-8a76-6daf0c813833'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/villlamarin0/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-horty98u.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
