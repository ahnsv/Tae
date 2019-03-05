<template>
  <div class="Content">
    <div class="container" data-aos="fade" data-aos-delay="250">
      <div class="hero-image" data-aos="fade"></div>
      <h1 class="Content__Title" data-aos="fade-down">{{ $t('about.title') }}</h1>
      <div class="block" id="content-intro">
        <p class="Content__Intro" data-aos="fade" data-aos-delay="500">
          <b>{{ $t('about.introduction--title') }}</b>
        </p>
        <p
          class="Content__Intro"
          data-aos="fade"
          data-aos-delay="500"
        >{{ $t('about.introduction--content') }}</p>
      </div>
      <div class="divider" data-aos="fade"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t("about.title") };
  }
};
</script>

<style scoped>
.hero-image {
  background: url("https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/13221105_1012448532166571_108359188959670122_n.jpg?_nc_cat=111&_nc_ht=scontent-icn1-1.xx&oh=039f561d756bae130925131c785fa682&oe=5D14F3E1")
    no-repeat center -80px fixed;
  width: 100%;
  height: 380px;
}

.Content__Title {
  margin-top: -5.2vw;
  font-size: 7vw;
  padding: 0px 22vh;
  color: #f44336;
  text-align: left;
  font-weight: bold;
  margin-bottom: 6vh;
}

/* .container > *:not(.Content__Title) {
  padding: 0 12vw;
} */

.container {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.container > p.Content__Intro, #content-intro {
  margin-left: auto;
  min-width: 50vw;
  max-width: 50vw;
  text-align: left;
  word-break: keep-all;
}

.block {
  margin-bottom: 10vw;
}

.divider {
  background-color: #673ab7;
  width: 100%;
  height: 200px;
  clip-path: poly;
  -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

.divider::before {
  content: "";
}
</style>
