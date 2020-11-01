<template>
  <div class="hello">

      <div class="single">
          <h1>Brand: {{car.brand}}</h1>
          <hr>
          <h2>Model: {{car.model}}</h2>
          <div>
              <p>This car is made in {{car.year}} somewhere.</p>
              <p>Max speed of this beast is {{car.maxSpeed}}</p>
              <p>isAutomatic: {{car.isAutomatic}}</p>
              <p>Car has {{car.numberOfDoors}} doors which is good</p>
              <p>Use: {{car.engine}}</p>
          </div>
      </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {cars} from '../services/Cars';

export default {
    data() {
        return {
            car: [],
    
            }
        },

  async created() {
      this.car = (await cars.getOne(this.$route.params.id)).data
     
    },

    methods: {
      ...mapActions([
        'getOne'
      ]),

    },
}

</script>

<style  scoped>
    .single {
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hello {
        background-color: rgb(236, 168, 42);
    }
</style>