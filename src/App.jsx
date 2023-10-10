import { styled } from 'styled-components'
import GlobalStyles from './components/global-styles'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Banner from './components/banner'
import Gallery from './components/gallery'
import pics from './pics.json'
import popPics from './popPics.json'
import { useState, useEffect } from 'react'
import ZoomModal from './components/zoom-modal'
import PageFooter from './components/page-footer'

const Background = styled.div`
background: linear-gradient(175deg, #12021e 4.16%, #330345 48%, #7c146a 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: auto;
  padding: 0 24px;
`
const BodyContainer = styled.main`
  display: flex;
  gap: 24px;
  width: 100%;
`
const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      if (mutation.addedNodes[i].id == "modal-dialog") {
        document.querySelector('#modal-dialog').style.top = window.scrollY + 40 + 'px';
      }
    }
  });
});
Observer.observe(document, { subtree: true, childList: true });

const App = () => {
  const [GalleryPics, setGalleryPics] = useState(pics)
  const [PopPics, setPopPics] = useState(popPics)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)
  const [SelectedPic, setSelectedPic] = useState(null)
  const onFavToggle = (pic) => {
    console.log('Fav click')
    if (pic.id === SelectedPic?.id) {
      setSelectedPic({
        ...SelectedPic,
        fav: !SelectedPic.fav
      })
    }
    setGalleryPics(GalleryPics.map(GalPic => {
      return {
        ...GalPic,
        fav: GalPic.id === pic.id ? !pic.fav : GalPic.fav
      }
    }))
  }

  useEffect(() => {
    const filteredPics = pics.filter(pic => {
      const tagFilter = !tag || pic.tagId === tag;
      const titleFilter = !filter || pic.title.toLowerCase().includes(filter.toLowerCase())
      return tagFilter && titleFilter
    })
    setGalleryPics(filteredPics)
  }, [filter, tag])

  return (
    <Background>
      <GlobalStyles />
      <AppContainer>
        <Navbar filter={filter} setFilter={setFilter} />
        <BodyContainer>
          <Sidebar />
          <GalleryContainer>
            <Banner />
            <Gallery pictures={GalleryPics} popPictures={PopPics}
              selectingPic={(pic) => { setSelectedPic(pic) }} onFavToggle={onFavToggle} setTag={setTag} />
          </GalleryContainer>
        </BodyContainer>
      </AppContainer>
      <ZoomModal pic={SelectedPic}
        closing={() => {
          setSelectedPic(null)
          document.body.style.overflow = 'unset';
        }
        } 
        onFavToggle={onFavToggle}
      />
      <PageFooter/>
    </Background>
  )
}

export default App
