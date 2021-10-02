import React from "react";
import Logo from "./Logo";
import { IconeAjustes, IconeCasa, IconeSino, IconeLogout } from "../../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div
        className={`flex flex-col justify-center items-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="inicio" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeLogout}
          onClick={() => alert("você saiu")}
          className={`text-red-600 hover:bg-red-400 hover:text-white`}
        />
      </ul>
    </aside>
  );
}
