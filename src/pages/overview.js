import React from "react"
import { Link } from "react-router-dom"

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [{
        key: 'posts',
        link: '/',
        name: 'Posts'
      }, {
        key: 'react',
        link: null,
        name: 'React Learning',
        latest: [{
          key: 'tic-tac-toe',
          link: '/react/tic-tac-toe',
          name: 'Tic Tac Toe'
        }, {
          key: 'clock',
          link: '/react/clock',
          name: 'Clock'
        }],
        showLatest: false
      }]
    }
  }

  showLatestList(key) {
    var navList = this.state.navList
    navList && navList.forEach((nav, index) => {
      if (nav.key === key) {
        nav.showLatest = !nav.showLatest
      }
    })
    this.setState({
      navList: navList
    })
  }

  render() {
    return (
      <ul className="overviewList">
        {
          this.state.navList.map(nav => 
            <li key={nav.key}>
              {nav.link
                ? <Link to={nav.link}>{nav.name}</Link> 
                : <div className="navItem" onClick={()=>this.showLatestList(nav.key)}>{nav.name}</div>
              }
              {nav.latest 
                &&<ul className="latestList" style={{height: nav.showLatest?nav.latest.length*40+60+'px':0, padding: nav.showLatest?'10px 0':0}}>
                    {
                      nav.latest.map(item => 
                        <li key={item.key}>
                          <Link to={item.link}>{item.name}</Link>
                        </li>
                      )
                    }
                    <li>See More</li>
                  </ul>
              }
            </li>
          )
        }
      </ul>
    )
  }
}

export default Overview