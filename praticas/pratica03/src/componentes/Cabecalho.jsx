import Icone from './Icone';
import Titulo from './Titulo';
import InputPesquisar from './InputPesquisar';
import './Cabecalho.css';
function Cabecalho() {
return (
    <header>
        <div>
            <Icone imagem="https://www.svgrepo.com/show/411955/learn.svg"
        texto="Logo do Aplicação" />
            <Titulo texto="Aluno Online" />
        </div>
        <div>
            <InputPesquisar />
            <Icone imagem="https://www.svgrepo.com/show/507851/search-square.svg"
        texto="Icone Pesquisar" />
        </div>
    </header>
);
}

export default Cabecalho;
