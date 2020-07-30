export default {
  getAllCats: (state) => {
    return state.cats
  },
  getAllDogs: (state) => {
    return state.dogs
  },
  getAllPets: (state) => {
    return [...state.cats, ...state.dogs]
  }
}
