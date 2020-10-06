<template>
    <div>
    <h2>Add Car</h2>
    <form @submit.prevent="addCar">
        <input v-model="brend" type="text" placeholder="Unesi brend">
        <input v-model="model" type="text" placeholder="Unesi model">
        <select v-model="year">
            <option disabled value="">Please select year</option>
            <option v-for="(n, index) in 28" :key="index">{{n + 1989}} </option>
        </select>
        <input v-model="maxSpeed" type="number" placeholder="Unesi maxSpeed">
        <label  for="isAutomatic">Automatic or Manual</label>
        <input type="checkbox" id="automatic" value="automatic" v-model="isAutomatic">
        <label for="automatic">Automatic</label>
        <input type="checkbox" id="manual" value="manual">
        <label for="manual">Manual</label>
        <input v-model="engine" type="text" for="engine" placeholder="Unesi motor">
        <input v-model="numberOfDoors" type="number" placeholder="Unesi numberOfDoors">
        <button>Submit</button>
    </form>
    </div>


</template>

<script>
import {cars} from '../services/Cars'

export default {
    data () {
        return {
            brend: '',
            model: '',
            year: '',
            maxSpeed: '',
            isAutomatic: '',
            engine: '',
            numberOfDoors: '',
        }
    },

    methods: {
        addCar() {
            const newCar = {
                brand: this.brend,
                model: this.model,
                year: this.year, 
                maxSpeed: this.maxSpeed,
                isAutomatic: this.isAutomatic,
                engine: this.engine,
                numberOfDoors: this.numberOfDoors
            }
            console.log(newCar)
            cars.add(newCar)
            this.brend = '',
            this.model = '',
            this.year = '',
            this.maxSpeed = '',
            this.isAutomatic = '',
            this.numberOfDoors = ''
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>