<template>
  <div>
    <h1>Registration Form</h1>

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