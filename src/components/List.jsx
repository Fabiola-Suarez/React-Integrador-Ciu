
import React, {useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form} from 'react-bootstrap';
import Card from './Card';

const api =  'http://www.omdbapi.com/?i=tt3896198&apikey=59052ddc';

const List = () => {
    const[state, setState] = useState({
        data: [],
        cargando: true,
        searchTerm: "",
        error: "",
    });

//Llamo a la api para que me traiga una peliculas que va a quedar siempre
//al abrir la api.
    
    const traerPeliculaSerie = async() => {
    
        const res = await fetch(`${api}&s=batman`);
        const respJson = await res.json();
        if(respJson){
            setState({
                data: respJson.Search,
                cargando: false,
                error: "",
            })
        }
    };    
//Hook para cambiar el estado de las peliculas.

        useEffect(()=> {
            traerPeliculaSerie();
        },[])

//Armo el buscador con validaciones y errores

    const handleSubmit = async (e) => { 
        e.preventDefault();

        if(state.searchTerm === ""){
            return setState({...state, error: "Por favor escriba un texto valido"});
        }
        
        const response = await fetch(`${api}&s=${state.searchTerm}`);
        const data = await response.json();
        
        if(!data.Search){
            return setState({...state, error:"No se han encontrado resultados"});
        }
        return setState({
            data: data.Search,
            searchTerm: "",
            error: "",
        });
    };

//Armo un condicional para que si la pelicula tarda en mostrarse en pantalla
//de un aviso que que esta se esta buscando.absolute

    const{data, cargando} = state;

    if(cargando){
        return <div>Cargando....</div>;
    }
    
    return(
        <Fragment>
            <div className="row">
                <div className= "col-md-4 offset-md-4 p-4">
                    <Form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="Buscar"
                        className="form-control"
                        onChange={(e) => setState({...state, searchTerm: e.target.value})}
                        value = {state.searchTerm}
                        autoFocus
                        style={{backgroundColor:'lightBlue',borderColor:'ActiveBorder',position:'sticky',fontSize:'22px'}}
                        />
                    </Form>
                    <p className= "text-black">{state.error ? state.error: ""}</p>
                </div>
            </div>
            <div>
                <div className = "row pt-2">
                    {data.map((movie, i)=>(
                        <Card movie={movie} key={i}/>
                    ))}
                </div>
            </div>
        </Fragment>
       
        
    );
};
export default List;