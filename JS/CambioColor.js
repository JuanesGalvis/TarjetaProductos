/* BOTONES */
const Amarillo = document.getElementById('btn-yellow')
const Azul = document.getElementById('btn-azul')
const Negro = document.getElementById('btn-black')
const Rojo = document.getElementById('btn-red')
const Blanco = document.getElementById('btn-white')

/* PARTES DEL DOCUMENTOS */
const Body = document.querySelector('body');
const imgBox = document.querySelector('.imgBox');
const IMG = document.querySelector('img');
const Titulo = document.querySelector('h2');
const BotonCompra = document.querySelector('.Comprar');

function Personalizacion(colorFondo, ColorImgBox, tenis, color, colorBtn, TextoBtn)
{
    /* FONDO */
    Body.style.backgroundColor = colorFondo;
    imgBox.style.backgroundColor = ColorImgBox;

    /* TENIS */
    IMG.setAttribute('src', tenis);
    IMG.style.width = '500px';
    IMG.style.height = '554px';

    /* TITULO DE LA TARJET */
    Titulo.innerHTML = `Nike ${color} 2020`;
    /* BOTON DE COMPRA */
    BotonCompra.style.backgroundColor = colorBtn;
    BotonCompra.style.color = TextoBtn;
}

/* EVENTO CLICK Y SUS INSTRUCCIONES */
Amarillo.addEventListener('click', () =>{

    const URL_Tenis = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.eastbay.com%2Fpi%2F3122710%2Fzoom%2Fnike-mercurial-vaporx-12-academy-ic-mens&f=1&nofb=1';

    Personalizacion('#F4C922', "rgb(185, 153, 30)", URL_Tenis, 'Yellow', '#F4C922', "#000")
})

Azul.addEventListener('click', () =>{

    const URL_Tenis = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstarki.vteximg.com.br%2Farquivos%2Fids%2F183782-1000-1000%2Fpol_pl_BUTY-MESKIE-NIKE-AIR-ZOOM-VOMERO-14-NIEBIESKIE-AH7857-402-43069_3.png%3Fv%3D637067800615970000&f=1&nofb=1';

    Personalizacion('#5466b1', "#233067", URL_Tenis, 'Blue', '#233067', "#FFF")  
})

Negro.addEventListener('click', () =>{

    const URL_Tenis = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdexter.vteximg.com.br%2Farquivos%2Fids%2F327043-1000-1000%2F838938010_1.png%3Fv%255Cu003d636459118108000000&f=1&nofb=1';

    Personalizacion('#000000', "#2f2f2f", URL_Tenis, 'Black', '#000000', "#FFF")  
})

Rojo.addEventListener('click', () =>{

    const URL_Tenis = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff9%2F14%2F53%2Ff91453722b3b86fb66c0ebfa2782a1be.png&f=1&nofb=1';

    Personalizacion('rgb(199, 27, 27)', "rgb(136, 13, 13)", URL_Tenis, 'Red', 'rgb(199, 27, 27)', "#FFF")  
})

Blanco.addEventListener('click', () =>{

    const URL_Tenis = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimagenes.tiendascampeon.es%2Fproductos%2F17666%2F24967-845026-100-phsrh000-2000.png&f=1&nofb=1';

    Personalizacion('rgb(210, 210, 210)', "rgb(121, 121, 121)", URL_Tenis, 'White', 'rgb(210, 210, 210)', "#000")  
})