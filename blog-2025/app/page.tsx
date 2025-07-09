import BlogTeaser from "@/components/BlogTeaser";

export default function HomePage() {
  const data = {
    title: 'Blog Title',
    description: 'Blog Description',
    date: '9th July 2025',
    image: {
      src: "",
      alt: ""
    },
    body: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  };

  return (
    <div className="grid grid-cols-1 gap-8 justify-center">
      {/* Insert for loop here, 3 x blogTeaserData. */}
      <BlogTeaser title={data.title} description={data.description} date={data.date} image={data.image} body={data.body} />
      <BlogTeaser title={data.title} description={data.description} date={data.date} image={data.image} body={data.body} />
      <BlogTeaser title={data.title} description={data.description} date={data.date} image={data.image} body={data.body} />
    </div>
  );
}
