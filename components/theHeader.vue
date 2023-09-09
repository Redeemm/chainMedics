<template>
    <div>
      <v-app-bar elevation="0">
        <v-app-bar-title>
          <nuxt-link to="/">
            <img src="~/assets/logo.png" height="100" alt="">
          </nuxt-link>
        </v-app-bar-title>

        <!-- Display the token address in the button text when connected -->
        <v-btn
          class="btn"
          :class="{ 'connected': walletConnected }"
          variant="outlined"
          rounded="xl"
          :color="walletConnected ? 'green' : 'blue'"
          elevation="0"
          @click="walletConnected ? disconnectWallet() : connectWallet()"
        >
          {{ walletConnected ? `Cnt: ${tokenAddress}` : 'Connect Wallet' }}
        </v-btn>
      </v-app-bar>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        walletConnected: false,
        tokenAddress: '',
      };
    },
    methods: {
      async connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
          try {
            // Request Ethereum account access
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });

            // Update the walletConnected flag and tokenAddress
            this.walletConnected = true;
            this.tokenAddress = accounts[0].substring(0, 6); // Display first 6 characters of the token address

            // Now you have access to the Ethereum provider in the connectWallet function
            const provider = window.ethereum;

            // Accessing Ethereum provider methods:
            // For example, you can get the selected account using provider.selectedAddress
            console.log('Selected Ethereum Account:', provider.selectedAddress);
          } catch (error) {
            console.error('Error connecting:', error);
          }
        } else {
          // Alert the user to open MetaMask
          alert('MetaMask wallet not detected. Please open MetaMask to connect.');
        }
      },
      disconnectWallet() {
        if (typeof window.ethereum !== 'undefined' && this.walletConnected) {
          // Reset wallet connection by clearing values
          this.walletConnected = false; // Update the flag
          this.tokenAddress = ''; // Clear the token address
        }
      },
    },
  };
  </script>

  <style>
  .connected {
    color: white; /* Change text color to white when connected */
  }
  </style>
