import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <>
      <div className='header'>
      <h1>Newtons Cradle</h1>  </div>
      <div className='para'>
      The Newton's cradle is a device that demonstrates the conservation of momentum and the conservation of energy with swinging spheres. When one sphere at the end is lifted and released, it strikes the stationary spheres, transmitting a force through the stationary spheres that pushes the last sphere upward. The last sphere swings back and strikes the nearly stationary spheres, repeating the effect in the opposite direction. The device is named after 17th-century English scientist Sir Isaac Newton and designed by French scientist Edme Mariotte. It is also known as Newton's pendulum, Newton's balls, Newton's rocker or executive ball clicker (since the device makes a click each time the balls collide, which they do repeatedly in a steady rhythm).
      </div>
      <h2>Operation</h2>
      <div className='para'>When one of the end balls ("the first") is pulled sideways, the attached string makes it follow an upward arc. When it is let go, it strikes the second ball and comes to nearly a dead stop. The ball on the opposite side acquires most of the velocity of the first ball and swings in an arc almost as high as the release height of the first ball. This shows that the last ball receives most of the energy and momentum of the first ball. The impact produces a compression wave that propagates through the intermediate balls. Any efficiently elastic material such as steel does this, as long as the kinetic energy is temporarily stored as potential energy in the compression of the material rather than being lost as heat. There are slight movements in all the balls after the initial strike but the last ball receives most of the initial energy from the impact of the first ball.</div>
    </>
  )
}

export default Header
