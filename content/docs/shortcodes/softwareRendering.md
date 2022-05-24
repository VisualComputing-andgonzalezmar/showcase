# Software Rendering

## ¿Que es?

El Renderizado es el proceso de generacion de una imagen, ya sea en 2d o 3d, a partir de un modelo dado. Ahora el Renderizado por Software es realizar estos procesos mediante el uso de un software de la computadora, que no depende de un hardware de graficos (GPU) y se realiza unicamente en la CPU.

La principal diferencia entre renderizar en CPU y GPU es la velocidad en la que logran completar los procesos de la tarea, donde la segunda puede realizar mucho mas rapido estas tareas, dado que la GPU cuenta con mas nucleos, ademas de estar optimizada para graficos como para programacion paralela.

<p align="center">
    <img src="/showcase/sketches/rendering1.gif" width="360" />
    <img src="/showcase/sketches/rendering2.gif" width="360" />
</p>

## state-of-the-art (En que estado se encuentra el software rendering)

### DirectX

Este es un conjunto de componentes , creados por Microsoft para los equipos que tengan Windows, que le permite al software funcionar directamente con el hardware de vídeo y audio, con el fin de mejorar la experiencia multimedia, principalmente en videojuegos. Actualmente se encuentra en la version 12, lanzada al mercado en el año 2022.

### Neural Rendering

Un efeciente renderizado de un mundo virtual foto realista es bastante complejo para los graficos generados por computadora, problema que si es solucionado podria hacer que estos graficos sean mas accesibles. Hoy en fia se encuentran avances en computacion visual y aprendizaje de maquina que buscan superar este reto, con los "Modelos generativos profundos" (Deep Generative Models).

El Renderizado Neural (Neural Rendering) es un nuevo campo que combina tecnicas del aprendizaje de maquina con la computacion grafica, integrando diferentes algoritmos de renderizado para entrenar una red neuronal.

<p align="center">
    <img src="/showcase/sketches/neuralRendering.png" width="500" />
</p>

### The Mesa 3D Graphics Library

La libreria Mesa es una implementacion en software de codigo abierto de  OpenGL, Vulkan y otras API de graficos. Esta libreria convierte sus especificaciones a los controladores de hardware especificos de cada proveedor, como lo son Intel o AMD que son los principales usuarios.

La libreria tambien contiene una implementacion para el renderizado por software conocida como *swrast* que permite el uso de shaders en la CPU para realizar *Render Offline* cuando no se cuenta con una GPU.

## Tipos

Al momento de renderizar, podemos encontrar 2 categorias principales en las que se realiza este proceso:

### 1. Real Time

El Renderizado en tiempo real (tambien conocido como Real Time) suele ser empleado para gráficos interactivos o videojuegos, donde  las imágenes deben computarse con información 3D y visualizarse lo mas rapido posible.

### 2. Pre-Rendering

El Pre-Renderizado (tambien conocido como Render Offline) se utiliza principalmente cuando la velocidad no es el factor mas importante. Este proceso de renderizado se encuentra con mayor frecuencia en proyectos de animación y efectos que requieren una mayor complejidad visual y recursos fotorrealistas a un nivel superior.

## Tecnicas de renderizado en 3D

- **Rasterización:** Para la representación de objetos 3D a tiempo real. Empleado para los gráficos interactivos. Se utiliza cuando no podemos sacrificar velocidad. En este caso, en lugar de de representar una imagen por píxeles, la rasterización se basa en «polígono por polígono».
- **Raytracing:** Se trata de un cálculo algorítmico del color de cada píxel cuando se trazan uno o más rayos de luz desde la cámara principal. Con esta técnica se logra un mayor fotorrealismo. Por el contrario de la técnica anterior, es más lenta.
- **Radiosidad:** La función principal de esta técnica es simular de forma precisa el color de las superficies por la iluminación indirecta. Su característica principal son las sombras suaves y graduadas que se ven influidas por el color de superficies cercanas.

## Posibles aplicaciones

- Bienes raices

- Diseño de interiores

- Industria del entretenimiento

- Industria manufacturera

- Arquitectura

- Ciencias de salud

- Publicidad

## Referencias

[1] https://en.wikipedia.org/wiki/Software_rendering

[2] https://www.gamedev.net/forums/topic/703265-state-of-art-in-real-time-software-rendering/

[3] https://www.researchgate.net/publication/342905137_State_of_the_Art_on_Neural_Rendering

[4] https://support.microsoft.com/es-es/topic/c%C3%B3mo-instalar-la-versi%C3%B3n-m%C3%A1s-reciente-de-directx-d1f5ffa5-dae2-246c-91b1-ee1e973ed8c2

[5] https://3dalia.com/que-es-el-renderizado-3d/#Tipos_de_renderizado


