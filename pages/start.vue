<template>
    <div class="mt-13">

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
                            <v-label>Name</v-label>
                            <v-text-field placeholder="Full Name"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-label>Date of Birth</v-label>
                            <v-text-field placeholder="Date of Birth"></v-text-field>
                        </v-col>
                    </v-row>
                    <!-- <v-row class="ml-4 mr-4">
                        <v-col>
                            <v-text-field placeholder="Other Name"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field placeholder="Email"></v-text-field>
                        </v-col>
                    </v-row> -->
                    <v-row class="ml-4 mr-4">
                        <!-- <v-col>
                            <v-text-field placeholder="Address"></v-text-field>
                        </v-col> -->
                        <v-col>
                            <v-label>Blood Type</v-label>
                            <v-select :items="['None','A-', 'A+', 'B-', 'B+', 'AB-', 'AB+','O-', 'O+']" placeholder="Blood Type"></v-select>
                        </v-col>
                        <v-col>
                            <v-label>Allergies</v-label>
                            <v-text-field placeholder="Allergies"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="ml-4 mr-4">

                        <v-col cols="6">
                            <v-label>Chronic Conditions</v-label>
                            <v-text-field placeholder="Chronic Conditions"></v-text-field>
                        </v-col>
                        
                    </v-row>
                    <div class="d-flex justify-center ">
                        <v-btn type="submit" class="ml-6" color="deep-purple" variant="outlined" rounded >Submit</v-btn>
                    </div>
                    
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "custom"
});
</script>