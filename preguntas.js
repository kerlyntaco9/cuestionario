const preguntas = [


  {
    materia: "Lógica de Programación",
    pregunta: "Un algoritmo es:",
    opciones: [
      "Es una rama de la ciencia que estudia la validación o estado de verdad de una expresión.",
      "Una secuencia de instrucciones finitas que llevan a cabo una serie de procesos.",
      "Es un proceso mediante el cual una persona desarrolla un programa valiéndose de una herramienta.",
      "Es un conjunto de pasos secuenciales y ordenados que permiten lograr un objetivo."
    ],
    respuesta: 3
  },

  {
    materia: "Lógica de Programación",
    pregunta: "Desde el pensamiento humano, ¿cuáles de las siguientes estructuras están relacionadas con los algoritmos?",
    opciones: [
      "Análisis",
      "Decisión",
      "Planificación",
      "Memoria"
    ],
    respuesta: 1
  },

  {
    materia: "Lógica de Programación",
    pregunta: "Los diagramas de flujo son:",
    opciones: [
      "Una representación gráfica de un programa.",
      "Una representación gráfica de un algoritmo mediante el uso de símbolos específicos.",
      "Una representación gráfica de un pseudocódigo.",
      "Una representación gráfica de un proceso infinito"
    ],
    respuesta: 1
  },

  {
    materia: "Lógica de Programación",
    pregunta: "¿Qué operación realiza la siguiente línea de seudocódigo?<br><br><code style='color:blue; font-weight:bold;'>Leer a</code>",
    opciones: [
      "Solicita al usuario ingresar un valor en la variable a.",
      "Imprime el valor de a en pantalla.",
      "Define la variable a.",
      "Declara a como un entero"
    ],
    respuesta: 0
  },

  {
    materia: "Lógica de Programación",
    pregunta: "La siguiente estructura le pertenece a:<br><br><pre style='background:#f0f0f0; padding:10px; border-radius:6px; font-family:monospace;'>Si Condición1\n  Instrucciones a ejecutar en caso de que la condición1 sea Verdadera\nSino\n  Si Condición2\n    Instrucciones a ejecutar en caso de que la condición2 sea Verdadera\n  Sino\n    Si Condición3\n      Instrucciones a ejecutar en caso de que la condición3 sea Verdadera\n    Sino\n      Instrucciones a ejecutar en caso de que la condición3 sea Falsa</pre>",
    opciones: [
      "Decisiones en secuencia",
      "Decisiones en anidadas",
      "Decisiones en cascada",
      "Decisiones simples"
    ],
    respuesta: 2
  },

  {
    materia: "Lógica de Programación",
    pregunta: "En el siguiente seudocódigo, ¿en qué línea existe un error?<br><br><pre style='background:#f0f0f0; padding:10px; border-radius:6px; font-family:monospace; color:blue;'>4   Definir a como Entero\n5   Definir b como Entero\n6\n7   a=3.51\n8   b=5</pre>",
    opciones: [
      "En la línea 5 del código.",
      "En la línea 8 del código.",
      "En la línea 4 del código.",
      "En la línea 7 del código."
    ],
    respuesta: 3
  },

  {
    materia: "Lógica de Programación",
    pregunta: "En las siguientes estructuras de decisión de seudocódigo, ¿cuál tiene errores?<br><br><strong>Opción A:</strong><br><pre>Si expresion_logica Entonces\n  acciones_por_verdadero\nSino\n  acciones_por_falso</pre><br><strong>Opción B:</strong><br><pre>Si expresion_logica Entonces\n  acciones_por_verdadero\nFin Si</pre><br><strong>Opción C:</strong><br><pre>Si expresion_logica Entonces\n  acciones_por_verdadero\nSino\n  acciones_por_falso\nFin Si</pre>",
    opciones: [
      "A",
      "B",
      "C",
      "Ninguna"
    ],
    respuesta: 0
  },

  {
    materia: "Lógica de Programación",
    pregunta: "En el siguiente programa se requiere que el usuario ingrese un valor positivo para x:<br><br><pre>Si x > 0 Entonces\n  a = 1 / x\n  Escribir \"El valor de a es:\", a\nFin Si\n\nSi x <= 0 Entonces\n  Escribir \"Valor no válido\"\nFin Si</pre><br><br>Si el usuario ingresa para x un valor de 4, ¿cuál es el resultado?",
    opciones: [
      "*** Ejecución Iniciada. ***\nValor no válido\n*** Ejecución Finalizada. ***",
      "*** Ejecución Iniciada. ***\nEl valor de a es: 0.25\n*** Ejecución Finalizada. ***",
      "*** Ejecución Iniciada. ***\nEl valor de a es: 4\n*** Ejecución Finalizada. ***",
      "Ninguna de las anteriores es la respuesta correcta"
    ],
    respuesta: 1
  },

  {
    materia: "Lógica de Programación",
    pregunta: "Se requiere que el usuario ingrese un valor positivo para x:<br><br><pre>Si x > 0 Entonces\n  a = 1 / x\n  Escribir \"El valor de a es: \", a\nFin Si\n\nSi x <= 0 Entonces\n  Escribir \"Valor no válido\"\nFin Si</pre><br><br>Si el usuario ingresa para x un valor de 0. ¿Cuál es el resultado?",
    opciones: [
      "*** Ejecución Iniciada. ***\nEl valor de a es: 0\n*** Ejecución Finalizada. ***",
      "*** Ejecución Iniciada. ***\nValor no válido\n*** Ejecución Finalizada. ***",
      "*** Ejecución Iniciada. ***\nEl valor de a es: 1\n*** Ejecución Finalizada. ***",
      "Ninguna de las anteriores es la respuesta correcta"
    ],
    respuesta: 1
  },

  {
    materia: "Lógica de Programación",
    pregunta: "El siguiente programa muestra al usuario un mensaje en plataforma mediante la estructura de casos. Si el usuario asigna a val el valor de 4, ¿qué mensaje se mostrará en pantalla?<br><br><pre>Segun val Hacer\n  1:\n    Escribir \"Usted eligió la primera opción\"\n  2:\n    Escribir \"Usted eligió la segunda opción\"\n  3:\n    Escribir \"Usted eligió la tercera opción\"\n  De Otro Modo:\n    Escribir \"Usted no eligió ninguna opción básica\"\nFin Segun</pre>",
    opciones: [
      "Ninguna es la respuesta correcta",
      "*** Ejecución Iniciada. ***\nUsted eligió la tercera opción\n*** Ejecución Finalizada. ***",
      "*** Ejecución Iniciada. ***\nUsted eligió la primera opción\n*** Ejecución Finalizada. ***",
      "*** Ejecución Iniciada. ***\nUsted no eligió ninguna opción básica\n*** Ejecución Finalizada. ***"
    ],
    respuesta: 3
  },

  {
    materia: "Lógica de Programación",
    pregunta: "Este programa realiza operaciones matemáticas con la estructura de casos. Si la variable val toma el valor de 6, ¿cuál es el valor de a?<br><br><pre>Segun val Hacer\n  1:\n    a = 5 + 8\n  2:\n    a = 40 / 10\n  3:\n    a = 7 * 3\n  De Otro Modo:\n    a = 0\nFin Segun</pre>",
    opciones: [
      "a = 13",
      "a = 0",
      "a = 21",
      "a = 4"
    ],
    respuesta: 1
  },

  {
    materia: "Lógica de Programación",
    pregunta: "Si val = 3, ¿cuál es el valor de a?<br><br><pre>Segun val Hacer\n  1:\n    a = 87 mod 3\n  2:\n    a = 79 mod 3\n  3:\n    a = 78 mod 3\n  De Otro Modo:\n    a = 27 mod 3\nFin Segun\n\nFinProceso</pre>",
    opciones: [
      "a = 3",
      "a = 1",
      "a = 0",
      "a = 26"
    ],
    respuesta: 2
  },

  {
    materia: "Lógica de Programación",
    pregunta: "¿Hasta qué número cuenta este programa?<br><br><pre>Proceso contar\n  Definir var como Entero\n  var = 0\n  Mientras var <= 100 Hacer\n    Escribir var\n    var = var + 1\n  Fin Mientras\nFinProceso</pre>",
    opciones: [
      "100",
      "99",
      "101",
      "98"
    ],
    respuesta: 0
  },

// Bloque: Programación - Día 1


  {
    materia: "Programación",
    pregunta: "Java es valorado porque:",
    opciones: [
      "Utiliza una sintaxis en el idioma inglés misma que es utilizada a nivel mundial.",
      "Tiene un gran alcance de librerías en su JDK.",
      "Porque se puede migrar a Android Studio y crear aplicaciones móviles de gran alcance.",
      "Es multiplataforma."
    ],
    respuesta: 3
  },

  {
    materia: "Programación",
    pregunta: "JRE funciona como:",
    opciones: [
      "Programa complementario a Java dentro de Windows.",
      "Paquete de componentes utilitarios.",
      "Mediador entre Java y el Sistema Operativo",
      "Intermediario entre el código Bytecode y los distintos sistemas operativos."
    ],
    respuesta: 3
  },

  {
    materia: "Programación",
    pregunta: "Son ejemplos de Integrated Development Environment libres:",
    opciones: [
      "NetBeans, Visual Studio, Tomcat",
      "NetBeans, Eclipse y BlueJ",
      "Eclipse, JBuilder, JCreatorPro",
      "Netbeans, Eclipse, JBuilder"
    ],
    respuesta: 1
  },

  {
    materia: "Programación",
    pregunta: "Son tipos primitivos:",
    opciones: [
      "Suma, resta, multiplicación y división.",
      "Números enteros, números reales, caracteres y booleanos.",
      "Suma, resta y multiplicación.",
      "Números enteros, números reales, Strings y booleanos."
    ],
    respuesta: 1
  },

  {
    materia: "Programación",
    pregunta: "Una palabra reservada tiene:",
    opciones: [
      "Un bloqueo dentro del computador.",
      "Una restricción dentro del programa.",
      "Una prohibición en la ejecución.",
      "Un significado especial dentro de la sintaxis del lenguaje de programación"
    ],
    respuesta: 3
  },

  {
    materia: "Programación",
    pregunta: "De acuerdo al siguiente ejercicio, ¿Qué estructura se debería utilizar?\n\nElaborar un programa en Java que muestre el porcentaje de descuento aplicado a los comerciales de una empresa dependiendo de la categoría profesional:\n\nCategoría A: 2%\nCategoría B: 8%\nCategoría C: 12%\n\nSe debe ingresar la categoría y se debe mostrar el porcentaje que le corresponde.",
    opciones: [
      "For",
      "While",
      "Do While",
      "Switch"
    ],
    respuesta: 3
  },

  {
    materia: "Programación",
    pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio4 {\n  public static void main(String[] args) {\n    int edad\n    System.out.println(\"Ingrese su edad);\");\n    Scanner teclado = new Scanner(System.in);\n    edad = teclado.nextInt();\n    if(edad >= “18”){\n      System.out.println(\"es mayor de edad\");\n    }else{\n      System.out.println(\"es menor de edad\");\n    }\n  }\n}</pre>",
    opciones: ["1", "2", "3", "Ninguno"],
    respuesta: 2
  },

  {
    materia: "Programación",
    pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio6 {\n  public static void main(String[] args) {\n    String nombre;\n    int edad, promedioedad=0, cantidad=0;\n    Scanner teclado = new Scanner(System.in);\n    for(int i=1;i<=5;i=i+1){\n      System.out.println(\"Ingrese el nombre del niño \"+i);\n      nombre = teclado.nextString();\n      System.out.println(\"Ingrese la edad del niño \");\n      edad = teclado.nextInt();\n      if(edad >= 5){\n        promedioedad += edad;\n        cantidad++;\n      }\n    }\n    if(cantidad==0){\n      System.out.println(\"Ningun nino cumplio la condicion de edad\");\n    }else{\n      System.out.println(\"La edad promedio es: \"+(promedioedad/cantidad));\n    }\n  }\n}</pre>",
    opciones: ["1", "2", "3", "Ninguno"],
    respuesta: 1
  },

  {
    materia: "Programación",
    pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio7 {\n  public static void main(String[] args) {\n    int numero = 1;\n    Scanner teclado = new Scanner();\n    while(numero != 0){\n      System.out.println(\"Ingrese un número entero\");\n      numero = teclado.next();\n    }\n    System.println(\"Se ha ingresado el número cero\");\n  }\n}</pre>",
    opciones: ["1", "2", "3", "Ninguno"],
    respuesta: 2
  },

  {
    materia: "Programación",
    pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio8 {\n  public static void main(String args) {\n    int numero = 0;\n    Scanner teclado = new Scanner(System.in);\n    do{\n      System.out.println(\"Ingrese un número entero\");\n      numero = teclado.nextInt();\n    }while(numero != 0)\n    System.out.println(\"Se ha ingresado cero\");\n  }\n}</pre>",
    opciones: ["1", "2", "3", "Ninguno"],
    respuesta: 1
  },

  {
    materia: "Programación",
    pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>//Clase para objetos de dos dimensiones\nclass DosDimensiones{\n  double base;\n  double altura;\n\n  void mostrarDimension(){\n    System.out.println(\"La base y altura es: \" + base + \" y \" + altura);\n  }\n}\n\n//Una subclase de DosDimensiones para Triangulo\nclass Triangulo extends DosDimensiones{\n  String estilo;\n\n  double area(){\n    return base * altura / 2;\n  }\n\n  void mostrarEstilo(){\n    System.out.println(\"Triangulo es: \" + estilo);\n  }\n}</pre>",
    opciones: ["1", "2", "3", "Ninguno"],
    respuesta: 3
  },

  {
    materia: "Programación",
    pregunta: "¿Cuántos constructores puede visualizar en el siguiente código?<br><br><pre>public class VentaDto {\n  private String categoria;\n  private String producto;\n  private Integer precio;\n  private Integer cantidad;\n  private Integer importe;\n\n  public VentaDto() {}\n\n  public VentaDto(String categoria, String producto, Integer precio, Integer cantidad){\n    this.categoria = categoria;\n    this.producto = producto;\n    this.precio = precio;\n    this.cantidad = cantidad;\n  }\n\n  public VentaDto(String categoria, String producto, Integer precio, Integer cantidad, Integer importe) {\n    this.categoria = categoria;\n    this.producto = producto;\n    this.precio = precio;\n    this.cantidad = cantidad;\n    this.importe = importe;\n  }\n}</pre>",
    opciones: ["1", "2", "3", "Ninguno"],
    respuesta: 2
  },

  {
    materia: "Programación",
    pregunta: "¿Cuándo se crea un objeto de la siguiente manera se está utilizando?<br><br><pre>public class ResumenDto {\n  private String concepto;\n  private Integer cantidad;\n  private Integer importe;\n\n  public ResumenDto() {}\n\n  public ResumenDto(String concepto, Integer cantidad, Integer importe) {\n    this.concepto = concepto;\n    this.cantidad = cantidad;\n    this.importe = importe;\n  }\n\n  public String getConcepto() {\n    return concepto;\n  }\n\n  public void setConcepto(String concepto) {\n    this.concepto = concepto;\n  }\n\n  public Integer getCantidad() {\n    return cantidad;\n  }\n\n  public void setCantidad(Integer cantidad) {\n    this.cantidad = cantidad;\n  }\n\n  public Integer getImporte() {\n    return importe;\n  }\n}</pre>",
    opciones: [
      "Polimorfismo",
      "MVC",
      "Herencia",
      "Encapsulamiento"
    ],
    respuesta: 3
  },

  {
    materia: "Programación",
    pregunta: "¿Cuántos métodos con polimorfismo se tienen en el siguiente código?<br><br><pre>public class Futbolista extends SeleccionFutbol {\n  private int dorsal;\n  private String demarcacion;\n\n  @Override\n  public void entrenamiento() {\n    System.out.println(\"Realiza un entrenamiento (Clase Futbolista)\");\n  }\n\n  @Override\n  public void partidoFutbol() {\n    System.out.println(\"Juega un Partido (Clase Futbolista)\");\n  }\n\n  public void entrevista() {\n    System.out.println(\"Da una Entrevista\");\n  }\n}</pre>",
    opciones: ["1", "2", "3", "Ninguno"],
    respuesta: 1
  },


// Bloque: Estructuras de Datos - Día 1

  {
    materia: "Estructuras de Datos",
    pregunta: "Los árboles y grafos pertenecen a las estructuras:",
    opciones: [
      "Compuestas",
      "Complejas",
      "Espaciales",
      "No lineales"
    ],
    respuesta: 3
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Para conocer la ubicación de los elementos en una estructura enlazada, es importante considerar:",
    opciones: [
      "Memoria",
      "Índice",
      "Enlace",
      "Puntero"
    ],
    respuesta: 3
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "La notación O:",
    opciones: [
      "Expresa una aproximación de la relación entre el tamaño de un problema y la cantidad de un proceso necesario para hacerlo.",
      "Permite establecer el tamaño del algoritmo",
      "Conoce la velocidad de procesamiento de un algoritmo en relación a las características del procesador.",
      "Ninguna"
    ],
    respuesta: 0
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Sort hace referencia a:",
    opciones: [
      "Ordenación",
      "Búsqueda",
      "Ordenación y búsqueda",
      "Ordenación o clasificación"
    ],
    respuesta: 3
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "¿Qué técnicas fundamentales existe en la gestión de datos?",
    opciones: [
      "Ordenación binaria y hexadecimal",
      "Ordenación alfabética ascendente y descendente",
      "Ordenación de listas y ordenación de archivos",
      "Ordenación de datos y ordenación de ficheros"
    ],
    respuesta: 2
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Son algoritmos de ordenación:",
    opciones: [
      "Selección, modificación y espiral",
      "Selección, inserción y burbuja",
      "Selección, inserción y espiral",
      "Selección, espiral y burbuja"
    ],
    respuesta: 1
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Seleccione el algoritmo correspondiente:\n\nSe basa en la lectura sucesiva de la lista a ordenar, comparando el elemento inferior de la lista con los restantes y efectuando un intercambio de posiciones cuando el orden resultante de la comparación no sea el correcto.",
    opciones: [
      "Ordenación por intercambio",
      "Ordenación por selección",
      "Ordenación en espiral",
      "Ordenación en burbuja"
    ],
    respuesta: 0
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Shell también conocido como:",
    opciones: [
      "Ordenación por intercambio",
      "Ordenación por selección",
      "Ordenación en espiral",
      "Ninguna"
    ],
    respuesta: 3
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "El pivote es utilizado en:",
    opciones: [
      "Algoritmo Shell",
      "Algoritmo de intercambio",
      "Algoritmo Quicksort o partición",
      "Ninguna"
    ],
    respuesta: 2
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Cuando se puede introducir y eliminar elementos por un extremo se habla de:",
    opciones: [
      "Array",
      "Lista",
      "Pila",
      "Cola"
    ],
    respuesta: 2
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "El tamaño de memoria que ocupa un dato depende de:",
    opciones: [
      "Valor que almacene",
      "Tipo de lenguaje de programación",
      "Del tipo de dato",
      "Del tipo de dato junto al tipo de operación"
    ],
    respuesta: 3
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Los tipos de datos se dividen en familias de:",
    opciones: [
      "Datos",
      "Información",
      "Enteros y flotantes",
      "Propias y genéricas"
    ],
    respuesta: 2
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Escoja el enunciado que más se adapte al concepto de abstracción:",
    opciones: [
      "Modelo de programación",
      "Modelo de base de datos",
      "Modelo del sistema que incluye solamente las características esenciales.",
      "Modelo del sistema que incluye todas las características a detalle."
    ],
    respuesta: 2
  },

  {
    materia: "Estructuras de Datos",
    pregunta: "Se entiende por encapsulación a:",
    opciones: [
      "Una técnica de programación muy útil a la hora de crear software.",
      "Una camisa de fuerza que obliga al programador agrupar la información.",
      "Es la separación de la representación de datos de las aplicaciones que usan a estos datos a un nivel lógico.",
      "Restringir del acceso de los objetos."
    ],
    respuesta: 2
  },


// Bloque: Programación II

{
  materia: "Programación II",
  pregunta: "¿Por cuál protocolo se comunica el servidor y el navegador del cliente?",
  opciones: ["SMTP", "LDAP", "8080", "HTTP"],
  respuesta: 3
},
{
  materia: "Programación II",
  pregunta: "Una página HTML que contiene código Java corresponde a:",
  opciones: ["Programa", "index", "JSP", "Servlet"],
  respuesta: 2
},
{
  materia: "Programación II",
  pregunta: "En Java EE, es una clase hija de HttpServlet:",
  opciones: ["pom", "index", "JSP", "Servlet"],
  respuesta: 3
},
{
  materia: "Programación II",
  pregunta: "Son los módulos SW involucrados en la interfaz con el usuario, por ejemplo, las páginas de internet que se despliegan en la computadora del usuario:",
  opciones: ["Modelo", "Vista", "Controlador", "Ninguna"],
  respuesta: 1
},
{
  materia: "Programación II",
  pregunta: "Es el SW que procesa las peticiones del usuario. Decide qué módulo tendrá el control para que ejecute la siguiente tarea:",
  opciones: ["Modelo", "Vista", "Controlador", "Ninguna"],
  respuesta: 2
},
{
  materia: "Programación II",
  pregunta: "Contiene el núcleo de la funcionalidad, es decir, ejecuta la lógica del negocio:",
  opciones: ["Modelo", "Vista", "Controlador", "Ninguna"],
  respuesta: 0
},
{
  materia: "Programación II",
  pregunta: "La información que se envía en el método POST se encuentra dentro del objeto:",
  opciones: ["doPost", "Request", "HTTP", "form"],
  respuesta: 1
},
{
  materia: "Programación II",
  pregunta: "Para insertar código Java en una página JSP se utiliza:",
  opciones: ["<% Código en Java %>", "<# Código en Java #>", "< Código en Java >", "< Código en Java />"],
  respuesta: 0
},
{
  materia: "Programación II",
  pregunta: "¿En dónde se configura la dependencia de conexión a la base de datos MySQL?",
  opciones: ["Conexión.java", "Modelo.java", "Maven.xml", "Pom.xml"],
  respuesta: 3
},

{
  materia: "Programación II",
  pregunta: "Para establecer conexión a la base de datos utilizando DataSource, se requieren los siguientes parámetros:",
  opciones: [
    "setURL",
    "setUsername",
    "setPassword",
    "Todos"
  ],
  respuesta: 3
},
{
  materia: "Programación II",
  pregunta: "¿Qué variables se utilizan para gestionar el manejo de la información en un DAO?",
  opciones: [
    "SQL_SELECT, SQL_SELECT_BY_ID, SQL_INSERT",
    "SQL_SELECT, SQL_SELECT_BY_ID, SQL_DELETE, SQL_INSERT, SQL_UPDATE",
    "SQL_SELECT, SQL_SELECT_BY_ID, SQL_INSERT, SQL_CREATE",
    "SQL_SELECT, SQL_INSERT, SQL_UPDATE, SQL_DELETE"
  ],
  respuesta: 1
},
{
  materia: "Programación II",
  pregunta: "Cuando se establece conexión a base de datos ¿Qué parámetros se deben cerrar?",
  opciones: [
    "PreparedStatement, ResultSet, Connection",
    "Select, Insert, Update y Delete",
    "Conectos MySQL",
    "Connection"
  ],
  respuesta: 0
},

// Bloque: Programacion WEB


  {
    materia: "Programación Web",
    pregunta: "Cuando hablamos de web 2.0 nos referimos a aplicaciones web como:",
    opciones: [
      "Gmail, YouTube",
      "Google Drive, Wikipedia",
      "Netflix, Google Docs",
      "Páginas web estáticas y dinámicas"
    ],
    respuesta: 1
  },

  {
    materia: "Programación Web",
    pregunta: "Cuando trabajamos con JavaScript tenemos que tomar en cuenta 3 cosas esenciales:",
    opciones: [
      "Css, Tags, Etiquetas",
      "Etiquetas, eventos, vistas",
      "Componente, evento, acción",
      "Div, controlador, función"
    ],
    respuesta: 2
  },

  {
    materia: "Programación Web",
    pregunta: "¿Cuáles son las formas de usar styles dentro de CSS?",
    opciones: [
      "Estilos inline, estilos emebidos, estilos externos",
      "Markup, meta markup, estilos externos",
      "SMIL, SOAP, SGM, XML",
      "XML, Estilos Hytime, Estilos WNTL"
    ],
    respuesta: 0
  },

  {
    materia: "Programación Web",
    pregunta: "¿Cuál es la diferencia entre Get y Post?",
    opciones: [
      "Función reservada Post, Get con parámetros y sin parámetros",
      "Post operación por la que pasamos uno o más valores, Get captura datos ingresados",
      "Post lectura, Get escritura",
      "Get presenta datos que se envían como parte de la URL, Post la información no se ve porque se codifica en el proceso"
    ],
    respuesta: 3
  },

  {
    materia: "Programación Web",
    pregunta: "¿Cuáles son los niveles de alcance disponibles en PHP?",
    opciones: [
      "Privado, publico, protegido",
      "Publico, restringido, constract",
      "Constract, destruct, script",
      "Traits, unset(), unlink()"
    ],
    respuesta: 0
  },


{
  materia: "Programación Web",
  pregunta: "Cuáles son los componentes de un estilo básico en CSS:",
  opciones: [
    "Inline, emebidos, externos",
    "Selector, propiedad, valor",
    "Inline, emebidos, XHTML",
    "Archivos .css"
  ],
  respuesta: 1
},

{
  materia: "Programación Web",
  pregunta: "Cuál es el esquema de trabajo de Bootstrap dentro del diseño de una página web Responsive:",
  opciones: [
    "Grid de 12 columnas",
    "Grid de 15 columnas",
    "Grid de 3 columnas",
    "Grid de 24 columnas"
  ],
  respuesta: 0
},

{
  materia: "Programación Web",
  pregunta: "Cuál es la estructura por la cual debe estar enmarcada una página web estática:",
  opciones: [
    "Estilos, javascript, pie de página",
    "Estilos, animaciones, formularios",
    "Encabezado, cuerpo y pie",
    "Encabezado, pie de página, estilos"
  ],
  respuesta: 2
},

{
  materia: "Programación Web",
  pregunta: "Cuáles son las tecnologías que forman AJAX:",
  opciones: [
    "XHTML, CSS, DOM, XML",
    "PHP, MYSQL, DOM",
    "SQL, CSS, JAVSCRIPT",
    "JAVASCRIPT, PHP Y HTML"
  ],
  respuesta: 0
},

{
  materia: "Programación Web",
  pregunta: "Cuáles son los elementos que componen una estructura de código Jquery:",
  opciones: [
    "Selector, evento, selector, atributo",
    "Selector, animación, focus",
    "Focus, select, click",
    "Hover, change, keyup"
  ],
  respuesta: 0
},



// Bloque: Ingeniería de Software

{
  materia: "Ingeniería de Software",
  pregunta: "Cuando hablamos sobre el proceso del software mencionamos 5 etapas las cuales son:",
  opciones: [
    "Comunicación, planeación, modelo, construcción, despliegue",
    "Análisis, diseño, implementación, pruebas, mantenimiento",
    "UML, verificación, validación, concepción, usabilidad",
    "Sprint, reuniones, validación, correcciones, pruebas"
  ],
  respuesta: 0
},

{
  materia: "Ingeniería de Software",
  pregunta: "Cuando hablamos acerca del desarrollo de software debemos tomar en cuenta una etapa esencial en la cual se aplican instrumentos como (observación, entrevistas) esta etapa es:",
  opciones: [
    "Desarrollo o codificación",
    "Pruebas",
    "Diagramas UML",
    "Levantamiento de requerimientos"
  ],
  respuesta: 3
},

{
  materia: "Ingeniería de Software",
  pregunta: "¿Cuál es la desventaja de trabajar con el modelo en espiral?",
  opciones: [
    "Puede adaptarse y aplicarse a lo largo del ciclo de vida del software",
    "Permite tener bajo control el proyecto",
    "Mejora la productividad",
    "Genera mucho tiempo en el desarrollo del software"
  ],
  respuesta: 3
},
{
  materia: "Ingeniería de Software",
  pregunta: "¿Cuáles son las técnicas de validación de requerimientos?",
  opciones: [
    "Revisiones de requerimientos, construcción de prototipos",
    "Localizar errores, especificación, casos de uso",
    "Verificación informal, verificación formal",
    "Gestión de requerimientos, casos de uso, especificación de requerimientos"
  ],
  respuesta: 0
},

{
  materia: "Ingeniería de Software",
  pregunta: "Un requerimiento bien especificado tiene las siguientes características:",
  opciones: [
    "Único, corriente, consistente, comprensible, verificable",
    "Reutilizable, ambiguo, problemático",
    "Deseable, reutilizable, entendible",
    "Verificable, manejable, ambiguo, problemático"
  ],
  respuesta: 0
},

{
  materia: "Ingeniería de Software",
  pregunta: "¿Qué nos permite realizar el flujo de gestión de requerimientos?",
  opciones: [
    "Requerimientos funcionales y no funcionales",
    "Verificación, validación",
    "Calcular el costo, valor de efecto del cambio, surge con la identificación de un problema",
    "Presupuesto, costo de cambio, investigación, recolección de datos"
  ],
  respuesta: 2
},

{
  materia: "Ingeniería de Software",
  pregunta: "UML nos permite:",
  opciones: [
    "Visualizar, especificar, construir, documentar",
    "Controlar, seguir, modelar, clarificar",
    "Planear, controlar, construir, modelar",
    "Vistas, diagramas, controlar, verificar"
  ],
  respuesta: 0
},

{
  materia: "Ingeniería de Software",
  pregunta: "Cuando trabajamos con el diseño orientado a objetos tenemos un patrón de arquitectura denominado:",
  opciones: [
    "DFD",
    "MVC",
    "UML",
    "E-R"
  ],
  respuesta: 1
},

{
  materia: "Ingeniería de Software",
  pregunta: "La estructura de datos y las funciones dentro del diseño estructurado se representan por medio de diagramas:",
  opciones: [
    "UML, ERS, DFD",
    "Entidades, atributos, clases",
    "Procesos, casos de uso, almacén de datos",
    "Entidad relación, flujo de datos, transición de datos"
  ],
  respuesta: 0

},

// Bloque: Programación para Móviles

{
  materia: "Programación para Móviles",
  pregunta: "¿Cuál es la principal característica de las aplicaciones hibridas?",
  opciones: [
    "Integración con servicios basados en la web",
    "Aprovechan todas las capacidades de los dispositivos",
    "Aplicaciones disponibles desde la app store",
    "Actualizaciones constantes"
  ],
  respuesta: 0
},

{
  materia: "Programación para Móviles",
  pregunta: "¿Cuáles son las características que aprovecha Ionic dentro de los servicios de los dispositivos móviles?",
  opciones: [
    "Escalabilidad, usabilidad, soporte",
    "Menos código, tiempo, escalabilidad",
    "Conexión de red, implementa en App Store, Acceso a contactos, completo acceso a la Api del sistema operativo",
    "Inicio rápido, performance, comunidad, documentación"
  ],
  respuesta: 2
},

{
  materia: "Programación para Móviles",
  pregunta: "¿Cuáles son los componentes o elementos de interfaz que incluye la librería de Ionic?",
  opciones: [
    "HTML, CSS, JavaScript, Script",
    "Cabeceras, listados, botones, formularios, pie de pagina",
    "ApiRest, geolocalización, fichas, formularios",
    "Modelos, vistas, controladores"
  ],
  respuesta: 1
},

{
  materia: "Programación para Móviles",
  pregunta: "¿Para qué sirve el siguiente comando CLI ionic star <name> <template> [options]?",
  opciones: [
    "Crear un proyecto con el template inicial tabs",
    "Inicia un proyecto con una interfaz de navegación",
    "Inicia un proyecto con una app más compleja",
    "Permite crear un proyecto nuevo"
  ],
  respuesta: 3
},

{
  materia: "Programación para Móviles",
  pregunta: "¿TypeScript admite 4 principales principios de la programación orientada a objetos?",
  opciones: [
    "Encapsulamiento, herencia, abstracción, polimorfismo",
    "Clases, objetos encapsulamiento, abstracción",
    "Generalización, composición, asociación, abstracción",
    "Funciones, estructuras, polimorfismo, asociaciones"
  ],
  respuesta: 0
},

{
  materia: "Programación para Móviles",
  pregunta: "¿Dentro de qué carpeta se guardan todas las vistas generadas en Ionic y cuál es la extensión de los ficheros?",
  opciones: [
    "Home /.html",
    "www/.js",
    "templates/. html",
    "resources / .js"
  ],
  respuesta: 2
},

{
  materia: "Programación para Móviles",
  pregunta: "Cuando hablamos de llamadas http podemos invocar cualquier método que están definidos en el Http Client y estos son:",
  opciones: [
    "Get (), Post ()",
    "Get (), Post (), Put (), Delete ()",
    "Import, export, Get (), Post ()",
    "Constructor, @component"
  ],
  respuesta: 1
},

{
  materia: "Programación para Móviles",
  pregunta: "Las tarjetas (cards) se pueden personalizar de forma similar a:",
  opciones: [
    "Un formulario",
    "Un elemento Bootstrap",
    "Una tabla SQL",
    "Como si fuera una pantalla normal"
  ],
  respuesta: 1
},

{
  materia: "Programación para Móviles",
  pregunta: "Los servicios y directivas librería @angular/forms del módulo ReactiveFormsModule que viene en la:",
  opciones: [
    "Permiten programar formularios reactivos conducidos por el código",
    "Permiten el desarrollo de formularios",
    "Proporcionan la solución en Angular 8 pasa por desacoplar el modelo y la vista",
    "Ninguna de las anteriores"
  ],
  respuesta: 0
},

{
  materia: "Programación para Móviles",
  pregunta: "¿Cuál es la principal ventaja que ofrecen las apps nativas con respecto a las apps hibridas?",
  opciones: [
    "No necesitan conexión a internet para que funcionen",
    "Se ejecutan dentro del propio navegador web",
    "Es posible agrupar los códigos y distribuirla en app store",
    "Cuenta la conectividad a internet y el sistema operativo del mismo"
  ],
  respuesta: 3
},
// Bloque: Base de Datos I

{
  materia: "Base de Datos I",
  pregunta: "El conjunto de componentes o herramientas conceptuales que un SGBD proporciona para modelar recibe el nombre de:",
  opciones: [
    "Modelo de BD",
    "Modelo Entidad-Relación"
  ],
  respuesta: 0
},

{
  materia: "Base de Datos I",
  pregunta: "Son colecciones de datos unidos por un fin común y es una de las partes más importantes en una base de datos hablamos de:",
  opciones: [
    "Índices",
    "Datos",
    "Filas y columnas",
    "Tablas"
  ],
  respuesta: 3
},

{
  materia: "Base de Datos I",
  pregunta: "De qué forma normal hablamos si y solo si cada uno de los campos contiene un único valor para un registro determinado.",
  opciones: [
    "2Forma Normal",
    "4Forma Normal",
    "1Forma Normal",
    "3Forma Normal"
  ],
  respuesta: 2
},

{
  materia: "Base de Datos I",
  pregunta: "Cuando ejecutamos un grupo de una o varias instrucciones SQL y las mismas se almacenan en el servidor nos referimos a:",
  opciones: [
    "Procedimiento almacenado (Stored Procedure)",
    "Triggers",
    "Subconsultas",
    "Funciones"
  ],
  respuesta: 0
},

{
  materia: "Base de Datos I",
  pregunta: "Cuáles son los niveles de abstracción que se utilizan para simplificar la interacción de los usuarios con el sistema:",
  opciones: [
    "Nivel físico, nivel lógico, nivel conceptual",
    "Nivel lógico, relaciones entre datos, índices",
    "Tablas, atributos, índices",
    "Archivos de datos, índices, diccionario de datos"
  ],
  respuesta: 0
},

{
  materia: "Base de Datos I",
  pregunta: "Definir la relación que existe entre computador con los atributos marca, modelo, color, tamaño y número de placa base, y laboratorio con los atributos capacidad, # de laboratorio y responsable.",
  opciones: [
    "Relación (uno a uno)",
    "Relación (uno a varios)",
    "Relación (varios a varios)",
    "Ninguna de las anteriores"
  ],
  respuesta: 1
},

{
  materia: "Base de Datos I",
  pregunta: "Establecer el tipo de relación/cardinalidad del siguiente enunciado: Dado un proveedor queremos conocer su nombre, dirección, ciudad, provincia, así como las piezas que suministra conociéndose color, categoría, precio y cantidad.",
  opciones: [
    "Uno a varios",
    "Varios a varios",
    "Uno a uno",
    "Ninguna de las anteriores"
  ],
  respuesta: 1
},

{
  materia: "Base de Datos I",
  pregunta: "Dado el siguiente enunciado establezcan la relación existente entre las entidades que intervienen: De cada producto informático se desea guardar el código, descripción, precio y número de existencias; de cada cliente se desea guardar un código, nombre, apellido, dirección y número de teléfono; un cliente puede comprar varios productos en la tienda y un mismo producto puede ser comprado por varios clientes.",
  opciones: [
    "Uno a uno",
    "Varios a varios",
    "Uno a varios"
  ],
  respuesta: 1
},
// Bloque: Base de Datos II

{
  materia: "Base de Datos II",
  pregunta: "¿Cuáles son los tipos de autenticación de SQL Server?",
  opciones: [
    "Autenticación de Windows, Autenticación SQL Server, Autenticación Azure",
    "Autenticación de Windows, Autenticación remota, Autenticación local",
    "Remota, Local",
    "Remota, Local, Distribuida"
  ],
  respuesta: 0
},

{
  materia: "Base de Datos II",
  pregunta: "¿Cuáles son los operadores que podemos utilizar dentro de las subconsultas?",
  opciones: [
    "<, >, =, <>, =>, >=",
    "Insert, Select, Update, Delete",
    "Any, All, Exists, In",
    "Image, ntext, text"
  ],
  respuesta: 2
},

{
  materia: "Base de Datos II",
  pregunta: "La principal característica de los procedimientos locales es:",
  opciones: [
    "Se almacenan en tempbd",
    "Son solo visibles en la conexión actual del Usuario",
    "Son visibles para cualquier usuario",
    "Son definidos por el usuario"
  ],
  respuesta: 1
},

{
  materia: "Base de Datos II",
  pregunta: "Las principales operaciones de mantenimiento que se realizan dentro de los triggers son:",
  opciones: [
    "DDL, DML",
    "Select, Alter, Drop",
    "In, On Exists, All",
    "Insert, Delete, Update"
  ],
  respuesta: 3
},

{
  materia: "Base de Datos II",
  pregunta: "Cuando aplicamos un full join obtenemos como resultado:",
  opciones: [
    "Devuelve todas las filas de la tabla izquierda y derecha"
  ],
  respuesta: 0
},

{
  materia: "Base de Datos II",
  pregunta: "¿Qué es un servidor remoto?",
  opciones: [
    "Omiten la infraestructura para centrarse en la implementación",
    "Acceso desde cualquier dispositivo con conexión a internet",
    "Destinados a la gestión de bases de datos en SQL Server",
    "Funcionalidad destinada a la creación y ejecución de aplicaciones"
  ],
  respuesta: 1
},

{
  materia: "Base de Datos II",
  pregunta: "¿Qué es una base de datos distribuida?",
  opciones: [
    "Datos recíprocos que incrementan la disponibilidad",
    "Bases de datos repartidas de manera lógica",
    "Independencia de datos con accesos eficientes",
    "Consta de una autonomía total y replicación"
  ],
  respuesta: 1
},

{
  materia: "Base de Datos II",
  pregunta: "Cuáles son los tipos de JOINS que se manejan dentro de SQL Server:",
  opciones: [
    "Full Join, Cross Join, Inner Join, Left Join",
    "Combinación interna, combinación cruzada, combinación externa",
    "Consultas externas e internas",
    "Manejo del lenguaje DDL Y DML"
  ],
  respuesta: 0
},

{
  materia: "Base de Datos II",
  pregunta: "Cuál es el número máximo de Triggers que puede tener una tabla:",
  opciones: [
    "Dos Triggers",
    "Tres Triggers",
    "Un trigger",
    "Trabaja en subniveles"
  ],
  respuesta: 0
},

{
  materia: "Base de Datos II",
  pregunta: "Qué tipos de funciones se manejan dentro de SQL server:",
  opciones: [
    "Funciones definidas por el usuario, funciones escalares, funciones integradas",
    "Funciones escalares y regulares",
    "Funciones escalares, tables",
    "Funciones integradas, funciones regulares, funciones temporales"
  ],
  respuesta: 0
}, 

// Bloque: Proceso de Negocios

{
  materia: "Proceso de Negocios",
  pregunta: "De las siguientes razones, ¿Cuál pertenece a las principales fallas para la implementación del BPM?",
  opciones: [
    "Resistencia por los Usuarios Finales y las partes interesadas.",
    "Falta de experiencia en la implementación de procesos BPM.",
    "Falta de recursos de infraestructura tecnológica para la implementación del BPM.",
    "Perdida de liderazgo del equipo de TI."
  ],
  respuesta: 0
},

{
  materia: "Proceso de Negocios",
  pregunta: "¿Cuál de las siguientes opciones no pertenece a los pasos del enfoque simple de un proyecto con BPM?",
  opciones: [
    "Definir el problema",
    "Analizar",
    "Observar",
    "Diseñar el modelo"
  ],
  respuesta: 3
},

{
  materia: "Proceso de Negocios",
  pregunta: "¿Por qué es crítico observar a los usuarios para el éxito del proyecto?",
  opciones: [
    "Porque es la forma de obtener una mayor comprensión del proceso y donde se puede comenzar a determinar donde los usuarios se están desviando de los retos del proceso.",
    "Porque se quiere asegurar que los usuarios son parte de los mapas de dirección a los objetivos, para evitar desviarse por los cambios que se realizan.",
    "Porque los usuarios y su retroalimentación nos van a permitir comenzar con la etapa de definición del problema de nuestro proceso del BPM",
    "Porque nos va a permitir saber que tecnologías necesitamos implementar en nuestro proceso de BPM."
  ],
  respuesta: 0
},

{
  materia: "Proceso de Negocios",
  pregunta: "¿Cuál de las siguientes opciones no pertenece a los 7 pasos para el éxito de las BPMs?",
  opciones: [
    "Diseñar y mejorar",
    "Simular y optimizar",
    "Investigar y desarrollar",
    "Analizar y ordenar"
  ],
  respuesta: 2
},

{
  materia: "Proceso de Negocios",
  pregunta: "La definición “A menudo existe una visibilidad insuficiente para los propietarios del negocio en los procesos ejecutables, haciendo difícil alinear los cambios culturales y de organización. Pertenece al reto de:",
  opciones: [
    "Errores en la traducción y sincronización del modelo",
    "Falta de Transparencia",
    "Error de uso de recursos",
    "Falta de comunicación entre negocio y TI"
  ],
  respuesta: 1
},

{
  materia: "Proceso de Negocios",
  pregunta: "Fenómeno que ofrece oportunidades en términos de empleo, crecimiento y competitividad, pero debemos fijarnos en las turbulencias que pueden ocurrir antes los acontecimientos que ocurran en cualquier lugar del mundo porque pueden afectar directa o indirectamente a cada negocio.",
  opciones: [
    "Crecimiento exponencial de la empresa",
    "Globalización de los mercados",
    "Monopolio del mercado",
    "Economía digital"
  ],
  respuesta: 1
},

{
  materia: "Proceso de Negocios",
  pregunta: "El objetivo de esta fase es obtener el Modelo de Funcionamiento de los procesos, transformándolos desde la visión lógica a la visión física.",
  opciones: [
    "Modelización lógica",
    "Diseño preliminar",
    "Diseño BPM",
    "Diseño de TI"
  ],
  respuesta: 1
},

{
  materia: "Proceso de Negocios",
  pregunta: "Piense que usted quiere acelerar un 50% la primera etapa de los proyectos BPM para su negocio. ¿Qué metodología decide implementar?",
  opciones: [
    "Metodología en de Gestión Industrial",
    "Metodología para la Gestión por Procesos",
    "Metodología para la Gestión del Cambio",
    "Metodología BPM:RAD"
  ],
  respuesta: 3
},

{
  materia: "Proceso de Negocios",
  pregunta: "Su sistema de producción tiene muchas fallas y afecta de manera directa a su proceso de negocio. Decide implementar Sesiones RAD en su empresa, ¿Qué beneficio esperaría obtener?",
  opciones: [
    "Identificar a los trabajadores problemáticos",
    "Fomentar el trabajo en equipo",
    "Mejorar las tecnologías de producción",
    "Mejorar las ventas"
  ],
  respuesta: 1
},

{
  materia: "Proceso de Negocios",
  pregunta: "Necesita contratar una persona para su empresa, que le permita conocer y entender los procesos, datos, reglas de negocio, requerimientos, problemas y oportunidades de mejora, además de las metas y objetivos del negocio. ¿Qué perfil busca?",
  opciones: [
    "Analista Modelizador",
    "Expertos de negocio",
    "Analistas de Procesos",
    "Analista de resultados"
  ],
  respuesta: 2
},


{
  materia: "Proceso de Negocios",
  pregunta: "Usted quiere mejorar la calidad y hacer crecer su negocio. ¿En qué activo de su empresa se enfocaría en primer lugar?",
  opciones: [
    "Mejora de los procesos de negocio",
    "Incrementar el uso de la información / analíticas",
    "Mejorar la eficiencia de los trabajadores",
    "Crear nuevas capacidades"
  ],
  respuesta: 0
},

{
  materia: "Proceso de Negocios",
  pregunta: "¿Qué es una actividad de tipo loop en un proceso BPMN?",
  opciones: [
    "Es una actividad que se va a repetir tantas veces hasta que se cumpla o no se cumpla la condición especificada.",
    "Es una actividad que se ejecuta en forma simultánea, tantas veces como instancias existan.",
    "Es una actividad ejecutada por una persona, cuyo control no lo lleva un sistema de workflow o Process Engine",
    "Es una actividad que sólo funciona bajo el principio «todo o nada», es decir o todos los pasos están correctos o no se debe hacer nada"
  ],
  respuesta: 0
},

{
  materia: "Proceso de Negocios",
  pregunta: "Del marco estructural de las BPMN, ¿Qué podemos encontrar en el nivel 3?",
  opciones: [
    "Modelo descriptivo",
    "Modelo operativo",
    "Modelo técnico y especificaciones para el desarrollo",
    "Implementación"
  ],
  respuesta: 2
},

{
  materia: "Proceso de Negocios",
  pregunta: "Describe la secuencia temporal y lógica en el cual se combinan los elementos de flujo, es decir las actividades, eventos y Gateways. Es también la trayectoria del proceso por el cual marcha el token.",
  opciones: [
    "Actividad",
    "Evento de inicio de proceso",
    "Flujo de secuencia",
    "Decisión"
  ],
  respuesta: 2
},

// Bloque: Redes de Computadoras

{
  materia: "Redes de Computadoras",
  pregunta: "Un router corresponde a.........",
  opciones: [
    "Un medio de transmisión",
    "Un dispositivo de encaminamiento",
    "Un cliente",
    "Un servidor"
  ],
  respuesta: 1
},

{
  materia: "Redes de Computadoras",
  pregunta: "Una topología de red es:",
  opciones: [
    "Las conexiones físicas de los dispositivos de red",
    "La forma en la que se comunican los dispositivos de red",
    "Puntos de conexión de los nodos de una red",
    "Forma de una red, y cómo están cableados todos los nodos (puntos) de una red."
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras",
  pregunta: "Es la topología más económica debido a que utiliza mucho menos cable que las otras topologías y, por tanto, emplean menos material y necesitan menos mano de obra para su instalación.",
  opciones: [
    "Topología en bus",
    "Topología en anillo",
    "Topología en estrella",
    "Topología árbol"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras",
  pregunta: "Se quiere instalar un cable que permita transmitir 100Mbps en una red. ¿De las siguientes opciones cuál elegiría usted?",
  opciones: [
    "1000Base-T",
    "10Base-2",
    "100Base-TX",
    "10Base-T"
  ],
  respuesta: 2
},

{
  materia: "Redes de Computadoras",
  pregunta: "Se necesita implementar una red inalámbrica interna, entre dos dispositivos que se encuentran separados 65 metros entre sí, se debe tener una tasa de transferencia de 20Mbps y una frecuencia de 2Ghz. ¿Qué protocolo de comunicación debería utilizar?",
  opciones: [
    "802.11a",
    "802.11b",
    "802.11g",
    "802.11n"
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras",
  pregunta: "Una de las razones para utilizar un estándar en redes es:",
  opciones: [
    "Los productos de diferentes fabricantes que cumplen los estándares son totalmente compatibles y, por tanto, pueden comunicarse entre ellos sin necesidad de utilizar adaptadores.",
    "Que las empresas no puedan crear e investigar sobre nuevos estándares.",
    "Que solo las empresas que realizan estos estándares puedan fabricar productos de redes.",
    "Para poder conectar los computadores dentro de una red."
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras",
  pregunta: "De los siguientes términos, ¿Cuál se relaciona a la capa física?",
  opciones: [
    "Bit",
    "Paquete",
    "Trama",
    "Empaquetado"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras",
  pregunta: "Si necesito hacer una conexión de 15Km sin repetidores de señal, ¿Qué tipo de cable debería utilizar?",
  opciones: [
    "Cable coaxial",
    "Fibra óptica",
    "Par trenzado",
    "Cable UTP"
  ],
  respuesta: 1
},
// Bloque: Redes de Computadoras

{
  materia: "Redes de Computadoras",
  pregunta: "Esta capa controla las operaciones de la subred. Un aspecto clave del diseño es determinar cómo se enrutan los paquetes desde su origen a su destino.",
  opciones: [
    "Capa física",
    "Capa de transporte",
    "Capa de aplicación",
    "Capa de red"
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras",
  pregunta: "Si necesito conectar dos computadores entre sí, ¿Qué tipo de cable debo utilizar?",
  opciones: [
    "Directo o punto a punto",
    "Cruzado",
    "Cable coaxial",
    "Ninguno de los anteriores"
  ],
  respuesta: 1
},

{
  materia: "Redes de Computadoras",
  pregunta: "¿Cuál de las siguientes es una función de la capa de enlace de datos?",
  opciones: [
    "Es la encargada de dividir el flujo de bits en tramas separadas y calcular la suma de verificación de cada trama.",
    "Se encarga de aceptar un flujo de bits puros e intentar entregarlo al destino",
    "Cuando llega una trama a un enrutador, el hardware la examina para verificar si está libre de errores.",
    "Durante la inicialización, la capa de enlace de datos asigna a cada módem una minirranura a fin de utilizarla para solicitar el ancho de banda ascendente."
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras",
  pregunta: "¿Cuál de los siguientes protocolos no pertenece a la capa de transporte?",
  opciones: [
    "TCP",
    "ARP",
    "UDP",
    "RTP"
  ],
  respuesta: 1
},

{
  materia: "Redes de Computadoras",
  pregunta: "Se debe levantar el servicio de control de dialogo entre dispositivos, ¿en qué capa del modelo OSI se debe implementar?",
  opciones: [
    "Capa de sesión",
    "Capa física",
    "Capa de transmisión",
    "Capa de aplicación"
  ],
  respuesta: 0
},


// Bloque: Redes de Computadoras II

{
  materia: "Redes de Computadoras II",
  pregunta: "Mencione cuál de las siguientes no pertenece a formas de comercio electrónico",
  opciones: [
    "Negocio a consumidor",
    "Gobierno a consumidor",
    "Igual a Igual",
    "Consumidor a igual"
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras II",
  pregunta: "A la conexión de dos o más redes se le conoce como, señale la opción correcta:",
  opciones: [
    "Interred",
    "Difusión",
    "Punto a punto",
    "Multidifusión"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "¿Cuál de las siguientes corresponde a la definición de LAN?",
  opciones: [
    "Permiten a los dispositivos comunicarse dentro del rango de una persona.",
    "Son redes de propiedad privada que operan dentro de un solo edificio, como una casa, oficina o fábrica.",
    "Cubre toda una ciudad",
    "Abarca una extensa área geográfica, por lo general un país o continente."
  ],
  respuesta: 1
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Al servicio sin conexión no confiable (que significa sin confirmación de recepción) se le denomina:",
  opciones: [
    "Datagramas",
    "Spammers",
    "Voz sobre IP",
    "Conmutación de almacenamiento y envío"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Es un conjunto de reglas que rigen el formato y el significado de los paquetes o mensajes que intercambian las entidades iguales en una capa.",
  opciones: [
    "Servicio",
    "Implementación",
    "Protocolo",
    "Negocio"
  ],
  respuesta: 2
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Transformar un medio de transmisión puro en una línea que esté libre de errores de transmisión corresponde a:",
  opciones: [
    "Capa de enlace de datos",
    "Capa de red",
    "Capa de transporte",
    "Capa de sesión"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "La idea detrás del enrutamiento por estado del enlace es bastante simple y se puede enunciar en partes. Cada enrutador debe realizar lo siguiente para hacerlo funcionar, señale cuál no pertenece:",
  opciones: [
    "Descubrir a sus vecinos y conocer sus direcciones de red.",
    "Establecer la métrica de distancia o de costo para cada uno de sus vecinos",
    "Construir un paquete que indique todo lo que acaba de aprender",
    "Detectar fallas eléctricas que se presentan en el enrutador"
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Señale la respuesta incorrecta. La conmutación de circuitos requiere pasar por tres fases para cada comunicación:",
  opciones: [
    "Establecimiento de llamadas",
    "Comunicación",
    "Liberación de recursos",
    "Interfaz"
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Señale la respuesta correcta: es un acrónimo de modulator-demodulator, que se refiere a su función: modular (generar señales audibles según los valores de los bits) y demodular (generar bits a partir de las señales que recibe de la red telefónica).",
  opciones: [
    "Módem",
    "Modulador",
    "Redes de datos",
    "Conmutación de paquetes"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "¿Cuál de las siguientes no pertenece a la topología de LAN?",
  opciones: [
    "Topología en estrella.",
    "Topología en bus.",
    "Topología en anillo.",
    "Topología en planetas"
  ],
  respuesta: 3
},
// Bloque: Redes de Computadoras II

{
  materia: "Redes de Computadoras II",
  pregunta: "¿Cuál de estos no pertenece a los tres modos de trabajo del repetidor?",
  opciones: [
    "Modo escucha",
    "Modo de transmisión",
    "Modo cortocircuito",
    "Modo habla"
  ],
  respuesta: 2
},

{
  materia: "Redes de Computadoras II",
  pregunta: "En general, los protocolos de acceso al medio se pueden clasificar en grandes grupos, ¿cuál de los siguientes no pertenece?",
  opciones: [
    "Control de acceso al medio estático",
    "Control de acceso al medio dinámico (centralizado o distribuido)",
    "Control de acceso al medio aleatorio",
    "Control de acceso al medio no aleatorizado"
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras II",
  pregunta: "De hecho, podríamos considerar que el modelo de la red Internet consta sólo de cuatro partes o niveles, señale la respuesta incorrecta:",
  opciones: [
    "Por debajo del IP",
    "El IP",
    "El TCP",
    "Por encima del IP"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Realiza el control de errores en la cabecera, es responsabilidad de los usuarios del IP (TCP, UDP, etc.) el control de los posibles errores en su contenido:",
  opciones: [
    "Checksum",
    "Dirección",
    "Origen",
    "Fragmentación"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "La manera de conocer las principales características de la trama Ethernet es ver los diferentes campos que la forman. Indique la incorrecta:",
  opciones: [
    "Preámbulo",
    "Dirección de origen",
    "Tipo",
    "Puerto"
  ],
  respuesta: 3
},

{
  materia: "Redes de Computadoras II",
  pregunta: "¿Qué significa HTML?",
  opciones: [
    "Lenguaje de Marcado de Hipertexto",
    "Lenguaje de Menú de Hipertexto",
    "Lenguaje de Manual de Hipófisis",
    "Lenguaje de Mercado de Hipnosis"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "En las páginas web las etiquetas <b> e <i> se usan para entrar en modo:",
  opciones: [
    "Negritas",
    "Cursiva",
    "Subrayado",
    "Tamaño 12"
  ],
  respuesta: 0 // o también correcto B según aclaraste
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Al nacer las redes inalámbricas existían muchos problemas ya que cada una manejaba sus propios estándares. ¿Cuál es el estándar utilizado por la IEEE para las redes inalámbricas?",
  opciones: [
    "802.11",
    "808.01",
    "903.5",
    "969.9"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "El propósito de la capa física es:",
  opciones: [
    "Transportar un flujo de datos puro de una máquina a otra",
    "La comunicación fiable a través de circuitos y cortocircuitos",
    "Proporcionar los mecanismos para controlar el diálogo entre las aplicaciones",
    "La que se encarga de la representación de la información"
  ],
  respuesta: 0
},

{
  materia: "Redes de Computadoras II",
  pregunta: "Los cables de fibra óptica están hechos de:",
  opciones: [
    "Arena",
    "Cobre",
    "Plástico",
    "Policarbonato"
  ],
  respuesta: 2
},


  // Bloque: Sistemas Operativos
  {
    materia: "Sistemas Operativos",
    pregunta: "¿Qué es un sistema operativo?",
    opciones: [
      "Es el software encargado de resolver problemas para los usuarios.",
      "Es un grupo de programas de proceso con las rutinas de control necesarias para mantener continuamente operativos dichos programas.",
      "Son compiladores, editores, intérpretes de comandos.",
      "Es un software que permite la gestión de la BIOS"
    ],
    respuesta: 1
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Dan servicio a varios usuarios a la vez a través de una red y les permiten compartir los recursos de hardware y de software.",
    opciones: [
      "Sistemas operativos de servidores.",
      "Sistemas operativos de cliente.",
      "Sistemas operativos de multiprocesadores.",
      "Sistemas operativos de computadoras personales."
    ],
    respuesta: 0
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Hay cuatro eventos principales que provocan la creación de procesos. ¿Cuál de los siguientes no es uno de ellos?",
    opciones: [
      "El arranque del sistema.",
      "Una petición de usuario para crear un proceso.",
      "El inicio de un trabajo por lotes.",
      "La ejecución de una interrupción."
    ],
    respuesta: 3
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "De las siguientes opciones, ¿Cuál es una salida voluntaria de un proceso?",
    opciones: [
      "Error fatal",
      "Eliminado por otro proceso",
      "Salida por error",
      "Error del sistema central"
    ],
    respuesta: 2
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Proceso que consiste en primero escribir el bloque en la unidad, y después volver a leerlo para verificar que se haya escrito correctamente",
    opciones: [
      "Escrituras estables",
      "Lecturas estables",
      "Recuperación de fallas",
      "Escritura y lectura estable"
    ],
    respuesta: 0
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Cuando el usuario interactúa con la Interfaz gráfica del sistema operativo, estamos hablando de:",
    opciones: [
      "El Shell",
      "El GUI",
      "El DOS",
      "El CMD"
    ],
    respuesta: 1
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Las llamadas a las funciones Win32 se conocen en forma colectiva como:",
    opciones: [
      "NT Win32",
      "AP Win32",
      "WOW 32",
      "API Win32"
    ],
    respuesta: 3
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Está trabajando en un sistema operativo LINUX, y oprimió una tecla para el vaciado de núcleo. ¿Qué señal del control de proceso se envía?",
    opciones: [
      "SIGKILL",
      "SIGQUIT",
      "SIGTERM",
      "SIGUSR2"
    ],
    respuesta: 1
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Necesita probar un sistema operativo diferente al que tiene en su computador de trabajo, necesita acceder a todos los recursos del computador y que funcione de manera rápida y fluida, además de instalar algunos recursos para gestionar el uso de software. ¿Cuál es la mejor opción?",
    opciones: [
      "Desinstalar su sistema operativo actual y colocar el nuevo.",
      "Instalar una máquina virtual y revisar el funcionamiento del sistema operativo.",
      "Realizar una partición del disco duro e instalar el nuevo sistema operativo en dicho espacio de memoria.",
      "Ninguna de las opciones es adecuada"
    ],
    respuesta: 2
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "En un computador con un sistema operativo Windows, deja de funcionar uno de los puertos USB. ¿Qué decide hacer para arreglarlo?",
    opciones: [
      "Desarmar el computador para revisar si el puerto esta dañado",
      "Ir al administrador de dispositivos, revisar el estado del terminal y actualizar los drivers de ser necesario",
      "Ejecutar el antivirus por si hubo un ataque mediante una memoria USB.",
      "Conectar otra memoria USB de menor tamaño"
    ],
    respuesta: 1
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "Un cliente que tiene un computador con un procesador de 1.5 GHz de 64 bits, una memoria RAM de 1 GB, y un disco duro de 128 GB. ¿Qué sistema operativo le recomienda?",
    opciones: [
      "Windows 10",
      "Ubuntu 20.04",
      "Ubuntu 10.04",
      "Windows 8"
    ],
    respuesta: 2
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "¿Cuáles son los dos objetivos principales del diseño de E/S para los sistemas operativos?",
    opciones: [
      "Eficiencia y eficacia",
      "Eficiencia y generalidad",
      "Tiempos de respuesta y generalidad",
      "Compatibilidad y tiempo de respuesta"
    ],
    respuesta: 1
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "¿Cuál de los siguientes eventos principales no pertenece a la creación de procesos?",
    opciones: [
      "El arranque del sistema.",
      "Creación de un encabezado para tareas.",
      "El inicio de un trabajo por lotes.",
      "Una petición de usuario para crear un proceso."
    ],
    respuesta: 1
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "¿A qué sistemas de algoritmos de planificación pertenecen las siguientes metas? Rendimiento - Maximizar el número de trabajos por hora Tiempo de retorno - Minimizar el tiempo entre la entrega y la terminación Utilización de la CPU - Mantener ocupada la CPU todo el tiempo",
    opciones: [
      "Sistemas de procesamiento por lotes",
      "Todos los sistemas",
      "Sistemas interactivos",
      "Sistemas de tiempo real"
    ],
    respuesta: 0
  },
  {
    materia: "Sistemas Operativos",
    pregunta: "¿Cuál de los siguientes no es un atributo de un archivo?",
    opciones: [
      "Longitud de registro",
      "Propietario",
      "Contraseña",
      "Longitud de bandera"
    ],
    respuesta: 3
  },

  // Bloque: Arquitectura de Computadoras

{
  materia: "Arquitectura de Computadoras",
  pregunta: "¿Cuál de los siguientes elementos no pertenece a la arquitectura básica de una computadora?",
  opciones: ["CPU", "RAM", "Tarjeta de video", "Entradas y salidas"],
  respuesta: 2
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "El BIOS, el SETUP y el POST se encuentran en la memoria:",
  opciones: ["ROM", "RAM", "DDR4", "DDR3"],
  respuesta: 0
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Es un puerto de propósito dual del computador en las terminales 10-17",
  opciones: ["Puerto1", "Puerto 0", "Puerto 3", "Puerto 4"],
  respuesta: 2
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Es el cerebro del computador y se encarga de realizar todas las operaciones aritméticas y lógicas del sistema",
  opciones: ["Memoria RAM", "Chip Set", "La tarjeta madre", "Unidad Central de procesamiento CPU"],
  respuesta: 3
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "¿Qué funciones cumple la fuente de poder del computador?",
  opciones: [
    "Transformación, enfriamiento, filtrado y estabilización.",
    "Transformación, rectificación, filtrado y protección.",
    "Transformación, protección, filtrado y estabilización.",
    "Transformación, rectificación, filtrado y estabilización."
  ],
  respuesta: 3
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "¿Cuáles son las dos características principales de los computadores?",
  opciones: [
    "La capacidad de ser programada para efectuar operaciones sobre ciertos datos sin ninguna intervención humana.  La capacidad de almacenar y recuperar datos.",
    "La capacidad de interactuar con los seres humanos. La capacidad de operar sistemas binarios.",
    "La capacidad de procesar datos. La capacidad de crear respuestas.",
    "Ninguno"
  ],
  respuesta: 0
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Es el bus que transfiere información entre la CPU y la memoria, o entre la CPU y los dispositivos de entrada/salida.",
  opciones: ["Bus de procesos", "Bus de control", "Bus de direcciones", "Bus de datos"],
  respuesta: 3
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "La tasa de transferencia de las memorias DDR4 se encuentra entre:",
  opciones: ["3133- 5266 MT/s", "2133- 4266 MT/s", "1133- 2266 MT/s", "1133- 3266 MT/s"],
  respuesta: 1
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Es el mantenimiento que describe las actividades de limpieza de partes, conexión de periféricos e inventario que se recomienda se realice periódicamente a los equipos de cómputo.",
  opciones: [
    "Mantenimiento correctivo de Software",
    "Mantenimiento predictivo de Hardware",
    "Mantenimiento preventivo de Software",
    "Mantenimiento preventivo de Hardware"
  ],
  respuesta: 3
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "¿Cuál es la latencia promedio en ns de una memoria RAM de 3200MT/s y de grado. CL12?",
  opciones: ["7.2 ns", "7.5 ns", "6.88 ns", "7.14 ns"],
  respuesta: 1
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Se necesita acceder de la manera más rápida a los registros de memoria del procesador mediante el uso de código. ¿Qué lenguaje de programación seleccionaría?",
  opciones: ["Lenguaje C", "Lenguaje Java", "Lenguaje Ensamblador", "Lenguaje Python"],
  respuesta: 2
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Se está realizando un programa en ensamblador. Se necesita mover un dato a un espacio de memoria mediante una instrucción, ¿Qué código usaría?",
  opciones: ["MOV #dato, dirección", "MOV #dirección, #dato", "MOV @dirección, #dato", "MOV dirección, #dato"],
  respuesta: 3
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Un programa del computador evita que este funcione de una manera adecuada, debo eliminar este software. ¿Qué tipo de mantenimiento debo darle al computador?",
  opciones: [
    "Mantenimiento correctivo de Software",
    "Mantenimiento predictivo de Hardware",
    "Mantenimiento preventivo de Software",
    "Mantenimiento preventivo de Hardware"
  ],
  respuesta: 0
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Un cliente solicita asesoría para la adquisición de equipo de cómputo, la tarea principal que debe realizar es modelado 3D, animación de polígonos y además renderizado. ¿Qué componente del computador indicado considera que es más importante?",
  opciones: ["Tarjeta de video", "Memoria Cache", "Almacenamiento", "La pantalla"],
  respuesta: 0
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Son registros para almacenar números enteros",
  opciones: [
    "Registro de propósito específico",
    "Registro de propósito general",
    "Registro de coma flotante",
    "Registro de datos"
  ],
  respuesta: 1
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Son interrupciones que surgen debido a la utilización ilegal o errónea de una instrucción o datos, también se denominan trampas.",
  opciones: [
    "Interrupciones internas",
    "Interrupciones externas",
    "Interrupciones de programa",
    "Ninguna de las respuestas es correcta"
  ],
  respuesta: 0
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "Una importante característica de este tipo de puerto es la sencillez con la que se instala un dispositivo. Tan sólo hay que conectar un extremo del cable al periférico, y el extremo opuesto se inserta directamente al puerto, situado en la parte exterior del PC.",
  opciones: ["Puerto paralelo", "Puerto USB", "Puerto en serie", "Puerto UART"],
  respuesta: 1
},
{
  materia: "Arquitectura de Computadoras",
  pregunta: "En general, a más dispositivos conectados al bus:",
  opciones: [
    "Obliga a tratar este bus como una línea de transmisión",
    "Efectúa cálculos de acuerdo con una secuencia de operaciones preestablecida",
    "Mayor es el retardo de propagación",
    "Menor la cantidad de carga para el procesador."
  ],
  respuesta: 2
},


// Bloque: Seguridad Informática

{
  materia: "Seguridad Informática",
  pregunta: "Señale la respuesta correcta con respecto a alguien que viola la seguridad de un sistema de forma similar a un hacker, solo que ilegalmente y con diferentes fines...",
  opciones: ["Cracker", "Newbie", "Hacker", "Phreaker"],
  respuesta: 0
},
{
  materia: "Seguridad Informática",
  pregunta: "De acuerdo con la estrategia de backups, señale cuál de las siguientes no se considera una modalidad de operación:",
  opciones: ["Modalidad full", "Modalidad incremental", "Modalidad diferencial", "Modalidad total"],
  respuesta: 3
},
{
  materia: "Seguridad Informática",
  pregunta: "Señale la respuesta incorrecta con respecto a los pasos de la Metodología de investigación:",
  opciones: ["Identificación", "Preservación", "Análisis", "Informe técnico"],
  respuesta: 1
},
{
  materia: "Seguridad Informática",
  pregunta: "Seleccione la respuesta correcta con respecto al concepto utilizado en un sinfín de disciplinas y se refiere a la búsqueda de debilidades en distintos tipos de sistemas:",
  opciones: ["Evaluación de vulnerabilidades", "Error de protocolo", "Errores de configuraciones", "Ataques a las aplicaciones"],
  respuesta: 0
},
{
  materia: "Seguridad Informática",
  pregunta: "Señale la respuesta incorrecta con respecto a las etapas de Penetration Test divergen:",
  opciones: ["Fase de reconocimiento", "Fase de escaneo", "Fase de eliminación", "Fase de enumeración de un sistema"],
  respuesta: 2
},
{
  materia: "Seguridad Informática",
  pregunta: "Señale la respuesta respecto con respecto al siguiente concepto: el estudio de métodos automáticos para el reconocimiento de personas basado en rasgos de conducta o físicos",
  opciones: ["Medidas de aceptación", "Biometría", "Tasa de procesamiento", "Tiempo de evaluación"],
  respuesta: 1
},
{
  materia: "Seguridad Informática",
  pregunta: "Para captar la huella se utilizan distintos métodos, excepto uno de los siguientes:",
  opciones: ["Ópticos", "Capacitivos", "Ultrasonido", "Alarma"],
  respuesta: 3
},
{
  materia: "Seguridad Informática",
  pregunta: "Señale cuáles son las amenazas a la seguridad física naturales:",
  opciones: ["Fuego y terremoto", "Espionaje y Sabotaje", "Fuego y espionaje", "Terremoto y sabotaje"],
  respuesta: 0
},
{
  materia: "Seguridad Informática",
  pregunta: "Las normativas clasifican el riesgo para poder adecuar los medios de prevención. En Estados Unidos, ¿cuál de los siguientes pertenece a la clase B?",
  opciones: [
    "Combustibles metálicos (magnesio, titanio, potasio, sodio, mercurio, etcétera).",
    "Fuego eléctrico sobre materiales e instalaciones o equipos (cortocircuito, fallas en cables).",
    "Combustibles líquidos (aceites, nafta, grasas, ceras, pinturas, etcétera).",
    "Combustibles comunes sólidos (madera, papel, telas, gomas, entre otros)."
  ],
  respuesta: 2
},
{
  materia: "Seguridad Informática",
  pregunta: "La técnica de encoding, o codificación de caracteres, uno de los más importantes ASCII que puede codificar:",
  opciones: ["Codifica 128 símbolos", "Codifica 230 símbolos", "Codifica 50 símbolos", "Codifica 8 símbolos"],
  respuesta: 0
},
{
  materia: "Seguridad Informática",
  pregunta: "Señale la respuesta incorrecta con respecto a las técnicas de ataque que se pueden analizar en la infraestructura de redes:",
  opciones: ["Sniffing", "Spoofing", "Poisoning", "Broadcasting"],
  respuesta: 3
},
{
  materia: "Seguridad Informática",
  pregunta: "Señale la correcta con respecto a las redes inalámbricas de mayor alcance:",
  opciones: ["WPAN (Wireless Personal Area Network)", "WLAN (Wireless Local Area Network)", "WWAN (Wireless Wide Area Network)", "WMAN (Wireless Metropolitan Area Network)"],
  respuesta: 2
},

{
  materia: "Seguridad Informática",
  pregunta: "Señale la respuesta correcta con respecto al siguiente concepto: habilidad para determinar las acciones individuales de un usuario dentro del sistema",
  opciones: ["Trazabilidad", "Privacidad", "No repudio", "Disponibilidad"],
  respuesta: 0
},
{
  materia: "Seguridad Informática",
  pregunta: "Señale la respuesta correcta con respecto a los controles detectivos en función del momento del incidente:",
  opciones: ["Guardias de seguridad", "Concientización", "Antivirus", "Políticas de seguridad"],
  respuesta: 2
}








];














