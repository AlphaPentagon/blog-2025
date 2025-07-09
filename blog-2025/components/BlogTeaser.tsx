import Image from "next/image";

type BlogTeaserProps = {
  title: string,
  description: string,
  date: string,
  image: {
    src: string,
    alt: string
  },
  body: string
}

export default function BlogTeaser({ title, description, date, image, body }: BlogTeaserProps) {
  return (
    <div className="flex flex-col gap-2 p-6 bg-white">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg mb-2">{description}, {date}</p>
      <Image
        src={image.src}
        alt={image.alt}
        width={1000}
        height={300}
        className="rounded-md box-content shadow-md"
      />
      <p className="mt-4">{body}</p>
    </div>
  );
}