import React from 'react'

const LayerMenu = () => {
  return (
    <div className="layer-menu">
      <div className="ui secondary vertical pointing menu">
        <a className="item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
      </div>
    </div>
  )
}

const LayerButton = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  React.useEffect(() => {
    const listener = (event: any) => {
      if (event.key === 'Escape') {
        setShowMenu(false)
      }
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  const showLayerMenu = (event: any) => {
    event.preventDefault()
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <button onClick={showLayerMenu} className="control-panel">
      <i className="bars icon large" />
      {showMenu ? <LayerMenu /> : null}
    </button>
  )
}

export default LayerButton
