'use client';

import React from 'react';
import StartersInicio from './StartersInicio.js';
import StartersDetail from './StartersDetail.js';

let pokemons = require('../../../../content/pokemons.json');

export default function Starters({ ...props }) {
  return (
    <div className="flex justify-center bg-white" {...props}>
      <StartersInicio pokemons={pokemons} />
      <StartersDetail titulo={'AGUA'} botoesLegenda={false} pokemons={pokemons} />
      <StartersDetail titulo={'PLANTA'} botoesLegenda={false} pokemons={pokemons} />
      <StartersDetail titulo={'FOGO'} botoesLegenda={false} pokemons={pokemons} />
    </div>
  );
}
