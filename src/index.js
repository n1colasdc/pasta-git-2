import soma from './calc'
import Heading from './componentes/heading';




console.log('testando webpack');

soma(2,4);
soma(10,20);

const heading = new Heading()

heading.create("Este titulo é dinâmico");
heading.create("hot reload");

