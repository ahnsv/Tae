<template>
  <div class="Content">
    <div class="container" data-aos="fade" data-aos-delay="250">
      <div class="hero-image" data-aos="fade"></div>
      <h1 class="Content__Title" data-aos="fade-down">{{ $t('about.title') }}</h1>
      <div class="block" id="content-intro" data-aos="fade" data-aos-delay="500">
        <p class="Content__Intro" data-aos="fade">
          <b :style="{fontSize: '1.5em'}">{{ $t('about.introduction--title') }}</b>
        </p>
        <p class="Content__Intro" data-aos="fade">{{ $t('about.introduction--content') }}</p>
      </div>
      <div class="block philosophy">
        <div class="philosophy--title">
          <b>📜Philosophy in codes</b>
        </div>
        <div class="philosophy--content">
          <div v-for="(v, i) in [1,2,3]" :key="i" class="philosophy--pillar" data-aos="fade-down" @click="hides[i] = !hides[i]">
            <p class="pillar--title">{{pillars[i]}}</p>
            <div
              :class="[`pillar--${v}--description`, !hides[i] ? hideClass : '']"
            >{{ $t('about.philosophy--description--' + v) }}</div>
          </div>
        </div>
      </div>
      <div class="block skills" data-aos="fade">
        <div class="skills--details">
          <div
            v-for="(v, i) in [1,2,3,4]"
            class="skill-1"
            data-aos="fade-right" data-aos-duration="700"
            data-aos-delay="100"
          >
            <div :class="`skills--${v}--number`">
              <p>#{{v}}</p>
            </div>
            <div :class="`skills--${v}--subtitle`">
              <b>
                <p>{{ $t('about.skills--subtitle--' + v) }}</p>
              </b>
            </div>
            <div :class="`skills--${v}--description`">
              <p class="description--text">{{ $t('about.skills--description--' + v) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="block experiences"></div>
      <div class="block projects"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pillars: ["Universality", "Straightforwardness", "Circumspection"],
      hideClass: 'hide'
    };
  },
  computed: {
    hides() {
      return [false, false, false]
    }
  },
  head() {
    return { title: this.$t("about.title") };
  }
};
</script>

<style scoped>
p {
  margin-bottom: 5vh;
}

.hero-image {
  background: url("https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/13221105_1012448532166571_108359188959670122_n.jpg?_nc_cat=111&_nc_ht=scontent-icn1-1.xx&oh=039f561d756bae130925131c785fa682&oe=5D14F3E1")
    no-repeat center -80px fixed;
  background-size: cover;
  background-attachment: inherit;
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

.container > p.Content__Intro,
#content-intro {
  margin-left: auto;
  min-width: 50vw;
  max-width: 50vw;
  text-align: left;
  word-break: keep-all;
}

.block {
  min-height: 90vh;
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

.philosophy {
  background: whitesmoke;
  margin-top: -12vh;
  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.philosophy--content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 100px 10vw;
  grid-gap: 5vw;
}

.philosophy--content > div {
  align-self: center;
}

.pillar--title {
  font-weight: bold;
}

.philosophy--pillar {
  border-radius: 6vw;
  padding: 3vw;
  box-shadow: 0px 0 15px 1px #7f828b;
  min-height: 400px;
  min-width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.philosophy--pillar:hover {
  box-shadow: 0 0 20px 2px #607d8b;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

.philosophy--pillar > .hide {
  display: none;
}

.skills {
  background: #131313;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.skills--details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 5vh 22vw;
  grid-gap: 5vw;
  text-align: left;
}

.skills--details > div {
  justify-self: center;
}

.skills--details p {
  margin-bottom: 10px;
}

.skills--details .description--text {
  font-size: 0.8em;
}
</style>
