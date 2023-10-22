import mysql.connector

class Delete:
    def __init__(self, user, password):
        self.user = user
        self.password = password

    def infodelete(self):
        while True:
            try:
                conexion = mysql.connector.connect(user=self.user, password=self.password, host='localhost', database='food_ispc', port=3306)
                cursor = conexion.cursor()
                print("===============================================================")
                print("Conexión establecida correctamente")
                print("===============================================================")

                # Consulta para seleccionar información de productos disponibles
                query = "SELECT idProducto, nombreProducto FROM producto"
                cursor.execute(query)

                productos = cursor.fetchall()

                if productos:
                    print("===============================================================")
                    print("Productos disponibles:")
                    for producto in productos:
                        print(f"ID de Producto: {producto[0]}, Nombre: {producto[1]}")
                    print("===============================================================")

                    idProducto = input("Ingrese el ID del producto que desea eliminar: ")

                    # Verificar si el producto existe
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

                        confirmacion = input("¿Está seguro de que desea eliminar este producto? (S/N): ").strip().lower()
                        if confirmacion == "s":
                            # Eliminar el producto de la base de datos
                            query = "DELETE FROM producto WHERE idProducto = %s"
                            cursor.execute(query, (idProducto,))
                            conexion.commit()
                            print("Producto eliminado con éxito.")
                        else:
                            print("Operación de eliminación cancelada.")
                    else:
                        print("No se encontró un producto con el ID proporcionado.")
                else:
                    print("No se encontraron productos disponibles en la base de datos.")

                cursor.close()
                conexion.close()
                
                # Aquí puedes agregar más lógica de eliminación si es necesario
                break
            except mysql.connector.Error as err:
                print(f"Error de MySQL: {err}")


