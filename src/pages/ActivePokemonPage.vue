<template>
  <div v-if="pokemon.name" class="active-pokemon container-fluid">
    <div class="row ">
      <div class="col text-center font-style">
        <h3>
          {{ pokemon.name }}
        </h3>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 border border-danger shadow-lg">
        <img class="w-100 " :src="pokemon.sprites.front_default" alt="">
      </div>
    </div>
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
