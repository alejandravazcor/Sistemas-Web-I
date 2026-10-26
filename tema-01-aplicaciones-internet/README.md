# Tema 1 · Introducción a las aplicaciones para Internet

> Resumen del tema explicado desde cero. Este tema no tiene ejercicio práctico, pero entra en la parte teórica del examen.

---

## 1. La idea clave: cliente y servidor

Una **aplicación web** es un programa que usas **a través del navegador**, sin instalar nada. Gmail, Netflix, Instagram o la intranet del CEU son aplicaciones web.

Funciona siempre con dos partes que se hablan:

| | **Cliente** | **Servidor** |
|---|---|---|
| Qué es | Tu navegador (Chrome, Safari…) | Un ordenador en otro sitio, encendido siempre |
| Qué hace | **Pide** cosas y **muestra** la respuesta | **Recibe** peticiones, las procesa y **responde** |
| Potencia | Poca (un móvil, un portátil) | Mucha, y tiene los datos |

Se comunican con un **protocolo de petición-respuesta** (en la web: **HTTP**, que es el tema 2) a través de una **red** (Internet, o una *intranet* si la red es interna de una empresa).

**Analogía:** un restaurante. Tú (cliente) pides al camarero un plato, la cocina (servidor) lo prepara con sus ingredientes (base de datos) y te lo traen. Tú no necesitas tener cocina en casa.

### Sistema web vs aplicación web
- **Sistema web:** la infraestructura que permite que la aplicación funcione (servidores, red, base de datos…).
- **Aplicación web:** el programa en sí. Es **distribuida** (una parte en tu navegador y otra en el servidor), cumple una **función de negocio** y usa **tecnologías web**.

### Características de las aplicaciones web
Evolucionan rápido · son de gran escala y muy distribuidas · multiusuario, multilenguaje y multicultural · necesitan seguridad y confidencialidad · se accede desde muchos dispositivos y navegadores · manejan mucha información en muchos formatos.

---

## 2. Ventajas y desventajas

| ✅ Ventajas | ❌ Desventajas |
|---|---|
| No hay que instalarlas ni ocupan espacio | Menos funcionalidad que una app de escritorio |
| Actualizaciones inmediatas (se actualiza el servidor y ya está) | Limitadas por lo que permite el navegador |
| Multiplataforma y portables (PC, móvil…) | Sin conexión (o si cae el servidor) no funcionan |
| Consumen pocos recursos del dispositivo | Dependen mucho del servidor |
| Alta disponibilidad | Limitaciones del protocolo HTTP |
| Difíciles de atacar con virus | Cuello de botella con muchos datos (ancho de banda) |
| Ideales para colaborar (Google Docs) | Hay que cifrar los datos (HTTPS) |
| «No hay problemas de compatibilidad» | A veces piden un navegador o software concreto |

---

## 3. Términos que se suelen confundir

### De menos a más complejo
**Documento → Página web estática → Página web dinámica → Sitio web → Aplicación web → Aplicación web basada en servicios**

- **Página estática:** siempre muestra lo mismo (un HTML fijo).
- **Página dinámica:** cambia según quién la vea o cuándo (se genera en el momento).

### Sitio web vs aplicación web
| **Sitio web** (website) | **Aplicación web** (web app) |
|---|---|
| Conjunto de páginas de un mismo dominio | Suele ser **el propio negocio** |
| Informativo: el usuario casi solo lee | El usuario **interactúa** y normalmente se **registra** |
| Se puede hacer con un CMS (WordPress…) | Ej.: Netflix, Instagram, banca online, intranet CEU |
| Ej.: web de la USP-CEU, la tienda del barrio | |

👉 **PujaCampus es una aplicación web**: hay usuarios, registro, pujas…

### Aplicación web vs servicio web
| **Aplicación web** | **Servicio web** (web service) |
|---|---|
| Pensada para **personas** | Pensado para **máquinas** |
| Tiene **interfaz** (pantallas) | Expone una **API** |
| Humano → máquina | Máquina → máquina |
| Devuelve información **con presentación** (HTML) | Devuelve información **sin presentación** (JSON, XML) |

Ejemplo: la app del tiempo de tu móvil (aplicación) pide los datos a un servicio web de meteorología, que le contesta en JSON.

---

## 4. Arquitectura: las 3 capas

1. **Capa de acceso** (navegador): lo que ve el usuario.
2. **Capa del servidor:** la lógica de la aplicación.
3. **Capa de persistencia:** la base de datos, donde se guardan las cosas para que no se pierdan.

### Modelos de despliegue (de más simple a más robusto)
| Modelo | Idea |
|---|---|
| **Básico** | Un único ordenador con el servidor, conectado a la red |
| **Separación de funciones** | El servidor web por un lado y la base de datos en otro servidor |
| **Separación de redes** | Los servidores internos quedan detrás de un **cortafuegos** |
| **Separación completa** | Ordenadores distintos para contenido estático, dinámico, base de datos, seguridad… |
| **Alto rendimiento** | Varios servidores iguales + un **balanceador de carga** que reparte las peticiones |
| **Alta disponibilidad** | Todo **duplicado**: si una máquina cae, otra sigue |

---

## 5. Un poco de historia
- **Tim Berners-Lee** inventó la **World Wide Web** en el CERN (1991): creó **URL, HTML y HTTP**. Fundó el **W3C**, el organismo que define los estándares web.
- **1995 · JavaScript** (en el navegador Netscape) para dar vida a páginas que eran estáticas. **Sigue vivo** y es el lenguaje de la web.
- **1995 · Java applets**, **1996 · Flash**, **2007 · Silverlight**: tecnologías para webs «ricas» que **desaparecieron** (problemas de seguridad, peso…).
- **2008 · HTML5**: multimedia nativa (vídeo, audio, canvas) sin plugins. Por eso murieron Flash y compañía.

---

## 6. Front end y back end

| | **Front end** (lo que pasa en el navegador) | **Back end** (lo que pasa en el servidor) |
|---|---|---|
| Tecnologías | HTML, CSS, JavaScript · librerías (Sass, jQuery) · frameworks (Bootstrap, React, Angular, Vue) | Scripting: PHP, Python, Ruby, **Node.js** · Compilados: C#, Java, Go · Bases de datos |
| En esta asignatura | Temas 3, 4 y 5 | Tema 6 (Node.js) |

### Tareas del desarrollador front end
- **Web performance:** que cargue rápido (una web media pesa ~2,5 MB en escritorio).
- **Responsive design:** que se adapte a móvil, tablet y escritorio.
- **Cross-browser:** que funcione igual en todos los navegadores.
- **End-to-end testing:** probar escenarios reales de uso.
- **Build automations:** empaquetar, *minificar* el código, reducir imágenes.
- **Accesibilidad:** que la pueda usar cualquier persona (ej.: texto alternativo en imágenes).
- **Usabilidad:** buena experiencia, sin ambigüedades.
- **Imágenes:** formatos con pérdida (jpeg) y sin pérdida (png), vectoriales (svg), webp, gif…
- **Interfaz de usuario (UI)** y **SEO** (salir bien en buscadores).

### Tareas del desarrollador back end
- **Testing automático** del servidor, las APIs y la base de datos (propiedades **ACID**, operaciones **CRUD**: Create, Read, Update, Delete).
- **Acceso a datos:** roles y seguridad. Regla de oro: **no fiarse nunca de lo que envía el cliente**.
- **Lógica de negocio:** las reglas de cómo se crea y cambia la información (ej.: «una puja tiene que superar a la anterior»).
- **Administración de la base de datos:** optimizar consultas, índices, memoria, disco, backups.
- **Escalabilidad:** aguantar más usuarios.
- **Alta disponibilidad:** que no se caiga.
- **Seguridad**, **arquitectura** (autenticación, autorización, logs), **transformación de datos** (entre JSON, XML y la base de datos) y **backups** (periódicos y en sitios distintos).

### Disponibilidad: «los nueves» (muy de examen)
| Disponibilidad | Tiempo caído al año |
|---|---|
| 99 % | algo más de **3 días** |
| 99,9 % | casi **9 horas** |
| 99,99 % | **53 minutos** |
| 99,999 % | **5,2 minutos** |

Por qué importa: Facebook estuvo **6 horas caído** en octubre de 2021 y perdió unos **164.000 $ por minuto**.

### Detalle de vocabulario
- Sin guion = sustantivo: «trabajo en el *front end*».
- Con guion = adjetivo: «un desarrollador *front-end*».

---

## ✍️ Preguntas para comprobar que lo entiendes
1. ¿Qué diferencia hay entre un sitio web y una aplicación web? Pon un ejemplo de cada uno.
2. ¿Qué diferencia hay entre una aplicación web y un servicio web? ¿Qué formato devuelve cada uno?
3. Nombra las tres capas de la arquitectura de una aplicación web.
4. ¿Para qué sirve un balanceador de carga?
5. Di dos ventajas y dos desventajas de las aplicaciones web.
6. ¿Cuánto tiempo puede estar caído al año un servicio con un 99,9 % de disponibilidad?
7. ¿Por qué desaparecieron Flash y los applets de Java?
8. ¿Por qué el back end no debe fiarse de lo que envía el cliente?
