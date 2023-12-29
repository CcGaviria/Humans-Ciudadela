# Humans-Ciudadela

Repositorio para almacenar el desarrollo de una herramienta que permite identificar los caracteres humanos de Rick And Morty



https://ciudadela.gaviria.org/

Inicialmente construí el Query para obtener los caracteres de especie humana en el cliente expuesto en la api de Rick and Morty, continué con la creación del proyecto del lado del cliente con NextJs

Creé el proyecto con serverless para crear el microservicio exponiendo un servidor graphql con fuente de datos la api graphql de Rick and Morty

Creé un bucket en S3 y una distribución CloudFront para deployear el proyecto del lado de los clientes

Creé el proyecto de infraestructura como código con terraform para crear los recursos del lado del cliente 


- client-species-nextjs (Frontend)
- server-species-sls (Backend)
- infrastructure-species-tf (Infrastructure)