const Card = () => {
  const item = {
    img: 'https://source.unsplash.com/400x300/?castle',
    title: 'Powerful castle',
    price: '$300',
  };
  return (
    <div className="bg-background shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-68 h-56 object-cover object-top"
        src={item.img}
        alt="main"
      />
      <div className="p-6">
        <h4 className="text-xl">{item.title}</h4>
        <div className="text-lg text-muted">{item.price}</div>
      </div>
    </div>
  );
};

export default Card;
