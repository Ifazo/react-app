import { categoriesRef } from "../lib/firebase";

export default async function CategoriesPage() {
  const categories = await categoriesRef.get();

  if (!categories.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", categories.data());
  }

  return (
    <div>
      <h1>Categories coming soon</h1>
    </div>
  );
}
