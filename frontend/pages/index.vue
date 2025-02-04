<template>
  <div class="bg-red-100 min-h-36">
    <p class="text-3xl text-black">HOMEPAGE</p>

    <MetamaskProvider>
      <div>
        <SpiderC />
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
      <!--
      <h1 class="text-white text-4xl text-center">wELCOMe INTO WEBBY QUIZZY</h1>
      <div class=" flex flex-col relative min-h-[400px] items-center justify-center">
        <div class="element speech bubble absolute top-4 left-80 z-30 ">
          <span class="px-4"
            >Hi! I am Webby and I am here to challenge you!</span
          >
        </div>
        <img src="/spider.svg" alt="" class="h-28 w-28 absolute bottom-1 left-80 "  />
      </div>-->
      
      <div class="max-w-sm mx-auto">
  <div class="relative aspect-square">
    <img src="/cap.svg" 
    alt="" 
    class="absolute inset-0 w-full h-full object-contain z-20 capMove"
    style="
    top: -38%;
    left: 16%;
    width: 70%;
  "
  >
    <!-- Body image -->
    <img 
      src="/body.svg" 
      alt="body" 
      class="absolute inset-0 w-full h-full object-contain z-10"
    >
    
    <!-- Top left Leg -->
<img 
  src="/rightHand.svg" 
  alt="leg"
  class="absolute object-contain leg-top-right"
  style="
    top: 45%;
    left: 14%;
    width: 20%;
  "
/>
   <!-- Top Right Leg -->
   <img 
  src="/handCap.svg" 
  alt="leg"
  class="absolute object-contain hand-cap"
  style="
    top: 30%;
    left: 75%;
    width: 20%;
  "
/>
<!-- Top Left Leg -->
<img 
  src="/leftLeg.svg" 
  alt="leg"
  class="absolute object-contain leg-top-left"
  style="
    top: 69%;
    left: 17%;
    width: 20%;
  "
/>

<!-- Bottom Right Leg -->
<img 
  src="/leg.svg" 
  alt="leg"
  class="absolute object-contain leg-bottom-right"
  style="
    top: 80%;
    left: 80%;
    width: 20%;
  "
/>

<!-- Bottom Left Leg -->
<img 
  src="/leftLeg.svg" 
  alt="leg"
  class="absolute object-contain leg-bottom-left"
  style="
    top: 80%;
    left: 20%;
    width: 20%;
  "
/>
   
   
  </div>
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
/* Each keyframe includes both the translate and rotation so the legs move around the same pivot point. */
@keyframes capMoveKey {
  0% {
    transform: translate(0%, 0%) rotate(0deg);
  }
  25% {
    transform: translate(0%, 0%) rotate(0deg);
  }
  50% {
    transform: translate(12%, 5%) rotate(17deg);
  }
  75% {
    transform: translate(10%, 0%) rotate(20deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(0deg);
  }
}

@keyframes wiggleCap {
  0% {
    transform: translate(-5%, -12%) rotate(190deg);
  }
  25% {
    transform: translate(-25%, -30%) rotate(180deg);
  }
  50% {
    transform: translate(-5%, -12%) rotate(190deg);
  }
  75% {
    transform: translate(-25%, -30%) rotate(180deg);
  }
  100% {
    transform: translate(-5%, -12%) rotate(190deg);
  }
}

@keyframes wiggleTopRight {
  0%, 100% {
    transform: translate(-40%, -56%) rotate(148deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(140deg);
  }
}

@keyframes wiggleTopLeft {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(70deg);
  }
  /*50% {
    transform: translate(-50%, -50%) rotate(60deg);
  }*/
}

@keyframes wiggleBottomRight {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(-40deg);
  }
  /*50% {
    transform: translate(-50%, -50%) rotate(-30deg);
  }*/
}

@keyframes wiggleBottomLeft {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(40deg);
  }
  /*50% {
    transform: translate(-50%, -50%) rotate(30deg);
  }*/
}

/* Now apply the animations: duration, easing, infinite iteration, etc. */
.capMove {
  animation: capMoveKey 10s ease-in-out infinite;
}
.hand-cap {
  animation: wiggleCap 10s ease-in-out infinite;
}
.leg-top-right {
  animation: wiggleTopRight 2s ease-in-out infinite;
}

.leg-top-left {
  animation: wiggleTopLeft 1.5s ease-in-out infinite;
}

.leg-bottom-right {
  animation: wiggleBottomRight 5s ease-in-out infinite;
}

.leg-bottom-left {
  animation: wiggleBottomLeft 5s ease-in-out infinite;
}

</style>
