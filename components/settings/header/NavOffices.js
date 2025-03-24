export default function NavOffices({title, offices}) {
  return (
    <>
      {title && <div className="ia-sub-title ia-sub-title--red">{title}</div>}

      <div className="nav-offices">
        {
          offices.map((item) =>
            <div className="nav-office__item ia-white" key={item._uid}>
              <div className="p3 ia-margin-1">{item.title}</div>
              <div className="p6">
                <a href={item.link.cached_url} target={item.link.target == '_blank' ? ('_blank') : '_self'}>
                  {item.address}
                </a>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}