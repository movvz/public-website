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
      <v-flex xs12
        v-for="(team, teamIndex) in teams"
        v-bind:key="teamIndex"
      >
        <v-container grid-list-sm fluid>
          <p class="title-team secondaryDark--text">{{ team.name }}</p>
          <v-layout row wrap>
            <v-flex
              v-for="(member, index) in teamOf(team.type)"
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
                        <div class="ma-5 item-title-wrapper" :style="titleStyle"><b class="member-name">
                          {{ `${member.fname} ${member.lname}` }}
                        </b></div>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  created () {
    this.getTeam()
  },
  data () {
    return {
      teams: [
        { name: 'Core Team', type: 'core' },
        { name: 'Advisor', type: 'advisor' }
      ]
    }
  },
  computed: {
    ...mapGetters('users', {
      teamOf: 'team'
    }),
    titleStyle () {
      return {
        color: this.$vuetify.theme.primaryDark,
        backgroundColor: this.$vuetify.theme.primaryLight
      }
    }
  },
  methods: {
    ...mapActions('users', {
      getTeam: 'getTeam'
    })
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
.title-team {
  font-size: 24px;
  font-weight: 700;
}
</style>
