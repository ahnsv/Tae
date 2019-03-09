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
          <div v-for="(v, i) in [1,2,3]" :key="i" class="philosophy--pillar" data-aos="fade-down">
            <p class="pillar--title">{{pillars[i]}}</p>
            <div
              :class="[`pillar--${v}--description`]"
            >{{ $t('about.philosophy--description--' + v) }}</div>
          </div>
        </div>
      </div>
      <div class="block skills" data-aos="fade">
        <div class="skills--details">
          <div
            v-for="(v, i) in [1,2,3,4]"
            class="skill-1"
            data-aos="fade-right"
            data-aos-duration="700"
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
      <div class="block experiences">
        <div class="experiences--title">
          <b>‍🎓Education & Experience</b>
        </div>
        <div class="experience" v-for="(v, i) in [1,2,3]" :key="i" data-aos="zoom-in" data-aos-duration="700">
          <div class="experience--title">{{ $t('about.experience--title--' + v) }}</div>
          <div class="experience--subtitle">
            <div class="subtitle--period">{{ $t('about.experience--period--' + v) }}</div>
            <div class="subtitle--position">{{ $t('about.experience--position--' + v) }}</div>
          </div>
          <div class="experience--content">
            <ul>
              <li>작전기상 체계 UI 리뉴얼</li>
              <li class="indent">Weekly User 500% ~100 → ~500</li>
              <li class="indent">HTML, CSS, JS, Material CSS, Spring MVC</li>
              <li>공군 스페이스 챌린지 모바일 웹 앱 UI 개발</li>
              <li class="indent">VueJS, Vuex, SASS, Vuetify, PWA</li>
              <li>상황전파체계 개발 및 유지보수</li>
              <li class="indent">Apache Cordova, Ionic, Angular, Typescript</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block projects"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pillars: ["Universality", "Straightforwardness", "Circumspection"]
    };
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

.experiences {
  padding: 10vh 10vw;
}

.experiences--title {
  margin-bottom: 50px;
}

.experience {
  display: grid;
  grid-template-areas: "a c" "b c";
  box-shadow: 0 0 20px 0px #7f828b;
  border-radius: 30px;
  padding: 3vw;
  margin-bottom: 50px;
}

.experience--title {
  grid-area: a;
  min-width: 250px;
  font-weight: bold;
  align-self: center;
}

.experience--subtitle {
  grid-area: b;
  font-size: 0.8em;
}

.experience--content {
  grid-area: c / 2;
  text-align: left;
}

.experience--content > ul > li {
  display: block;
  font-size: 0.9em;
}

.experience--content > ul > li.indent {
  margin-left: 5vw;
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.43);
}
</style>
