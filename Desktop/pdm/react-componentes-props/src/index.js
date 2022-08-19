import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './pedido'

const App = () => {
    return ( 
    <div className="container border rounded mt-1 bg-dark">
        <div className="row border-bottom m-2 text-center"><i class="fa-solid fa-robot text-white mt-2"></i>
            <h1 className="display-5 text-center text-white mt-2">Seus Pedidos</h1>
        </div>
        <div className="row">
            <div className="col-sm-8 col-md-6 mb-3">
                <Pedido data="22/04/2021" icone="fa-solid fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400 SATA" />
            </div>
            <div className="col-sm-8 col-md-6 mb-3">
                <Pedido data="20/02/2021" icone="fa-solid fa-book fa-2x" titulo="Livro" descricao="Blade Runner - Philip K. Dick" />
            </div>
            <div className="col-sm-8 col-md-6 mb-3">
                <Pedido data="18/01/2021" icone="fa-solid fa-laptop fa-2x" titulo="Notebook" descricao="MacBook Air M2" />
            </div>
        </div>
    </div>
    )
}

export default Pedido

ReactDOM.render(    
    <App />,
    document.querySelector('#root')
)