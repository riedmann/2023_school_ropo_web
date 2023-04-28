const blob = document.getElementById("blob");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  blob.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duraction: 3000, fill: "forwards" }
  );
});
