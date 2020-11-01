<template>
  <div class="hello">
    <table class="table">
       <thead class="thead-dark">
         <tr>
            <th scope="col">#</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">MaxSpeed</th>
            <th scope="col">isAutomatic</th>
            <th scope="col">Engine</th>
            <th scope="col">NumberOfDoors</th>
            <th scope="col">Edit/Delete</th>
         </tr>
       </thead>
        <tr v-for="(car, index) in cars" :key="index"> 
            <td>{{car.id}}</td>
            <td><router-link class="router-link" :to="{name : 'single-car', params: {id: car.id}}">{{car.brand}}</router-link> </td>
            <td>{{car.model}}</td>
            <td>{{car.year}}</td>
            <td>{{car.maxSpeed}}</td>
            <td>{{car.isAutomatic}}</td>
            <td>{{car.engine}}</td>
            <td>{{car.numberOfDoors}}</td>
           <router-link :to="{ name: 'edit', params: { id: car.id } }">Edit</router-link>
            <button @click="deleteCar(car.id)">Delete</button>
      </tr>

    </table>
  </div>
</template>

<script>
import {cars} from '../services/Cars';
import { mapActions} from 'vuex';
// import {store} from 'vuex';

export default {
   props: {
     car: Object
   },

   
    data () {
        return {
            cars: []
        }
    },
    async created() {
      this.cars = await cars.getAll()
     
    },

  methods: {
      ...mapActions([
        'fetchCars',
        'deleteCar'
      ])

  },
}


</script>

<style scoped>
  .router-link {
    color: rgb(56, 53, 53);
  }

  .router-link:hover {
    color: rgb(53, 48, 48);
    text-decoration: none;
  }
</style>