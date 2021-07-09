import React from 'react'
import Navbar from '../../components/navigation/Nav'
import Title from '../../components/title/section-title'
import Footer from '../../components/footer/footer'
import './godfather.css'

function Godfather() {
    return (
        <div>
            <Navbar />
            <main>
                <section className="godfather__section">
                    <Title title="O que é apadrinhamento afetivo?" />

                    <p>Apadrinhar afetivamente uma criança é permitir que ela passe algum tempo com você, por alguns períodos, um dia da semana ou o final de semana, sem implicar qualquer vínculo jurídico.</p>

                    <p>O Padrinho ou Madrinha é alguém que queira auxiliar e acompanhar a vida de uma criança ou adolescente que está em um abrigo, e que tem pouca possibilidade de ser adotado.</p>

                    <p>Cada padrinho ou madrinha terá liberdade de escolher lugares para passear, ocasiões e demais atividades para realizar com o afilhado, participando efetivamente da vida da criança ou adolescente.</p>
                </section>

                <section className="godfather__section">
                    <Title title="O que posso fazer com meu afilhado afetivo?" />

                    <p>Veja as atividades que podem ser feitas com seu afilhado afetivo:</p>

                    <ul>
                        <li>Levar para passear;</li>
                        <li>Acompanhar e ajudar nas tarefas da escola;</li>
                        <li>Levar ao médico e ao dentista;</li>
                        <li>Realizar brincadeiras em dias de visita ao abrigo;</li>
                        <li>Levar (se desejado) o afilhado para passar um dia ou fim de semana em sua residencia.</li>
                    </ul>
                </section>

                <section className="godfather__section">
                    <Title title="Quem pode apadrinhar?" />

                    <p>Veja os critérios para o Apadrinhamento Afetivo:</p>

                    <ul>
                        <li>Ter disponibilidade de tempo para participar efetivamente da vida do(a) afilhado(a) (visitas ao abrigo, a escola, passeios, etc.);</li>
                        <li>Ter mais de 21 anos (respeitando a diferença de ser 16 anos mais velho do que a criança ou adolescente);</li>
                        <li>Participar das oficinas e reuniões com a equipe técnica do projeto;</li>
                        <li>Apresentar toda a documentação exigida;</li>
                        <li>Consentir visitas técnica na sua residência;</li>
                        <li>Respeitar as regras e normas colocadas pelos responsáveis do projeto e dos abrigos.</li>
                    </ul>
                </section>

                <section className="godfather__section">
                    <Title title="Como apadrinhar?" />

                    <p>Você pode entrar em contato diretamente com o abrigo de seu interesse, ou falar com alguma instituição que intermediam o apadrinhamento afetivo em diversos abrigos.</p>
                </section>

                <section className="godfather__section">
                    <Title title="O que é apadrinhamento financeiro?" />

                    <p>Apadrinhar uma criança é contribuir com uma pequena quantia mensal, para atender as necessidades básicas da criança: alimentação, roupas, remédios, material escolar.</p>
                    <p>Essa quantia não é dada diretamente para a criança ou sua familia, e sim para a instituição onde ela se encontra, ou para um projeto social do qual a criança participa.</p>
                    <p>Após o apadrinhamento, você passa a acompanhar a vida da criança através de relatórios periódicos, que mostram fotos, como ela está de saúde, como está seu desempenho escolar, entre outros assuntos. Pode trocar cartas com a criança, enviar presentes, e até visita-la. Fica a seu critério.</p>
                    <p>Você pode interromper a qualquer momento o apadrinhamento. Ou seja, caso você esteja passando por um periodo de dificuldades financeiras, pode cancelar o apadrinhamento, e retornar posteriormente.</p>
                    <p>Você pode apadrinhar quantas crianças quiser!</p>
                </section>

                <section className="godfather__section">
                    <Title title="Como apadrinhar?" />
                    
                    <p> forma mais prática para apadrinhar uma criança é contribuir para uma das instituições confiáveis que intermediam o apadrinhamento de crianças. Estas instituições recolhem as doações, e repassam para os projetos de sua responsabilidade. E ligam você a uma determinada criança, ou seja, você sabe exatamente que criança está apadrinhando.</p>

                    <span>Texto tirado do site <a href="http://www.padrinhonota10.com.br/">Padrinho Nota 10</a></span>

                </section>

                <section className="godfather__section">
                    <Title title="Se puder ajudar financeiramente, conheça algumas causas que valem a pena dar uma olhada" />

                    <ul>
                        <li><a href="https://actionaid.org.br/doe-agora/como-doar/mude-uma-vida/">ActionAid</a></li>
                        <li><a href="https://www.childfundbrasil.org.br/apadrinhe-uma-crianca/">ChildFund</a></li>
                        <li><a href="https://www.msf.org.br/como-ajudar/doacao/doacao-mensal">Médicos sem Fronteiras</a></li>
                    </ul>
                </section>

            </main>


            <Footer />
        </div>
    )
}

export default Godfather
