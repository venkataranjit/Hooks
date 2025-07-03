import React, { useEffect, useRef } from "react";
import "./zoom.scss";

const Zoom = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const scaleRef = useRef(1);
  const draggingRef = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const translate = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        scaleRef.current += e.deltaY * -0.001;
        scaleRef.current = Math.min(Math.max(0.5, scaleRef.current), 3);
        content.style.transform = `scale(${scaleRef.current}) translate(${translate.current.x}px, ${translate.current.y}px)`;
      }
    };

    const handleMouseDown = (e) => {
      draggingRef.current = true;
      lastPosition.current = { x: e.clientX, y: e.clientY };
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (draggingRef.current) {
        const dx = e.clientX - lastPosition.current.x;
        const dy = e.clientY - lastPosition.current.y;
        lastPosition.current = { x: e.clientX, y: e.clientY };
        translate.current.x += dx;
        translate.current.y += dy;
        content.style.transform = `scale(${scaleRef.current}) translate(${translate.current.x}px, ${translate.current.y}px)`;
      }
    };

    const handleMouseUp = () => {
      draggingRef.current = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div ref={containerRef} className="containerDiv">
          <div ref={contentRef} className="zoomContent">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              soluta dolorem esse quibusdam enim, et cumque consectetur eius
              tempore? Doloremque dolorum voluptas esse ducimus soluta.
              Reiciendis aliquam, ipsa amet eius et fugiat consequuntur veniam
              voluptatem quisquam esse placeat, rerum repellendus id optio
              sequi. Recusandae velit facere odio veniam veritatis itaque
              eligendi similique vero et, dolorem voluptatibus laudantium quod.
              Molestiae quibusdam harum deserunt ipsum. Hic dolorum libero quas
              cupiditate similique qui odit eos! Nisi, dolore temporibus
              delectus et, earum veritatis impedit odio possimus inventore porro
              sapiente iste eius distinctio sunt dolorum soluta esse, quas sed
              cumque nemo. Itaque corporis dolore laudantium vitae quos ab
              dicta. Nesciunt debitis vel sed ea accusamus alias soluta ex
              blanditiis iste nulla, amet officia vitae, quisquam quasi. Hic
              mollitia accusantium reiciendis laborum aliquam incidunt, officia
              necessitatibus assumenda reprehenderit pariatur rerum tempore in,
              quod quo accusamus illo doloremque, vero fugit culpa? Molestiae
              harum eum quod, quos debitis vitae ipsum laboriosam rerum dolores.
              Quae debitis vero accusantium laborum eligendi, soluta aperiam
              quibusdam placeat ad quidem eum atque est neque fugiat dolor
              perspiciatis adipisci! Quae mollitia doloremque odit eligendi
              illum, aspernatur ad obcaecati a natus doloribus quidem delectus
              quis rem eaque voluptates inventore aperiam ipsum officia
              blanditiis iusto nostrum veniam. Eveniet assumenda tempore est
              minima sed consequatur aperiam, ab placeat numquam, sequi in
              tempora quibusdam voluptas. Quas culpa odio repudiandae adipisci
              soluta maiores molestias fugiat quam similique officia
              exercitationem, suscipit dignissimos repellat mollitia, aperiam
              hic autem labore, vel earum incidunt pariatur animi. Expedita,
              culpa maiores reiciendis magni similique laboriosam odit, ratione
              ducimus mollitia corrupti tempore, modi nihil quisquam laudantium
              veniam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zoom;
