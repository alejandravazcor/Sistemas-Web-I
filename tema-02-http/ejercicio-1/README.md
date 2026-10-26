# Tema 2 · HTTP · Ejercicio 1

## Enunciado
- Busca una web que tenga un formulario (abre **navegación privada**).
- Analiza los mensajes HTTP que hay. ¿Identificas alguno?
- Rellena el formulario con cualquier dato y dale a *submit*.
- Analiza el mensaje HTTP que se ha generado con las herramientas del navegador.
- Repite los pasos **editando el HTML y cambiando el método**.

---

## Web utilizada
- **URL:** _(rellenar)_
- **Navegador:** _(rellenar)_

## 1. Al cargar la página
_Captura de la pestaña Network:_ `capturas/01-carga.png`

- ¿Cuántas peticiones se hacen al cargar la página? _(rellenar)_
- La primera petición (el documento HTML):
  - Método: _(rellenar)_
  - Código de estado: _(rellenar)_
  - Tres cabeceras de la petición y qué significan: _(rellenar)_
- ¿Qué otros tipos de recursos se piden (CSS, JS, imágenes, fuentes…)? _(rellenar)_

## 2. Al enviar el formulario (método original)
_Capturas:_ `capturas/02-envio-cabeceras.png`, `capturas/03-envio-payload.png`

- Método: _(rellenar)_
- URL a la que se envía: _(rellenar)_
- Código de estado de la respuesta: _(rellenar)_
- `Content-Type` de la petición: _(rellenar)_
- ¿Dónde van los datos que he escrito? ¿Cómo se ven? _(rellenar)_

## 3. Cambiando el método en el HTML
_Capturas:_ `capturas/04-html-editado.png`, `capturas/05-envio-nuevo-metodo.png`

- Qué he cambiado (`method="..."` → `method="..."`): _(rellenar)_
- Método de la nueva petición: _(rellenar)_
- ¿Dónde van ahora los datos? _(rellenar)_
- Código de estado de la respuesta: _(rellenar)_ ¿Por qué crees que responde eso? _(rellenar)_

## Conclusiones
_(2-4 frases con lo que he aprendido: diferencia entre GET y POST, qué pasa si el servidor no acepta un método…)_
