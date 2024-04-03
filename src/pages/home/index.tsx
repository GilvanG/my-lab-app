import { useNavigate } from "react-router-dom"
import './style.css';

export const Home = () => {
    const  navigation = useNavigate()
    return (
        <div className="container-buttons">
            <button className="item" onClick={()=> navigation('/ucc')}>Uncontrolled Component</button>
            <button className="item" onClick={()=> navigation('/cc')}>Controlled Component</button>
            <button className="item" onClick={()=> navigation('/hoc')}>HOC</button>
            <button className="item" onClick={()=> navigation('/portal')}>Portal</button>
            <button className="item" onClick={()=> navigation('/profiler')}>Profiler</button>
            <button className="item" onClick={()=> navigation('/context')}>UseContext</button>
            <button className="item" onClick={()=> navigation('/render-props')}>Render Props</button>
            <button className="item" onClick={()=> navigation('/state-reducer')}>State Reducer</button>
            <button className="item" onClick={()=> navigation('/provider')}>Provider</button>
            <button className="item" onClick={()=> navigation('/compound-components')}>Compound Components</button>
            
        </div>
    )
}