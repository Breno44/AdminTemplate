import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Perfil() {
  const { alternarTema } = useAppData();

  return (
    <Layout titulo="Perfil do usuário" subtitulo="Administre as suas informações de usuário!">
      <h1>Perfil de usuário</h1>
    </Layout>
  );
}
