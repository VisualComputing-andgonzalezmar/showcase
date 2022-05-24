# Bandas de Mach

## Introduccion

Se realiza un generador de terrenos con el uso de Ruido de Perlin, buscando asemejar un mapa topografico que cambia de color segun la altura. Ademas se busca implementar el color con bandas de Mach, para suavisar el cambio de altura o color del mapa.

## Contexto

Los colores se pueden interpretar de la siguiente manera

- Blanco = La mayor altura 
- Rojo = Una altura media alta
- Amarillo = Una altura intermedia
- Verde = La altura mas baja
- Azul = Donde hay agua

## Resultados

{{< p5-iframe sketch="/showcase/sketches/machBands.js" width="725" height="725" >}}

## Conclusiones y trabajo futuro

Se evidencia que se genero de manera correcta el terreno sin embargo no se logro aplicar de manera correcta el suavizado del color al terreno.

A continuacion se busca mejorar el color y buscar que se logre suavizar de manera correcta.