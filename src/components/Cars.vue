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
      </tr>

    </table>
  </div>
</template>

<script>
import {cars} from '../services/Cars'

export default {
    data () {
        return {
            cars: []
        }
    },
    async created() {
      this.cars = await cars.getAll()
      console.log(this.cars)
    }
}
</script>

<style lang="stylus">

</style>