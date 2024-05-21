import TopBar from "./topBar";

export default function Carousel() {

return (
    <>
    <div className="overflow-hidden whitespace-nowrap bg-[#FFC8DD] text-[#fff] lg:py-[4.5px] text-lg tracking-wide">
      <div className="inline-block animate-loop-scroll">
        {[...Array(10)].map((announcement, index) => {
            return (
                <span key={index} className="mx-[150px] tracking-wider font-semibold"> İlk Siparişe Özel "DUNDER10" Kodu ile %10 İndirim! Şimdi Alışverişe Başla! </span>
            )
        })}
        </div>
    </div>
        <TopBar/>
    </>
);
}
