import { bug } from './data/bug_pokemon.js';
import { dragon } from './data/dragon_pokemon.js';
import { electric } from './data/electric_pokemon.js';
import { fairy } from './data/fairy_pokemon.js';
import { fighting } from './data/fighting_pokemon.js';
import { fire } from './data/fire_pokemon.js';
import { ghost } from './data/ghost_pokemon.js';
import { grass } from './data/grass_pokemon.js';
import { ground } from './data/ground_pokemon.js';
import { ice } from './data/ice_pokemon.js';
import { normal } from './data/normal_pokemon.js';
import { poison } from './data/poison_pokemon.js';
import { psychic } from './data/psychic_pokemon.js';
import { rock } from './data/rock_pokemon.js';
import { water } from './data/water_pokemon.js';

var width = 550;
var height = 400;
const svgHeight = 400;
const svgWidth = 550;
// var rectWidth = 35;

const pokemonTypes = [ 'bug', 'dragon', 'electric', 'fairy', 'fighting', 
                      'fire', 'ghost', 'grass', 'ground', 'ice', 'normal', 
                      'poison', 'psychic', 'rock', 'water' ];

const xStats = [ 'Attack', 'Defense', 'HP', 'Sp. Atk', 'Sp. Def', 'Speed' ];

d3.select( '.container' ).style( 'background-color', 'ghostwhite');
const svg = d3.select('svg');

d3.selectAll( '.typeButton' ).on( 'click', createPokemonButtons );

function createPokemonButtons( d, i ) {

  let pokeNameContainer = d3.select( '.pokemonNameButtons' );

    d3.select( '.pokemonNameButtons')
      .selectAll( 'button' )
      .data( () => {
        if ( d3.select( this ).classed( 'bugButton ') ) {
          return bug;
        } else if ( d3.select( this ).classed( 'dragonButton ') ) {
          return dragon;
        } else if ( d3.select( this ).classed( 'electricButton ') ) {
          return electric;
        } else if ( d3.select( this ).classed( 'fairyButton ') ) {
          return fairy;
        } else if ( d3.select( this ).classed( 'fightingButton ') ) {
          return fighting;
        } else if ( d3.select( this ).classed( 'fireButton ') ) {
          return fire;
        } else if ( d3.select( this ).classed( 'ghostButton ') ) {
          return ghost;
        } else if ( d3.select( this ).classed( 'grassButton ') ) {
          return grass;
        } else if ( d3.select( this ).classed( 'groundButton ') ) {
          return ground;
        } else if ( d3.select( this ).classed( 'iceButton ') ) {
          return ice;
        } else if ( d3.select( this ).classed( 'normalButton ') ) {
          return normal;
        } else if ( d3.select( this ).classed( 'poisonButton ') ) {
          return poison;
        } else if ( d3.select( this ).classed( 'psychicButton ') ) {
          return psychic;
        } else if ( d3.select( this ).classed( 'rockButton ') ) {
          return rock;
        } else if ( d3.select( this ).classed( 'waterButton ') ) {
          return water;
        } else {
          error('Type selection issue');
        } 
      } 
        )
      .join( 'button' )
      .style( 'height', '30px' )
      .style( 'width', '100px' )
      .style( 'margin', '1px' )
      .style( 'border', '2px solid black' )
      .style( 'background-color', () => {
        return d3.select( this ).style( 'background-color' );

      } )
      .style( 'border-radius', '37.5px' )
      .attr( 'clear', 'both')
      .text( ( d, i ) => d[ 'Name' ] )
      .attr( 'font-size', '0.75em' )
      .attr( 'text-align', 'center')
      .on( 'click', displayStats );
  // }

}


function displayStats( d, i ) {
  let data = [];
  console.log( d );
  xStats.forEach( function( element ) {
    data.push( d[ element ] );
  } );
  let barWidth = svgWidth / data.length;
  let barPadding = 5;

  let bar = svg.selectAll( 'g' )
                  .data( data )
                  .enter().append( 'g' );
  
  bar.selectAll( 'rect' )
    .data( data )
    .enter().append( 'rect' )
    .attr( 'y', ( d ) => {
      return svgHeight - d;
    })
    .attr( 'height', ( d ) => {
      return d * 5;
    })
    .attr( 'width', barWidth - barPadding )
    .attr("transform", function (d, i) {  
      let translate = [barWidth * i, 0];  
      return "translate("+ translate +")";  
 });


  console.log( data );

}












