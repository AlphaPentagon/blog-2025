type BlogPostPageProps = {
  params: {
    slug: string;
  };
}

export default function BlogpostPage({ params }: BlogPostPageProps) {
  return <h1>Blog: {params.slug}</h1>;
}