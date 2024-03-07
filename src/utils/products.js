const productos = [
    {
        id: 1 ,
        title: "Monstera Adasonii",
        description: "Planta de interior,trepadora con raicer aereas, excelente para baños y cocinas ya que requiere un grado de humedad altísimo y temperaturas arriba de los 20°; esta planta además necesita un buen drenaje." ,
        stock: 10,
        type: "Plantas",
        imageProduct: "https://lagreentouch.fr/cdn/shop/files/livraison_monstera_hydroculture_686d34a7-bd7c-4b6e-838a-62cfa55f74c9.jpg?v=1700143734&width=1214",
        price: 4500,
    },

    {
        id: 2 ,
        title: "Monstera Deliciosa",
        description: "También llamada Costilla de Adán, es una planta de interior luminoso o exterior con sombra, necesita buena luz pero no de forma directa. Resiste a bajas temperatura aunque no a heladas. Necesita un riego moderado ya que se adapta a cualquier nivel de humedad. " ,
        stock: 3,
        type: "Plantas",
        imageProduct: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQIHgYpOdsO04W1y0xAx95M7Bfgpc5fnrbZv4vF-MO6_a5GQsPArxgvfrWcYLxhLguk",
        price: 9700,
    },

    {
        id: 3 ,
        title: "Gomero Rojo",
        description: "También llamado Ficus Elástica, se debe ubicar en un lugar muy iluminado pero sin recibir directamente los rayos solares para evitar quemar la planta, tolera los entornos y ambientes secos. Es ideal para interiores no luminosos." ,
        stock: 2,
        type: "Plantas",
        imageProduct: "https://viveroverdevida.com.ar/wp-content/uploads/2022/08/Gomero-Negro.jpg",
        price: 14500,
    },

    {
        id: 4 ,
        title: "Gomero Ruby",
        description: "Es una planta de interior, se debe ubicar en un lugar muy iluminado pero sin recibir directamente los rayos solares para evitar quemar la planta, los riegos pueden ser moderados, una vez por semana en verano y una vez cada 15 días en invierno." ,
        stock: 4,
        type: "Plantas",
        imageProduct: "https://i0.wp.com/enabrilhojasmil.com/wp-content/uploads/2018/03/Ficus-Elastica-Ruby_8.jpg?resize=500%2C750",
        price: 15000,
    },

    {
        id: 5 ,
        title: "Potus Lemon",
        description: "El potus lemon es una de las más populares plantas de interior. Esta planta debe ubicarse en un lugar bastante luminoso dentro de la vivienda, pero evitando la exposición a la luz solar directa prolongada. Mantener un riego de 1 o 2 veces por semana." ,
        stock: 13,
        type: "Plantas",
        imageProduct: "https://ideasenverde.com.ar/wp-content/uploads/2023/07/potus-lemon-la-planta-para-principiantes-que-purifica-el-aire.jpg",
        price: 6500,
    },

    {
        id: 6 ,
        title: "Potus",
        description: "El potus es una de las más populares plantas de interior. Le gustan los lugares luminosos (sin luz directa) pero se adapta facilmente a casi cualquier ambiente. Es aconsejable regar esta planta con regularidad cada dos semanas, mojando profundamente la tierra, esperando que el terreno esté bien seco antes de regarlo. Esta especie crece también en agua." ,
        stock: 9,
        type: "Plantas",
        imageProduct: "https://cdn0.ecologiaverde.com/es/posts/6/8/6/potus_o_poto_cuidados_686_600_square.jpg",
        price: 4200,
    },

    {
        id: 7 ,
        title: "Potus Silver",
        description: "Es una planta de interior que le encanta recibir mucha luz indirecta pero puede sobrevivir en bajas condiciones de luz. Por ser una planta tropical, vive mejor en temperaturas cálidas y sufre mucho con temperaturas arriba los 30 grados." ,
        stock: 3,
        type: "Plantas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/652/601/products/fotomontajes-productos-casa_selvatica-scindapsus-pictus-41-12d8cdc294a40f509b16603500244838-640-0.jpg",
        price: 7300,
    },

    {
        id: 8 ,
        title: "Helecho",
        description: "Puede ser de interior luminoso o exterior a la sombra aunque sufre mucho las temperaturas extremas, es una planta que necesita humedad ambiental, es ideal para baños, además necesita riego abundante y que su sustrato no se seque por completo." ,
        stock: 7,
        type: "Plantas",
        imageProduct: "https://cdn0.ecologiaverde.com/es/posts/6/2/3/cultivo_y_cuidados_de_los_helechos_1326_orig.jpg",
        price: 7500,
    },

    {
        id: 9 ,
        title: "Filodendro Cordatum",
        description: "Es una planta de interior increíblemente buena para purificar el aire de nuestros ambientes, por lo que por ser todoterreno y poco exigente, se convierte en una planta de fácil cuidado. Prefiere un ambiente con bastante luz natural indirecta." ,
        stock: 2,
        type: "Plantas",
        imageProduct: "https://m.media-amazon.com/images/I/61a7eu+ui+S.jpg",
        price: 8000,
    },

    {
        id: 10 ,
        title: "Filodendro Brasilero",
        description: "Ésta es una planta colgante, podemos erguirla poniéndola en un tutor, o dejarla en su condición de colgante. Necesita luz indirecta brillante o semisombra y un riego solo si el sustrato está seco." ,
        stock: 5,
        type: "Plantas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/202/679/products/cordatum-brasilero-nube1-0326ed67f512c582b915939685879342-1024-1024.jpg",
        price: 6700,
    },

    {
        id: 11 ,
        title: "Calathea Triostar",
        description: "Es una  planta de interior súper decorativa y de aspecto salvaje, es muy resistente y fácil de cuidar en interiores. Su única dificultad radica en que necesita mucha humedad. Necesita luz indirecta o semisombra, hay que tener cuidado en verano ya que no resiste altas temperaturas." ,
        stock: 2,
        type: "Plantas",
        imageProduct: "https://biomaplants.com/files/images/products/calathea-triostar-V19-13503119042022%20(1)-7405624052022.jpg",
        price: 9700,
    },

    {
        id: 12 ,
        title: "Croton",
        description: "El Crotón es uno de los reyes de la decoración de interior. Sus hojas multicolores llenarán nuestro hogar de color. Necesita mucha luz indirecta y se riega solamente cuando el sustrato comience a secarse." ,
        stock: 1,
        type: "Plantas",
        imageProduct: "https://tiendup.b-cdn.net/business/52/products/gk9lKp_5e8d19ead9c61_large.jpg",
        price: 5300,
    },

    {
        id: 13 ,
        title: "Palmito",
        description: "Planta de muy fáciles cuidados, se adapta muy bien en interior y exterior. En interior debe ser ubicada en un espacio bien iluminado. En exterior debe estar al resguardo del frío en invierno, puede estar en pleno sol. Prefiere suelos arenoso y riegos numerosos en verano y moderados en invierno, además soporta la sequía." ,
        stock: 10,
        type: "Plantas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/202/679/products/1211-c628d3e9dc3aabeb0d16246371757011-640-0.png",
        price: 4800,
    },

    {
        id: 14 ,
        title: "Maceta Cerámica Hojas",
        description: "Medida de 18cm, cuenta con agujerito para drenaje, disponible en color natural, verde menta y rosa." ,
        stock: 11,
        type: "Macetas",
        imageProduct: "https://cinderelladecoracion.com/wp-content/uploads/2022/08/Maceta-color-verde-18cm-MQ832-detalle1.jpg",
        price: 8900,
    },

    {
        id: 15 ,
        title: "Maceta Buho",
        description: "Medida de 10cm, cuenta con agujerito para drenaje, disponible en color rosa, verde y lila." ,
        stock: 7,
        type: "Macetas",
        imageProduct: "https://d22fxaf9t8d39k.cloudfront.net/12eade7a0ef827a5f3b9218fb7aa6e703d66a3034785f4d591f0bf82291e9a81108638.jpeg",
        price: 4100,
    },

    {
        id: 16 ,
        title: "Maceta Cerámica Lineas",
        description: "Medida de 12cm, cuenta con agujerito para drenaje, disponible en color lila, amarillo, rosa, verde y celeste." ,
        stock: 21,
        type: "Macetas",
        imageProduct: "https://acdn.mitiendanube.com/stores/001/135/153/products/maceta-de-ceramica-01-ca9eef0bc0954addcc16751160118375-640-0.jpg",
        price: 5300,
    },

    {
        id: 17 ,
        title: "Tierra para interior",
        description: "Sustrato específicamente desarrollado para el delicado cuidado de géneros que suelen cultivarse a la sombra y dentro de la vivienda, contiene turba, acículas de pino, resaca de rio y perlita. Contenido 10lt." ,
        stock: 30,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_830306-MLA42306019902_062020-O.webp",
        price: 7000,
    },

    {
        id: 18 ,
        title: "Tierra para cactus/suculentas",
        description: "Sustrato específicamente desarrollado para el Cactus y plantas crasas como Suculentas, contiene arena, arcilla, turba y perilita. Contenido 10lt." ,
        stock: 22,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_863563-MLA42517132031_072020-O.webp",
        price: 7800,
    },

    {
        id: 19 ,
        title: "Tierra para huerta",
        description: "Sustrato ideal para semillado y transplante de hortalizas, para uso directo, contiene turba de musgo, compost, perlita, dolomita y fertilizantes. Contenido 10lt." ,
        stock: 30,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_780926-MLA54980293678_042023-O.webp",
        price: 6000,
    },

    {
        id: 20,
        title: "Tierra para flores",
        description: "Sustrato ideal para el desarrollo de plantines florales y otras exigentes plantas de flor, contiene corteza de pino, turba, arcilla, perlita, acículas de pino y lombricompuesto. Contenido 10lt." ,
        stock: 10,
        type: "Sustratos",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_816202-MLA31098501119_062019-O.webp",
        price: 9200,
    },

    {
        id: 21,
        title: "Kit Herramientas Tramontina",
        description: "Kit de 3 herramientas que incluye pala angosta, pala ancha y rastrillo de metal con mangos de madera." ,
        stock: 3,
        type: "Herramientas",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_842911-MLA50864465199_072022-O.webp",
        price: 13000,
    },

    {
        id: 22,
        title: "Tijera para poda Tramontina",
        description: "Tijera corta cerco con mango de madera y cuchilla de acero de 12 pulgadas." ,
        stock: 5,
        type: "Herramientas",
        imageProduct: "https://distribuidortruper.mx/wp-content/uploads/2021/08/Herramientas-para-jardineria.png",
        price: 15300,
    },

    {
        id: 23,
        title: "Alicate de poda Tramontina",
        description: "Alicate para podar con lámina de acero y mango de polipropileno, largo total 18cm." ,
        stock: 2,
        type: "Herramientas",
        imageProduct: "https://pintecord.com.ar/web/image/product.template/10663/image_1024?unique=3bd6981",
        price: 8700,
    },

    {
        id: 24,
        title: "Manguera 1/2 pulgadas",
        description: "Manguera de riego trenzada 1/2 pulgada de 20m mallada de alta resistencia.",
        stock: 7,
        type: "Herramientas",
        imageProduct: "https://http2.mlstatic.com/D_NQ_NP_898557-MLA71438888791_082023-O.webp",
        price: 18200,
    }
]

export default productos;
