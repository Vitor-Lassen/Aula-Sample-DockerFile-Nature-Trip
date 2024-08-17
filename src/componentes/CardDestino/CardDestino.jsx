import '../CardDestino/CardDestino.css'


function CardDestino({ nome, descricao, cidade, estado }) {
    return (
        <>
            <div className='card-container column'>
                <div className='row header-card'>
                    <div className='col'>
                        <h6>{nome}</h6>
                    </div>
                </div>
                <div className='row descricao-card'>
                    <div className='col'>
                        <h7>{descricao}</h7>
                    </div>
                </div>
                <div className='row footer-card'>
                    <div className='col'>
                        <h6>{cidade}</h6>
                    </div>
                    <div className='col'>
                        <h6>{estado}</h6>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CardDestino
