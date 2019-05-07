<template>
  <div id="services">
    <span>
      <Pricing />
    </span>
    <div>
      <Services />
    </div>
  </div>
</template>

<script>
import Pricing from '../components/Pricing'
import Services from '../components/ServiceTypes'

export default {
  components: {
    Pricing,
    Services
  }
}
</script>
