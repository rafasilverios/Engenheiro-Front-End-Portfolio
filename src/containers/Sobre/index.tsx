import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio alias
      voluptate eius aliquid eligendi at autem eveniet, cumque voluptatum sit
      blanditiis earum delectus, amet quisquam veniam. Mollitia delectus maxime
      voluptates?
    </Paragrafo>
    <GithubSecao>
      {/* <img src="https://github-readme-stats.vercel.app/api?username=rafasilverios&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" /> */}
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rafasilverios&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
