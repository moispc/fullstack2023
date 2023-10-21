import mysql.connector

class Read:
    def __init__(self, user, password):
        self.user = user
        self.password = password

    def inforead(self):
        while True:
            try:
                conexion = mysql.connector.connect(user=self.user, password=self.password, host='localhost', database='food_ispc', port=3306)
                cursor = conexion.cursor()
                print("===============================================================")
                print("Conexión establecida correctamente")
                print("===============================================================")

                # Consulta para seleccionar información de productos disponibles
                query = "SELECT idProducto, nombreProducto, descripcion, precio FROM producto"
                cursor.execute(query)

                productos = cursor.fetchall()

                if productos:
                    print("===============================================================")
                    print("Productos disponibles:")
                    for producto in productos:
                        print(f"ID de Producto: {producto[0]}")
                        print(f"Nombre: {producto[1]}")
                        print(f"Descripción: {producto[2]}")
                        print(f"Precio: {producto[3]}")
                        print("------------------------------------------------------------")
                    print("===============================================================")
                else:
                    print("No se encontraron productos disponibles en la base de datos.")

                conexion.commit()
                cursor.close()
                conexion.close()
                
            
                break
            except mysql.connector.Error as err:
                print(f"Error de MySQL: {err}")
