console.log(d3.selectAll("h1").nodes())

d3.select("main").append("p")
.text(function() {
  console.log("Hello")
  return d3.selectAll("h1").nodes().textContent
})
