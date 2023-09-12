from Read import *
from Update import *
from Delete import *

print("===============================================================")
print("===============================================================")
print("Bienvenido al programa visualizador ISPC FOOD")
print("Sesion Iniciada como Usuario")
print("===============================================================")
print("===============================================================")


while True:
        try:
            option = int(input("Menu de opciones\n1)Inspeccionar Productos\n\
2)Salir\nSu opcion ==>"))
        
            option = int(option)
            if option == 1:
                nombre = input("Ingrese el nombre del producto:\n")
                #LOGICA PARA LEER UN PRODUCTO
                #producto = Read()
                #producto.inforequest()
                #print("Producto encontrado: ",producto.articulo,"Con exito")
                print("===============================================================")
                print(f'Producto encontrado: {nombre} Con exito')
                print("VOLVIENDO AL MENU PRINCIPAL...")
                print("===============================================================")

            elif option == 2:
                print("===============================================================")
                print("Gracias por usar el panel de usuario!!!")
                print("===============================================================")
                exit()

            else:
                print("===============================================================")
                print("Ingrese una opcion correcta!!!\nNumeros del 1 al 4!!!")
                print("===============================================================")  

        except ValueError as e:
            #MANEJO DE ERROR PARA DEPURAR HABILITAR DE SER NECESARIO
            #print("Error: ",e)
            print("===============================================================")
            print("Ingrese una opcion correcta\nNumero del 1 al 4 Y solo numeros por favor!!!")
            print("===============================================================")