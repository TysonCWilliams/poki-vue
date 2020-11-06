<template>
  <div class="about container-fluid text-center">
    <div class="row border border-rounded border-primary justify-content-center">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt="" />
      <p>{{ profile.email }}</p>
    </div>
    <div class="row justify-content-center border border-warning my-5">
      <h1>Pokemon</h1>
    </div>
    <div class="row justify-content-between mx-2">
      <pokemonComponent v-for="pokemon in pokemon" :pokemon-prop="pokemon" :key="pokemon.name" />
    </div>
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

.about{
  min-height: 100vh;
  background-color: rgb(88, 90, 88);
}
</style>
