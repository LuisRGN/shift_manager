import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    
    const [count, setCount] = useState(5)
    const navigate = useNavigate();

    useEffect(()=> {
        const timeDown = setTimeout(() => {
            setCount(count => count -1);
            if (count === 1) navigate("/");
        }, 1000);
        return () => clearTimeout(timeDown)
    }, [count, navigate])

    useEffect(()=> () => {
        setCount(5)
    }, [])

    return (
        <>
        <h1>ERROR 404</h1>
        <h2>Regresando a la pagina principal en {count}</h2>
        </>
    )
}
export default Error