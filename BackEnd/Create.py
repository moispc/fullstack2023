import mysql.connector

class Create:
    def __init__(self, user, password):
        self.user = user
        self.password = password

    def infocreate(self):
        while True:
            conexion = mysql.connector.connect(user=self.user, password=self.password, host='localhost', database='food_ispc', port=3306)
            cursor = conexion.cursor()
            print("===============================================================")
            print("Conexión establecida correctamente")
            print("===============================================================")

            query = "SELECT idCategoria, nombreCategoria FROM categoriaproductos"
            cursor.execute(query)

            categorias = cursor.fetchall()

            if categorias:
                print("===============================================================")
                print("Categorías disponibles:")
                for categoria in categorias:
                    print(f"ID de Categoría: {categoria[0]}, Nombre de Categoría: {categoria[1]}")
                print("===============================================================")

                idCategoria = input("Ingrese el ID de la categoría para el nuevo producto: ")

                query = "SELECT idCategoria FROM categoriaproductos WHERE idCategoria = %s"
                cursor.execute(query, (idCategoria,))
                categoria_existente = cursor.fetchone()

                if not categoria_existente:
                    print("La categoría seleccionada no existe. Asegúrate de ingresar un ID de categoría válido.")
                else:
                    idProducto = input("Ingrese el ID del producto: ")

                    query = "SELECT idProducto FROM producto WHERE idProducto = %s"
                    cursor.execute(query, (idProducto,))
                    producto_existente = cursor.fetchone()

                    if producto_existente:
                        print("El producto con el mismo ID ya existe en la base de datos.")
                    else:
                        nombreProducto = input("Ingrese el nombre del producto: ")
                        descripcion = input("Ingrese la descripción del producto: ")
                        precio = input("Ingrese el precio del producto: ")

                        query = "INSERT INTO producto (idProducto, nombreProducto, descripcion, precio, idCategoria) VALUES (%s, %s, %s, %s, %s)"
                        valores = (idProducto, nombreProducto, descripcion, precio, idCategoria)
                        cursor.execute(query, valores)

                        conexion.commit()
                        cursor.close()
                        conexion.close()
                        print("===============================================================")
                        print("Producto ingresado correctamente.")
                        print("===============================================================")
                        break
            else:
                print("No se encontraron categorías en la base de datos.")
