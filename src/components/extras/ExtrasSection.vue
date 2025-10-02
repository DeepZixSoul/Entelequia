<script setup>
// Sección de extras: cronología, encuestas, minijuegos
import Section from '../Section.vue'
const timeline = [
  { date: '2025-09-01', event: 'Comienza la campaña' },
  { date: '2025-09-15', event: 'Descubren la Ciudadela' },
  // Agrega más eventos
]
const polls = [
  { question: '¿Qué debería hacer el grupo en la próxima sesión?', options: ['Explorar la mazmorra', 'Buscar aliados', 'Descansar en la ciudad'], votes: [5, 3, 2] },
  // Agrega más encuestas
]
</script>

<template>
  <Section title="Extras" description="Cronología, encuestas y minijuegos de la campaña.">
    <div class="timeline-block">
      <h3>Cronología</h3>
      <ul>
        <li v-for="t in timeline" :key="t.date">
          <strong>{{ t.date }}:</strong> {{ t.event }}
        </li>
      </ul>
    </div>
    <div class="polls-block">
      <h3>Encuestas</h3>
      <div v-for="p in polls" :key="p.question" class="poll">
        <p>{{ p.question }}</p>
        <ul>
          <li v-for="(opt, i) in p.options" :key="opt">
            {{ opt }} — <span class="votes">{{ p.votes[i] }} votos</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Aquí podrías añadir minijuegos o trivias -->
  </Section>
</template>

<style scoped>
.timeline-block ul {
  margin-left: 1.5rem;
  margin-bottom: 2rem;
}
.polls-block {
  margin-top: 2rem;
}
.poll {
  margin-bottom: 1.5rem;
}
.votes {
  color: #42b883;
  font-weight: bold;
}
</style>
