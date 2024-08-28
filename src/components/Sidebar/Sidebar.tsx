function  Sidebar() {
  return (
    <aside className="sticky w-1/6 h-screen pt-5 text-gray-600 border-r border-gray-300 ed top-7">
      <ul className="fixed px-5 py-3">
        <li>Dashboard</li>
        <li>Produtos</li>
        <li>Pedidos</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
