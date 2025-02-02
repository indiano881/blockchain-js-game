<template>
  <div class="bg-[#FEE2E2]">
    <div
      class="container bg-[#FEE2E2] brackets flex w-full items-center justify-evenly"
    >
      <NuxtLink to="/">HOME</NuxtLink>
      <NuxtLink to="/quiz">QUIZ</NuxtLink>
    </div>
  </div>
</template>
<style scoped>
div.container {
  text-align: center;
}

div.container a {
  color: black;
  text-decoration: none;
  font: 28px;
  margin: 0px 10px;
  padding: 10px 10px;
  position: relative;
  z-index: 0;
  cursor: pointer;
}

/* Brackets go out */
div.brackets a:before,
div.brackets a:after {
  position: absolute;
  opacity: 0;
  font-size: 35px;
  top: 0px;
  transition: all 0.3s;
}

div.brackets a:before {
  content: '(';
  left: 0px;
  transform: translateX(10px);
}

div.brackets a:after {
  content: ')';
  right: 0px;
  transform: translateX(-10px);
}

div.brackets a:hover:before,
div.brackets a:hover:after {
  opacity: 1;
  transform: translateX(0px);
}
</style>
