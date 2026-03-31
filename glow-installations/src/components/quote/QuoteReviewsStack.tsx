import Image from "next/image";

const quoteReviews = [
  {
    name: "Nathalie A.",
    stars: 5,
    text: "You want to have your lights the way you want them or need help to make it happen. Those guys are AWESOME! Come on time, go above and beyond working until the work is done and add perks too! Give them a chance.",
    photo: "/images/review-project-nathalie.webp",
  },
  {
    name: "Lisa R.",
    stars: 5,
    text: "Zuar and Alex have installed lights on our house for the last three years. These guys are the best — professional, on time, and very detail oriented. Supporting local business and great guys is a double bonus.",
    photo: "/images/review-project-lisa.webp",
  },
  {
    name: "Mike S.",
    stars: 5,
    text: "We have never seen our house look this good! The amount of joy we got after seeing our finished display was totally worth the price. Alex and Zuar were very professional and careful.",
    photo: "/images/review-project-mike.webp",
  },
  {
    name: "Serena R.",
    stars: 5,
    text: "We loved working with Zuar and Alex!!! They did an awesome job putting up our Christmas lights!!! So professional and nice. We will definitely be utilizing their services again!!!",
    photo: "/images/review-project-serena.webp",
  },
];

export function QuoteReviewsStack() {
  return (
    <div className="flex flex-col gap-4">
      {quoteReviews.map((review) => (
        <div
          key={review.name}
          className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-center"
        >
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={review.photo}
              alt={review.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div className="min-w-0 max-w-md">
            <div className="mb-1 flex justify-center gap-0.5">
              {Array.from({ length: review.stars }).map((_, i) => (
                <span key={i} className="text-sm text-[var(--gold)]">
                  ★
                </span>
              ))}
            </div>
            <p className="line-clamp-3 text-sm leading-relaxed text-white/75">{review.text}</p>
            <p className="mt-1 text-xs font-semibold text-[var(--gold)]">{review.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
