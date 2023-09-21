import '../styles/Login.css';
import { Link } from 'react-router-dom'

function Login(){
    return (
        <>
            <section className='login__section'>
                <form className='login__section-form'>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email'></input>

                    <label htmlFor='password'>Contraseña: </label>
                    <input type='password' name='password'></input>
                    <article className='loginBtns'>
                        <Link to='/'><button>Atras</button></Link>
                        <button>Iniciar sesión</button>
                    </article>
                </form>
            </section>
        </>
    )
}

export default Login;