<template>
  <div v-if="pokemon.name" class="active-pokemon">
    <h3>{{ pokemon.name }}</h3>
    <img class="w-75" :src="pokemon.sprites.front_default" alt="">
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'ActivePokemon',
  setup() {
    const route = useRoute()
    onMounted(() => { pokemonService.getActivePokemon(route.params.pokemonName) })
    return {
      pokemon: computed(() => AppState.activePokemon)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
