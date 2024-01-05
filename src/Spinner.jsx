import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SpinnerComponent = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/run')
    }, [])
    return (
        <div className='spinner-box'>
            <section className='paytm-loader'></section>
        </div>
    )
}

export default SpinnerComponent
