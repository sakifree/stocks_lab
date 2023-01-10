import data from "../data.json"
import { useParams } from "react-router-dom"

const Stock = (props) => {
    
    const symbol = useParams().symbol
    //console.log(symbol)
    
    for (let item of data){
        if(item.symbol === symbol){
            //console.log(item)
            return (<>
                <h1>{item.name} ({item.symbol})</h1>
                <h3>Last Price: ${item.lastPrice}</h3>
                <h3>Opening Price: ${item.open}</h3>
                <h3>High: ${item.high}</h3>
                <h3>Low: ${item.low}</h3>
                <h3>Price Change: ${item.change}</h3>
            </>)
        }
    }
    
}

export default Stock