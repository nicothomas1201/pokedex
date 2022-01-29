const BASE_API = 'https://pokeapi.co/api/v2/'

export async function getPokemon(id){
  try{
    const response = await fetch(`${BASE_API}pokemon/${id}/`)
    const data = await response.json()
    return data
  } catch(err){
    throw `no fue posible obtener el pokemon ${err}`
  }
}

export async function getSpecies(id){
  try{
    const response = await fetch(`${BASE_API}pokemon-species/${id}/`)
    const data = await response.json()
    return {isError: false, data}
  } catch (err){
    throw `No fue posible obtener la descripcion del pokemon ${err}`
  }
}
