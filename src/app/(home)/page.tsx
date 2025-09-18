import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import ProductCard , {Product} from "./components/product-card"
const products: Product[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Cheese & tomato base',
    image: '/pizza.png',
    price: 850,
    category: 'pizza',
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description: 'Loaded with pepperoni',
    image: '/pepperoni pizza.png',
    price: 1200,
    category: 'pizza',
  },
  {
    id: '3',
    name: 'BBQ Chicken Pizza',
    description: 'Smoky BBQ chicken',
    image: '/bbq chicken pizza.png',
    price: 1350,
    category: 'pizza',
  },
  {
    id: '4',
    name: 'Veggie Delight Pizza',
    description: 'Fresh garden veggies',
    image: '/veggies delight pizza.png',
    price: 950,
    category: 'pizza',
  },
  {
    id: '5',
    name: 'Cheese Lovers Pizza',
    description: 'Triple cheese blend',
    image: '/cheese pizza.png',
    price: 1100,
    category: 'pizza',
  },
];

const beverageProducts: Product[] = [
  {
    id: '1',
    name: 'Mint Margarita',
    description: 'Fresh mint cooler',
    image: '/mint margarita.png',
    price: 250,
    category: 'beverage',
  },
  {
    id: '2',
    name: 'Slush',
    description: 'Icy fruit drink',
    image: '/slush.png',
    price: 200,
    category: 'beverage',
  },
  {
    id: '3',
    name: 'Cold Drink',
    description: 'Chilled soft drink',
    image: '/cold drink.png',
    price: 180,
    category: 'beverage',
  },
  {
    id: '4',
    name: 'Chocolate Milkshake',
    description: 'Thick choco shake',
    image: '/chocalate shake.png',
    price: 300,
    category: 'beverage',
  },
  {
    id: '5',
    name: 'Iced Coffee',
    description: 'Cool coffee mix',
    image: '/iced coffee.png',
    price: 280,
    category: 'beverage',
  },
];

export default function Home() {
  return (
    <>
    <section className="bg-white">
      <div className="container flex items-center justify-between py-24">
        <div>
          <h1 className="text-7xl font-black font-sans loading-2">
            Super Delicious Pizza in <br />
            <span className="text-primary">45 minutes!</span>
            </h1>
            <p className="text-2xl mt-8 maz-w-lg loading-snug">Enjoy a free meal if your order takes more than 45 minutes!</p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">Get your pizza now</Button>
          
        </div>
        <div><Image alt="pizza" src={'/pizza.png'} width={400} height={400}></Image></div>
      </div>
    </section>

    <section>
      <div className=" container py-12">
        <Tabs defaultValue="pizza">
        <TabsList>
        <TabsTrigger value="pizza" className="text-md">Pizza</TabsTrigger>
        <TabsTrigger value="beverages" className="text-md" >Beverages</TabsTrigger>
        </TabsList>
        <TabsContent value="pizza">
          <div className="grid grid-cols-4 gap-6 mt-6">
          {products.map((product) =>(
            <ProductCard product = {product} key={product.id}/>
          )
          
          )}
          </div>
          </TabsContent>
        <TabsContent value="beverages">
          <div className="grid grid-cols-4 gap-6 mt-6">
          {beverageProducts.map((product) =>(
            <ProductCard product = {product} key={product.id}/>
          )
          
          )}
          </div>
        </TabsContent>
        </Tabs>


      </div>
    </section>
    </>
  )
}
