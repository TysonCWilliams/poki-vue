/* eslint-disable no-console */
import { AppState } from '../AppState'
import { api } from './AxiosService'

class PokemonService {
  async getPokemon() {
    try {
      const res = await api.get('/pokemon')
      console.log(res)
      AppState.pokemon = res.data.results
    } catch (error) {
      console.error(error)
    }
  }

  async getActivePokemon(name) {
    try {
      const res = await api.get('/pokemon/' + name)
      console.log(res)
      AppState.activePokemon = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const pokemonService = new PokemonService()
