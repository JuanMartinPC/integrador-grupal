import Login from './Login';
import Register from './Register';
import '../styles/Sesion.css';

function Sesion(){
        function Log(){
            const showLog = document.getElementById('showLogin')
            const showReg = document.getElementById('showRegister');
            showReg.classList.add('hidden')
            showLog.classList.remove('hidden')
        }

        function Reg(){
            const showLog = document.getElementById('showLogin')
            const showReg = document.getElementById('showRegister');
            showReg.classList.remove('hidden')
            showLog.classList.add('hidden')
        }

    return (
        <>
            <section className='sesion__section'>
                <article className='sesion__article'>
                    <div className='sesion__article-btns'>
                        <button onClick={Log} className='btnLogin' id='btnLogin'>Iniciar sesión</button>
                        <button onClick={Reg} className='btnRegister' id='btnRegister'>Registrarse</button>
                    </div>

                    <div className='show__login' id='showLogin'>
                        <Login />
                    </div>
                    <div className='show__register hidden' id='showRegister'>
                        <Register />
                    </div>
                   
                </article>
            </section>
        </>
    )
}

export default Sesion;