const idParam = {
  name: 'id',
  in: 'path',
  description: 'The ID of the TechMom.',
  type: 'string'
};

export const createNewRecord = {
  tags: ['SLCC Fall 2021'],
  description: 'Creates a new record for TechMoms SLCC Fall 2021 Cohort',
  operationId: 'createNewRecord',
  requestBody: {
    $ref: '#/components/requestBodies/PostBody'
  },
  responses: {
    $ref: '#/components/schemas/SingleSchema'
  }
};

export const getAllRecords = {
  tags: ['SLCC Fall 2021'],
  description: 'Gets all TechMoms for the SLCC Fall 2021 Cohort',
  operationId: 'getAllRecords',
  responses: {
    $ref: '#/components/schemas/GetAllSchema'
  }
};

export const getById = {
  tags: ['SLCC Fall 2021'],
  description: 'Gets a single TechMom for the SLCC Fall 2021 Cohort by ID',
  operationId: 'getById',
  parameters: [idParam],
  responses: {
    $ref: '#/components/schemas/SingleSchema'
  }
};

export const updateById = {
  tags: ['SLCC Fall 2021'],
  description: 'Updates a single TechMom for the SLCC Fall 2021 Cohort by ID',
  operationId: 'updateById',
  parameters: [idParam],
  requestBody: {
    $ref: '#/components/requestBodies/PostBody'
  },
  responses: {
    $ref: '#/components/schemas/SingleSchema'
  }
};

export const deleteById = {
  tags: ['SLCC Fall 2021'],
  description: 'Deletes a single TechMom for the SLCC Fall 2021 Cohort by ID',
  operationId: 'deleteById',
  parameters: [idParam],
  responses: {
    $ref: '#/components/schemas/DeleteSchema'
  }
};