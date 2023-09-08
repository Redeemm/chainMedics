<template>
    <div>
        <v-footer class="d-flex flex-column">
            <div class="bg-white d-flex w-100 align-center px-4">
                <strong>Get connected with us on social networks!</strong>

                <v-spacer></v-spacer>

                <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn> -->
            </div>

            <div class="px-4 py-2 bg-light-blue-lighten-2 text-center w-100">
                {{ new Date().getFullYear() }} — <strong>Built by Chain Medics</strong>
            </div>
        </v-footer>
    </div>
</template>