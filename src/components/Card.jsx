const Card = () => {

/* ESTO ES PARA ESTILAR LA CARD NADA MÁS.
LA RENDERIZACIÓN SE HACE EN EL MISMO MAIN.
DESPUÉS DE ESTILAR SE BORRA ESTE COMPONENTE */

    return (  
        <div className="card">
            <div className="profile">
                <img src="../assets/images/avatar-angela-gray.webp" alt="" />
            </div>
            <div className="description__card">
                <p>
                    <span>Mark Webber</span>
                    reacted to your recent post
                    <span>My first tournament today!</span>
                    <span className="red"></span>
                </p>
                <span>
                    1m ago
                </span>
            </div>
        </div>
    );
}
 
export default Card;