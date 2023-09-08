import '../styles/Login.css';

function Login(){
    return (
        <>
            <section className='login__section'>
                <form className='login__section-form'>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email'></input>

                    <label htmlFor='password'>Contraseña: </label>
                    <input type='password' name='password'></input>

                    <button type="submit">Iniciar sesión</button>
                </form>
            </section>
        </>
    )
}

export default Login;