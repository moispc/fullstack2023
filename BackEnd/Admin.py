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


        while True:
                try:
                    print("Menu de opciones")
                    print("===============================================================")
                    option = int(input("1)Crear un nuevo Producto\n"
                            "2)Inspeccionar Productos\n3)Modificar Productos\n"
                            "4)Eliminar Productos\n5)Salir\nSu opcion ==>"))
                
                    
                    if option == 1:
                        nombre = input("Ingrese el nombre del producto:\n")
                        precio = float(input("Ingrese el precio del producto:\n"))
                        peso = float (input("Ingrese el peso del producto:\n"))
                        #LOGICA PARA CREAR UN PRODUCTO
                        #producto = Create(nombre,precio,peso)
                        #producto.inforequest()
                        print("\n" * 25)
                        print("===============================================================")
                        print(f'Ha Creado el Producto: {nombre} Con exito')
                        print("===============================================================")
                        print("VOLVIENDO AL MENU PRINCIPAL...")

                    elif option == 2:
                        nombre = input("Ingrese el nombre del producto:\n")
                        #LOGICA PARA LEER UN PRODUCTO
                        #producto = Read()
                        #producto.inforequest()
                        #print("Producto encontrado: ",producto.articulo,"Con exito")
                        print("\n" * 25)
                        print("===============================================================")
                        print(f'Producto encontrado: {nombre} Con exito')
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")

                    elif option == 3:
                        nombre = input("Ingrese el nombre del producto:\n")
                        #LOGICA PARA MODIFICAR PRODUCTO
                        #producto = Update()
                        #producto.inforequest()
                        #print("Producto Modificado: ",producto.articulo,"Con exito")
                        print("\n" * 25)
                        print("===============================================================")
                        print(f'Producto Modificado: {nombre} Con exito')
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")

                    elif option == 4:
                        nombre = input("Ingrese el nombre del producto:\n")
                        #LOGICA PARA ELIMINAR PRODUCTO
                        #producto = Delete()
                        #producto.inforequest()
                        #print("Producto Eliminado: ",producto.articulo,"Con exito")
                        print("\n" * 25)
                        print("===============================================================")
                        print(f'Producto Eliminado: {nombre} Con exito')
                        print("VOLVIENDO AL MENU PRINCIPAL...")
                        print("===============================================================")

                    elif option == 5:
                        print("\n" * 25)
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



      




   