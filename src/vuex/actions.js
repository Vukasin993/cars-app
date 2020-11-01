import {cars} from '../services/Cars'

export const actions = {
    async fetchCars(state) {
        const data = await cars.getAll();
        state.commit('setCars', data);
    },

    deleteCar(state, id) {
        cars.delete(id);
        state.commit('deleteCar', id);
    },

    editCar(state, id) {
        const data = cars.edit(id);
        state.commit('editCar', data)
    },

    getOne(state) {
        const data = cars.getOne();
        state.commit('singleCar', data)
    },


}