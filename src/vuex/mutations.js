export const mutations = {
    setCars(state, payload) {
        state.cars = payload
    },

    deleteCar(state, id) {
        state.cars = state.cars.filter(cars => cars.id !== id);
    },

    singleCar(state, id) {
        state.cars = state.cars.filter(cars=>cars.id === id)
    }
}