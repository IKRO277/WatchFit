import {Container, Header, ImageHeader, Img, Separator,ConteinerHeader, Icons, ContainerIcons, BotaoLogin, HeaderTitle} from './styles'
import WatchFitLogo from './assets/img/Watchfit-logo.png'
import Instagran from './assets/img/icon/instagram.png'
import Google from './assets/img/icon/google.png'
function App() {

  return (
    <>
      
      <Container>
        <Header>
          <ImageHeader>
            <Img src={WatchFitLogo} />
          </ImageHeader>
          <Separator />
          <ConteinerHeader>
            <BotaoLogin>
              <span>Cadastre-se</span>
            </BotaoLogin>
           <ContainerIcons>
            <Icons src={Google}/>
            <Icons src={Instagran}/>
           </ContainerIcons>
          </ConteinerHeader>
          <HeaderTitle>
            A tecnologia que transforma uma academia
          </HeaderTitle>
        </Header>
      </Container>
    </>
  )
}

export default App
