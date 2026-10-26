# Tema 2 · HTTP

> Resumen del tema explicado desde cero. Ejercicios: [Ejercicio 1](ejercicio-1/) · Ejercicio 2 (Bruno)

---

## 1. Qué es HTTP

**HTTP** (*HyperText Transfer Protocol*, protocolo de transferencia de hipertexto) es el **idioma en el que hablan el navegador y el servidor**. Lo creó Tim Berners-Lee entre 1989 y 1991.

Funciona siempre igual, con un **ciclo de petición-respuesta**:

1. El cliente abre una conexión con el servidor (normalmente por TCP).
2. El cliente envía una **petición** (*request*): «dame esta página».
3. El servidor devuelve una **respuesta** (*response*): «aquí la tienes» o «no existe».
4. Se cierra la conexión.

Características que hay que saber:
- Es un protocolo de la **capa de aplicación**.
- Es de **transacciones** (petición → respuesta).
- Es **sin estado** (*stateless*), lo vemos abajo.
- Normalmente va sobre **TCP/IP**, aunque vale cualquier transporte fiable.

### Versiones
| Año | Versión | Nota |
|---|---|---|
| 1991 | HTTP/0.9 | La primera, sin número de versión |
| 1996 | HTTP/1.0 | |
| 1997 | HTTP/1.1 | La más clásica, mejorada en 1999 y 2014 |
| 2015 | HTTP/2 | Nace del protocolo **SPDY** de Google |
| 2018-2022 | **HTTP/3** | Usa **QUIC** (sobre **UDP** en vez de TCP). Hasta 4 veces más rápido que 1.1. Soluciona el *head-of-line blocking* de TCP |

En 2025, HTTP/2 lo usaba un 33 % de las webs y HTTP/3 un 36 %.

---

## 2. Conceptos

### User-Agent
Es **el programa que actúa en nombre del usuario**, normalmente el navegador. En cada petición se envía la cabecera `User-Agent` diciendo qué navegador y sistema eres, por ejemplo:

```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36
```

Es un lío histórico: todos dicen ser «Mozilla» por compatibilidad. Por eso **es mala idea usarlo para adivinar el navegador**. Es mejor comprobar si el navegador tiene la funcionalidad que necesitas.

### Stateless (sin estado)
El servidor **no recuerda nada de peticiones anteriores**: cada petición es independiente y la trata igual venga de quien venga.

| ✅ Ventajas | ❌ Desventajas |
|---|---|
| Escala mejor | Complica la interacción con el usuario |
| Menos complejo | Hace falta información extra para mantener la **sesión** (cookies) |
| Mejor rendimiento | Más expuesto a ataques **DDoS** |
| Se pueden cachear los recursos | |

👉 Si HTTP no recuerda nada, ¿cómo sabe Instagram que sigues conectada? Porque en cada petición tu navegador envía una **cookie** con un identificador de sesión.

### URL
**URL** (*Uniform Resource Locator*) es la **dirección única de un recurso**. Un recurso es cualquier cosa que pidas: un HTML, una imagen, un vídeo…

```
scheme://[userinfo@]host[:port]/path[?query][#fragment]
```

Ejemplo: `http://google.es:8080/ejemplo/index.html?q=text#something`

| Parte | En el ejemplo | Qué es |
|---|---|---|
| **scheme** | `http` | El protocolo: `http`, `https`, `ftp`… |
| **host** | `google.es` | Nombre o IP del servidor |
| **port** | `8080` | Opcional. Por defecto: http → **80**, https → **443**, ftp → **21** |
| **authority** | `google.es:8080` | `[userinfo@]host[:port]` |
| **path** | `/ejemplo/index.html` | Ruta del recurso dentro de la web |
| **query** | `q=text` | Parámetros extra, en formato `clave=valor` separados por `&` |
| **fragment** | `something` | Una parte dentro de la página (ej. un apartado) |

**URI, URL y URN.** URI es el término general para identificar un recurso. Una URL lo identifica por **dónde está**. Una URN lo identifica por **su nombre**, ej.: `urn:isbn:0451450523` para un libro.

---

## 3. La petición HTTP

### Estructura
```
MÉTODO URL VERSIÓN           ← línea de petición
Cabecera: valor              ← una o más cabeceras, una por línea
Cabecera: valor
                             ← línea en blanco
cuerpo del mensaje           ← opcional (vacío en GET, con datos en POST)
```

### Ejemplo con GET (los datos van en la URL)
```
GET /en/html/dummy?name=MyName&married=not+single&male=yes HTTP/1.1
Host: www.explainth.at
User-Agent: Mozilla/5.0 (...) Firefox/1.5.0.11
Accept: text/html, ...
Accept-Language: en-gb,en;q=0.5
Referer: http://www.explainth.at/en/misc/httpreq.shtml
```

### El mismo formulario con POST (los datos van en el cuerpo)
```
POST /en/html/dummy HTTP/1.1
Host: www.explainth.at
Content-Type: application/x-www-form-urlencoded
Content-Length: 39

name=MyName&married=not+single&male=yes
```

El formulario tenía tres campos (`name`, `married` y `male`). Cada campo se envía como `nombre=valor`, y los campos se separan con `&`. Los espacios se convierten en `+`.

### Cabeceras que más vas a ver
| Cabecera | Para qué |
|---|---|
| `Host` | A qué servidor va la petición |
| `User-Agent` | Quién la hace (navegador y sistema) |
| `Accept` | Qué tipos de contenido acepta el cliente |
| `Accept-Language` | En qué idioma lo prefiere |
| `Referer` | Desde qué página vienes |
| `Content-Type` | En qué formato va el cuerpo (solo si hay cuerpo) |
| `Content-Length` | Cuántos bytes ocupa el cuerpo |
| `Cookie` | Las cookies que el navegador guarda de esa web |

### Métodos (o verbos): qué quieres hacer con el recurso
| Método | Qué hace |
|---|---|
| **GET** | **Obtener** un recurso. No cambia nada en el servidor. Obligatorio |
| **HEAD** | Como GET pero solo las cabeceras, sin contenido (para saber tamaño, versión…). Obligatorio |
| **POST** | **Enviar datos** para que el servidor los procese (crear o actualizar algo). Los datos van en el cuerpo |
| **PUT** | Enviar un recurso completo (ej. subir un archivo) |
| **DELETE** | **Borrar** el recurso |
| **PATCH** | Modificar **parte** de un recurso |
| **OPTIONS** | Preguntar qué métodos admite una URL |
| **TRACE** | Pedir que el servidor devuelva la petición tal cual, para diagnosticar problemas |
| **CONNECT** | Convertir la conexión en una conexión cifrada (https) |

- **Seguros** (*safe*): no deberían cambiar nada en el servidor → GET, HEAD, OPTIONS, TRACE.
- **Idempotentes**: hacer la petición una vez o diez veces da el mismo resultado → los seguros, más PUT y DELETE. **POST no es idempotente**: si lo repites, creas dos veces la misma cosa.

### GET vs POST (muy de examen)
| | GET | POST |
|---|---|---|
| Dónde van los datos | En la **URL** (visibles) | En el **cuerpo** (no se ven en la URL) |
| Botón atrás / recargar | Sin problema | El navegador avisa de que **se reenviarán los datos** |
| Marcadores | Se puede guardar | No se puede guardar |
| Caché | Sí | No |
| Historial | Los parámetros quedan guardados | No quedan guardados |
| Longitud | Limitada (unos 2048 caracteres de URL) | Sin límite |
| Tipo de datos | Solo ASCII | Cualquiera, también binario (archivos) |
| Seguridad | Menos. **Nunca enviar contraseñas por GET** | Algo más (pero sin HTTPS tampoco es seguro) |

---

## 4. La respuesta HTTP

### Estructura
```
VERSIÓN CÓDIGO FRASE         ← línea de estado
Cabecera: valor
                             ← línea en blanco
cuerpo (la página, la imagen, el JSON…)
```

Ejemplo:
```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 120

<html><head><title>Mi página</title></head><body>¡Hola mundo!</body></html>
```

### Códigos de estado
Son números de tres cifras. **Lo importante es la primera cifra:**

| Familia | Significado | Los que hay que saber |
|---|---|---|
| **1xx** | Información | 100 Continue · 101 Switching Protocols |
| **2xx** | ✅ Éxito | **200 OK** · **201 Created** (se creó algo nuevo) · 204 No Content |
| **3xx** | ↪️ Redirección | **301 Moved Permanently** · 302 Found (temporal) · **304 Not Modified** (usa tu copia en caché) |
| **4xx** | ❌ Error **del cliente** | **400 Bad Request** · **401 Unauthorized** (tienes que identificarte) · **403 Forbidden** (no tienes permiso) · **404 Not Found** · **405 Method Not Allowed** · 418 I'm a teapot (una broma) |
| **5xx** | 💥 Error **del servidor** | **500 Internal Server Error** · 502 Bad Gateway · **503 Service Unavailable** (saturado o en mantenimiento) |

**Truco:** con un 4xx la culpa es tuya, del cliente (has pedido algo que no existe o no puedes ver). Con un 5xx la culpa es del servidor.

**401 vs 403:** con un 401 el servidor no sabe quién eres y tienes que iniciar sesión. Con un 403 sí sabe quién eres, pero no tienes permiso.

### ¿Qué pasa si cambio la ruta de una página?
Quien tenga el enlace antiguo recibirá un **404**. Para evitarlo, el servidor debe responder en la ruta vieja con un **301 Moved Permanently** que indica la nueva. Además es importante para el **SEO**: con un 404 el buscador cree que el enlace está roto y trata la nueva ruta como una página nueva, y con un 301 entiende que es el mismo recurso.

---

## 5. HTTPS
**HTTP Secure**: el mismo HTTP pero **cifrado con SSL/TLS**, por el **puerto 443**. Así nadie en medio puede leer ni modificar lo que envías (contraseñas, tarjetas…).

---

## 6. Herramientas
- **Chrome DevTools** (F12, o `Ctrl+Shift+J` / `Cmd+Opt+J`) → pestaña **Network** (Red): muestra todas las peticiones y respuestas HTTP de una página.
- **Postman**: plataforma para enviar peticiones HTTP a mano y probar APIs. Pide registro, necesita conexión y la versión gratuita es limitada.
- **Bruno**: cliente de APIs **open source**, sin registro, funciona **offline** y se integra con Git. Es el que se usa en el ejercicio 2.

---

## ✍️ Preguntas para comprobar que lo entiendes
1. Descompón esta URL en sus partes: `https://www.renfe.com:443/es/es/viajar?origen=madrid#horarios`
2. ¿Qué significa que HTTP sea *stateless*? ¿Cómo hace entonces una web para saber que has iniciado sesión?
3. ¿Dónde van los datos de un formulario con GET? ¿Y con POST?
4. ¿Por qué nunca hay que enviar una contraseña con GET?
5. ¿Qué diferencia hay entre un 401 y un 403? ¿Y entre un 404 y un 500?
6. ¿Qué método usarías para pedir una página, para registrar un usuario y para borrar un anuncio?
7. ¿Qué significa que un método sea idempotente? ¿Lo es POST?
8. ¿Qué cambia en HTTP/3 respecto a las versiones anteriores?
