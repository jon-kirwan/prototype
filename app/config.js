// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  serviceName: 'Apply for a juggling licence',
  serviceDept: 'DfJ (Department for Juggling)',
  jugglingItems: [
    {
      value: "Clubs",
      text: "Clubs"
    },
    {
      value: "Rings",
      text: "Rings"
    },
    {
      value: "Knives",
      text: "Knives"
    },
    {
      value: "Fruits",
      text: "Fruits"
    },
    {
      value: "Vegetables",
      text: "Vegetables"
    }
  ],
  port: '3000',
  useAuth: 'true',
  useAutoStoreData: 'true',
  useCookieSessionStore: 'false',
  useDocumentation: 'true',
  useHttps: 'true',
  useBrowserSync: 'true'
}
