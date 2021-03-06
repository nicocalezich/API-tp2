# Proyecto-TP2

# Sistema de gestión para Cadena de Supermercados



# Actores del sistema
* Cajero/a
* Gerente

# Descripción
Una cadena de supermercados requiere un sistema para su gestión (por cada uno de sus supermercados) de ventas de sus productos y registro de las mismas. generación de ticket por venta, de control de stock y alerta en caso de que algún producto cuente con poco del mismo. de registro de clientes adheridos (los cuales contarán con beneficios), de definición de comisiones para los cajeros.

# Reglas de negocio

* Los usuarios del sistema serán los cajeros y el gerente de cada supermercado.
* Los clientes del supermercado que se registren y adhieran en el sistema tendrán acceso a diferentes descuentos y beneficios.
* Los cajeros se encargaran, en el momento de una venta/cobro de productos, de cargarlos con sus respectivas cantidades al sistema.
* Luego de producida la venta, se generará un ticket detallando los productos vendidos, la cantidad y precio de los mismos, y el monto total que deberá abonar el cliente.
* Cada supermercado tendrá un registro de todas las ventas que se hicieron alguna vez en el mismo, detallando todo lo requerido.
* El gerente determinara el descuento que tendran los clientes adheridos en el total de su compra.

# Funcionalidades

# 1. Acceso al sistema

1.1 Sistema de autenticación: tanto los cajeros como el gerente se deberán autenticar en el sistema indicando un usuario existente y su contraseña. Cada uno de estos actores tendrá acceso y/o permisos sobre determinadas características del sistema.

1.2 Creación de user: El responsable de poder crear nuevos users (ya sea gerente o cajero) será el gerente. Solo existirán 2 users en el sistema. 1 para el gerente y otro para cada cajero. A cada user se le asignará un username y una contraseña.

# 2. Proceso de venta

2.1 Insertar nueva venta: Los cajeros al realizar una venta, obtendrán el nombre de cada producto que el cliente está comprando (ya sea por scanner o búsqueda manual) e ingresarán la cantidad del producto que se está vendiendo, permitirá cargarlo si el producto existe y si la cantidad por vender no es mayor a la cantidad que existe de stock.  Una vez cargados todos los productos, le indican al sistema que terminaron de cargar. Tambien se deberá indicar si el comprador está adherido o no, para aplicarle el descuento correspondiente y se pedirá el método de pago.

2.2 modificación del stock: Al indicar que se terminaron de cargar los productos, el sistema restará la cantidad vendida de cada producto, al stock que había de los mismos. Se validará nuevamente que la cantidad que quede no sea menor a 0.

2.3 generación del ticket: Luego de cargar los productos y de la modificación del stock, el sistema devolverá la información para generar un ticket, que contenga la información de cada producto no repetido vendido, su cantidad, su precio unitario, su precio multiplicado por la cantidad vendida, la fecha al momento de enviar la información, el nombre de la sucursal en el cual se está produciendo la venta, y el monto total que deberá abonar el comprador.

# 3. Productos/stock

3.1 Característica de los productos Los productos serán cargados al sistema por el gerente. Al cargarlos, se verificará si el producto no existe (por su nombre), se ingresara su categoría (que podrán ser, comestible, bebida, limpieza, otros), se ingresará la cantidad que exista del producto.

# 4. Adherir compradores

4.1 dar de alta comprador adherido: Si un comprador del supermercado (comprador) lo desea, podrá adherirse al supermercado para obtener beneficios. Para registrar un comprador, se deberá indicar su nombre completo y apellido, DNI, email. Todos los campos deberán validarse y se guardará al comprador adherido.

4.2 Seteo de beneficios cliente adherido: El gerente será quien podrá setear los beneficios del cliente en el sistema. Por ejemplo, estos contarán con descuentos temporales en el total del monto de su compra. A la hora de la venta, se indicará en el sistema si el cliente está registrado o no, y se le hará el descuento correspondiente en su compra. Por defecto. ese porcentaje también será seteado por el gerente.

# 5. Registro general de las ventas

5.1 Registro de venta: Cada venta que el supermercado realice, quedará registrada. Estas no podrán ser eliminadas ni editadas. Los datos de cada venta serán: Los productos que se vendieron y las cantidades, el precio de cada producto y total, la fecha, y si quien hizo la compra era un cliente registrado o no y el método de pago que utilizó.

# Accesos

# Rutas habilitadas para usuario administrador

# /login

* POST /

 Se le envia en el body el campo "username" con un String para el nombre de usuario y "password" para la contraseña y devuelve un TOKEN para pasar al Header como auth-token.

# /users

* GET /:username

 Se envia un username como parametro y devuelve un user.

* POST /

 Crea un usuario nuevo.Se envia en el body:
   username (string), 
   password (string), 
   isAdming (bool)

# /products

* GET /:id

 Se envia el id del producto a buscar como parametro y devuelve el producto buscado.
 

* GET /

 Devuelve todos los productos.


* POST /

 Crea un producto nuevo. Se envia en el body:
   name (string), 
   stock (number), 
   type (string), 
   price (number)
  

* PUT /:id

 Actualiza un producto. Se le envia en el body:
   name (string), 
   stock (number), 
   type (string), 
   price (number)
  

* DELETE /:id

 Elimina un producto. Se le envia el id del producto por parametro.

# /operations

* POST /sale

Crea una venta. Se le envia en el body: products(array de objetos que contienen id de producto y cantidad), buyer(string que es el dni del cliente), paymentMethod(string forma de pago)

* POST /customer

 Crea un cliente nuevo. Se le envia en el body:
   name (string), 
   dni (number), 
   email (string)  
  

* GET /customer/:dni

 Obtiene un cliente según el DNI enviado como parametro

# /settings
* POST /discounts

 Se envia un body con el campo "discount" (number) para establecer el descuento para clientes.

# Rutas habilitadas para usuario cajero

# /login

* POST /

 Se le envia en el body el campo "username" con un String para el nombre de usuario y "password" para la contraseña y devuelve un TOKEN para pasar al Header como auth-token.

# /operations

* POST /sale

Crea una venta. Se le envia en el body: products(array de objetos que contienen id de producto y cantidad), buyer(string que es el dni del cliente), paymentMethod(string forma de pago)

* POST /customer

 Crea un cliente nuevo. Se le envia en el body:
   name (string), 
   dni (number), 
   email (string)  
