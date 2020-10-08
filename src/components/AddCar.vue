<template>
    <div>
    <h2>Add Car</h2>
<<<<<<< HEAD
    <form @submit.prevent="onSubmit" @reset="onReset">
        <input v-model="car.brand" type="text" required="required" minlength="2"  placeholder="Unesi brend">
        <input v-model="car.model" type="text" required="required" minlength="2"  placeholder="Unesi model">
        <select v-model="car.year" required="required">
            <option disabled value="">Please select year</option>
            <option v-for="(n, index) in 28" :key="index">{{n + 1989}} </option>
        </select>
        <input v-model="car.maxSpeed" type="number" placeholder="Unesi maxSpeed">
        <input type="checkbox" id="automatic" value="true" v-model="car.isAutomatic">
        <label for="automatic">Automatic</label>
        <input v-model="car.engine" type="text" required="required" for="engine" placeholder="Unesi motor">
        <input v-model="car.numberOfDoors" required="required" type="number" placeholder="Unesi numberOfDoors">
=======
    <form @submit.prevent="addCar" @reset="onReset">
        <input v-model="brand" type="text" required="required" minlength="2"  placeholder="Unesi brend">
        <input v-model="model" type="text" required="required" minlength="2"  placeholder="Unesi model">
        <select v-model="year" required="required">
            <option disabled value="">Please select year</option>
            <option v-for="(n, index) in 28" :key="index">{{n + 1989}} </option>
        </select>
        <input v-model="maxSpeed" type="number" placeholder="Unesi maxSpeed">
        <label  for="isAutomatic">Automatic or Manual</label>
        <input type="checkbox" id="automatic" required="required" value="true" v-model="isAutomatic">
        <label for="automatic">Automatic</label>
        <input v-model="engine" type="text" required="required" for="engine" placeholder="Unesi motor">
        <input v-model="numberOfDoors" required="required" type="number" placeholder="Unesi numberOfDoors">
>>>>>>> e95ba8d85f7468999b4c92d049e26738bae5cb7e
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
            car: {
                brand: '',
                model: '',
                year: '',
                maxSpeed: '',
                isAutomatic: '',
                engine: '',
                numberOfDoors: '',
                }
         }
    },

async created() {
      this.car = (await cars.getOne(this.$route.params.id)).data
     
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
                'brand: ' + this.$data.brand + 
                ' model: ' +  this.$data.model +
                ' year: ' +  this.$data.year +
                ' maxSpeed: ' +  this.$data.maxSpeed +
                ' isAutomatic: ' +  this.$data.isAutomatic +
                ' engine: ' +  this.$data.engine +
                ' numberOfDoors: ' +  this.$data.numberOfDoors
              

    )
        },

        addCar() {
<<<<<<< HEAD
            cars.add(this.car)
            this.$router.push({ name: 'cars'})
        },

        onReset() {
            this.$data.brand = '',
            this.$data.model= '',
            this.$data.year= '',
            this.$data.maxSpeed= '',
            this.$data.isAutomatic= '',
            this.$data.engine= '',
            this.$data.numberOfDoors= '',
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

        getUser() {
        cars.getOne(this.$route.params.id).then((response) => {
          this.car = response.data;
        });
      },

      editUser() {
         cars.edit(this.car).then(() => {
          this.$router.push('/cars');
        });
      },

      onSubmit() {
        if (this.car.id) {
          this.editUser();
        } else {
          this.addCar();
=======
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
>>>>>>> e95ba8d85f7468999b4c92d049e26738bae5cb7e
        }
      }
    },
}
</script>

<style lang="stylus" scoped>

</style>