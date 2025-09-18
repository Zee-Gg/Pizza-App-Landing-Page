// import Image from "next/image";
// import React from "react";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import ToppingList from "./topping-list";
// import { ShoppingCart } from "lucide-react";

// export type Product = {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
//   category: "pizza" | "beverage";
// };

// type PropTypes = { product: Product };

// export default function ProductCard({ product }: PropTypes) {
//   return (
//     <Card className="border-none rounded-xl">
//       <CardHeader className="flex items-center justify-center">
//         <Image alt="pizza-image" width={150} height={150} src={product.image} />
//       </CardHeader>

//       <CardContent>
//         <h2 className="text-xl font-bold">{product.name}</h2>
//         <p className="mt-2">{product.description}</p>
//       </CardContent>

//       <CardFooter className="flex items-center justify-between mt-4">
//         <p>
//           <span>From </span>
//           <span className="font-bold">Rs{product.price}</span>
//         </p>

//         <Dialog>
//           <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
//             Choose
//           </DialogTrigger>

//           <DialogContent className="max-w-3xl p-0 bg-gray-300">
//             <div className="flex">
//               {/* Left side image */}
//               <div className="w-1/3 bg-white rounded p-8 flex items-center justify-center">
//              <Image alt="pizza-image" width={150} height={150} src={product.image} />
//              {/* <Image alt="pizza-image" width={150} height={150} src={product.image} /> */}
//               </div>

//               {/* Right side content */}
//               <div className="w-2/3 p-8">
//                 <h3 className="text-xl font-bold">{product.name}</h3>
//                 <p className="mt-1">{product.description}</p>

//                 {/* Size selection */}
//                 <div>
//                   <h4 className="mt-6">Choose the size</h4>
//                   <RadioGroup
//                     defaultValue="small"
//                     className="grid grid-cols-3 gap-4 mt-2"
//                   >
//                     {["small", "medium", "large"].map((size) => (
//                       <div key={size}>
//                         <RadioGroupItem
//                           value={size}
//                           id={size}
//                           className="peer sr-only"
//                           aria-label={size}
//                         />
//                         <Label
//                           htmlFor={size}
//                           className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-orange-400"
//                         >
//                           {size.charAt(0).toUpperCase() + size.slice(1)}
//                         </Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                 </div>

//                 {/* Crust selection */}
//                 <div>
//                   <h4 className="mt-6">Choose the crust</h4>
//                   <RadioGroup
//                     defaultValue="thin"
//                     className="grid grid-cols-3 gap-4 mt-2"
//                   >
//                     {["thin", "thick"].map((crust) => (
//                       <div key={crust}>
//                         <RadioGroupItem
//                           value={crust}
//                           id={crust}
//                           className="peer sr-only"
//                           aria-label={crust}
//                         />
//                         <Label
//                           htmlFor={crust}
//                           className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-orange-400"
//                         >
//                           {crust.charAt(0).toUpperCase() + crust.slice(1)}
//                         </Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                 </div>

//                 {/* Toppings */}
//                 <ToppingList />

//                 {/* Price + Button */}
//                 <div className="flex items-center justify-between mt-12">
//                   <span className="font-bold">Rs 400</span>
//                   <Button>
//                     <ShoppingCart size={20} />
//                     <span className="ml-2">Add to cart</span>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </CardFooter>
//     </Card>
//   );
// }


import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ToppingList from "./topping-list";
import { ShoppingCart } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: "pizza" | "beverage";
};

type PropTypes = { product: Product };

export default function ProductCard({ product }: PropTypes) {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="flex items-center justify-center">
        <Image alt={product.name} width={150} height={150} src={product.image} />
      </CardHeader>

      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between mt-4">
        <p>
          <span>From </span>
          <span className="font-bold">Rs{product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
            Choose
          </DialogTrigger>

          <DialogContent className="max-w-3xl p-0 bg-gray-300">
            <div className="flex">
              {/* Left side image */}
              <div className="w-1/3 bg-white rounded p-8 flex items-center justify-center">
                <Image alt={product.name} width={150} height={150} src={product.image} />
              </div>

              {/* Right side content */}
              <div className="w-2/3 p-8">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1">{product.description}</p>

                {product.category === "pizza" ? (
                  <>
                    {/* Size selection */}
                    <div>
                      <h4 className="mt-6">Choose the size</h4>
                      <RadioGroup defaultValue="small" className="grid grid-cols-3 gap-4 mt-2">
                        {["small", "medium", "large"].map((size) => (
                          <div key={size}>
                            <RadioGroupItem
                              value={size}
                              id={size}
                              className="peer sr-only"
                              aria-label={size}
                            />
                            <Label
                              htmlFor={size}
                              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-orange-400"
                            >
                              {size.charAt(0).toUpperCase() + size.slice(1)}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Crust selection */}
                    <div>
                      <h4 className="mt-6">Choose the crust</h4>
                      <RadioGroup defaultValue="thin" className="grid grid-cols-3 gap-4 mt-2">
                        {["thin", "thick"].map((crust) => (
                          <div key={crust}>
                            <RadioGroupItem
                              value={crust}
                              id={crust}
                              className="peer sr-only"
                              aria-label={crust}
                            />
                            <Label
                              htmlFor={crust}
                              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-orange-400"
                            >
                              {crust.charAt(0).toUpperCase() + crust.slice(1)}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Toppings */}
                    <ToppingList />
                  </>
                ) : (
                  <>
                    {/* Beverages: just show details */}
                    <p className="mt-6 text-gray-700">
                      Select quantity and enjoy your drink.
                    </p>
                  </>
                )}

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-12">
                  <span className="font-bold">Rs {product.price}</span>
                  <Button>
                    <ShoppingCart size={20} />
                    <span className="ml-2">Add to cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
