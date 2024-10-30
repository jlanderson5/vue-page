<template>
    <div>
      <h1>External Link</h1>
      <a :href="link" target="_blank">Go to External Site</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppLink',
    props: {
      link: {
        type: String,
        required: true
      }
    }
  };
  </script>
  