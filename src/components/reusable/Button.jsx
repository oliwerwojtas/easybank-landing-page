export const Button = ({ className }) => {
  return (
    <button
      className={`text-xs font-semibold px-5 py-2 cursor-pointer transition duration-300 ease-in-out rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 text-gray-50 hover:brightness-110 sm:text-sm sm:px-4 sm:py-1 ${className}`}
    >
      Request Invite
    </button>
  );
};
