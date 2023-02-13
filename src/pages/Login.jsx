import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {
    const navigate = useNavigate()
    const [isLogged, setIsLogged] = useState(false)
    const { handleSubmit, register, reset } = useForm()
    const sumit = data => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/users/login`
        axios.post(URL, data)
            .then(res => {
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
                navigate('/')
            })
            .catch(err => console.log(err))
        reset({
            email: '',
            password: ''
        })
    }

    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false
        setIsLogged(condition)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    return (
        <>
            {
                isLogged ?
                    <div className='logged-container'>
                        <i className="fa-solid fa-circle-user logged__user"></i>
                        <h1 className='login__logged'>User Logged</h1>
                        <button className='logged__btn' onClick={handleLogout}>lgout</button>
                    </div>
                    :
                    <div className='login-container'>
                        <form className='form' onSubmit={handleSubmit(sumit)}>
                            <h2 className="form__title">Inicia Sesión</h2>
                            <p className="form__paragraph">¿Aún no tienes una cuenta?<a href="" className="form__link">Entra aquí</a></p>
                            <div className="form__datoContacto">
                                <h3 className="email">Datos de ingreso: </h3>
                                <p>email: orlando-amado@hotmail.com </p>
                                <p>contraseña: pass1234 </p>
                            </div>
                            <div className='form__container'>
                                <div className="form__group">
                                    <input className='form__input' placeholder=' ' type="text" id='email' {...register('email')} />
                                    <label className='form__label' htmlFor="email">Email</label>
                                    <span className="form__line"></span>
                                </div>
                                <div className="form__group">
                                    <input className='form__input' placeholder=' ' type="text" id='password' {...register('password')} />
                                    <label className='form__label' htmlFor="password">Password</label>
                                    <span className="form__line"></span>
                                </div>
                                <button className='form__submit'>Login</button>
                            </div>

                        </form>
                    </div>
            }
        </>
    )
}

export default Login