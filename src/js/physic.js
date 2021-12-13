import floodfill from "https://cdn.skypack.dev/floodfill@2.1.1"

var cnv=document.createElement('canvas')
var ctx=cnv.getContext('2d')
document.body.appendChild(cnv)

function rndColor(c) { return typeof(c)!=='string'?rndColor(''):c.length>5?'#'+c:rndColor(c+(Math.floor(Math.random()*16)).toString(16)) }

function draw() {
  cnv.width=window.innerWidth
  cnv.height=window.innerHeight
  ctx.fillStyle='#fff'
  ctx.fillRect(0,0,cnv.width,cnv.height)
  ctx.strokeStyle='#000'
  ctx.lineWidth=2
  let l=12
  ctx.setLineDash([l])
  let n=Math.floor(cnv.width/l)
  for(let j=0; j<n; j++) {
    if (Math.random()>0.5) {
      ctx.moveTo(0, j*l)
      ctx.lineTo(l*n, j*l)
    } else {
      ctx.moveTo(-l, j*l)
      ctx.lineTo(l*(n+1), j*l)
    }
    if (Math.random()>0.5) {
      ctx.moveTo(j*l, 0)
      ctx.lineTo(j*l, l*n)
    } else {
      ctx.moveTo(j*l,-l)
      ctx.lineTo(j*l,l*(n+1))
    }
  }
  ctx.stroke()  
}

draw()
window.addEventListener('resize', draw)

window.addEventListener('click', function(e) {
  ctx.fillStyle = rndColor()
  ctx.fillFlood(e.clientX, e.clientY, 0)
})