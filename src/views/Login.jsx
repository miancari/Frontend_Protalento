import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [correo_electronico, setCorreoElectronico] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const login = () => {
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
                "correo_electronico": correo_electronico,
                "contraseña": contraseña
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.token) {
                    window.sessionStorage.setItem('token', json.token);
                    navigate("/gastos");
                } else {
                    alert('Credenciales incorrectas');
                }
            })
            .catch(error => {
                console.log("Error al iniciar sesión", error)
                alert("Hubo un erroral iniciar sesión. Inteéntalo de nuevo más tarde.");
            });
    };

    const handleCorreoElectronicoChange = (e) => {
        setCorreoElectronico(e.target.value);
    }

    const handleContraseñaChange = (e) => {
        setContraseña(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo Electronico</label>
                    <input type="email" value={correo_electronico} onChange={handleCorreoElectronicoChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" value={contraseña} onChange={handleContraseñaChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

{/* <h2>Iniciar Sesión</h2>
<div>
    <label>Correo Electrónico:</label>
    <input type="email" value={correo_electronico} onChange={handleCorreoElectronicoChange} />
</div>
<div>
    <label>Contraseña:</label>
    <input type="password" value={contraseña} onChange={handleContraseñaChange} />
</div>
<button onClick={login}>Iniciar Sesión</button> */}