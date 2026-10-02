<template>
  <div>
    <h2>Registration Form</h2>

    <input
      type="text"
      v-model="username"
      placeholder="Enter your name"
    >

    <p>Your name is: {{ username }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      username: ''
    }
  }
}
</script>
<style scoped>
h2{
  font-size: 100px;
}
</style>