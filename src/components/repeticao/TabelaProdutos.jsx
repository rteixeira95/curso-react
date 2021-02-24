import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) =>{
    function getLinhas(){
        return produtos.map((produto, i) => {
                return(
                    <tr key={produto.id}
                    className={i % 2 === 0 ?'Par': 'Impar '}>
                        <td>{produto.id}</td>
                        <td>{produto.produto}</td>
                        <td>{produto.preço.toFixed(2)} €</td>
                    </tr>
                )
            })
        }
    return (
        <div>
        <table className="TabelaProdutos" border = '1' style={{width: '100%', textAlign: 'center'}}>
            <tr>
                <th>Id</th>
                <th>Nome do porduto</th>
                <th>Preço</th>
            </tr>
            {getLinhas()}
        </table>
        </div>
    )
}