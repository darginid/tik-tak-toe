export function ButtonReset({ onClick }) {
  return (
    <button
      className="border border-solid border-black bg-violet-500 my-1 px-1 pb-0.5 cursor-pointer rounded-sm text-xs hover:bg-violet-700"
      onClick={onClick}
    >
      Начать заново
    </button>
  );
}
