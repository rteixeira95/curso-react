import React from 'react'
import If, {Else} from './If.js'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If exp={usuario && usuario.nome} >
                Seja Bem vindo <strong>{usuario.nome}</strong>
            </If>
            <If exp={!usuario || !usuario.nome} >
                Seja Bem vindo <strong>Anonimo</strong>
            </If> */}

            <If exp={usuario && usuario.nome} >
                Seja Bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja Bem vindo <strong>Anonimo</strong>
                </Else>
            </If>
        </div>
    )
}