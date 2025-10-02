<script setup>
// Sección de diario/blog de la campaña
import Section from '../Section.vue'
const entries = [
  {
    title: 'Sesión 1: El inicio',
    date: '2025-09-01',
    summary: 'Los héroes se conocen y exploran la ciudadela.',
    highlights: ['Decisión de ayudar al anciano', 'Primer combate', 'Frase épica de Aldara'],
    img: '@/assets/img/blog/session1.png'
  },
  // Agrega más entradas
]
</script>

<template>
  <Section title="Diario de la campaña" description="Sigue el avance de la historia, sesión a sesión.">
    <div class="blog-list">
      <div v-for="e in entries" :key="e.title" class="blog-entry">
        <img v-if="e.img" :src="e.img" :alt="e.title" class="blog-img" />
        <div class="blog-info">
          <h3>{{ e.title }}</h3>
          <small>{{ e.date }}</small>
          <p>{{ e.summary }}</p>
          <ul class="blog-highlights">
            <li v-for="h in e.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.blog-entry {
  display: flex;
  gap: 2rem;
  background: #f4f4f4;
  border-radius: 1rem;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem 1.5rem;
  align-items: flex-start;
}
.blog-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 1rem;
  background: #fff;
}
.blog-info h3 {
  margin: 0 0 0.5rem 0;
}
.blog-highlights {
  list-style: disc inside;
  color: #42b883;
  margin-left: 1rem;
}
</style>
