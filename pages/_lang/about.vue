<template>
  <div class="Content">
    <div class="container" data-aos="fade" data-aos-delay="250">
      <div class="hero-image" data-aos="fade"></div>
      <h1 class="Content__Title" data-aos="fade-down">{{ $t('about.title') }}</h1>
      <div class="block" id="content-intro" data-aos="fade" data-aos-delay="500">
        <p class="Content__Intro" data-aos="fade">
          <b class="title">{{ $t('about.introduction--title') }}</b>
        </p>
        <p class="Content__Intro" data-aos="fade">{{ $t('about.introduction--content') }}</p>
        <div class="stack">
          <p>다음과 같은 기술들로 프로젝트를 구성하고 운영할 수 있습니다.</p>
          <first-svgs />
          <p>다음과 같은 기술들로 기본적으로 동작하는 토이프로젝트 경험이 있습니다.</p>
          <second-svgs />
          <p>다음과 프로그래밍 환경에 관심이 많습니다.</p>
          <third-svgs />
        </div>
      </div>
      <div class="block philosophy">
        <div class="title philosophy--title">
          <b>📜 Philosophy in codes</b>
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
        <div class="title experiences--title">
          <b>‍🎓 Education & Experience</b>
        </div>
        <div
          class="experience"
          data-aos="zoom-out"
          data-aos-duration="700"
        >
          <div class="experience--thumbnail">
            <img
              v-lazy="imgUrls[0]" :data-loading="imgUrls[0].placeholder"
              alt
            >
          </div>
          <div class="experience--titles">
            <div class="experience--title">공군 정보체계관리단</div>
            <div class="experience--subtitle">
              <div class="subtitle--period">2019.10 ~ now</div>
              <div class="subtitle--position">프로그램작성병</div>
            </div>
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
              <li>(현) 빅데이터, 머신러닝 인프라 셋업 및 개발</li>
              <li class="indent">Keras, Tensorflow</li>
            </ul>
          </div>
        </div>
        <div
          class="experience"
          data-aos="zoom-out"
          data-aos-duration="700"
        >
          <div class="experience--thumbnail">
            <img
              v-lazy="imgUrls[1]"
              alt
            >
          </div>
          <div class="experience--titles">
            <div class="experience--title">Boston College</div>
            <div class="experience--subtitle">
              <div class="subtitle--period">2015.08 ~ 2017.05(군 휴학)</div>
              <div class="subtitle--position">Computer Sceince (B.A.), Honors @ Applied Psychology and Human Development (B.A.)</div>
            </div>
          </div>
          <div class="experience--content">
            <ul>
              <li>Web App Develeopment</li>
              <li class="indent">HTML, CSS, JS, React</li>
              <li>Randomness & Computation</li>
              <li class="indent">Python scipy, numpy</li>
              <li>Database Management</li>
              <li class="indent">Oracle DB</li>
              <li>Computer Systems</li>
              <li class="indent">C, Linux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirstSvgs from '@/components/svgs/FirstTierSvgsContainer'
import SecondSvgs from '@/components/svgs/SecondTierSvgsContainer'
import ThirdSvgs from '@/components/svgs/ThirdTierSvgsContainer'
export default {
  components: {
    FirstSvgs,
    SecondSvgs,
    ThirdSvgs
  },
  data() {
    return {
      pillars: ["Universality", "Straightforwardness", "Circumspection"],
      imgUrls: ["https://yt3.ggpht.com/a-/AAuE7mAo52TS0m73vvCL6n7GmHMs9dltAj8aA4DP_g=s900-mo-c-c0xffffffff-rj-k-no", "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Boston_College_seal.svg/1200px-Boston_College_seal.svg.png"]
    };
  },
  head() {
    return { title: this.$t("about.title") };
  }
};
</script>

<style scoped>
p {
  margin-bottom: 3vh;
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

#content-intro {
  padding-bottom: 10vh;
}

.block {
  min-height: 90vh;
  padding: 5vh;
}

.title {
  font-size: 2em;
  margin: 10vh 0;
}

.divider {
  background-color: #673ab7;
  width: 100%;
  height: 200px;
  -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
  clip-path: polygon(0 0, 0% 100%, 100% 0);
}

.divider::before {
  content: "";
}

.philosophy {
  background: whitesmoke;
  -webkit-clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.philosophy--content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
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
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: "a c" "b c";
  border-radius: 30px;
  padding: 3vw;
  margin-bottom: 50px;
}

.experience--thumbnail {
  grid-area: a;
  justify-self: center;
  align-self: center;
  border-radius: 100%;
  overflow: hidden;
  line-height: 0;
  height: 100px;
  position: relative;
  width: 100px;
}

.experience--thumbnail > img {
  width: 100px;
}

.experience--titles {
  grid-area: b;
}

.experience--title {
  min-width: 250px;
  font-weight: bold;
  align-self: center;
}

.experience--subtitle {
  font-size: 75%;
  text-align: center;
}

.experience--content {
  grid-area: c / 2;
  text-align: left;
  justify-self: center;
}

.experience--content > ul > li {
  display: block;
  font-size: 0.9em;
  min-width: 35vw;
}

.experience--content > ul > li.indent {
  margin-left: 5vw;
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.43);
}
</style>
