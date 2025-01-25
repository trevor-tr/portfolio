const Grid = () => {
  return (
    <>
      <div className="absolute md:top-10 top-2 w-full h-[1px] bg-zinc-400" />
      <div className="absolute md:left-10 left-2 min-h-full h-screen w-[1px] bg-zinc-400" />
      <div className="absolute md:right-10 right-2 min-h-full h-screen w-[1px] bg-zinc-400" />
      <div className="absolute md:bottom-10 bottom-2 w-full h-[1px] bg-zinc-400" />
    </>
  );
};

export default Grid;
