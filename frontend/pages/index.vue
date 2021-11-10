<template>
  <div class="container">
    <img src="https://items.s1.citilink.ru/1399244_v01_b.jpg" alt="sdsd" />
    <div class="cards">
      <div v-for="album in albums" :key="album.id" class="card">
        <div class="item">{{ album.link }}</div>
        <h3>{{ album.name }}</h3>
        <p>{{ album.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      albums: [],
      error: null,
    };
  },
  async mounted() {
    try {
      this.albums = await this.$strapi.$albums.find();
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
.container {
  margin: 20px auto;
  width: 90%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  height: 400px;
  border: 1px solid black;
  margin: 20px 20px 0px 0px;
  padding: 10px 10px 10px 10px;
}

.card p {
 margin: 0;
}

.card p {
  margin: 10px auto 10px auto
}

</style>
