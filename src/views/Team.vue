<template>
  <div class="team">
    <v-layout
      text-xs-center
      wrap
      class="pt-5"
    >
      <v-flex xs12>
        <p class="title-main">
            Meet Our Team
        </p>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(member, index) in team"
              :key="index"
              xs4
              d-flex
            >
            <v-hover>
              <v-card flat tile class="d-flex" slot-scope="{hover}">
                <v-img
                  :src="member.img"
                  height="300px"
                  width="300px"
                  class="grey lighten-2 ma-3"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      style="height: 100%"
                      class="d-flex transition-fast-in-fast-out"
                    >
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <div class="ma-5 item-title-wrapper" :style="titleStyle"><b class="member-name">{{ member.name }}</b></div>
                      </v-layout>
                    </div>
                  </v-expand-transition>
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team: [
        { name: 'Albara Almubiad', title: 'CEO', description: '', img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg' },
        { name: 'Vic Ong', title: 'CTO', description: '', img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg' },
        { name: 'Ryan Kanno', title: 'COO', description: '', img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg' },
        { name: 'Tyler Kekano', title: 'Software Engineer', description: '', img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg' },
        { name: 'Reza Ghorbani', title: 'CSO', description: '', img: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg' }
      ]
    }
  },
  computed: {
    titleStyle () {
      return {
        color: this.$vuetify.theme.primaryDark,
        backgroundColor: this.$vuetify.theme.primaryLight
      }
    }
  }
}
</script>

<style scoped>
.item-title-wrapper {
  padding: 0 5px;
  text-align: center;
}
.member-name {
  font-size: 20px;
}
</style>
