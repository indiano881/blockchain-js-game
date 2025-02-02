<template>
  <div class="bg-[#E39C33]">
    <div
      class="container bg-[#E39C33] brackets flex w-full items-center justify-evenly"
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
  color: #fff;
  text-decoration: none;
  font: 20px Raleway;
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
