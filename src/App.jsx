import React from 'react'
import './App.css'
import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import AleatorioFeitoPorMim from './components/basicos/AleatorioFeitoPorMim'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'


export default () =>
    <div className='App'>
        <h1>Fundamentos de React</h1>
        <div className='Cards' >

            <Card titulo="#5 - Componente com filhos" color='#00C8F8'>
                <Familia apelido='Teixeira'>
                    <FamiliaMembro nome='Rui'/>
                    <FamiliaMembro nome='Ana'/>
                    <FamiliaMembro nome='Amadeu'/>
                </Familia>
            </Card>

            <Card titulo="#4 - Valor Aleatorio" color='#FA6900'>
                <Aleatorio min={1} max={6} />
            </Card>
            {/* <Card titulo="#5 - Valor Aleatorio feito por mim">
                <AleatorioFeitoPorMim min={1} max={6} />
            </Card>
            <Card titulo="#4 - Alerta ERRO">
                <h2>(function arrow)<strong> (_) recebe um props mas nao se usa</strong></h2>
            </Card> */}
            <Card titulo="#3 - Fragmentos" color='#E94C6F'>
                <Fragmento />
            </Card>
            <Card titulo="#2 - Com Parametro" color='#E8B71A'>
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Rui Teixeira"
                    nota={9.5} />
            </Card>
            <Card titulo="#1 - Primeiro Componente" color='#588C73'>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
