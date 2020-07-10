const initialState = {
  image: []
}

const reducer = (state = initialState, action) => {
  switch (action, type) {
    case 'ADD_IMAGE':
      return {
        ...state,
        images: [...state.images, action.image]
      }
    case 'DELETE_IMAGE':
      return {
        ...state,
        images: state.image.filter(image => image !== action.images)
      }
    default:
      return state
  }
}

export default reducer