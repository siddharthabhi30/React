import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greet from './components/greet'
function List(props){
    return(
        <li className="one">{props.value}</li>
    );
}
// List2=(props)=>{
//     return(
//         <li>{props.value}</li>
//     );
// }


function GiveList(){
    const name="happy";
    return(
        <List value={name}/>
    );
}

 
const App = () => {
    const greeting = 'Hello Function Component!';
   
    return <Headline value={greeting} />;
  };
   
  const Headline = (props) =>
    <h1>{props.value}</h1>;

class Check extends React.Component{

    renderList(i){
        return(
            <GiveList/>
        );
    }
    renderApp(){
        console.log("occured here")
        return(
            <App/>
        );
    }
    render(){
        console.log("occured")
        return(
            <div>
           
             <div>
                {this.renderList()}
                </div>

            <div>
           
           {this.renderApp()}
            </div>
            <div>
           
          <Greet onClick={()=>this.renderApp()}/>
            </div>
                            
            </div>
           
           
        );
    }
}

ReactDOM.render(<Check />, document.getElementById("root"));