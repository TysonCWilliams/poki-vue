<template>
  <div class="pokemon-page">
    <router-link :to="{name: 'ActivePokemon' , params: {pokemonName: pokemonProp.name}}">
      {{ pokemon.name }}
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'PokemonPage',
  props: ['pokemonProp'],
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      pokemon: computed(() => props.pokemonProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
