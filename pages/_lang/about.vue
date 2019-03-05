<template>
  <div class="Content">
    <div class="container" data-aos="fade" data-aos-delay="250">
      <h1 class="Content__Title">
        {{ $t('about.title') }}
      </h1>
      <p>{{ $t('about.introduction') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t('about.title') }
  }
}
</script>
