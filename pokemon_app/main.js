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
const margin = ({top: 20, right: 0, bottom: 30, left: 40})

const pokemonTypes = [ 'bug', 'dragon', 'electric', 'fairy', 'fighting', 
                      'fire', 'ghost', 'grass', 'ground', 'ice', 'normal', 
                      'poison', 'psychic', 'rock', 'water' ];

const xStats = [ 'HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed' ];
const barColors = ['#ed4628', '#fcba03', 'cornflowerblue', 'mediumseagreen', 'darkorchid	', '#ed8311' ]

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

  d3.select('.nameContainer').text( this.innerHTML );

  // let data = d;
  let data = [];
  let dataLength = 5;

  xStats.forEach( function( element ) {
    data.push( {
      name : element, 
      value : d[ element ]
    } );
  } );

  let barWidth = svgWidth / dataLength;
  let barPadding = 5;



  let x = d3.scaleBand()
        .domain( data.map( d=> d.name ))
        .range( [margin.left, width - margin.right ] )
        .padding( 0.1 )

  let y = d3.scaleLinear()
        .domain([ 0, d3.max( data, d => d.value )]).nice()
        .range([ height - margin.bottom, margin.top ])

  let xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

  let yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .attr( 'class', 'yAxis' )
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove());

    // exit data
    d3.selectAll('.bar')
      .remove()
      .exit()
      .data( data );

    d3.selectAll('.yAxis')
      .remove()
      .exit();

    svg.append( 'g' )
    .selectAll( 'rect' )
    .data( data )
      .join( 'rect' )
        .attr( 'class', 'bar' )
        .attr( 'x', d => x( d.name ) )
        .attr( 'width', x.bandwidth() )
        .attr( 'fill', ( d, i ) => {
          return barColors[ i ];
      } )
        .transition()
        .attr("height", d => y(0) - y(d.value))
        .attr( 'y', d => y( d.value ) )


      svg.append("g")
        .call(xAxis);

      svg.append("g")
      .call(yAxis);

}












