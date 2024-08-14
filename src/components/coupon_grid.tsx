import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Mock data for coupons
const coupons = [
  { id: 1, name: "Aéropostale", image: "/placeholder.svg" },
  { id: 2, name: "Allen Solly", image: "/placeholder.svg" },
  { id: 3, name: "Amazon Pay Gift Card", image: "/placeholder.svg" },
  { id: 4, name: "Amazon Shopping Voucher", image: "/placeholder.svg" },
  { id: 5, name: "Arrow", image: "/placeholder.svg" },
  { id: 6, name: "Cleartrip", image: "/placeholder.svg" },
  { id: 7, name: "Croma", image: "/placeholder.svg" },
  { id: 8, name: "AJIO", image: "/placeholder.svg"},
  { id: 9, name: "Myntra", image: "/placeholder.svg"},
  { id: 10, name: "Nyka", image: "/placeholder.svg"},
  { id: 11, name: "MamaEarth", image: "/placeholder.svg"},
  { id: 12, name: "Jio Air Fiber", image: "/placeholder.svg"},
  { id: 13, name: "Decathlon", image: "/placeholder.svg"},
  { id: 14, name: "Flipkart", image: "/placeholder.svg"},
  { id: 15, name: "Blinkit", image: "/placeholder.svg"},
  { id: 16, name: "Zapto", image: "/placeholder.svg"},
  { id: 17, name: "Zomato", image: "/placeholder.svg"},
  { id: 18, name: "Swiggy Gold", image: "/placeholder.svg" },
]

export default function RedeemComponent() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Available Coupons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {coupons.map((coupon) => (
          <Card key={coupon.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{coupon.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <img
                src={coupon.image}
                alt={`${coupon.name} coupon`}
                className="w-full h-32 object-contain"
              />
            </CardContent>
            <CardFooter>
              <Link href={`/redeem/${coupon.id}`} passHref>
                <Button className="w-full">Redeem Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </div>
  )
}