
import Cabecalho from '../componentes/Cabecalho.jsx';
import Conteudo from '../componentes/Conteudo.jsx';
import Menu from '../componentes/Menu.jsx';
import Secao from '../componentes/Secao.jsx';
import InputNome from '../componentes/InputNome.jsx';
import InputEmail from '../componentes/InputEmail.jsx';
import InputSenha from '../componentes/InputSenha.jsx';
import Botao from '../componentes/Botao.jsx';
function Perfil() {
return (
    <>
        <Cabecalho></Cabecalho>
        <Conteudo>
            <Menu />
            <Secao texto="Perfil do Aluno">
                <form action="#" method="post">
                    <InputNome />
                    <InputEmail />
                    <InputSenha />
                    <Botao texto="Salvar" />
                </form>
            </Secao>
        </Conteudo>
    </>
);
}

export default Perfil;

