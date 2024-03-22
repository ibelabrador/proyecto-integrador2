<h1 align="center"> 
WhatsApp web / proyecto-integrador2
</h1>

## Índice

* [Descripción del proyecto](#descripción-del-proyecto)
* [Estado del proyecto](#estado-del-proyecto)
* [Características de la aplicación](#características-de-la-aplicación)
* [Estructura del proyecto](#estructura-del-proyecto)
* [Acceso al proyecto](#acceso-al-proyecto)
* [Desarrolladores del proyecto](#desarrolladores-del-proyecto)
* [Problemas y Funcionalidades faltantes](#problemas-y-funcionalidades-faltantes)
* [Conclusión](#conclusión)


## Descripción del proyecto
Este proyecto tiene como objetivo construir una interfaz para mantenerse en contacto con familiares y amigos. Para lograrlo, se implementarán diversas tecnologías y técnicas front-end.

![login](https://github.com/ibelabrador/proyecto-integrador2/assets/118490263/a0af1385-455b-447b-85da-5f7b192b7642)

![main](https://github.com/ibelabrador/proyecto-integrador2/assets/118490263/8ab1a4b4-67ff-49eb-b93f-06e032c3b48f)


## Estado del Proyecto
<h4 align="center">
:construction: Proyecto en construcción :construction:
</h4>

## Características de la aplicación

    SASS: Se utilizará como preprocesador CSS para estilos y diseño responsive.
    JSON-server: Se implementará para contener información de usuarios y mensajes, con endpoints respectivos. Se desplegará en un hosting como railway.app.
    Datos de Usuario: Cada usuario contendrá la siguiente información:
        Id
        Nombre
        Número de celular
        Contraseña
        URL de la imagen de perfil
        Propiedad "flag" para estado en línea
        Información o frase identificativa
        Opcional: Fecha y hora de última conexión
    Datos de Mensajes: Cada mensaje contendrá:
        senderUser: id del usuario que inició la conversación
        recipientUser: id del usuario que recibió el mensaje
        Array de conversaciones con:
            sendBy: id del usuario que envió el mensaje
            date: fecha de envío
            hour: hora de envío
            message: contenido del mensaje
            "flag" para estado de visualización del mensaje
    Interfaz de Usuario:
        Página de inicio de sesión (Sign in)
        Página principal (Home) con diseño responsive
    Funcionalidades:
        Inicio de sesión con validación de campos
        Visualización de conversaciones y mensajes
        Búsqueda por nombre de usuario o mensajes
        Edición de perfil y envío de mensajes
        Acciones de editar y eliminar mensajes
        Implementación de Sweetalert para alertas

## Estructura del proyecto

![estructu8ra](https://github.com/ibelabrador/proyecto-integrador2/assets/118490263/d72a964e-cd21-4c81-868d-7bfb5b061f01)

## Acceso al proyecto

- 📁 https://github.com/ibelabrador/proyecto-integrador2
- 📁 https://github.com/ibelabrador/json-proyecto2
- 📁 https://github.com/crizvelez/funcion-enviar.modificar-y-sucar-msg

## Desarrolladores del proyecto 
- Ángel Buitrago
- Deimer Amaya
- Cristian Vélez
- Isabel Labrador

## Problemas y Funcionalidades faltantes
A pesar de los esfuerzos realizados en este proyecto, reconocemos que aún quedan algunas funcionalidades por implementar para mejorar la experiencia del usuario. A continuación, se detallan algunas de las áreas donde se pueden realizar mejoras:

- Registro de usuarios nuevos: Actualmente, el proyecto solo cuenta con una página de inicio de sesión, pero carece de un proceso de registro para nuevos usuarios.
- Búsqueda de mensajes: La funcionalidad de buscar mensajes específicos dentro de las conversaciones aún está en costrucción.
- Búsqueda de contactos: Aunque se menciona la posibilidad de búsqueda por nombre de usuario o mensajes, no se ha implementado en el proyecto actual.
- Pintar de forma dinámica las conversaciones: Actualmente, el proyecto muestra las conversaciones de manera estática, lo que significa que los nuevos mensajes no se agregan dinámicamente a la interfaz.
- Editar y borrar mensajes: Estas funcionalidades están en un repositorio de ensayos aparte.

## Conclusión
En este README se destacan áreas importantes para mejorar la funcionalidad y la experiencia del usuario en el proyecto WhatsApp web. Además de detallar los objetivos, requerimientos técnicos y estructura del proyecto, identificamos funcionalidades claves que aún no se han implementado. Reconocemos la importancia de abordar estas áreas pendientes para ofrecer una experiencia más completa y satisfactoria a nuestros usuarios. 
Estamos comprometidos en seguir mejorando y actualizando el proyecto, integrando las funcionalidades faltantes y respondiendo a las necesidades de nuestra comunidad de usuarios. 
¡Agradecemos tu interés y apoyo en nuestro proyecto! 💚

