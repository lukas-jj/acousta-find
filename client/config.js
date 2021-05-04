const environments = {
    development: 'http://localhost:3000/api/v1',
    test: 'http://localhost:3333/api',
    production: 'https://acoustafind.herokuapp.com/api',
    integration: '',
    deployment: '',
    build: ''
  }
  
  const env = process.env.NODE_ENV || 'development'
  
  export const baseApiUrl = environments[env]