# Texturing

## UV Channel Blue

El mapeo UV o "UV mapping" es un proceso de modelacion 3D donde se hace una proyeccion de una imagen en 2d a la superficie de un modelo 3d. Las letras U y V hacen referencia a los ejes de la textura 2D, dado que las referencias X, Y y Z se usan para denotar los ejes en 3D, ademas que W se usa para calcular las rotaciones quaternarias, una operacion comun en computacion grafica.

El proceso de mapeo UV se basa en asignar pixeles en una imagen a los mapeos de la superficie en el polígono, normamente se hace copiando triangulos de la imagen mapeada y pegando estos triangulos en el objeto.

{{< p5-iframe sketch="/showcase/sketches/uv.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="600" height="500">}}

Aca se puede evidenciar el mismo proceso, pero esta vez partiendo desde un circulo.

{{< p5-iframe sketch="/showcase/sketches/uvTriangle.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="600" height="500">}}

## Coloring Brightness Tools

Los modelos HSL y HSV son representaciones alternas del modelo RGB, diseñadas en 1970 por investigadores en computacion grafica para acercarse mas con la forma en que se persiben los seres humanos la vision de los colores.

<p align="center">
    <img src="/showcase/sketches/textureSampling.jpg" width="400" />
</p>

### HSV value V

{{< p5-iframe sketch="/showcase/sketches/lumaValueV.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="700" height="500">}}

### HSL lightness L

{{< p5-iframe sketch="/showcase/sketches/lumaLightnessL.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="700" height="500">}}

### Component average

{{< p5-iframe sketch="/showcase/sketches/componentAverage.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="700" height="500">}}

## Trabajo Futuro

Lograr aplicar el mapeo de texturas UV en un entorno 3D, montando esto en un objeto y que se muestre con los colores que se establecieron en el shader.

En el caso del Luma, aplicar estos a videos y a otro tipo de imagenes a color, no solo aplicando una escala de grises, sino tambien hacer uso de estos con otra escala de colores y valores, como podria ser una imagen con negativos.

## Referencias

[1] https://en.wikipedia.org/wiki/UV_mapping

[2] https://en.wikipedia.org/wiki/HSL_and_HSV 