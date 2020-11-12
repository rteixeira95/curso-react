import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import AleatorioFeitoPorMim from './components/basicos/AleatorioFeitoPorMim'

export default () =>
    <div id='app'>
        <h1>Fundamentos de React</h1>
        <h2>(function arrow)<strong> (_) recebe um props mas nao se usa</strong></h2>
        <h4><i>Componentes basicos</i></h4>
        <br></br>
        <AleatorioFeitoPorMim min={1} max={6} />
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Rui Teixeira"
            nota={9.5} />
        <Primeiro></Primeiro>
    </div>
