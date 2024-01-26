# Prueba tecnica Full Stack

Esta prueba fue dirigida para Felipe Parra.

## Antes de poder correr algun proyecto

1.  clonar el repository

    ```
    git clone https://github.com/felipe-parra/prueba-fullstack-cp.git
    ```

## Correr el proyecto Front en local

1.  Entrar a la carpeta

    ```
    cd prueba-front
    ```

2.  Instala las dependencias

    ```
    npm install
    ```

3.  Iniciar el servidor

    ```
    npm run dev
    ```

4.  Entrar a la direccion siguiente:
    ```
    http://localhost:5173
    ```

## Correr el proyecto Backend en local

1.  Entrar a la carpeta

    ```
    cd prueba-backend
    ```

2.  Instala las dependencias

    ```
    npm install
    ```

3.  Agregar un archivo .env con las credenciales necesarias

```sh
PORT=<PORT>
PAYPAL_CLIENT_ID=<PAYPAL_CLIENT_ID>
PAYPAL_SECRET_KEY=<PAYPAL_SECRET_KEY>
```

4.  Iniciar el servidor

    ```
    node src/app.js
    ```

5.  El servidor estara funcionando en la siguiente direccion:
    ```
    http://localhost:3000
    ```
