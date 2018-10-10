let info={
  name: "Ankush",
  course: "btech",
  skill: ["web", "ml"],
}

const onFormSubmit= (e)=>{
  e.preventDefault();
  const option=e.target.elements.skills.value;
  if(option){
    console.log(option);
    info.skill.push(option);
    e.target.elements.skills.value='';
    call();
  }
}
const onClickIt=()=>{
  info.skill=[];
  call();
}
const guess=()=>{
  const guess=(Math.floor(Math.random()*(info.skill.length)));
  const a=info.skill[guess];
  alert(a);
}

 let men=document.getElementById('cat');

const call=()=>{
  const template=(
   <div>
   <h1>{info.name && info.name}</h1>
   <p>course: btech</p>
   <button onClick={guess}>What should I do?</button>
   <button onClick={onClickIt}>remove all</button>
    <ol>
   {
     info.skill.map((s)=>{
     return <li key={s}>{s}</li>
   })
   }
   </ol>
   <form onSubmit={onFormSubmit}>
     <input type="text" name="skills"></input>
     <button>Add</button>
   </form>
  </div>
 );
 ReactDOM.render(template,men);
}

call();
