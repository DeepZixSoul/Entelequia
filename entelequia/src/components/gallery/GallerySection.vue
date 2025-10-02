<script setup>
// Galería de ilustraciones y fan art
import Section from '../Section.vue'
const images = [
  { src: '@/assets/img/gallery/scene1.png', alt: 'Escena 1' },
  { src: '@/assets/img/gallery/aldara-art.png', alt: 'Aldara fan art' },
  // Agrega más imágenes
]
</script>

<template>
  <Section title="Galería" description="Ilustraciones, escenas y fan art de la campaña.">
    <div class="gallery-grid">
      <div v-for="img in images" :key="img.src" class="gallery-item">
        <img :src="img.src" :alt="img.alt" />
      </div>
    </div>
  </Section>
</template>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 2px 8px #0002;
  background: #fff;
}
</style>
