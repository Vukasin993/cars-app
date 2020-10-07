<template>
    <div>
    <h2>Add Car</h2>
    <form @submit.prevent="addCar" @reset="onReset">
        <input v-model="brand" type="text" placeholder="Unesi brend">
        <input v-model="model" type="text" placeholder="Unesi model">
        <select v-model="year">
            <option disabled value="">Please select year</option>
            <option v-for="(n, index) in 28" :key="index">{{n + 1989}} </option>
        </select>
        <input v-model="maxSpeed" type="number" placeholder="Unesi maxSpeed">
        <label  for="isAutomatic">Automatic or Manual</label>
        <input type="checkbox" id="automatic" value="true" v-model="isAutomatic">
        <label for="automatic">Automatic</label>
        <input v-model="engine" type="text" for="engine" placeholder="Unesi motor">
        <input v-model="numberOfDoors" type="number" placeholder="Unesi numberOfDoors">
        <button>Submit</button>
        <button name="reset" type="reset" class="btn btn-default">Reset</button>
        <button name="preview" type="button" class="btn btn-default" @click="previewCar">Preview</button>
    </form>
    </div>


</template>

<script>
import {cars} from '../services/Cars'

export default {
    data () {
        return {
            brand: '',
            model: '',
            year: '',
            maxSpeed: '',
            isAutomatic: '',
            engine: '',
            numberOfDoors: '',
        }
    },

    methods: {
        onReset () {
            this.$data.brand = '',
            this.$data.model= '',
            this.$data.year= '',
            this.$data.maxSpeed= '',
            this.$data.isAutomatic= '',
            this.$data.engine= '',
            this.$data.numberOfDoors= '',
            console.log("tu smo"),
            this.$router.push({ name: 'add-car'})
        },

        previewCar() {
               alert(
                this.$data.brand + 
                ' model: ' +  this.$data.model +
                ' year: ' +  this.$data.year +
                ' maxSpeed: ' +  this.$data.maxSpeed +
                ' isAutomatic: ' +  this.$data.isAutomatic +
                ' engine: ' +  this.$data.engine +
                ' numberOfDoors: ' +  this.$data.numberOfDoors
              

    )
        },

        addCar() {
            const newCar = {
                brand: this.brand,
                model: this.model,
                year: this.year, 
                maxSpeed: this.maxSpeed,
                isAutomatic: this.isAutomatic,
                engine: this.engine,
                numberOfDoors: this.numberOfDoors                
            }

            console.log(newCar)
            cars.add(newCar)
            this.brand = '',
            this.model = '',
            this.year = '',
            this.maxSpeed = '',
            this.isAutomatic = '',
            this.numberOfDoors = '',
            this.$router.push({ name: 'cars'})
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>