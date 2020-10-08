<template>
  <div class="hello">
    <table>
        <tr>
          <td>id</td>
            <td>brand</td>
            <td>model</td>
            <td>year</td>
            <td>maxSpeed</td>
            <td>isAutomatic</td>
            <td>engine</td>
            <td>numberOfDoors</td>
            <td>Edit</td>
        </tr>
        <tr v-for="(car, index) in cars" :key="index"> 
            <td>{{car.id}}</td>
            <td>{{car.brand}}</td>
            <td>{{car.model}}</td>
            <td>{{car.year}}</td>
            <td>{{car.maxSpeed}}</td>
            <td>{{car.isAutomatic}}</td>
            <td>{{car.engine}}</td>
            <td>{{car.numberOfDoors}}</td>
           <router-link :to="{ name: 'edit', params: { id: car.id } }">Edit</router-link>
      </tr>

    </table>
  </div>
</template>

<script>
import {cars} from '../services/Cars'

export default {
   props: ['car'],
    data () {
        return {
            cars: []
        }
    },
    async created() {
      this.cars = await cars.getAll()
     
    }
}
</script>

<style lang="stylus">

</style>