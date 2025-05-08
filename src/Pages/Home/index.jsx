import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
      
  }, [])

  return (
    
      <Layout >
        Home
        <div className="grid gap-3 gap-y-11 grid-cols-3 w-full max-w-screen-lg lg:grid-cols-4">
        {
          items?.map((item) => (
            <Card key={item.id} data={item}/>
          ))
        }
        </div>
        <ProductDetail />
      </Layout>
    
  )
}

export default Home;
