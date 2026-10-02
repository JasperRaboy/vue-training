<template>
    <div id="app">
        <LogIn />
        <HelloWorld />
    </div>
</template>

<script>
import LogIn from './components/LogIn.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',

    components: {
        LogIn,
        HelloWorld
    }
}
</script>
