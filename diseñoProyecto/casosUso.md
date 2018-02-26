Diseño
===

## Casos de Uso

- Registrarse
- Iniciar sesión
- Crear una encuesta con su respectivo encabezado
- Agregar una pregunta (repuestas de diferentes tipos)
- Asignar una encuesta a un usuario
- Responder una encuesta
- Comparar una pregunta con otra
- Editar una respuesta identificable
- Generar reportes sobre encuestas (xls,csv,json,pdf)

## Diseño de Datos

Encuesta: Encabezado, Usuario, n-Preguntas
Encabezado: Título, Empresa, Proyecto, Cuestionado
Cuestionado: Nombre, Puesto, Celular, Identificación
Usuario: Cédula, Nombre, Correo
Auth: Cédula, Passwd
Pregunta: Texto, Tipo
Respuesta: Tipo, Valor
Reporte: Fecha inicio, Fecha final, Nombre, n-Preguntas

## Preguntas dinámicas

| Tipo | Opciones | Respuesta |
| --- | --- | --- |
| Selección única | a,b,c,d | a |
| Selección múltiple | a,b,c,d | a,b |
| Verdadero o Falso | V,F | V |
| Verdadero o Falso, especifique | V,F | V,razón |
