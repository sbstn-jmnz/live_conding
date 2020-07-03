<template>
  <div class="home">
    <h1>This are the courses</h1>
    <courses-grid></courses-grid>
  </div>
</template>

<script>
// @ is an alias to /src
import CoursesGrid from "@/components/CoursesGrid.vue";

export default {
  name: "Home",
  components: {
    CoursesGrid
  }
};
</script>
