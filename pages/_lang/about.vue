<template>
  <div class="Content">
    <div class="container" data-aos="fade" data-aos-delay="250">
      <div class="hero-image" data-aos="fade"></div>
      <h1 class="Content__Title" data-aos="fade-down">{{ $t('about.title') }}</h1>
      <div class="block" id="content-intro" data-aos="fade" data-aos-delay="500">
        <p class="Content__Intro" data-aos="fade">
          <b :style="{fontSize: '1.5em'}">{{ $t('about.introduction--title') }}</b>
        </p>
        <p
          class="Content__Intro"
          data-aos="fade"
        >{{ $t('about.introduction--content') }}</p>
      </div>
      <div class="block philosophy">
        <div class="philosophy--title">📜Philosophy in codes</div>
        <div class="philosophy--content">
          <div class="philosophy--pillar--1">
            <p class="pillar--title">Universality</p>
            <div class="pillar--1--description">{{ $t('about.philosophy--description--1') }}</div>
          </div>
          <div class="philosophy--pillar--2">
            <p class="pillar--title">Straightforwardness</p>
            <div class="pillar--2--description">{{ $t('about.philosophy--description--2') }}</div>
          </div>
          <div class="philosophy--pillar--3">
            <p class="pillar--title">Circumspection</p>
            <div class="pillar--3--description">{{ $t('about.philosophy--description--3') }}</div>
          </div>
        </div>
      </div>
      <div class="block skills" data-aos="fade">
        <div class="skills--details">
          <div class="skill-1" data-aos="fade-right" data-aos-delay="100">
            <div class="skills--1--number">
              <p>#1</p>
            </div>
            <div class="skills--1--subtitle">
              <b>
                <p>{{ $t('about.skills--subtitle--1') }}</p>
              </b>
            </div>
            <div class="skills--1--description">
              <p class="description--text">{{ $t('about.skills--description--1') }}</p>
            </div>
          </div>
          <div class="skill-2" data-aos="fade-left" data-aos-delay="100">
            <div class="skills--2--number">
              <p>#2</p>
            </div>
            <div class="skills--2--subtitle">
              <b>
                <p>{{ $t('about.skills--subtitle--2') }}</p>
              </b>
            </div>
            <div class="skills--2--description">
              <p class="description--text">{{ $t('about.skills--description--2') }}</p>
            </div>
          </div>
          <div class="skill-3" data-aos="fade-right" data-aos-delay="100">
            <div class="skills--3--number">
              <p>#3</p>
            </div>
            <div class="skills--3--subtitle">
              <b>
                <p>{{ $t('about.skills--subtitle--3') }}</p>
              </b>
            </div>
            <div class="skills--3--description">
              <p class="description--text">{{ $t('about.skills--description--3') }}</p>
            </div>
          </div>
          <div class="skill-4" data-aos="fade-left" data-aos-delay="100">
            <div class="skills--4--number">
              <p>#4</p>
            </div>
            <div class="skills--4--subtitle">
              <b>
                <p>{{ $t('about.skills--subtitle--4') }}</p>
              </b>
            </div>
            <div class="skills--4--description">
              <p class="description--text">{{ $t('about.skills--description--4') }}</p>
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
