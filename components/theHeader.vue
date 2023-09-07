<template>
    <div>
        <v-app-bar>
            <v-app-bar-title>
                <nuxt-link to="/">
                    <img :src="logo" alt="">
                </nuxt-link>
            </v-app-bar-title>
        </v-app-bar>
    </div>
</template>
<script setup>
const logo = ref('./assets/logo.png');
</script>