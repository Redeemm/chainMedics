<template>
    <div class="mt-13">
      <v-row no-gutters>
        <v-col cols="6">
          <v-card>
            <img cover src="~/assets/form-bg.jpg" height="900" alt="">
          </v-card>
        </v-col>
        <v-col class="bg-deep-purple-lighten-5">
          <v-form class="mt-5" @submit.prevent="handleSubmit">
            <h1 class="text-center text-uppercase">personal information</h1><br>
            <v-row class="ml-4 mr-4">
              <v-col>
                <v-label>Name</v-label>
                <v-text-field v-model="name" placeholder="Full Name"></v-text-field>
              </v-col>
              <v-col>
                <v-label>Date of Birth</v-label>
                <v-text-field v-model="dateOfBirth" placeholder="Date of Birth"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="ml-4 mr-4">
              <v-col>
                <v-label>Blood Type</v-label>
                <v-select v-model="bloodType" :items="['None','A-', 'A+', 'B-', 'B+', 'AB-', 'AB+','O-', 'O+']"
                  placeholder="Blood Type">
                </v-select>
              </v-col>
              <v-col>
                <v-label>Allergies</v-label>
                <v-text-field v-model="allergies" placeholder="Allergies"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="ml-4 mr-4">
              <v-col cols="6">
                <v-label>Chronic Conditions</v-label>
                <v-text-field v-model="chronicConditions" placeholder="Chronic Conditions"></v-text-field>
              </v-col>
            </v-row>
            <div class="d-flex justify-center">
              <v-btn type="submit" class="ml-6" color="deep-purple" variant="outlined" rounded>Submit</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';

  // Define ref variables for form fields
  const name = ref('');
  const dateOfBirth = ref('');
  const bloodType = ref('None');
  const allergies = ref('');
  const chronicConditions = ref('');

  const handleSubmit = () => {
    const formData = {
      Name: name.value,
      DateOfBirth: dateOfBirth.value,
      BloodType: bloodType.value,
      Allergies: allergies.value.split(',').map(item => item.trim()),
      ChronicConditions: chronicConditions.value.split(',').map(item => item.trim()),
    };

    return formData; // Return the formData object
  };
  </script>
