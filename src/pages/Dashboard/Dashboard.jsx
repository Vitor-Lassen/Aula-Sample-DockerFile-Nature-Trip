import Menu from '../../componentes/Menu/Menu'
import '../Dashboard/Dashboard.css'

function Dashboard() {
    return (
        <>
            <div className='flex-row'>
                <Menu></Menu>
                <div className='flex-column'>
                    <div>
                        <h1>Dashboard</h1>
                        <div className='flex-row'>
                            <h1 className='cards'>cards</h1>
                            <h1 className='cards'>cards</h1>
                        </div>
                        
                    </div>
                    <div>
                        <h1>Locais</h1>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard
