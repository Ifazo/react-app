// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrCwTR2Qg98Lbr1qejfll2k01vCP77Lm4",
  authDomain: "react-app-ifaz.firebaseapp.com",
  databaseURL: "https://react-app-ifaz-default-rtdb.firebaseio.com",
  projectId: "react-app-ifaz",
  storageBucket: "react-app-ifaz.appspot.com",
  messagingSenderId: "709318665389",
  appId: "1:709318665389:web:780f83899d8faf02095224",
  measurementId: "G-5T15RJ4FHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

const productsRef = collection(db, 'products')
const categoriesRef = collection(db, 'categories')

export const getProducts = async () => {
  const products = await getDocs(productsRef)
    .then((querySnapshot) => {
      let products = []
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() })
      });
      return products
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return products
}

export const getProduct = async (id) => {
  const productRef = doc(productsRef, id)
  const product = await getDoc(productRef)
  if (product.exists()) {
    return { id: product.id, ...product.data() }
  }
  else {
    console.log("No such document!");
  }
}

export const createProduct = async (product) => {
  try {
    const docRef = doc(productsRef)
    await setDoc(docRef, product)
    console.log("Product added:", product);
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

export const updateProduct = async (id, product) => {
  try {
    const docRef = doc(productsRef, id)
    await updateDoc(docRef, product)
    console.log("Product updated:", product);
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(productsRef, id))
    console.log("Product deleted:", id);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

export const getProductByCategory = async (category) => {
  const products = await getDocs(productsRef)
    .then((querySnapshot) => {
      let products = []
      querySnapshot.forEach((doc) => {
        if (doc.data().category === category) {
          products.push({ id: doc.id, ...doc.data() })
        }
      });
      return products
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return products
}

export const searchProducts = async (searchTerm) => {
  const products = await getDocs(productsRef)
    .then((querySnapshot) => {
      let products = []
      querySnapshot.forEach((doc) => {
        if (doc.data().title.toLowerCase().includes(searchTerm.toLowerCase())) {
          products.push({ id: doc.id, ...doc.data() })
        }
      });
      return products
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return products
}

export const getCategories = async () => {
  const categories = await getDocs(categoriesRef)
    .then((querySnapshot) => {
      let categories = []
      querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, ...doc.data() })
      });
      return categories
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return categories
}
