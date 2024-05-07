"use client"


import { startTransition } from "react";
import { deleteTableProduct } from "../_actions/products";
import { DropdownMenuItem } from "~/components/ui/dropdown-menu";


export function DeleteDropdownItem({ id }: { id: string}) {

    return (
        <DropdownMenuItem onClick={() => {
            startTransition(async () => {
                await deleteTableProduct(id)
            })
        }}>Delete</DropdownMenuItem>
    )

}

