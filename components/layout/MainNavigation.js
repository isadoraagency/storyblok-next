import {retry} from "next/dist/compiled/@next/font/dist/google/retry";
import Link from "next/link";
import NavOffices from "../settings/header/NavOffices";

export default function MainNavigation({list, menuOpen, offices, phone, discuss}){
  return (
    <nav id="navi" aria-label="top main Navigation" className={`${menuOpen ? 'active' : ''}`}>
      <div className="inner-navi">
        <div className="nav-menu">
          <div className="menu-top-menu-container">
            {list &&
              <ul id="menu-top-menu" className="menu">
                {
                  list.map((item)=>{
                    return (
                      <li
                        className={`menu-item menu-item-type-post_type menu-item-object-page ${item?.subMenu.length > 0 && ("menu-item-has-children") }`} key={item._uid}>
                        {
                          item.link?.cached_url &&
                            <Link href={item.link.cached_url}>{item.title}<span
                              className="nav-line nav-line-1"></span><span className="nav-line nav-line-2"></span><span
                              className="nav-line nav-line-3"></span><span className="nav-line nav-line-4"></span></Link>
                        }
                        {
                          item?.subMenu.length > 0  &&
                          <ul className="sub-menu">
                            {
                              item.subMenu.map((item)=>{
                                return (
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page" key={item._uid}>
                                    {item.link?.cached_url &&
                                      <Link href={item.link.cached_url}>{item.title}<span
                                        className="nav-line nav-line-1"></span><span
                                        className="nav-line nav-line-2"></span><span
                                        className="nav-line nav-line-3"></span><span className="nav-line nav-line-4"></span></Link>
                                    }
                                  </li>
                                )
                              })
                            }

                          </ul>
                        }
                      </li>
                    )
                  })
                }
              </ul>
            }


          </div>
        </div>
        <div className="nav-contact">
          <NavOffices offices={offices}></NavOffices>
          {
            discuss &&
              <div className="nav-offices">
                <a className="ia-link ia-link--white p3" href={discuss.cached_url}>{discuss.title}</a>
              </div>
          }

          {
            phone &&
            <div className="nav-offices">
              <div className="ia-sub-title ia-sub-title--red">Phone</div>
              <div className="p3 ia-white"><a className="ia-link ia-link--white" href={`tel:${phone.replace(/\D/g, "")}`}>{phone}</a>
                </div>
              </div>
          }


        </div>
      </div>

      <div className="over-menu"></div>
    </nav>
  )
}