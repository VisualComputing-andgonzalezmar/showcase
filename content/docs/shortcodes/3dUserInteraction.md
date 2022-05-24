# 3D User Interaction

## Introduccion

En el campo de la computacion, la interaccion 3D es una forma de intereaccion entre Humano y Maquina, donde los usuarios son capaces de moverse e interactuar en un espacio en tres dimensiones. Lo mas relevante es que ambas partes (Humano y Maquina) deben procesar la informacion de la posicion fisica de los elementos en el espacio tridimensional para lograr una perfecta interaccion.

Para lograr esta interaccion se suele usar un dispositivo de entrada, que detecta los movimientos e interacciones del usuario para simular la escena y las acciones que se realizaron en un dispositivo de salida.

## Historia

Los primeros avances en la interaccion y visualizacion en 3D comenzó en la decada de 1960, por investigadores como Ivan Sutherland, Fred Brooks, Bob Sproull, Andrew Ortony y Richard Feldman. Sin embargo, no fue hasta 1962 cuando Morton Heilig inventó el simulador Sensorama, el cual proporcionó retroalimentación de video 3D, así como movimiento, audio y para producir un entorno virtual. La siguiente etapa de desarrollo fue la finalización del trabajo pionero de Ivan Sutherland en 1968, la Espada de Damocles, que invento una pantalla montada en la cabeza que producía un entorno virtual en 3D al presentar una imagen fija de izquierda y derecha de ese entorno.

La disponibilidad de la tecnología, así como los costos poco prácticos, frenaron el desarrollo y la aplicación de entornos virtuales hasta la década de 1980 y las aplicaciones se limitaron a empresas militares en los Estados Unidos. Desde entonces, más investigaciones y avances tecnológicos han permitido que se abran nuevas puertas para la aplicación en otras áreas, como la educación, el entretenimiento y la fabricación.

## Selection and Manipulation

Las tecnicas en este campo se basan principalmente en completar tres tareas basicas:

- Seleccionar un objeto
- Posicionar un objeto
- Rotar un objeto

El usuario necesita de manera obligatoria la forma de manipular los objetos virtuales, donde estos puedan ser seleccionados para realizar dicha accion.

### Selection

Para realizar esta accion, el usuario primero debe encontrarse en la capacidad de ubicar el objeto deseado en el espacio mediante una correcta manipulacion de la vista en dicho espacio. Ya identificado el objeto, existen diversar formas y tecnicas para seleccionar el objeto.

Una de las tecnicas de seleccion puede ser la interseccion del cursor, que nos permite interactuar en el espacio virtual, con algun objeto del entorno. Este cursor suele ser una simulacion de una mano humana, guiada por el dispositivo de entrada que se este usando.

<p align="center">
    <img src="/showcase/sketches/manosVR.jpg" width="400" />
</p>

### Manipulation

Es una tarea que se realiza despues de realizar la seleccion del objeto, donde este es manipulado por el usuario segun las fisicas definidas. Se pueden realizar acciones como rotar, mover, acercar, etc.

La principal accion de manipulacion que debe permitir la aplicacion es la navegacion por el entorno virtual, dado que sin esta seria incapaz de ver por completo este espacio virtual y lograr interactuar de manera completa con los objetos en este.

### System Control

Finalmente cabe resaltar que se quiere de un sistema de control mediante el uso de dispositivos de entrada, que le permita al usuario realizar las acciones previamente descritas. Podemos agrupar estos sistemas en 4 grandes categorias, que pueden usarse de manera independiente o mixta:

- Menus graficos
- Comandos por voz
- Interaccion por gestos
- Uso de Herramientas 

## Resultados

{{< p5-iframe sketch="/showcase/sketches/3dUserInteraction.js" width="620" height="650">}}

## Conclusiones

Se puede evidenciar a simple vista las aplicaciones que tiene esta tecnologia a diversos campos, desde ciencias de la salud como aplicaciones en trabajos de ingenieria. Ademas que existe la posibilidad de adicionar mas campos de computacion visual, como lo puede ser el uso del Ray Tracing, para lograr un mejor resultado en la interaccion Humano-Maquina.

## Trabajo Futuro

Aplicar el uso de la camara para la seleccion del objeto y lograr mover la camara o enfoque que se tiene sobre este con el uso de las manos.

Realizar una mejora de los efectos de luz, por ejemplo, mediante el uso del Ray Tracing o Ray Casting.

## Referencias

[1] https://en.wikipedia.org/wiki/3D_user_interaction

