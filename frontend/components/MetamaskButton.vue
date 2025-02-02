<template>
  <div>
    <button @click="connectToMetaMask" :disabled="isConnected" class="btn">
      {{ isConnected ? 'Connected' : 'Connect to MetaMask' }}
    </button>
    <p v-if="walletAddress">Connected Address: {{ walletAddress }}</p>
    <p v-if="walletBalance">Balance: {{ walletBalance }} ETH</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ethers } from 'ethers'

const walletAddress = ref(null)
const walletBalance = ref(null)
const isConnected = ref(false)

const connectToMetaMask = async () => {
  if (!window.ethereum) {
    alert('MetaMask is not installed. Please install it to use this feature.')
    return
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // Request account access
    const accounts = await provider.send('eth_requestAccounts', [])
    walletAddress.value = accounts[0]

    // Fetch and set balance
    const balance = await provider.getBalance(accounts[0])
    walletBalance.value = (+ethers.utils.formatEther(balance)).toFixed(3)

    isConnected.value = true
  } catch (error) {
    console.error('Error connecting to MetaMask:', error)
    alert('Failed to connect to MetaMask. Please try again.')
  }
}
</script>

<style>
.btn {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
</style>
