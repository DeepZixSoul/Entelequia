<script setup>
// Componente de layout profesional para secciones principales
// Usa variables CSS globales para colores y tipografía

// Definir nombre de componente multi-palabra para cumplir con las buenas prácticas
defineOptions({
  name: 'BaseSection'
})

defineProps({
  title: String,
  description: String
})
</script>

<template>
  <section class="section">
    <!-- Header con slot para acciones (opcional) -->
    <header v-if="title || description || $slots.actions" class="section-header">
      <div class="section-header-main">
        <h2 v-if="title">{{ title }}</h2>
        <slot name="actions" />
      </div>
      <p v-if="description" class="section-desc">{{ description }}</p>
    </header>
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: var(--section-padding, 3rem 1rem);
  margin: 0 auto;
  max-width: 1200px;
  background: var(--color-section-bg, #fff);
  border-radius: var(--radius-lg, 1rem);
  box-shadow: 0 2px 8px var(--color-shadow, #0001);
  margin-bottom: 2rem;
  font-family: var(--font-family-base, 'Inter', 'Segoe UI', Arial, sans-serif);
}
.section-header {
  margin-bottom: 2rem;
}
.section-header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}
.section-header h2 {
  font-size: var(--font-size-section-title, 2rem);
  margin-bottom: 0.5rem;
  color: var(--color-section-title, #222);
  font-family: var(--font-family-title, 'Lora', serif);
  letter-spacing: 0.01em;
}
.section-desc {
  color: var(--color-section-desc, #666);
  margin-bottom: 1.5rem;
  font-size: var(--font-size-section-desc, 1.1rem);
}

</style>
