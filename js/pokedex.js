import { getPokemon, getSpecies } from "./api.js"

const $image = document.querySelector('#image')
export function setImage(image){
  $image.src = image
}

export function setDescription(text){
  const $description = document.querySelector('#description')
  $description.textContent = text
}

export async function findPokemon(id){
  let pokemon = await getPokemon(id)
  const species = await getSpecies(id)
  const description = species.flavor_text_entries.find((flavor)=> flavor.language.name === 'es')
  const sprites = [pokemon.sprites.front_default]
  for(const item in pokemon.sprites ){
    if(item !== 'front_default' && item !== 'other' && item !== 'versions' && pokemon.sprites[item]){
      sprites.push(pokemon.sprites[item])
    }
  }
  console.log(sprites)
  return {
    description: description.flavor_text,
    sprites,
    id: pokemon.id,
    name: pokemon.name,
  }
}

const $screen = document.querySelector('#screen')
function loader(isLoading = false){
  const img = isLoading ? 'url(./images/loading.gif)' : ''
  $screen.style.backgroundImage = img
}

const $light = document.querySelector('#light')
function speech(text){
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'es'
  utterance.rate = 1.5
  speechSynthesis.speak(utterance)
  $light.classList.add('is-animated')
  utterance.addEventListener('end', () =>{ 
    $light.classList.remove('is-animated')
  })
}

export async function setPokemon(id){
  loader(true)
  const pokemon = await findPokemon(id)
  loader(false)

  setImage(pokemon.sprites[0])
  setDescription(pokemon.description)
  speech(`${pokemon.name}. ${pokemon.description}`)
  return pokemon
}
