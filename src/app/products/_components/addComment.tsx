"use client";
import { useFormStatus } from "react-dom";
import { addComment } from "../_actions/comment";
import { useState } from "react";

export default function AddComment({ product }) {
    const [productId, setProductId] = useState(product);
  return (
    <form action={addComment}>
      <div className="flex flex-col gap-1">
        <label htmlFor="author" className="font-semibold">İsminiz</label>
        <input
          type="text"
          name="author"
          id="author"
          className="border-b border-[#000] bg-transparent placeholder:text-gray-500 pl-1 py-0.5 focus:outline-none"
          placeholder="İsminiz Girin"
        />
        <label htmlFor="header" className="font-semibold">Yorum Başlığı</label>
        <input
          type="text"
          name="header"
          id="header"
          className="border-b border-[#000] bg-transparent placeholder:text-gray-500 pl-1 py-0.5 focus:outline-none"
          placeholder="Bilinmesi gereken en önemli şey nedir?"
        />
        <label htmlFor="content" className="font-semibold">Yorumunuz</label>
        <textarea
          name="content"
          id="content"
          className="border-b border-[#000] bg-transparent placeholder:text-gray-500 pl-1 py-0.5 resize-none focus:outline-none"
          placeholder="Nelerden hoşlandınız veya neleri beğenmediniz? bu ürünü ne için kullandınız?"
        />
        <label htmlFor="star" className="font-semibold">Genel Puan</label>
        <input
          type="text"
          name="star"
          id="star"
          className="bg-transparent placeholder:text-gray-500 pl-1 py-0.5 focus:outline-none"
          placeholder="Yorum Puaninizi girin"
        />
        <input
          type="text"
          name="productId"
          id="productId"
          readOnly
          hidden
          className="bg-transparent placeholder:text-gray-500 pl-1 py-0.5 focus:outline-none"
          value={productId}
        />
      </div>
      <CommentSubmitButton/>
    </form>
  );
}

function CommentSubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="flex ml-auto rounded-full px-4 py-1 border border-black text-black font-semibold text-lg transition-colors hover:bg-[#FFAFCC] hover:text-white"
      >
        {pending ? "Gönderiliyor..." : "Yorumu Gönder"}
      </button>
    );
  }