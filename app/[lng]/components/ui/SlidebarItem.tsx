const SidebarItem = ({
  icon,
  title,
  isActive,
  hasSubmenu,
  onClick,
  childrenItem,
}: any) => {
  return (
    <li className="mb-2">
      <a
        href="#"
        className={`flex items-center p-2 hover:bg-gray-200 ${
          isActive ? "bg-blue-100" : ""
        }`}
      >
        {icon}
        <span className="ml-2">{title}</span>
        {hasSubmenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </a>
      {childrenItem && childrenItem.length > 0 && (
        <ul>
          {childrenItem.map((child: any) => (
            <li key={child.key}>
              <a href="#" className="flex items-center p-2 hover:bg-gray-200">
                <span className="ml-2">{child.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default SidebarItem;
