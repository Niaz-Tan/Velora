const Productpage = async ({ params }) => {
  const { id } = await params;
  return <div>{id}</div>;
};

export default Productpage;
