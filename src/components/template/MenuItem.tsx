interface MenuItemProps {
  url: string;
  texto: string;
  icone: any;
}

export default function MenuItem(props: MenuItemProps) {
  return <div className={``}>{props.icone}</div>;
}
