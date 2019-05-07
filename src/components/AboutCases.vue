<template>
  <v-container id="about-case">
    <div
    v-for="(item, index) in cases"
    :key="index">
      <ContentBlock :data="item" :iterator="index"/>
      <hr v-if='index !== cases.length - 1'/>
    </div>
  </v-container>
</template>

<script>
import ContentBlock from './ContentBlock'

export default {
  data () {
    return {
      cases: [
        {
          title: 'Case Title v2',
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
#about-case {
  margin: 0;
  padding: 0;
}
</style>
