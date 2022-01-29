import { getPokemon, getSpecies } from "./api.js"

const $image = document.querySelector('#image')
function setImage(image){
  $image.src = image
}

const $description = document.querySelector('#description')
function setDescription(text){
  $description.textContent = text
}

export async function findPokemon(id){
  let pokemon = await getPokemon(id)
  const species = await getSpecies(id)
  const description = species.data.flavor_text_entries.find((flavor)=> flavor.language.name === 'es')
  return {
    description: description.flavor_text,
    sprites: pokemon.sprites.front_default,
  }
}

export async function setPokemon(id){
  const {description, sprites} = await findPokemon(id)
  setImage(sprites)
  setDescription(description)
}