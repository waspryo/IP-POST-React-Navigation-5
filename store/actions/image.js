export const addImage = ({ image }) => {
  return {
    type: 'ADD_IMAGE',
    image
  }
}

export const deleteImage = ({ image }) => {
  return {
    type: 'DELETE_IMAGE',
    image
  }
}