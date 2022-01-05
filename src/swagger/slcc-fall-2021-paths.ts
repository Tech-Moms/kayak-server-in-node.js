import { createNewRecord, deleteById, getAllRecords, getById, updateById } from "./slcc-fall-2021.swagger";

export const slccFall2021Paths = {
  '/techmoms/slcc-fall-2021': {
    post: createNewRecord,
    get: getAllRecords
  },
  '/techmoms/slcc-fall-2021/{id}': {
    get: getById,
    patch: updateById,
    delete: deleteById
  }
};

