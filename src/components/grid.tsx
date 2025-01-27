const Grid = () => {
  return (
    <>
      <div className="absolute top-2 h-[1px] w-full bg-zinc-400 md:top-10" />
      <div className="absolute left-2 h-screen min-h-full w-[1px] bg-zinc-400 md:left-10" />
      <div className="absolute right-2 h-screen min-h-full w-[1px] bg-zinc-400 md:right-10" />
      <div className="absolute bottom-2 h-[1px] w-full bg-zinc-400 md:bottom-10" />
    </>
  );
};

export default Grid;
