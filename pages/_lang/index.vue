<template>
  <div class="Content">
    <div class="container" data-aos="fade" data-aos-delay="250">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
      <div class="social">
        <img @click="redirect" src="~assets/icons/github.svg" alt="github" srcset>
        <img src="~assets/icons/gmail.svg" alt="gmail" href="mailto:ahnsv@bc.edu">
        <img @click="redirect" src="~assets/icons/linkedin.svg" alt="linkedin" srcset>
        <img @click="redirect" src="~assets/icons/notion.jpg" alt="notion" srcset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: 'AST Log' };
  },
  methods: {
    redirect: function(e) {
      switch(e.target.alt) {
        case 'github': 
          window.open('https://www.github.com/ahnsv', '_blank');
        case 'linkedin':
          window.open('https://www.linkedin.com/in/humphrey-ahn/', '_blank')
        case 'notion':
          window.open('https://www.notion.so/taebae/So-who-the-f-k-is-Tae-45640d48dea747378d412250a04907bf', '_blank')
      }
    }
  }
};
</script>

<style scoped>
.social {
  margin: 3vh 0;
}

.social > img {
  width: 50px;
  margin: 0 1vw;
}
</style>

