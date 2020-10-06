<template>
  <div class="home">
    <Cars msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cars from '@/components/Cars.vue'

export default {
  name: 'Cars',
  components: {
    Cars
  }
}
</script>
