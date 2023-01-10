import { Link } from "react-router-dom"
import data from "../data.json"

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            {data.map((stock) => {
                const { name, symbol } = stock

                return (<>
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name} ({symbol})</h2>
                    </Link>
                </>)
            })}
        </div>
    )
}

export default Dashboard