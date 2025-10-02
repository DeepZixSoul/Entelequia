<script setup>
// Recursos y descargas para jugadores
import Section from '../Section.vue'
const pdfs = [
  { name: 'Ficha de Aldara', url: '@/assets/pdf/aldara.pdf' },
  // Agrega más fichas
]
const music = [
  { name: 'Tema principal', url: '@/assets/music/main-theme.mp3' },
  // Agrega más pistas
]
const materials = [
  { name: 'Mapa del mundo', url: '@/assets/img/map/world-map.png' },
  // Agrega más materiales
]
</script>

<template>
  <Section title="Recursos y descargas" description="Material útil para jugadores y oyentes.">
    <div class="resources-block">
      <h3>Fichas de personajes (PDF)</h3>
      <ul>
        <li v-for="p in pdfs" :key="p.name">
          <a :href="p.url" download>{{ p.name }}</a>
        </li>
      </ul>
      <h3>Música y ambientaciones</h3>
      <ul>
        <li v-for="m in music" :key="m.name">
          <audio :src="m.url" controls /> {{ m.name }}
        </li>
      </ul>
      <h3>Material de juego</h3>
      <ul>
        <li v-for="mat in materials" :key="mat.name">
          <a :href="mat.url" download>{{ mat.name }}</a>
        </li>
      </ul>
    </div>
  </Section>
</template>

<style scoped>
.resources-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
ul {
  margin: 0.5rem 0 1.5rem 1.5rem;
}
</style>
