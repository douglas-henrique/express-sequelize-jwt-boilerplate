# express-sequelize-jwt-boilerplate-api
## _A simple REST API boilerplate builded with NodeJS, ExpressJS, Sequelize and JWT_

Features
- User register
- User auth 
- Protected routes with JWT
 
## Running the project

Install packages running
```sh
    yarn
```

Copy the env example to .env
```sh
    cp .env.example .env
```

You need MySQL database to run this project. You can use the following command to start a docker with mysql and user setted:
```sh
    docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
```

Edit the .env file with the database informations ans generate a hash string to use on _JWT_HASH_.

After database created and running, run the sequelize migration 
```sh
    npx sequelize-cli db:migrate
```

Then you can start the project running 
```sh
    yarn dev
```

You should a message like: _Server running on port 3333_

Done. Enjoy it!
