<template>
  <div class="hello">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": 'fcbebbae08msh10ede187b764558p165ec3jsn756866dfed10',
          "X-RapidAPI-Host": 'facts-by-api-ninjas.p.rapidapi.com',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
          }
          return response.json();
        })
          .then((data) => {
            this.fact = data[0].fact;
          })
        .catch((err) => {
          console.error('Fetch error:', err);
        });
    },
  },
};
</script>
<style>
button {
padding: 12px 32px;
font-size: 16px;
border-radius: 8px;
}
</style>
