# Proyecto-TP2

# Sistema de gestión para Cadena de Supermercados



# Actores del sistema
* Cajero/a
* Gerente

# Descripción
Una cadena de supermercados requiere un sistema para su gestión (por cada uno de sus supermercados) de ventas de sus productos y registro de las mismas. generación de ticket por venta, de control de stock y alerta en caso de que algún producto cuente con poco del mismo. de registro de clientes adheridos (los cuales contarán con beneficios), de definición de comisiones para los cajeros.

# Reglas de negocio

* Los usuarios del sistema serán los cajeros y el gerente de cada supermercado.
* Los cajeros cobrarán un x% (que definirá el gerente) de comisión en el caso de superar un n monto (que también definirá el gerente) en ventas en ese mismo día.
* Los clientes del supermercado que se registren y adhieran en el sistema tendrán acceso a diferentes descuentos y beneficios.
* Los cajeros se encargaran, en el momento de una venta/cobro de productos, de cargarlos con sus respectivas cantidades al sistema.
* Luego de producida la venta, se generará un ticket detallando los productos vendidos, la cantidad y precio de los mismos, y el monto total que deberá abonar el cliente.
* Cada supermercado tendrá un registro de todas las ventas que se hicieron alguna vez en el mismo, detallando todo lo requerido.
* Los gerentes serán alertados por el sistema en caso de que haya baja cantidad de X producto. La cantidad de “alerta stock” podrá ser modificable por producto.
* El sistema no podra contar con menos de n cantidad por producto, determinado por el gerente.

# Funcionalidades

# 1. Acceso al sistema

1.1 Sistema de autenticación: tanto los cajeros como el gerente se deberán autenticar en el sistema indicando un usuario existente y su contraseña. Cada uno de estos actores tendrá acceso y/o permisos sobre determinadas características del sistema.

1.2 Creación o eliminación de un user: El responsable de poder crear nuevos users (ya sea gerente o cajero) será el gerente. Solo existirán 2 users en el sistema. 1 para el gerente y otro para que lo utilicen los cajeros. A cada user se le asignará un username y una contraseña que se deberá confirmar al crear el user.

1.3 logout: El sistema contará con un logout para cerrar la sesión activa y habrá que volver a hacer login para poder volver a utilizarlo.

# 2. Proceso de venta

2.1 Insertar nueva venta: Los cajeros al realizar una venta, obtendrán el nombre de cada producto que el cliente está comprando (ya sea por scanner o búsqueda manual) e ingresarán la cantidad del producto que se está vendiendo, permitirá cargarlo si el producto existe y si la cantidad por vender no es mayor a la cantidad que existe de stock.  Una vez cargados todos los productos, le indican al sistema que terminaron de cargar. Tambien se deberá indicar si el comprador está adherido o no, para aplicarle el descuento correspondiente y se pedirá el método de pago.

2.2 modificación del stock: Al indicar que se terminaron de cargar los productos, el sistema restará la cantidad vendida de cada producto, al stock que había de los mismos. Se validará nuevamente que la cantidad que quede no sea menor a 0.

2.3 generación del ticket: Luego de cargar los productos y de la modificación del stock, el sistema devolverá la información para generar un ticket, que contenga la información de cada producto no repetido vendido, su cantidad, su precio unitario, su precio multiplicado por la cantidad vendida, la fecha al momento de enviar la información, el nombre de la sucursal en el cual se está produciendo la venta, y el monto total que deberá abonar el comprador.

# 3. Productos/stock

3.1 Característica de los productos Los productos serán cargados al sistema por el gerente. Al cargarlos, se verificará si el producto no existe (por su nombre), se ingresara su categoría (que podrán ser, comestible, bebida, limpieza, otros), se ingresará la cantidad que exista del producto, su fecha de vencimiento si este es comestible o bebible y se indicará si este contiene algún tipo de descuento vigente (1 - 99 %).

# 4. Adherir compradores

4.1 dar de alta comprador adherido: Si un comprador del supermercado (comprador) lo desea, podrá adherirse al supermercado para obtener beneficios. Para registrar un comprador, se deberá indicar su nombre completo y apellido, DNI, email, fecha de nacimiento y domicilio. Todos los campos deberán validarse y se guardará al comprador adherido.

4.2 Eliminar un cliente adherido: Si un comprador del supermercado (comprador) lo desea, podrá solicitar la baja de la adhesión al supermercado, se buscará al comprador por DNI en el registro y se lo eliminará.

4.3 Seteo de beneficios cliente adherido: El gerente será quien podrá setear los beneficios del cliente en el sistema. Por ejemplo, estos contarán con descuentos temporales en determinados productos, para eso el gerente elegirá qué productos son los que poseerán descuento y les asignará el mismo. A la hora de la venta, se indicará en el sistema si el cliente está registrado o no, y se le hará el descuento correspondiente en su compra. Por defecto, el sistema le dará un x% de descuento en cualquier producto el dia del cumpleaños del cliente. ese porcentaje también será seteado por el gerente.

# 5. Registro general de las ventas

5.1 Registro de venta: Cada venta que el supermercado realice, quedará registrada. Estas no podrán ser eliminadas ni editadas. Los datos de cada venta serán: Los productos que se vendieron y las cantidades, el precio de cada producto y total, la fecha, el nombre del supermercado, y si quien hizo la compra era un cliente registrado o no y el método de pago que utilizó.

# 6. Cajeros

6.1 Seteo de comisiones de cajeros: Al llegar por día a un ingreso x, determinado por el gerente en el sistema, los cajeros contarán con un% de comisión respecto a ese monto, que también determinará el gerente.

6.2 Registro de comisiones: Se registrará por día si se llegó al ingreso x o no, y el % de comisión y la cantidad de dinero que significa para cada uno de los cajeros. Este registro no se podrá eliminar ni editar.

# Accesos

# Rutas habilitadas para usuario administrador

* GET /users/:usernamet
* POST /users
* post /login

*
