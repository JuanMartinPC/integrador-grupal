import '../styles/Register.css';
import { Link } from 'react-router-dom'

function Register(){

    return (
        <>
            <section className='register__section '>
                <form className='register__section-form'>
                    <label htmlFor='username'>Nombre: </label>
                    <input name='username'></input>

                    <label htmlFor='lastname'>Apellido: </label>
                    <input name='lastname'></input>

                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email'></input>

                    <label htmlFor='password'>Contraseña: </label>
                    <input type='password' name='password'></input>

                    <label htmlFor='document'>DNI: </label>
                    <input name='document'></input>

                    <article>
                        <label htmlFor='gender'>Genero: </label>
                        <select name='gender'>
                            <option value='value1'>Masculino</option>
                            <option value='value2'>Femenino</option>
                            <option value='value3'>Es privado</option>
                        </select>
                    </article>
                    <article className='registerBtns'>
                        <Link to='/'><button>Atras</button></Link>
                        <button>Registrarse</button>
                    </article>

                </form>
            </section>
        </>
    )
}

export default Register;