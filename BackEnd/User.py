from Read import *
from ScriptDB import *

class User:
     def __init__(self):
          pass
     
     def loginokuser(self):
          
        print("===============================================================")
        print("===============================================================")
        print("Bienvenido al programa visualizador ISPC FOOD")
        print("Sesion Iniciada como Usuario")
        print("===============================================================")
        print("===============================================================")
        user = input("Ingrese su usuario de MySQL: ")
        password = input("Ingrese su contraseña de MySQL: ")
        print("===============================================================")
        
        mi_objeto = Conexion(user, password, 'food_ispc')
        mi_objeto.infoconect()

        while True:
                try:
                    option = int(input("Menu de opciones\n1)Inspeccionar Productos\n"
                                        "2)Salir\nSu opcion ==>"))
                
                    
                    if option == 1:
                        mi_objeto = Read(user,password)
                        mi_objeto.inforead()                       
                        print("===============================================================")                        
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")

                    elif option == 2:
                        print("===============================================================")
                        print("Gracias por usar el panel de usuario!!!")
                        print("===============================================================")
                        exit()

                    else:
                        print("===============================================================")
                        print("Ingrese una opcion correcta!!!\nNumeros del 1 al 2!!!")
                        print("===============================================================")  

                except ValueError as e:
                    #MANEJO DE ERROR PARA DEPURAR HABILITAR DE SER NECESARIO
                    #print("Error: ",e)
                    print("===============================================================")
                    print("Ingrese una opcion correcta\nNumero del 1 al 2 Y solo numeros por favor!!!")
                    print("===============================================================")