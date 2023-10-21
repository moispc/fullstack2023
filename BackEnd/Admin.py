from ScriptDB import *
from Create import *
from Read import *
from Update import *
from Delete import *



class Admin:
    def __init__(self):
      pass
    
    def loginadminok(self):
        
        print("===============================================================")
        print("===============================================================")
        print("Bienvenido al programa editor de ISPC FOOD")
        print("Sesion Iniciada como Administrador")
        print("===============================================================")
        user = input("Ingrese su usuario de MySQL: ")
        password = input("Ingrese su contraseña de MySQL: ")
        print("===============================================================")
        
        mi_objeto = Conexion(user, password, 'food_ispc')
        mi_objeto.infoconect()
        while True:
                try:
                    print("Menu de opciones")
                    print("===============================================================")
                    option = int(input("1)Crear un nuevo Producto\n"
                            "2)Inspeccionar Productos\n3)Modificar Productos\n"
                            "4)Eliminar Productos\n5)Salir\nSu opcion ==>"))
                
                    
                    if option == 1:                                                                   
                        mi_objeto = Create(user,password)
                        mi_objeto.infocreate()
                        print("===============================================================")
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")
                    elif option == 2:
                        mi_objeto = Read(user,password)
                        mi_objeto.inforead()
                        print("===============================================================")   
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")

                    elif option == 3:
                        mi_objeto = Update(user,password)
                        mi_objeto.infoupdate()
                        print("===============================================================")                       
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")

                    elif option == 4:
                        mi_objeto = Delete(user, password)
                        mi_objeto.infodelete()
                        print("===============================================================")                       
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")

                    elif option == 5:                        
                        print("===============================================================")
                        print("Gracias por usar el panel de administrador!!!")
                        print("===============================================================")
                        exit()

                    else:
                        print("===============================================================")
                        print("Ingrese una opcion correcta!!!\nNumeros del 1 al 5!!!")
                        print("===============================================================")  

                except ValueError as e:
                    #MANEJO DE ERROR PARA DEPURAR HABILITAR DE SER NECESARIO
                    #print("Error: ",e)
                    print("===============================================================")
                    print("Ingrese una opcion correcta\nNumero del 1 al 5 Y solo numeros por favor!!!")
                    print("===============================================================")



      




   