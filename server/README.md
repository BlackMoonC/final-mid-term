# Mid Term Project (Backend Only)

## 1.   Explain my database structure
Jadi saya membuat beberapa database beserta struktur, yaitu: 

    video: {
        title:"string"
        url_image: "string"
        thumbnail: "string"
    }


berikut merupakan skema untuk model video yang nanti akan digunakan untuk skema mongodb-nya.

    product{
        link_product:  "string",
        title: "string",
        price: "string",
        id_video: "string",
    }

berikut merupakan skema untuk model produk yang nanti akan digunakan untuk skema mongodb-nya dan juga akan ada relasi terjadi antara video dan produk

    comments: {
        username: "string",
        comment: "string",
        id_video: "string",
        timeStamps: "dateTime"
    }
berikut merupakan skema untuk model comment yang nanti akan digunakan untuk skema mongodb-nya dan juga akan ada relasi terjadi antara comment dan produk
##  2.  Explain API structure
Struktur yang digunakan menggunakan N-architicture yang dimana terdapat routes, controller, service, dan models. 

Untuk routes nya terdiri dari:

    routes
        products.route.js
        comments.route.js
        videos.route.js

Untuk controller nya terdiri dari:

    controller
        products.controller.js
        comments.controller.js
        videos.controller.js

Untuk service nya terdiri dari:

    services
        products.service.js
        comments.service.js
        videos.service.js

Untuk routes nya terdiri dari:

    routes
        products.route.js
        comments.route.js
        videos.route.js

Untuk controllers nya terdiri dari:

    controller
        products.controller.js
        comments.controller.js
        videos.controller.js

Untuk models nya terdiri dari:

    models
        products.model.js
        comments.model.js
        videos.model.js


## 3.   List API request and response (preference format gist)

URL for published documentation requests and responses API
https://documenter.getpostman.com/view/17081705/2s9XxsUwBX


## 4.   How to run in local (make sure grader can run your API in grader local machine after following your “how to run”!)