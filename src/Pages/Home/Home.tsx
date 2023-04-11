import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/Navbar";
import IconWhite from "../../Assets/Img/IconWhite.png";
import fe from "../../Assets/Img/fe.jpg";
import credo from "../../Assets/Img/credo.jpg";
import "./Style/Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>

      <main>
        <section id="intro">
          <div className="banner" />
          <div className="items_container">
            <div className="container_background">
              <div className="container_items">
                <div className="container_items_image">
                  <img src={IconWhite} />
                </div>
                <div className="container_items_title">
                  <h1>Eden's Gate</h1>
                </div>
                <div className="container_items_description">
                  <h3>
                    Não julgue e você não será julgado. Não condene e você não
                    será condenado. Perdoe e você será perdoado.
                  </h3>
                  <p>
                    Não importa o que construimos e alcançamos, sempre damos um
                    jeito de destruir tudo, babilônia, Roma, impérios acendem,
                    impérios sucumbem, nós sobrevivemos a isso, mas só acabamos
                    muito mais perto do abismo e agora estamos bem aqui,
                    esperando alguém dar um empurrãozinho. Esse é o mundo que
                    construimos para nossas crianças? Comunidades divididas,
                    muros enormes erguidos porque lideres são impotentes para
                    agir, valentões confusos demais para liderar por justiça, eu
                    não pedi por isso, eu fui escolhido. - Joseph Seed.
                  </p>
                  <button>Ler mais...</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="info">
          <div className="info">
          <div className="info_container_first">
              <div className="container_image">
                <figure>
                  <img src={fe} />
                </figure>
              </div>
              <div className="container_text">
                <h1>Qual nosso propósito?</h1>
                <p>
                  Dizem que podemos ser o que quisermos, certo? Um cantor
                  famoso, uma celebridade, uma estrela de cinema que todos
                  teríamos sucesso, mas não, isso não é verdade, nos vivemos
                  vidas mundanas fazendo o que todo mundo faz, dia a pós dia,
                  todos acham que tem livre arbítrio, mas pare a e pense, quando
                  foi a ultima vez que não fez algo que não foi solicitado ou
                  exigido? não, vão vivemos a nossas vidas vivemos as deles, e
                  achamos que temos livres arbítrio, mas isso é mentira, é uma
                  ilusão.
                </p>
              </div>
            </div>

            <div className="info_container_second">
              <div className="container_text">
                <h1>Qual nosso propósito?</h1>
                <p>
                  Este mundo é fraco, débil, nos esquecemos o que significa ser
                  forte, nossos heróis serão deuses, e agora nossos heróis são
                  ímpios, fracos, frágeis, doentes, nos deixamos os fracos
                  ditarem os fortes, então nos chocamos a nos vermos a
                  deriva,mas a historia sabe o valor do sacrifício, selecionar o
                  rebanho para que permaneça forte, repetidas vezes a vida da
                  maioria pesou mais do que a minoria,e assim sobrevivemos e
                  esquecemos, e agora é a hora de pagar a conta. Agora o colapso
                  é eminente e a vida da minoria pesa mais do que a da maioria e
                  quando uma nação não sabe o que é fome e desespero sucumbir a
                  loucura estaremos prontos. Nós selecionaremos o rebanho,
                  faremos o que deve ser feito.
                </p>
              </div>
              <div className="container_image">
                <figure>
                  <img src={credo} />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section id='cards'>
            <div className="cards">
                <div className="container_cards">
                  
                </div>
            </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
