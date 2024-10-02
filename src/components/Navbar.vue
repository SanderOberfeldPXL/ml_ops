
<script setup>
</script>

<template>
    <nav >
        <v-toolbar absolute app fixed color="rgb(47, 72, 88, 0.8)" elevation="24">
            <v-toolbar-title>
                <v-btn  to="/" min-height="100px" min-width="100px" rounded="20">Wackinator</v-btn>
                <v-btn  to="/aboutus" min-height="100px" min-width="100px" rounded="20">about us</v-btn>
            </v-toolbar-title>
                <span id="title">ML-ops: 🍓-edition</span>
        </v-toolbar>
    </nav>
</template>



<style scoped>
    #title {
        position: relative;
        font-size: 32px;
        right: 2%;
        color:#E6E6FA;
    }
    .v-btn {
        font-size: 1em;
        font-weight:lighter;
        margin-left: 20px;
        color:#E6E6FA;
    }
    .v-btn:hover {
        font-size: 1em;
        color:#000000;
        background-color: #E6E6FA;
    }
</style>        