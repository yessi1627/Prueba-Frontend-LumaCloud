Descripción del Proyecto
Este proyecto fue realizado como parte de la prueba técnica para la empresa LumaCloud. La prueba consistió en desarrollar diferentes ejercicios enfocados en maquetación, buenas prácticas con Git, manejo de estado en React y consumo de API.

El proyecto incluye:

Formulario accesible con validación.

Maquetación con Flexbox y Grid.

Componente React con estado y props.

Consumo de API con manejo de errores y carga.

Me enfoqué en entregar un código limpio, estructurado y con una buena organización de carpetas y commits.

Ejercicios
Ejercicio # 1  Formulario (HTML y CSS)
Campos: Nombre, correo y mensaje.

Accesible con etiquetas semánticas y atributos aria.

Validación con HTML5.

Estilos modernos inspirados en un formulario visualmente atractivo.

Comentarios en el código sobre decisiones importantes.

Ejercicio # 2 Maquetación con Flexbox y Grid
Layout 1: Grilla de productos responsive.

Layout 2: Sección Hero con texto e imagen.

Layout 3: Header con logo, navegación y botón.

Todos los layouts son responsive para escritorio, tablet y móvil.

Uso correcto de Flexbox, Grid y media queries.

Comentarios explicativos en el código.

Ejercicio # 3 Componente React con estado y props
CounterCard con botones para incrementar y reiniciar el valor.

Uso de props para personalizar el título y el valor inicial.

Componente claro y reutilizable.

Ejercicio # 4 Consumo de API en React
Consumo de la API pública https://jsonplaceholder.typicode.com/posts.

Muestra las 5 publicaciones más recientes simulando noticias de LumaCloud.

Indicador de carga.

Manejo de errores si la API falla.

Implementación de AbortController para evitar fugas de memoria.

¿Por qué usar useCallback o React.memo?
Sirve para evitar renderizados innecesarios cuando las funciones o props no cambian, lo que mejora el rendimiento en componentes más complejos. En este caso no era obligatorio, pero demuestra buenas prácticas de optimización.

Ejercicio 4
¿Cómo evitar fugas de memoria si el componente se desmonta?
Usé AbortController para cancelar la petición si el componente se desmonta antes de que la API responda, así evitamos errores y fugas de memoria.

Flujo GitHub
Trabajé cada ejercicio en una rama diferente (feature/nombre_del_ejercicio).

Commits ordenados por bloques (por ejemplo: estructura, diseño, lógica, etc.).

Mensajes de commit claros y semánticos.

Estructura de carpetas limpia y organizada.