import React from 'react';

import Photo from './b.jpg';
import  Photo1 from './im.png';
import './App.css';

const person = [
  {name:'sarra', photo:Photo ,p:'i am sarra'},
  {name:'Daniel', photo:Photo1 ,p:'i am Daniel'},
  {name:'harold', photo:Photo ,p:'i am harold'}
];








export default class App extends React.Component{
state={
index:0
}
render(){
  return <>
  <center>
{ person.map((e,i)=> <button onClick={()=>{this.setState({index:i})}} >{e.name}</button>)}
<h1>{person[this.state.index].name}</h1>
<img src={person[this.state.index].photo}/>
<p> {person[this.state.index].p}</p>
</center>
    </>
   
}


}










