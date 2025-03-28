const ProductCard = ({ item }) => {
  return (
    <div className="h-[250px] w-[250px] border border-black p-2 flex flex-col justify-center items-center">
      <img
        src={item?.thumbnail}
        alt={item?.title}
        className="h-[100px] w-[100px]"
      />
      <h1>{item?.title}</h1>
    </div>
  );
};

export default ProductCard;
