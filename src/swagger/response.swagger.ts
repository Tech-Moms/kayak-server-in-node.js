export const buildResponse = (schemaPath: string) => {
  return {
    '200': {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            $ref: schemaPath
          }
        }
      }
    }
  }
}