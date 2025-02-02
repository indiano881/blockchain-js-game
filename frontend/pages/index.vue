<template>
  <div class="bg-red-100 min-h-36">
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
          <p class="bg-white border-lg border-2 border-black max-w-[150px] m-4">
            Network Chain ID: {{ $metamask.states.chainId }}
          </p>

          <!-- show if connected -->
          <p
            v-if="$metamask.states.connected"
            class="bg-white border-lg border-2 border-black max-w-[450px] m-4"
          >
            Wallet: {{ $metamask.states.address }}
          </p>

          <!-- click to connect your wallet -->
          <button
            class="bg-green-400 border-xl border-2 border-black max-w-[200px] m-4 p-2"
            :disabled="$metamask.states.connected"
            @click="$metamask.connect()"
          >
            Connect your Wallet
          </button>
        </div>
      </div>
    </MetamaskProvider>
    <div class="bg-[#1A294D]">
      <h1 class="text-white text-4xl text-center">wELCOMe INTO WEBBY QUIZZY</h1>
      <div class=" flex flex-col relative min-h-[400px] items-center justify-center">
        <div class="element speech bubble absolute top-4 left-80 z-30">
          <span class="px-4"
            >Hi! I am Webby and I am here to challenge you!</span
          >
        </div>
        <img src="/spider.svg" alt="" class="h-28 w-28 absolute bottom-1 left-80" />
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.element.bubble {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80% 60%;
  margin: 0 auto;
  text-align: center;
  height: 0;
  box-sizing: content-box;
  line-height: 2;
}
.element.speech {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/speech-bubble.svg);
  width: 25%;
  padding-top: 6%;
  padding-bottom: 18%;
}
</style>
