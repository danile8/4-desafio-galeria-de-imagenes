const Card = (props) =>{
    return(
        <div>
        <img src={props.src} alt="" />
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
        </div>
    );
}
export default Card;