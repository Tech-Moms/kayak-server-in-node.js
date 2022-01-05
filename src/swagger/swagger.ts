import { slccFall2021Paths } from "./slcc-fall-2021-paths";

const environments = [
  {
    url: 'http://localhost:3000',
    description: 'Local server',
    env: 'LOCAL'
  }
];

const currentEnvironment = environments.filter((environment) => {
  return environment.env.trim().toUpperCase() === process.env.NODE_ENV;
});

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'API Documentation for Tech-Moms Backend Demo',
    termsOfService: '',
    contact: {
      name: 'Adi Eror',
      email: 'eror.adrienne@gmail.com'
    },
    lisense: {
      name: 'Apache 2.0',
      url: ''
    }
  },
  servers: currentEnvironment,
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    ...slccFall2021Paths
  },
  components: {
    schemas: {
      SingleSchema: {
        '200': {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  _id: { type: 'string' },
                  name: { type: 'string' },
                  role: { type: 'string' },
                  email: { type: 'string' },
                  __v: { type: 'string' }
                }
              }
            }
          }
        },
        '400': {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'string'
              }
            }
          }
        }
      },
      GetAllSchema: {
        '200': {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    role: { type: 'string' },
                    email: { type: 'string' }
                  }
                }
              }
            }
          }
        },
        '400': {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'string'
              }
            }
          }
        }
      },
      DeleteSchema: {
        '200': {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'string',
              }
            }
          }
        },
        '400': {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'string'
              }
            }
          }
        }
      }
    },
    requestBodies: {
      PostBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                role: { type: 'string' },
                email: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }
}