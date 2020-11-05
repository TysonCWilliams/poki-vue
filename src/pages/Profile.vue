<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <h1>Pokemon</h1>
    <pokemonComponent v-for="pokemon in pokemon" :pokemon-prop="pokemon" :key="pokemon.name" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import PokemonComponent from '../components/PokemonComponent'
export default {
  name: 'Profile',
  setup() {
    onMounted(() => pokemonService.getPokemon())
    return {
      pokemon: computed(() => AppState.pokemon),
      profile: computed(() => AppState.profile)
    }
  },
  components: { PokemonComponent }
}

</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
