<script setup>
// Sección de personajes principales
import Section from '../Section.vue'
const characters = [
  {
    name: 'Aldara',
    race: 'Elfa',
    class: 'Hechicera',
    img: '@/assets/img/characters/aldara.png',
    description: 'Misteriosa y sabia, domina la magia ancestral.',
    stats: { fuerza: 6, inteligencia: 9, carisma: 7 },
    quote: 'El conocimiento es el mayor poder.'
  },
  // Agrega más personajes aquí
]
</script>

<template>
  <Section id="characters" title="Personajes principales" description="Conoce a los protagonistas de la campaña.">
    <div class="characters-list">
      <div v-for="char in characters" :key="char.name" class="character-card">
        <img :src="char.img" :alt="char.name" class="char-img" />
        <h3>{{ char.name }}</h3>
        <p><strong>{{ char.race }}</strong> — {{ char.class }}</p>
        <p>{{ char.description }}</p>
        <ul class="char-stats">
          <li v-for="(val, stat) in char.stats" :key="stat">{{ stat }}: {{ val }}</li>
        </ul>
        <blockquote v-if="char.quote">“{{ char.quote }}”</blockquote>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.characters-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.character-card {
  background: #f4f4f4;
  border-radius: 1rem;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem 1.5rem;
  max-width: 260px;
  text-align: center;
}
.char-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  background: #fff;
}
.char-stats {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
blockquote {
  font-style: italic;
  color: #42b883;
  margin-top: 1rem;
}
</style>
