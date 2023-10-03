function Title({color = 'black',children, hidden = false }) {
    if (hidden) {
        return null;
    }
  
    return (<h1 style = {{color:color}}>{children}</h1>);
  }

export default Title;