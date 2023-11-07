# final-mid-term
## Project name and description
    Project tokopedia play clone
    
## Features (list down also additional features if any)
## How to install & run
## Schema Database

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