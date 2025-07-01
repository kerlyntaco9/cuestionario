const preguntas = [
  {
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
  pregunta: "En el siguiente seudocódigo, ¿en qué línea existe un error?<br>(Mira el número a la izquierda de cada línea):<br><br><pre style='background:#f0f0f0; padding:10px; border-radius:6px; font-family:monospace; color:blue;'>4   Definir a como Entero\n5   Definir b como Entero\n6\n7   a=3.51\n8   b=5</pre>",
  opciones: [
    "En la línea 5 del código.",
    "En la línea 8 del código.",
    "En la línea 4 del código.",
    "En la línea 7 del código."
  ],
  respuesta: 3
},
{
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
  pregunta: "El siguiente programa muestra al usuario un mensaje en plataforma mediante la estructura de casos. Si el usuario asigna a val el valor de 4, ¿qué mensaje se mostrará en pantalla?<br><br><pre>Segun val Hacer\n  1:\n    Escribir \"Usted eligió la primera opción\"\n  2:\n    Escribir \"Usted eligió la segunda opción\"\n  3:\n    Escribir \"Usted eligió la tercera opción\"\n  De Otro Modo:\n    Escribir \"Usted no eligió ninguna opción básica\"\nFin Segun</pre>",
  opciones: [
    "Ninguna es la respuesta correcta",
    `*** Ejecución Iniciada. ***
Usted eligió la tercera opción
*** Ejecución Finalizada. ***`,
    `*** Ejecución Iniciada. ***
Usted eligió la primera opción
*** Ejecución Finalizada. ***`,
    `*** Ejecución Iniciada. ***
Usted no eligió ninguna opción básica
*** Ejecución Finalizada. ***`
  ],
  respuesta: 3
},
{
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
  pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio4 {\n  public static void main(String[] args) {\n    int edad\n    System.out.println(\"Ingrese su edad);\");\n    Scanner teclado = new Scanner(System.in);\n    edad = teclado.nextInt();\n    if(edad >= “18”){\n      System.out.println(\"es mayor de edad\");\n    }else{\n      System.out.println(\"es menor de edad\");\n    }\n  }\n}</pre>",
  opciones: ["1", "2", "3", "Ninguno"],
  respuesta: 2
},
{
  pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio6 {\n  public static void main(String[] args) {\n    String nombre;\n    int edad, promedioedad=0, cantidad=0;\n    Scanner teclado = new Scanner(System.in);\n    for(int i=1;i<=5;i=i+1){\n      System.out.println(\"Ingrese el nombre del niño \"+i);\n      nombre = teclado.nextString();\n      System.out.println(\"Ingrese la edad del niño \");\n      edad = teclado.nextInt();\n      if(edad >= 5){\n        promedioedad += edad;\n        cantidad++;\n      }\n    }\n    if(cantidad==0){\n      System.out.println(\"Ningun nino cumplio la condicion de edad\");\n    }else{\n      System.out.println(\"La edad promedio es: \"+(promedioedad/cantidad));\n    }\n  }\n}</pre>",
  opciones: ["1", "2", "3", "Ninguno"],
  respuesta: 1
},
{
  pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio7 {\n  public static void main(String[] args) {\n    int numero = 1;\n    Scanner teclado = new Scanner();\n    while(numero != 0){\n      System.out.println(\"Ingrese un número entero\");\n      numero = teclado.next();\n    }\n    System.println(\"Se ha ingresado el número cero\");\n  }\n}</pre>",
  opciones: ["1", "2", "3", "Ninguno"],
  respuesta: 2
},
{
  pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>public class Ejercicio8 {\n  public static void main(String args) {\n    int numero = 0;\n    Scanner teclado = new Scanner(System.in);\n    do{\n      System.out.println(\"Ingrese un número entero\");\n      numero = teclado.nextInt();\n    }while(numero != 0)\n    System.out.println(\"Se ha ingresado cero\");\n  }\n}</pre>",
  opciones: ["1", "2", "3", "Ninguno"],
  respuesta: 1
},
{
  pregunta: "¿Cuántos errores encuentra en el siguiente código?<br><br><pre>//Clase para objetos de dos dimensiones\nclass DosDimensiones{\n  double base;\n  double altura;\n\n  void mostrarDimension(){\n    System.out.println(\"La base y altura es: \" + base + \" y \" + altura);\n  }\n}\n\n//Una subclase de DosDimensiones para Triangulo\nclass Triangulo extends DosDimensiones{\n  String estilo;\n\n  double area(){\n    return base * altura / 2;\n  }\n\n  void mostrarEstilo(){\n    System.out.println(\"Triangulo es: \" + estilo);\n  }\n}</pre>",
  opciones: ["1", "2", "3", "Ninguno"],
  respuesta: 3
},
{
  pregunta: "¿Cuántos constructores puede visualizar en el siguiente código?<br><br><pre>public class VentaDto {\n  private String categoria;\n  private String producto;\n  private Integer precio;\n  private Integer cantidad;\n  private Integer importe;\n\n  public VentaDto() {}\n\n  public VentaDto(String categoria, String producto, Integer precio, Integer cantidad){\n    this.categoria = categoria;\n    this.producto = producto;\n    this.precio = precio;\n    this.cantidad = cantidad;\n  }\n\n  public VentaDto(String categoria, String producto, Integer precio, Integer cantidad, Integer importe) {\n    this.categoria = categoria;\n    this.producto = producto;\n    this.precio = precio;\n    this.cantidad = cantidad;\n    this.importe = importe;\n  }\n}</pre>",
  opciones: ["1", "2", "3", "Ninguno"],
  respuesta: 2
},
{
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
  pregunta: "¿Cuántos métodos con polimorfismo se tienen en el siguiente código?<br><br><pre>public class Futbolista extends SeleccionFutbol {\n  private int dorsal;\n  private String demarcacion;\n\n  @Override\n  public void entrenamiento() {\n    System.out.println(\"Realiza un entrenamiento (Clase Futbolista)\");\n  }\n\n  @Override\n  public void partidoFutbol() {\n    System.out.println(\"Juega un Partido (Clase Futbolista)\");\n  }\n\n  public void entrevista() {\n    System.out.println(\"Da una Entrevista\");\n  }\n}</pre>",
  opciones: ["1", "2", "3", "Ninguno"],
  respuesta: 1
}








];
