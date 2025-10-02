<script setup>
// Sección de episodios/podcast
import Section from '../Section.vue'
const episodes = [
  {
    title: 'Episodio 1: El comienzo',
    url: 'https://open.spotify.com/episode/xxxx',
    notes: 'Los héroes se conocen y reciben su primera misión.',
    highlights: ['Encuentro en la taberna', 'Primer combate', 'Decisión crucial']
  },
  // Agrega más episodios aquí
]
</script>

<template>
  <Section title="Episodios del podcast" description="Revive cada capítulo de la aventura.">
    <div class="episodes-list">
      <div v-for="ep in episodes" :key="ep.title" class="episode-card">
        <h3>{{ ep.title }}</h3>
        <iframe
          v-if="ep.url"
          :src="ep.url"
          width="100%"
          height="80"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <p class="ep-notes">{{ ep.notes }}</p>
        <ul class="ep-highlights">
          <li v-for="h in ep.highlights" :key="h">{{ h }}</li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.episodes-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.episode-card {
  background: #f4f4f4;
  border-radius: 1rem;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem 1.5rem;
}
.ep-notes {
  margin: 1rem 0 0.5rem 0;
  color: #333;
}
.ep-highlights {
  list-style: disc inside;
  color: #42b883;
  margin-left: 1rem;
}
</style>
