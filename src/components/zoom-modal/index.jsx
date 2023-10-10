import styled from "styled-components"
import ImgCard from "../gallery/img-card"
import closeBtn from "/icons/delete.png"

let topDistance = '';

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 99;
    overflow-y: hidden;
`
const StyledDialog = styled.dialog`
    position: absolute;
    top: 25px;
    background-color: transparent;
    border: none;
    z-index: 999;
    form button {
      position: absolute;
      top: -22px;
      right: -22px;
      background-color: transparent;
      border: none;
      img{
        width: 45px;
      }
      &:hover{
        cursor: pointer;
      }
    }
    footer{
      background-color:#451387;
      &:hover{
      cursor: default;
      }
    }

`


const ZoomModal = ({ pic, closing, onFavToggle }) => {
    
    return (
        <>
        {pic && <>
            <Overlay/>
            <StyledDialog open={!!pic} onClose={closing} id="modal-dialog">
                <ImgCard pic={pic} expanded={true} onFavToggle={onFavToggle}/>
                <form method="dialog">
                    <button type="submit"><img src={closeBtn}/></button>
                </form>
            </StyledDialog>
            </>
        }
        </>
    )
}

export default ZoomModal