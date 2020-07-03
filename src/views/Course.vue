<template>
  <v-main>
    <p class="mt-5 mb-0 text-h6 text-center">Detalles del curso</p>
    <p class="text-h3 text-center">{{currentCourse.data.name}}</p>
    <v-row class="mt-8">
      <v-col cols="12" sm="6" md="4" v-for="example in currentCourse.examples" :key="example.id">
        <v-card outlined>
          <v-card-text class="pb-0">
            <p class="pa-0 text-h5 font-weight-bold">{{example.data.title}}</p>
            <p class="text--primary text-caption">{{example.data.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-icon>mdi-music-note-eighth</v-icon>
            <audio controls>
              <source :src="example.data.mp3" type="audio/mpeg" />Your browser does not support the audio element.
            </audio>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="mt-10 text-center">
      <v-btn color="amber darken-2" small dark depressed to="/">Volver al inicio</v-btn>
    </div>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["courses"]),
    currentCourse() {
      return this.courses.find(course => {
        return course.link == this.$route.params.name;
      });
    }
  }
};
</script>
