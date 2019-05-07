<template>
  <div id="content-block">
    <div>
      <h2 class="content-title text-xs-center">{{data.title}}</h2>
      <!-- First Layout has the option to alternate the side the image appears on -->
      <v-layout row wrap align-center>
        <v-flex xs3 text-xs-center v-if='iterator !== undefined && (iterator) % 2' >
          <img :src='data.image' alt="cat">
        </v-flex>
        <v-flex xs9>
          <div
          v-for='(content, content_index) in data.contents'
          :key='content_index'>
            <ContentParagraphs
            :contentTitle='content.contentTitle'
            :contentText='content.contentText'/>
          </div>
        </v-flex>
        <v-flex xs3 text-xs-center v-if='iterator === undefined || (iterator + 1) % 2' >
          <img :src='data.image' alt="cat">
        </v-flex>
      </v-layout>
    </div>
    <div v-if='data.image === undefined'>
      <!-- Second Layout is without image, contents will be displayed side by side if there are 2 or 3-->
      <v-layout v-if='contents.length == 2'>
        <v-flex
        v-for='(content, content_index) in data.contents'
        :key='content_index'
        xs6>
          <ContentParagraphs
          :contentTitle='content.contentTitle'
          :contentText='content.contentText'/>
        </v-flex>
      </v-layout>
      <v-layout v-else-if='contents.length == 3'>
        <v-flex
        v-for='(content, content_index) in data.contents'
        :key='content_index'
        xs4>
          <ContentParagraphs
          :contentTitle='content.contentTitle'
          :contentText='content.contentText'/>
        </v-flex>
      </v-layout row wrap align-center>
      <v-layout v-else>
        <v-flex xs12>
          <div
          v-for='(content, content_index) in data.contents'
          :key='content_index'>
            <ContentParagraphs
            :contentTitle='content.contentTitle'
            :contentText='content.contentText'/>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import ContentParagraphs from './ContentParagraphs'

export default {
  props: {
    data: {
      title: { type: String }, //Content title
      contents: { type: Object }, //Array of content objects with attributes "contentTitle" and "contentText"
      image: { type: String } //Accompanying image
    },
    iterator: { type: Number } //If odd, image shows on left. Even, right.
  },
  components: {
    ContentParagraphs
  }
}
</script>

<style scoped>
.content-paragraph {
  margin: 0;
  padding: 0;
}
</style>
