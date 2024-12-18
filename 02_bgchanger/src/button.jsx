const Buttonn = ({handClick})=>{
    const butcolor=(value)=>{
        return handClick(value);
    }
    return (<>
      <button type="button" className="btn btn-primary" onClick={() => butcolor('blue')}>Primary</button>
      <button type="button" className="btn btn-secondary" onClick={() => butcolor('gray')}>Secondary</button>
      <button type="button" className="btn btn-success" onClick={() => butcolor('green')}>Success</button>
      <button type="button" className="btn btn-danger" onClick={() => butcolor('red')}>Danger</button>
      <button type="button" className="btn btn-warning" onClick={() => butcolor('yellow')}>Warning</button>
      <button type="button" className="btn btn-info" onClick={() => butcolor('cyan')}>Info</button>
      <button type="button" className="btn btn-light" onClick={() => butcolor('lightgray')}>Light</button>
      <button type="button" className="btn btn-dark" onClick={() => butcolor('black')}>Dark</button>
    </>
    )

}
export default Buttonn;