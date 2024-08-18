import '../CardDestino/CardDestino.css'


function CardDestino({ nome, descricao, cidade, estado, pais, coordenadas, onMouseEnter, onMouseLeave, onClick }) {
    return (
        <>
            <div
                className='card-container column card-destino'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            >
                <div className='row header-card'>
                    <div className='col'>
                        <h6>{nome}</h6>
                    </div>
                </div>
                <div className='row descricao-card'>
                    <div className='col'>
                        <p>{descricao}</p>
                    </div>
                </div>
                <div className='row footer-card'>
                    <div className='col'>
                        <h6>{cidade}</h6>
                    </div>
                    <div className='col'>
                        <h6>{estado}</h6>
                    </div>
                    <div className='col'>
                        <h6>{pais}</h6>
                    </div>
                    <div className='col'>
                        <h6>{coordenadas}</h6>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDestino
