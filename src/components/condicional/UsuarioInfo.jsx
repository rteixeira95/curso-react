import React from 'react'
import If from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If exp={usuario && usuario.nome} >
                Seja Bem vindo <strong>{usuario.nome}</strong>
            </If>
            <If exp={!usuario || !usuario.nome} >
                Seja Bem vindo <strong>Anonimo</strong>
            </If>
        </div>
    )
}