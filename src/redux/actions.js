export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const add = (id,nom, email, message, genre) => ({
  type: ADD,
  payload: { nom, email, message, genre },
});


export const deleteItem = (id) => ({
  type:DELETE,
  payload: id,
});
