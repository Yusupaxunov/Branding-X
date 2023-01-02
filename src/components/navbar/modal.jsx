import { Block, BorderBtn, Links, ModalBurger, Ways } from "./modalCss";


const Modal = () => {

  return (
    <>
        <Block>
        <ModalBurger>
            <Links>
                <BorderBtn>
                    <Ways>Home</Ways>
                </BorderBtn>
                <BorderBtn>
                    <Ways>About</Ways>
                </BorderBtn>
                <BorderBtn>
                    <Ways>Sevices</Ways>
                </BorderBtn>
                <BorderBtn>
                    <Ways>Contant</Ways>
                </BorderBtn>
                
            </Links>
        </ModalBurger>
    </Block>
    </>
  )
}

export default Modal;