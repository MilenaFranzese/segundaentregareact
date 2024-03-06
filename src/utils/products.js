const productos = [
    {
        id: 1 ,
        title: "Monstera Adasonii",
        description: "Interior" ,
        stock: 10,
        type: "Plantas",
        imageProduct: "https://lagreentouch.fr/cdn/shop/files/livraison_monstera_hydroculture_686d34a7-bd7c-4b6e-838a-62cfa55f74c9.jpg?v=1700143734&width=1214",
        price: 4500,
    },

    {
        id: 2 ,
        title: "Monstera Deliciosa",
        description: "Interior" ,
        stock: 3,
        type: "Plantas",
        imageProduct: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQIHgYpOdsO04W1y0xAx95M7Bfgpc5fnrbZv4vF-MO6_a5GQsPArxgvfrWcYLxhLguk",
        price: 9700,
    },

    {
        id: 3 ,
        title: "Gomero Rojo",
        description: "Interior" ,
        stock: 2,
        type: "Plantas",
        imageProduct: "https://viveroverdevida.com.ar/wp-content/uploads/2022/08/Gomero-Negro.jpg",
        price: 14500,
    },

    {
        id: 4 ,
        title: "Gomero Ruby",
        description: "Interior" ,
        stock: 4,
        type: "Plantas",
        imageProduct: "https://i0.wp.com/enabrilhojasmil.com/wp-content/uploads/2018/03/Ficus-Elastica-Ruby_8.jpg?resize=500%2C750",
        price: 15000,
    },

    {
        id: 5 ,
        title: "Potus Lemon",
        description: "Interior" ,
        stock: 13,
        type: "Plantas",
        imageProduct: "https://ideasenverde.com.ar/wp-content/uploads/2023/07/potus-lemon-la-planta-para-principiantes-que-purifica-el-aire.jpg",
        price: 6500,
    },

    {
        id: 6 ,
        title: "Potus",
        description: "Interior" ,
        stock: 9,
        type: "Plantas",
        imageProduct: "https://cdn0.ecologiaverde.com/es/posts/6/8/6/potus_o_poto_cuidados_686_600_square.jpg",
        price: 4200,
    },

    {
        id: 7 ,
        title: "Potus Silver",
        description: "Interior" ,
        stock: 3,
        type: "Plantas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/652/601/products/fotomontajes-productos-casa_selvatica-scindapsus-pictus-41-12d8cdc294a40f509b16603500244838-640-0.jpg",
        price: 7300,
    },

    {
        id: 8 ,
        title: "Helecho",
        description: "Interior" ,
        stock: 7,
        type: "Plantas",
        imageProduct: "https://cdn0.ecologiaverde.com/es/posts/6/2/3/cultivo_y_cuidados_de_los_helechos_1326_orig.jpg",
        price: 7500,
    },

    {
        id: 9 ,
        title: "Filodendro Cordatum",
        description: "Interior" ,
        stock: 2,
        type: "Plantas",
        imageProduct: "https://m.media-amazon.com/images/I/61a7eu+ui+S.jpg",
        price: 8000,
    },

    {
        id: 10 ,
        title: "Filodendro Brasilero",
        description: "Interior" ,
        stock: 5,
        type: "Plantas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/202/679/products/cordatum-brasilero-nube1-0326ed67f512c582b915939685879342-1024-1024.jpg",
        price: 6700,
    },

    {
        id: 11 ,
        title: "Calathea Triostar",
        description: "Interior" ,
        stock: 2,
        type: "Plantas",
        imageProduct: "https://biomaplants.com/files/images/products/calathea-triostar-V19-13503119042022%20(1)-7405624052022.jpg",
        price: 9700,
    },

    {
        id: 12 ,
        title: "Croton",
        description: "Interior" ,
        stock: 1,
        type: "Plantas",
        imageProduct: "https://tiendup.b-cdn.net/business/52/products/gk9lKp_5e8d19ead9c61_large.jpg",
        price: 5300,
    },

    {
        id: 13 ,
        title: "Palmito",
        description: "Interior" ,
        stock: 10,
        type: "Plantas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/202/679/products/1211-c628d3e9dc3aabeb0d16246371757011-640-0.png",
        price: 4800,
    },

    {
        id: 14 ,
        title: "Maceta Cerámica Hojas",
        description: "18cm" ,
        stock: 11,
        type: "Macetas",
        imageProduct: "https://cinderelladecoracion.com/wp-content/uploads/2022/08/Maceta-color-verde-18cm-MQ832-detalle1.jpg",
        price: 8900,
    },

    {
        id: 15 ,
        title: "Maceta Buho",
        description: "10cm" ,
        stock: 7,
        type: "Macetas",
        imageProduct: "https://d22fxaf9t8d39k.cloudfront.net/12eade7a0ef827a5f3b9218fb7aa6e703d66a3034785f4d591f0bf82291e9a81108638.jpeg",
        price: 4100,
    },

    {
        id: 16 ,
        title: "Maceta Cerámica Lineas",
        description: "12cm" ,
        stock: 21,
        type: "Macetas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/135/153/products/maceta-de-ceramica-01-ca9eef0bc0954addcc16751160118375-640-0.jpg",
        price: 5300,
    },

    {
        id: 17 ,
        title: "Tierra para interior",
        description: "10kg" ,
        stock: 30,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_830306-MLA42306019902_062020-O.webp",
        price: 7000,
    },

    {
        id: 18 ,
        title: "Tierra para cactus/suculentas",
        description: "10kg" ,
        stock: 22,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_863563-MLA42517132031_072020-O.webp",
        price: 7800,
    },

    {
        id: 19 ,
        title: "Tierra para huerta",
        description: "10kg" ,
        stock: 30,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_780926-MLA54980293678_042023-O.webp",
        price: 6000,
    },

    {
        id: 20,
        title: "Tierra para flores",
        description: "10kg" ,
        stock: 10,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_816202-MLA31098501119_062019-O.webp",
        price: 9200,
    },

    {
        id: 21,
        title: "Kit Herramientas",
        description: "Mango de madera" ,
        stock: 3,
        type: "Herramientas",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_842911-MLA50864465199_072022-O.webp",
        price: 13000,
    },

    {
        id: 22,
        title: "Tijera para poda",
        description: "Tijeras para jardín Tramontina" ,
        stock: 5,
        type: "Herramientas",
        imageProduct: "https://distribuidortruper.mx/wp-content/uploads/2021/08/Herramientas-para-jardineria.png",
        price: 15300,
    },

    {
        id: 23,
        title: "Alicate de poda",
        description: "Alicate de poda Tramontina" ,
        stock: 2,
        type: "Herramientas",
        imageProduct: "https://pintecord.com.ar/web/image/product.template/10663/image_1024?unique=3bd6981",
        price: 8700,
    },

    {
        id: 24,
        title: "Manguera 1/2 pulgadas",
        description: "Manguera De Riego Trenzada 1/2 Pulgada X 20m Mallada",
        stock: 7,
        type: "Herramientas",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_898557-MLA71438888791_082023-O.webp",
        price: 18200,
    }
]

export default productos;
