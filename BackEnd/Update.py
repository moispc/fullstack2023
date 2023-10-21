import mysql.connector

class Update:
    def __init__(self, user, password):
        self.user = user
        self.password = password

    def infoupdate(self):
        while True:
            try:
                conexion = mysql.connector.connect(user=self.user, password=self.password, host='localhost', database='food_ispc', port=3306)
                cursor = conexion.cursor()
                print("===============================================================")
                print("Conexión establecida correctamente")
                print("===============================================================")

                
                query = "SELECT idProducto, nombreProducto FROM producto"
                cursor.execute(query)

                productos = cursor.fetchall()

                if productos:
                    print("===============================================================")
                    print("Productos disponibles:")
                    for producto in productos:
                        print(f"ID de Producto: {producto[0]}, Nombre: {producto[1]}")
                    print("===============================================================")

                    idProducto = input("Ingrese el ID del producto que desea modificar: ")

                    
                    query = "SELECT idProducto, nombreProducto, descripcion, precio FROM producto WHERE idProducto = %s"
                    cursor.execute(query, (idProducto,))
                    producto = cursor.fetchone()

                    if producto:
                        print("Producto encontrado:")
                        print(f"ID de Producto: {producto[0]}")
                        print(f"Nombre: {producto[1]}")
                        print(f"Descripción: {producto[2]}")
                        print(f"Precio: {producto[3]}")
                        print("===============================================================")

                        # Solicitar los nuevos datos del producto
                        nuevo_nombre = input("Ingrese el nuevo nombre del producto: ")
                        nueva_descripcion = input("Ingrese la nueva descripción del producto: ")
                        nuevo_precio = input("Ingrese el nuevo precio del producto: ")

                        # Actualizar los datos del producto en la base de datos
                        query = "UPDATE producto SET nombreProducto = %s, descripcion = %s, precio = %s WHERE idProducto = %s"
                        valores = (nuevo_nombre, nueva_descripcion, nuevo_precio, idProducto)
                        cursor.execute(query, valores)
                        conexion.commit()

                        print("Producto actualizado con éxito.")
                    else:
                        print("No se encontró un producto con el ID proporcionado.")
                else:
                    print("No se encontraron productos disponibles en la base de datos.")

                cursor.close()
                conexion.close()
                
                
                break
            except mysql.connector.Error as err:
                print(f"Error de MySQL: {err}")
