import { heroes } from "../data/heroes"


export const getHeroes = (clientPublisher) => {
  const validPublisher = ['DC Comics','Marvel Comics']
   if (!validPublisher.includes(clientPublisher)) {
  throw new error( `${clientPublisher} no es valido`);
   }
   
   const filteredHero = heroes.filter((hero) => hero.publisher === clientPublisher)

   return filteredHero


}