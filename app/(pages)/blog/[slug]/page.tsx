interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

const BlogDetails = ({ params }: BlogDetailsProps) => {
  return <div>{params.slug}</div>;
};

export default BlogDetails;
