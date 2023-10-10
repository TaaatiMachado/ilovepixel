import styled from "styled-components"

const Card = styled.div`
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)); 
    margin: 0;
    padding: 0;
    max-height: 100%;
    position: relative;
    display: flex;
    flex-direction: column ;
    img{
      object-fit: cover;
      width: ${props => props.$expanded ? '100%' : '400px'};
      max-width: 100%;
      height: ${props => props.$expanded ? '80vh' : '256px'};
      border-radius: 20px 20px 0 0;
      margin: 0;
      box-sizing: border-box;
    }
    footer{
      background: rgba(217, 217, 217, 0.30);
      border-radius: 0px 0px 20px 20px;
      color: white;
      box-sizing: border-box;
      padding: 12px;
      text-align: left;
      transition: 0.5s ease;
      h5{
        font-size: 20px;
        font-weight: 400;
        margin: 5px 0;
      }
      p{
        color: inherit;
        margin: 5px 0;
      }
      &:hover{
        background-color: #451387;
        cursor: pointer;
     }
    }
`

const BtnsWrap = styled.div`
  position: absolute;
  top: ${props => props.$expanded ? 'unset' : '15px'};
  right: 10px;
  bottom: ${props => props.$expanded ? '43px' : 'unset'};
  button{
    background-color: transparent;
    border:none;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
    }
    img{
    max-width: 20px;
    height: 100%;
    object-fit: contain;
    border-radius: 0;
   }
  }
 
`

const ImgCard = ({ pic, onZoom, expanded = false, onFavToggle }) => {
  const favIcon = pic.fav ? '/icons/heart.png' : '/icons/favorito-ativo.png'
    return (
        <Card $expanded={expanded} id={`pic-${pic.id}`}>
            <img src={pic.path} alt={pic.title}></img>
            <BtnsWrap $expanded={expanded}>
                <button onClick={() => onFavToggle(pic)}>
                  <img src={favIcon} />
                </button>
                {!expanded && <button aria-hidden={expanded} 
                  onClick={() => {
                    document.body.style.overflow = 'hidden';
                    onZoom(pic)
                    } 
                  }>
                  <img src='/icons/expandir.png' />
                  </button>
                }
            </BtnsWrap>
            <footer>
                <h5>{pic.title}</h5>
                <p>Source: {pic.source}</p>
            </footer>
        </Card>
    )

}

export default ImgCard