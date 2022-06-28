---
title: Procedural Animation 3D
---

# Aplicación de shaders en figuras 3D

En esta Sección se podrá ver como el vertex shader interactúa con el cuerpo generado, de tal manera que que sus dimensiones por partes serán modificadas.

Partimos de 2 figuras geométricas por defecto, que son una esfera y un cilindro, y habrán diferentes de estos efectos que serán aplicados, el primero  es simple una rotación del cuerpo sin ningún cambio. y los otros 2 cambiarán ciertas amplitudes de la figura, con cierta frecuencia, generando un tipo de animación del cuerpo.

como por ejemplo en el caso de Super Mario 64

Cuando entra en un mundo representado por un cuadro

<p align="center">
    <img src="/showcase/sketches/cuadro mario.gif" width="400" />
</p>

O simplemente fijarnos en la parte inicial de este mismo juego, donde podemos interactuar con rostro del mismísimo mario 

<p align="center">
    <img src="/showcase/sketches/cuadra rostro.gif" width="400" />
</p>

De igual forma existe animaciones procesales en 3D que parte desda una textura generar una animación, o por medio de una secuencia ya definida para un cuerpo

<p align="center">
    <img src="/showcase/sketches/esfera con afecto procedural.jpg" width="400" />
</p>

Ahora veremos esto con un ejemplo en P5.

{{< p5-iframe sketch="/showcase/sketches/cilindroTextura.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="620" height="650">}}

## Conclusiones

Las animaciones procesales permiten replicar comportamientos ya sea interactuando con la textura aplicada, o asi mismo una secuencia predefinida que podrá ser replicada en otro cuerpos, y asi poder generar efectos de manera sencilla, el cual será muy necesario el uso de shaders, donde la codificación del vertex será protagonista.

A nivel práctico podríamos aplicar estas animaciones en series donde el protagonista tiene un poder que hace deformar el suelo o el entorno donde se encuentra. o el simple hecho de mostrar un material inestable en medio de la historia. También en juego se puede aplicar este tipo de animaciones donde puede suceder algo similar.