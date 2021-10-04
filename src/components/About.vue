<template>
  <h1>backoffice-about</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/About.vue</code> to test hot module replacement.</p>
  <router-link to="/mf-backoffice-root/">Home</router-link>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      count: 0,
    };
  },
};
</script>
