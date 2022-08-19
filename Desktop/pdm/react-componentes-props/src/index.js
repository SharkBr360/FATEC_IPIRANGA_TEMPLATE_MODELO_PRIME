import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
    return ( 
    <div className='container border rounded mt-2'>
        <div className='row border-bottom m-2 text-center'><i class="fa-solid fa-robot"></i>
            <h1 className='display-5 text-center mt-2'>Seus Pedidos</h1>
        </div>
    </div>
    )
}

ReactDOM.render(    
    <App />,
    document.querySelector('#root')
)