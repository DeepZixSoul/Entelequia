<script setup>
// SocialLinks.vue: muestra iconos de redes sociales con enlaces accesibles
defineProps({
  links: {
    type: Array,
    required: true
  },
  size: {
    type: [String, Number],
    default: 32
  },
  align: {
    type: String,
    default: 'end' // start | center | end
  }
})
</script>

<template>
  <div class="social-links" :class="`align-${align}`">
    <a v-for="s in links" :key="s.name" :href="s.url" target="_blank" rel="noopener" :aria-label="s.name">
      <img :src="s.icon" :alt="s.name" :width="size" :height="size" />
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 1.2rem;
  margin-top: 0.5rem;
}
.align-start {
  justify-content: flex-start;
}
.align-center {
  justify-content: center;
}
.align-end {
  justify-content: flex-end;
}
.social-links img {
  border-radius: 50%;
  background: #fff1;
  filter: brightness(1.1) drop-shadow(0 1px 2px #0005);
  transition: filter 0.2s;
}
.social-links img:hover {
  filter: brightness(1.3) drop-shadow(0 2px 6px #e0b973);
}
</style>
