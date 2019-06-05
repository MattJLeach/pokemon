import React from 'react'

function Image(props) {
  const height = props.type === 'thumb' ? 90 : 360;
  const width = props.type === 'thumb' ? 84 : 336;
  return (
    <img src={props.src} alt={props.alt} height={height} width={width} />
  )
}

export { Image };