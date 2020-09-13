import React from 'react';
import {Link} from 'react-router-dom';
function header(){
return (
<header style={headerStyle}>
<h1>Todolist</h1>
<Link style={Linkstyle} to="/">Home</Link> | <Link style={Linkstyle}
   to="/about">About</Link>
</header>
)
}
const headerStyle={
  background:'#333',
  color:'#fff',
  textAlign:'center',
  padding:'10px'
}
const Linkstyle={
  color:'#fff',
  textDecoration:'none'
}
export default header;
