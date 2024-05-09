import { auth } from "@clerk/nextjs/server"
import { getCartItems } from "~/server/queries";


// console.log(userId)


export default async function CartPage() {
    const userCartItems = await getCartItems();


    return (
        <div className="text-white bg-red-400">
            {userCartItems.map((cartItem) => (
                <div key={cartItem.id}>
                    <p className="text-white text-[50px]">{cartItem.quantity}</p>
                </div>
            ))}
        </div>
    )
}