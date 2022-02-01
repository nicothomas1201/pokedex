import { setDescription } from "./pokedex.js"

const BASE_API = 'https://pokeapi.co/api/v2/'

export async function getPokemon(id){
  try{
    const response = await fetch(`${BASE_API}pokemon/${id}/`)
    const data = await response.json()
    return data
  } catch(err){
    // setDescription('no se pudo encotrar al pokemon')
  }
}

export async function getSpecies(id){
  try{
    const response = await fetch(`${BASE_API}pokemon-species/${id}/`)
    const data = await response.json()
    return  data
  } catch (err){
    setDescription('no se pudo encotrar al pokemon')
  }
}
