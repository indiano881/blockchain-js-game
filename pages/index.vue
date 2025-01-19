<template>
  <div class="bg-red-500 min-h-36">
    <p class="text-3xl text-black">HOMEPAGE</p>
    
  <MetamaskProvider>

    <div>

<!-- show if not installed -->
<div v-if="!$metamask.states.installed">
  <h3>Metamask is not installed</h3>
  <p>Install Metamask to use this app</p>
</div>

<!-- show if installed -->
<div v-if="$metamask.states.installed">
  
  <h3>Metamask is already installed</h3>
  <p>Network Chain ID: {{ $metamask.states.chainId }}</p>


  <!-- show if connected -->
  <p v-if="$metamask.states.connected">
    Wallet: {{ $metamask.states.address }}
  </p>

  <!-- click to connect your wallet -->
  <button
    :disabled="$metamask.states.connected"
    @click="$metamask.connect()"
  >
    Connect your Wallet
  </button>
  
</div>
</div>
  
  </MetamaskProvider>


 

  </div>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
