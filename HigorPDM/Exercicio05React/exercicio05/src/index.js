import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

render() {
    return (
        //emmet
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex aling-items-center border rounded mb-2" style={{height: '6rem'}}>
                                <i className={`fas fa-5x`}></i>
                                <p className="w-75 ms-3 text-center fs-1">
                                    OI
                                </p>
                            </div>
                            <div>
                                <p className="text-center">
                                {
                                    console.log("oi")
                                }
                                </p>   
                            </div>
                            <button className="btn btn-outline-primary w-100 mt-2">
                                Gerar Jogo 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}


} 
ReactDOM.render(    
    <App />,    
    document.querySelector("#root")
)
