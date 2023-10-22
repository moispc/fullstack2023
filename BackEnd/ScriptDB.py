import mysql.connector

class Conexion:
    def __init__(self, user, password, database):
        self.user = user
        self.password = password
        self.database = database

    def infoconect(self):
        try:
            conexion = mysql.connector.connect(user=self.user, password=self.password, host='localhost', port=3306)
            cursor = conexion.cursor()
            
            cursor.execute("SHOW DATABASES")
            databases = [db[0] for db in cursor.fetchall()]

            if self.database in databases:
                print(f"La base de datos '{self.database}' ya existe. No es necesario crearla.")
            else:
                
                sql_file = './bbdd/food_ispc.sql'
                with open(sql_file, 'r') as sql_script:
                    sql_statements = sql_script.read()
                
                
                sql_commands = sql_statements.split(';')

                for command in sql_commands:
                    if command.strip():
                        cursor.execute(command)

                conexion.commit()
                print(f"La base de datos '{self.database}' ha sido creada exitosamente")

            cursor.close()
            conexion.close()

        except mysql.connector.Error as err:
            print(f"Error de MySQL: {err}")
