<template><div class="spider">
    <!-- Body -->
    <div class="body"></div>
    <!-- Head -->
    <div class="head"></div>
    <!-- Eyes -->
    <div class="eye eye-left"></div>
    <div class="eye eye-right"></div>
    <!-- Legs (8 legs) -->
    <div class="leg leg1"></div>
    <div class="leg leg2"></div>
    <div class="leg leg3"></div>
    <div class="leg leg4"></div>
    <div class="leg leg5"></div>
    <div class="leg leg6"></div>
    <div class="leg leg7"></div>
    <div class="leg leg8"></div>
  </div></template>
  <style lang="css" scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fefefe; /* Light background */
  margin: 0;
}

/* Spider container */
.spider {
  position: relative;
  width: 100px;
  height: 100px;
}

/* Spider body */
.body {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #333;
  border-radius: 50%;
  top: 20px;
  left: 20px;
  z-index: 2;
}

/* Spider head */
.head {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #444;
  border-radius: 50%;
  top: 5px;
  left: 30px;
  z-index: 3;
}

/* Eyes */
.eye {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  top: 15px;
  z-index: 4;
}

.eye-left {
  left: 35px;
}

.eye-right {
  left: 48px;
}

/* Legs */
.leg {
  position: absolute;
  width: 50px;  /* Length of each leg */
  height: 4px;  /* Thickness of each leg */
  background-color: #444;
  top: 35px;       /* Vertical reference — adjust for best look */
  transform-origin: left center; /* So we can rotate around the "body" end of the leg */
}

/* Left side legs (negative rotation) */
.leg1 {
  left: 10px;          /* shift legs to the left side */
  transform: rotate(-25deg);
}
.leg2 {
  left: 10px;
  top: 45px;
  transform: rotate(-40deg);
}
.leg3 {
  left: 10px;
  top: 55px;
  transform: rotate(-55deg);
}
.leg4 {
  left: 10px;
  top: 65px;
  transform: rotate(-70deg);
}

/* Right side legs (positive rotation) */
.leg5 {
  left: 40px;
  transform: rotate(25deg);
}
.leg6 {
  left: 40px;
  top: 45px;
  transform: rotate(40deg);
}
.leg7 {
  left: 40px;
  top: 55px;
  transform: rotate(55deg);
}
.leg8 {
  left: 40px;
  top: 65px;
  transform: rotate(70deg);
}
@keyframes leg-wiggle {
  0%, 100% {
    transform: rotate(var(--start-angle));
  }
  50% {
    transform: rotate(calc(var(--start-angle) + 10deg));
  }
}

/* Apply the animation to each leg */
.leg {
  animation: leg-wiggle 2s infinite ease-in-out;
  /* By default, let's store the rotation in a custom property 
     so we can easily adjust each leg's "base angle." */
}

/* Then, for each leg, define a custom property for the angle: */
.leg1 { --start-angle: -25deg; }
.leg2 { --start-angle: -40deg; }
.leg3 { --start-angle: -55deg; }
.leg4 { --start-angle: -70deg; }
.leg5 { --start-angle: 25deg; }
.leg6 { --start-angle: 40deg; }
.leg7 { --start-angle: 55deg; }
.leg8 { --start-angle: 70deg; }

</style>