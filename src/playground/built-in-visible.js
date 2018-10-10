class Visible extends React.Component{
  constructor(props){
    super(props);
    this.show=this.show.bind(this);
    this.state={
      visible: false

    }
  }
   show(){
     this.setState((preval)=>{
       return {
         visible: !preval.visible
       }
     })
   }

  render(){
    return(
      <div>
      <h1>Visiible Toogle</h1>
      <button onClick={this.show}>{this.state.visible?"hidedetails":"showdetails"}</button>
      <p>{this.state.visible && "Hey i am ankush"}</p>
      </div>
    )
  }
}


ReactDOM.render(<Visible />,document.getElementById("cat"))




// let a="";
// let b="show details";
// var show=()=>{
//   if(b=="show details"){
//     a="hey i am ankush";
//     b="hide details"
//   }
//   else{
//     a="";
//     b="show details";
//   }
//   call()
//
// }
//  let men=document.getElementById('cat');
//
// var call= ()=>{
//   const template=(
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={show}>{b}</button>
//     <p>{a}</p>
//     </div>
//   )
//
//
//    ReactDOM.render(template,men);
// }
//
// call();
