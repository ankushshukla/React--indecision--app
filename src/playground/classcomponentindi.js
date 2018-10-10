class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOptions=this.handleAddOptions.bind(this)
    this.state={
      options: ["web","ml","is"]
    }
  }
  handleDeleteOptions(){
    this.setState(()=>({options: []}));
  }
  handlePick(){
    const random=Math.floor(Math.random()*this.state.options.length)
    alert(this.state.options[random])
  }
  handleAddOptions(a){
    this.setState((preval)=>{
      return{
          options: preval.options.concat([a])
      }
    })

  }
  render(){
    const title="Indecision";
    const subtitle="Put your life in the hands of computer";
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action hasOption={this.state.options.length>0}
      handlePick={this.handlePick}
      />
      <Options options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
       />
      <AddOption handleAddOption={this.handleAddOptions} />
      </div>
    )
  }
}
const Header= (props)=>{
  return (
         <div>
           <h1>{props.title}</h1>
           <h2>{props.subtitle}</h2>
         </div>
       );
}


// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action=(props)=>{
  return (
         <div>
           <button disabled={!props.hasOption} onClick={props.handlePick}>What should I do?</button>
        </div>
       );
}
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button disabled={!this.props.hasOption} onClick={this.props.handlePick}>What should I do?</button>
//       </div>
//     );
//   }
// }

const Options =(props)=>{
  return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {
          props.options.map((option)=><Option key={option} optiontext={option} />)
        }
        </div>
     );
}
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//       {
//         this.props.options.map((option)=><Option key={option} optiontext={option} />)
//       }
//       </div>
//     );
//   }
// }
const Option=(props)=>{
  return(
       <div>
           <p>{props.optiontext}</p>
         </div>
       )
}


// class Option extends React.Component{
//   render(){
//     return(
//       <div>
//         <p>{this.props.optiontext}</p>
//       </div>
//     )
//   }
// }
class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption=this.handleAddOption.bind(this);
  }
handleAddOption(e){
    e.preventDefault();
    const skill = e.target.elements.option.value.trim();

    if(skill){
      this.props.handleAddOption(skill)
    }
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('cat'));
