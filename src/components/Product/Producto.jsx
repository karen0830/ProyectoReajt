export const Producto = () => {
  return (
    <>
      <div className="w-full  h-screen flex justify-center items-center">
        <div className="bg-slate-500 w-96 rounded-md" >
          <img className="w-96 rounded-t-lg" src="images/emigrar-a-Canada-como-desarrollador-web.png" alt="yo" />
          <div className="py-2.5 px-2.5 text-left gap-x-6 flex flex-col gap-y-3.5">
            <h4 className="text-neutral-50">Categoría</h4>
            <p className="text-neutral-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?</p>
            <h4 className="text-neutral-50">$Price</h4>
          </div>
        </div>
      </div>
    </>
  );
};