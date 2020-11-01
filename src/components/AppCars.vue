<template>
  <div class="hello">
    <table >

        <tr> 
            <td>{{carData.id}}</td>
            <td>{{carData.brand}}</td>
            <td>{{carData.model}}</td>
            <td>{{carData.year}}</td>
            <td>{{carData.maxSpeed}}</td>
            <td>{{carData.isAutomatic}}</td>
            <td>{{carData.engine}}</td>
            <td>{{carData.numberOfDoors}}</td>
      </tr>
      <tr v-for="customer in customers" :key="customer.id" :click="navigateToCustomer(customer.id)">
       
      </tr>
    </table>
  </div>
</template>

<script>
import {car} from '../services/Cars'

export default {
    data () {
        return {
            carData: {}
        }
    }
}
</script>

<style lang="stylus">

</style>