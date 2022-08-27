#BigNova Test
#To run docker-compose file run: docker-compose up --build -d
In the git repo, you will find 3 applications with the docker-compose file.
FIRST APP:
    Http-app: 
        - Represent the getway app, where the client will communicate with the microservices throught it. 
        - It will recieve the http request and call the respensible microservice to execute the requested work.
        - It is a Restfull Api built by NestJs.
        - It communicate with the 2 other app by redis server.
        - It has 3 sub/folders:
            + Folder Config: Has the configuration of swagger.
            + Folder Orders: 
                ~ Has the Order Service that publish calls in the redis server to get catched by the specific Microservice which is Order Microservice.
                ~ Has Dto Folder: has Data Transfer Object of order's creation.
                ~ Has Interface Folder: has an interface that represent the property that are in Order schema. 
            + Folder Suppliers: 
                ~ Has the Supplier Service that publish calls in the redis server to get catched by the specific Microservice which is Supplier Microservice.
                ~ Has Interface Folder: has an interface that represent the property that are in Order schema. 
                
SECOND APP:
    Orders-App:
        - Represent the Order Microservice, and it is the respensible of the creation, reading of orders.
        - It uses MongoBD as a database.
        - It has Orders folder that also has a 3 sub-folders:
            + DTO.
            + Interface.
            + Schema: it has the properties of collection orders. After the execution of the app this schema will be our collection in our database.

THIRD APP:
    Suppliers-App:
        - Represent the Supplier Microservice, and it is the respensible of reading of Suppliers.
        - It uses MongoBD as a database.
        - It has Supplier folder that also has a 2 sub-folders:
            + Interface.
            + Schema: it has the properties of collection suppliers. After the execution of the app this schema will be our collection in our database.
            
SECOND and THIRD APP are communication between them using Redis Server, where they can read, create, delete data from cache in redis.

THE 3 APP has Dockerfile and .dockerignore files:
    - DockerFile: represente the image of the container which is node, also has the url in the container where we can find our apps after integrating them in the docker, and the commande to execute to run the app.
    - .dockerignore: has the file that we dont need to upload the to the container.