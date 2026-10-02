<template>
    <div class="login-form">
        <div class="logo-text">
            <h1>Login</h1>
        </div>

    <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            v-model="email"
            required
        >

        <label for="password">Password:</label>
        <input
            :type="showPassword ? 'text' : 'password'"
            name="password"
            id="password"
            placeholder="Password"
            v-model="password"
            required
        >

        <input
            type="checkbox"
            id="show-password"
            v-model="showPassword"
        >

        <label for="show-password">Show Password</label>

        <button type="submit">SIGN IN</button>
    </form>
    <div>
        <p>{{ email }}</p>
        <p>{{ password }}</p>
    </div>
</div>

</template>

<script>
export default {
    name: "LoginForm",

    data() {
        return {
            email: "",
            password: "",
            showPassword: false
        };
    },
    methods: {
        login() {
            alert("Login Success")
        }
    }
};
</script>


