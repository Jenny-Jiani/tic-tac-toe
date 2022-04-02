import bannerFishImg from '../../assets/images/fish.png'

export default function LeftSide () {
  return (
    <div className="leftSide">
      <div className="content">
        <div className="logo">奚鱼</div>
        <h1 className="tc fontMedievalSharp">XIYU HOME</h1>
        <div className="beautifulWords">
          <p className="en fontMedievalSharp">To see only the heart can see, <br className="hideBigView" />is invisible to the naked eye the important stuff.</p>
          <p className="cn">重要的东西光凭肉眼无法看见，只有用心才能感知。</p>
        </div>
        <div className="bannerImg">
          <img src={bannerFishImg} alt="banner fish img from xiaohongshu 904517123" />
        </div>
        <div className="copyright">图源：@ 小红书 - 904517123</div>
      </div>
    </div>
  )
}