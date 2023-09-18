import '../styles/Slider.css';

function Slider() {
    //const btnLeft = document.getElementById('btnLeft')
    const imgList = [
        'https://img.freepik.com/vector-premium/fondo-banner-3d-azul-moderno-ondas-abstractas_181182-20296.jpg',
        'https://img.freepik.com/vector-premium/fondo-banner-3d-azul-moderno-ondas-abstractas_181182-20260.jpg?w=996',
        'https://img.freepik.com/vector-premium/resumen-asthetic-hd-wallpaper-fondo-banner-diseno-multiproposito_1340-16682.jpg?w=900',
        'https://img.freepik.com/vector-premium/fondo-banner-3d-azul-moderno-ondas-abstractas_181182-20278.jpg?w=996']
    
    let indice = 0;
    
    /* Botones para cambiar de imagen
    function Right(){
        const img = document.getElementById('img');
        if (indice === imgList.length - 1){
            indice = 0;
        } else {indice += 1}
        img.src = imgList[indice]
    }

    function Left(){
        const img = document.getElementById('img');
        if (indice === 0){
            indice = imgList.length - 1;
        } else {indice -= 1}
        img.src = imgList[indice]
    } */
    
    const seconds = 2000;
    setInterval(function(){
        const img = document.getElementById('img');
        if (img === null){
            return clearInterval();
        }
        if (indice === imgList.length - 1){
            indice = 0;
        } else {indice += 1
        img.src = imgList[indice]}
    }, seconds)

        
        

  return (
    <section className="slider__section">
        <div className="slider__items">
            <div className="slider__img">
                <img id='img' src={imgList[indice]}></img>
            </div>
        </div>
        {/* <div className="slider__buttons">
            <button id='btnLeft' onClick={Left}>Prev</button>
            <button izq='btnRight' onClick={Right}>Next</button>
        </div> */}
    </section>
  );
}

export default Slider;