<template>
  <div>
    <header class="Header" :class="{dark: isDark}">
      <div class="container">
        <h1 class="Header__Title blank-theme">
          <NuxtLink :to="$i18n.path('')" exact data-aos-anchor=".anchor">AST Log</NuxtLink>
        </h1>
        <nav class="Header__Menu">
          <a @click="toggleDark" class="Header__Link">Dark</a>
          <NuxtLink
            :to="$i18n.path('')"
            class="Header__Link blank-theme"
            exact
            data-aos-anchor=".anchor"
          >{{ $t('links.home') }}</NuxtLink>
          <NuxtLink
            :to="$i18n.path('about')"
            class="Header__Link blank-theme"
            exact
            data-aos-anchor=".anchor"
          >{{ $t('links.about') }}</NuxtLink>
          <NuxtLink
            v-if="$i18n.locale === 'en'"
            :to="`/ko` + $route.fullPath"
            class="Header__Link blank-theme"
            active-class="none"
            exact
            data-aos-anchor=".anchor"
          >{{ $t('links.korean') }}</NuxtLink>
          <NuxtLink
            v-else
            :to="$route.fullPath.replace(/^\/[^\/]+/, '')"
            class="Header__Link blank-theme"
            active-class="none"
            exact
            data-aos-anchor=".anchor"
          >{{ $t('links.english') }}</NuxtLink>
        </nav>
      </div>
    </header>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false
    };
  },
  methods: {
    toggleDark(e) {
      e.preventDefault();
      this.isDark = !this.isDark;
      this.$emit("darkToggle", this.isDark);
      console.log(this.$refs);
    }
  }
};
</script>

<style>
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
  font-size: 1.2em;
  font-family: "Noto Sans KR", sans-serif;
  height: 100vh;
  margin: 0;
  text-shadow: 0 0 0.1px rgba(0, 0, 0, 0.3);
  -webkit-text-size-adjust: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  word-break: keep-all;
}

#__layout.dark {
  --bg: #282c35;
  --textcolor: whitesmoke;
}

.dark {
  background-color: var(--bg) !important;
  color: var(--textcolor) !important;
}

.blank-theme {
  font-family: "Blank Sans", sans-serif;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 2vw;
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
  position: fixed;
  width: 100%;
  background: white;
  z-index: 1;
}
.Header__Title {
  font-weight: bold;
  float: left;
  font-size: 30px;
}

.Header__Title > a {
  text-decoration: none;
  color: black;
}
.Header__Menu {
  float: right;
}
.Header__Link {
  font-size: 16px;
  color: #47494e;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #607d8b;
}
.nuxt-link-active {
  color: #9c27b0;
}
.Content {
  text-align: center;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 80px;
}

@media (min-width: 481px) and (max-width: 767px) {
  body {
    font-size: 0.8em;
  }
  .Content__Title {
    margin-top: -60px;
    padding: 0px 100px;
  }
  .title {
    font-size: 1.5em;
  }  
}

@media (min-width: 320px) and (max-width: 480px) {
  body {
    font-size: 0.8em;
  }
  .Content__Title {
    margin-top: -60px;
    padding: 0px 100px;
  }
  .title {
    font-size: 1.5em;
  }
}
</style>
