# 📦 Firestore
Base de datos NoSQL flexible y escalable, con el fin de almacenar y sincronizar datos para el desarrollo tanto del lado del cliente como del servidor.

## How to use it?
```
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
const app = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(app);
```

## 🔍 (GET) Read resources
### Read a single doc
- `doc`
- `getDoc`
```
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
const docRef = doc(db, "NOMBRE_DE_LA_COLECCION", "IDENTIFICADOR_DEL_DOCUMENTO");
const docSnap = await getDoc(docRef);
const data = docSnap.data();
```

### Read an entire collection
- `collection`
- `getDocs`
```
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
const collectionRef = collection(db, "NOMBRE_DE_LA_COLECCION");
const { docs } = await getDocs(collectionRef);

docs.forEach((doc) => {
    console.log(doc.data());
});
```

## ➕ (POST/PUT) Add data
- `doc`
- `setDoc`


Con un ID definido...
```
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
await setDoc(doc(db, "NOMBRE_DE_LA_COLECCION", "IDENTIFICADOR_DEL_DOCUMENTO"), {
    DATOS_A_GUARDAR (PROPIEDADES DE UN OBJETO)
});
```

Con un ID generado por Firebase...
```
await addDoc(collection(db, "NOMBRE_DE_LA_COLECCION"), {
    DATOS_A_GUARDAR (PROPIEDADES DE UN OBJETO)
});
```

## 🗑 (DELETE) Remove data
```
import { doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
await deleteDoc(doc(db, "NOMBRE_DE_LA_COLECCION", "IDENTIFICADOR_DEL_DOCUMENTO"));
```