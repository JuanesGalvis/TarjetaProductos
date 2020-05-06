## RETO - TARJETA DE PRODUCTO

He añadido botones para cambiar a diferentes colores de tenis, además el en titulo aparece el color y cada botón el color de la sección.

### Amarillo:

![Amarillo](https://i.ibb.co/5G4mrkg/Amarilla.png)

### Azul:

![Azul](https://i.ibb.co/HhWDRJ4/Azul.png)

### Negro:

![Negro](https://i.ibb.co/5n2Kvq7/Negro.png)

### Rojo:

![Rojo](https://i.ibb.co/5nNdGjF/Rojo.png)

### Blanco:

![Blanco](https://i.ibb.co/HdfYnpQ/Blanco.png)

## Código importante:
```javascript
/* FUNCIONAMIENTO DE LOS BOTONES */
Boton.addEventListener('click', () =>{

    const URL_Tenis = 'imagen.png';

    Personalizacion( "color de fondo", "color imgBox", URL_Tenis, 'Color', 'Color Boton', "Color letra del boton");  
})
```

------------


```javascript
/* FUNCIÓN QUE MODIFICA EL ESTILO Y ATRIBUTOS DEL HTML */
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
```