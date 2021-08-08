import { NegociacaoController } from './controllers/negociacao-controller.js';
import { NegociacoesView } from './views/negociacoes-view.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
// outra forma de evitar o casting de HTMLInputElement nas situações HTMLInputElement | null
if (form) { // se form existe ou se não é undefined
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}
