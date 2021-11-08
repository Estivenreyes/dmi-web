# 🌟 Promises
Utilizamos las promesas para funciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

- `pendiente` (pending): estado inicial.
- `cumplida` (fulfilled): se completó satisfactoriamente.
- `rechazada` (rejected): la operación falló.
---

## HTTP request methods
- `GET`: Solicita al servidor un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.
- `POST`: Se utiliza para enviar un recurso (datos) específico al servidor. 
- `PUT`: Remplaza o modifica la información de un recurso específico en el servidor.
- `DELETE`: Elimina un recurso del servidor.

---

## How to resolve a promise?
### 1️⃣ .Then
```
const myFunction = () => {
    myResources().then((result) => {
        console.log(result);
    });
};
``` 

### 2️⃣ Async Await
```
const myFunction = async () => {
    const result = await myResources();
    console.log(result);
};
``` 
## Error handling
Utilizamos el método `catch()`, el cual solo se ejecuta en los casos en los que la promesa se marca como `Rejected`.
Como buena práctica, siempre se debe tener en cuenta un escenario donde las peticiones del servidor pudieran fallar.

```
try {
    await myResources();
} catch (e) {
    console.log("El recurso falló");
}
```
## Promise based HTTP client: axios
Axios es una librería de Javascript que nos facilita la comunicación con los recursos de un servidor.
```
const myFunction = async () => {
    const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    console.log(pokemon);
};
``` 