------------------CREAR PROYECTO------------------------------------

npm i -D tailwindcss postcss autoprefixer // INSTALAR DEPENDECIAS DE tailwindcss

npx tailwindcss init -p //El comando npx tailwindcss init -p se utiliza 
para generar un archivo de configuración inicial para Tailwind CSS en un proyecto.
Aquí está el desglose de lo que hace este comando:


----------------BASE DE DATOS-----------------------------------
mysql -u root -p //iniciarl el sheld de mysql clave 1234
create database kiosconextjs; // crear una base de datos

npx prisma migrate dev //CORRER UNA MIGRACION

-------------------PRISMA--------------------------------------
npm i -D prisma //dependencia prisma para desarrollo
npm i @prisma/client dependencia prisma para produccion permite interactuar con bd

npx prisma init


npx prisma db seed //El comando npx prisma db seed se utiliza en el contexto de 
Prisma para ejecutar las operaciones de sembrado (seed) de datos en la base de datos. 
El proceso de "siembra de datos" implica insertar datos predefinidos en la base de datos para
 poblarla con información inicial. Esto es útil para tener datos de prueba o datos iniciales en 
 el sistema mientras desarrollas una aplicación.

El archivo que contiene los datos de semilla se llama seed.ts y
 generalmente se encuentra en la carpeta prisma de tu proyecto. 
 El comando npx prisma db seed ejecutará este archivo de semillas y 
 realizará las operaciones de inserción de datos en la base de datos.


-------------------Axios-------------------
npm install axios // instalar axios para llamar a la api

-------------------aviso en pantalla--------------------
npm i react-toastify

--------------------CREAR UNA MIGRACION A LA BASE DE DATOS-----------
nos vamos a schema.prisma hacemos la modificacion correspondiente  y luego
npx prisma migrate dev


--------------------instalando hooks para consultar api--------
npm i swr

----------------- npm install-----npx prisma generate-------



NOTA: GET PARA VISITAR UN SITIO
POST PARA ENVIAR DATOS A UN SITIO
PUT: PARA ACTUALIZAR UN SITIO
DELETE: PARA ELIMINAR UN REGISTRO
PATCH:
