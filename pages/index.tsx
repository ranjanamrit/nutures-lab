import { useState,useEffect } from "react";
import Logo from "./logo.svg"
import styles from '../styles/main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSearch, faTrash, faHome,faUserFriends,faCreditCard,faStar, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

export default function Index() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    const getData = async () => {
      const res = await axios.get('https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard')
      setdata(res.data.data)
    }
    getData()
  },[setdata])

  return (
    <>
    <div className={styles.container}>
      <div className={styles.item1}>
          <Logo className={styles.logo}/>
          <h2>Term<span>Monitor</span></h2>
      </div>
      <div className={styles.item2}>
        <h2>KEYWORDS</h2>
        <div className={styles.search}>
          <input type="text" />
          <button className={styles.btn}>Submit <FontAwesomeIcon icon={faArrowRight}/></button>
          <div className={styles.ellipse}>A</div>
        </div>
      </div>
    </div>
    <div className={styles.main}>
      <div className={styles.list}>
          <ul>
            <li style={{backgroundColor:'#3F0E40', color:'#ffffff'}}><FontAwesomeIcon className={styles.listIcons} icon={faHome}/>Add Keywords</li>
            <li><FontAwesomeIcon className={styles.listIcons} icon={faUserFriends}/>Matches</li>
            <li><FontAwesomeIcon className={styles.listIcons} icon={faCreditCard}/>Manage Sources</li>
            <li><FontAwesomeIcon className={styles.listIcons} icon={faCreditCard}/>Integration</li>
            <li><FontAwesomeIcon className={styles.listIcons} icon={faCreditCard}/>Alerts</li>
            <li className={styles.settings}><FontAwesomeIcon  className={styles.listIcons} icon={faStar}/>Settings<FontAwesomeIcon className={styles.dropdown} icon={faCaretDown}/></li>
            <p>Billings</p>
          </ul>
        </div>
        <div className={styles.mainpage}>
        <div className={styles.big}>
          <div className={styles.intro}>
            <h5>Add another keyword</h5>
            <p><span>1/3</span></p>
            <p>Upgrade</p>
          </div>
          <button>Advance search</button>
        </div>
        <div className={styles.mainInput}>
          <FontAwesomeIcon className={styles.searchIcon} icon={faSearch}></FontAwesomeIcon>
          <input type="text" placeholder="Enter your filters here"/>
          <button>Save filters</button>
        </div>
        <div className={styles.data}>
          <div className={styles.terms}>
            <p>The terms you are tracking</p>
          </div>
          <div className={styles.refresh}>
            <p>The data will refresh every 5 min</p>
          </div>
        </div>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th className={styles.keyword}>Keywords</th>
                <th></th>
                <th>Goal</th>
                <th>Matches</th>
                <th>Search Status</th>
                <th>Delete keyword</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(items => (
                  <tr key={items.id}>
                    <td className={styles.keyword}>{items.keyword}</td>
                    <td className={styles.tableSearch}><FontAwesomeIcon icon={faSearch}/></td>
                    <td>{items.goal}</td>
                    <td>{items.matches}</td>
                    <td>{items.search_status}</td>
                    <td><FontAwesomeIcon icon={faTrash}/></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className={styles.btnDiv}>
        <button className={styles.viewResult}>View result</button>
        </div>
        </div>
    </div>
    </>
  )
}
