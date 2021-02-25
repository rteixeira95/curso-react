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
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import If,  {Else} from './components/condicional/If.js'
import Usuario from './components/condicional/UsuarioInfo'



export default () =>
    <div className='App'>
        <h1>Fundamentos de React</h1>
        <div className='Cards' >
            <Card titulo="#8 -Rendirizaçao Condicional (Continuação)" color='#a29e7a'>
                <Usuario usuario={{ nome: 'Fernando' }}></Usuario>
                <Usuario usuario={{ email: 'Fern@ndo.com' }}></Usuario>

            </Card>
            <Card titulo="#8 -Rendirizaçao Condicional" color='#a29e7a'>
                <If exp={2 + 2 == 4}>
                <span>2 + 2 = 4</span><br></br>

                    <span>Esta exp é verdadeira</span>
                    <Else>
                        <span>2 + 2 = 4</span><br></br>
                        <span>Esta exp é falsa</span>
                    </Else>
                </If>
            </Card>
            <Card titulo="#8 -Condicional Par ou impar " color='#982395'>
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>
            <Card titulo="#7 -Repeticao com lista Produtos " color='#3A9Ad9'>
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#6 -Repeticao com lista " color='#554165'>
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#5 - Componente com filhos" color='#00C212'>
                <Familia apelido='Teixeira'>
                    <FamiliaMembro nome='Rui' />
                    <FamiliaMembro nome='Ana' />
                    <FamiliaMembro nome='Amadeu' />
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
