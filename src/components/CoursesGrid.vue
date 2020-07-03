<template>
  <v-row class="mt-8">
    <v-col cols="12" sm="6" md="4" v-for="course in courses" :key="course.id">
      <v-card outlined>
        <v-img class="white--text align-end" height="250px" :src="course.data.img"></v-img>
        <v-card-text class="pb-0">
          <p class="pa-0 text-h5 text--primary font-weight-bold">{{course.data.name}}</p>
          <p class="text--primary text-caption">{{course.data.description}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            depressed
            small
            dark
            color="amber darken-2 ma-2"
            :to="{ name: 'course', params:{ name: course.link}}"
          >Detalles</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["courses"])
  },
  methods: {
    ...mapActions(["getCourses"])
  },
  created() {
    this.getCourses();
  }
};
</script>
