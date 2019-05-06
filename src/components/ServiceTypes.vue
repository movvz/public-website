<template>
  <v-container id="service-types">
    <v-layout
        text-xs-center
        wrap
    >
      <v-flex xs12>
          <p class="title-main">
              Services
          </p>
      </v-flex>
    </v-layout>
    <v-card>
      <div
      v-for="(service, index) in services"
      :key="index"
      class="service-listing px-4 pt-4">
        <ContentBlock :data="service"/>
        <br />
        <hr v-if='index !== services.length - 1'/>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import ContentBlock from './ContentBlock'

export default {
  data () {
    return {
      services: [
        {
          title: 'Service Title',
          contents: [
            { contentTitle: 'First Point Title', contentText: 'Here is my content' },
            { contentTitle: 'Second Point Title', contentText: 'Here is my second content' }
          ],
          image: 'https://www.w3schools.com/images/colorpicker.gif'
        },
        {
          title: 'Second Service Title',
          contents: [
            { contentTitle: 'First Point Title', contentText: 'Here is my content' },
            { contentTitle: 'Second Point Title', contentText: 'Here is my second content' }
          ],
          image: 'https://www.w3schools.com/images/colorpicker.gif'
        }
      ]
    }
  },
  components: {
    ContentBlock
  }
}
</script>

<style scoped>
.service-listing {
  margin: 10;
  padding: 10;
}
</style>
