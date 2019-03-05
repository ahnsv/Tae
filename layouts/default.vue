<template>
  <div>
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">AST Log</h1>
        <nav class="Header__Menu">
          <NuxtLink :to="$i18n.path('')" class="Header__Link" exact data-aos-anchor=".anchor">{{ $t('links.home') }}</NuxtLink>
          <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact data-aos-anchor=".anchor">{{ $t('links.about') }}</NuxtLink>
          <NuxtLink
            v-if="$i18n.locale === 'en'"
            :to="`/ko` + $route.fullPath"
            class="Header__Link"
            active-class="none"
            exact data-aos-anchor=".anchor"
          >{{ $t('links.korean') }}</NuxtLink>
          <NuxtLink
            v-else
            :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
            class="Header__Link"
            active-class="none"
            exact data-aos-anchor=".anchor"
          >{{ $t('links.english') }}</NuxtLink>
        </nav>
      </div>
    </header>
    <Nuxt/>
  </div>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: "Blanks Sans";
  src: url("~assets/fonts/blank Sans/Web/blank Sans Bold.woff") format("woff");
  src: local("BlankSansBold"),
    url("~assets/fonts/blank Sans/Web/blank Sans Bold.eot") format("eot"),
    url("~assets/fonts/blank Sans/TTF/blank Sans Bold.ttf") format("ttf"),
    url("~assets/fonts/blank Sans/OTF/blank Sans OTF Bold.otf") format("otf"),
    url("~assets/fonts/blank Sans/Web/blank Sans Bold.svg") format("svg");
  font-weight: bold;
}
@font-face {
  font-family: "Blank Sans";
  src: url("~assets/fonts/blank Sans/Web/blank Sans Book.woff") format("woff");
  src: local("BlankSansBook"),
    url("~assets/fonts/blank Sans/Web/blank Sans Book.eot") format("eot"),
    url("~assets/fonts/blank Sans/TTF/blank Sans Book.ttf") format("ttf"),
    url("~assets/fonts/blank Sans/OTF/blank Sans OTF Book.otf") format("otf"),
    url("~assets/fonts/blank Sans/Web/blank Sans Book.svg") format("svg");
  font-weight: normal;
}
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #fff;
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: "Blank Sans", sans-serif;
  height: 100vh;
  margin: 0;
}
.container {
  width: 75%;
  margin: 0 auto;
}
.container:after {
  content: "";
  display: table;
  clear: both;
}
.Header {
  color: #47494e;
  height: 80px;
  line-height: 80px;
}
.Header__Title {
  font-weight: bold;
  float: left;
  font-size: 30px;
}
.Header__Menu {
  float: right;
}
.Header__Link {
  font-size: 16px;
  color: #47494e;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #607d8b;
  background-color: #fff;
}
.nuxt-link-active {
  color: #9c27b0;
}
.Content {
  text-align: center;
  height: calc(100vh - 85px);
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Content__Title {
  font-weight: bold;
  padding-bottom: 30px;
}
</style>
