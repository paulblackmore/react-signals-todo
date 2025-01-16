type Props = {
  completedTodoCount: number;
};

const Header = ({ completedTodoCount }: Props) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-4 bg-slate-200 p-10 ">
      <h1 className="text-xl font-bold">
        Completed Todos ({completedTodoCount})
      </h1>
      <nav className="flex gap-2">
        <a href="#!">Link1</a>
        <a href="#!">Link2</a>
      </nav>
    </header>
  );
};

export default Header;
