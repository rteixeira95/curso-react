import React from 'react'

export default function Aleatorio(props) {
    <h1>Aleatorio {props.min} e {props.max}</h1>
    return (
        Math.floor(Math.random() * (props.max - props.min)) + props.min
    )
}