<template>
    <div>
        <v-row no-gutters>
            <v-col cols="6">
                <v-card>
                    <img cover src="~/assets/form-bg.jpg" height="900" alt="">
                </v-card>
            </v-col>
            <v-col class="bg-deep-purple-lighten-5">
                <v-form class="mt-5">
                    <h1 class="text-center text-uppercase">personal information</h1><br>
                    <v-row class="ml-4 mr-4">
                        <v-col>
                            <v-text-field placeholder="Surname"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field placeholder="Firstname"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="ml-4 mr-4">
                        <v-col>
                            <v-text-field placeholder="Other Name"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field placeholder="Email"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="ml-4 mr-4">
                        <v-col>
                            <v-text-field placeholder="Address"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field placeholder="City"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="ml-4 mr-4">
                        <v-col>
                            <v-text-field placeholder="Country"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field placeholder="Mobile Number"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn type="submit" color="deep-purple" variant="outlined" rounded  class="ml-6">Submit</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>
<script setup>
definePageMeta({
    layout: false
});
</script>