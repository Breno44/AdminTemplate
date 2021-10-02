import { IconeLua, IconeSol } from "../icons";

interface BotaoAlternarTemaProps {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === "dark" ? (
    <div onClick={props.alternarTema}>
      <div>{IconeSol}</div>
      <div>
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div>a</div>
  );
}
