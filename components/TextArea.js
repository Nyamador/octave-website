import { useState, useEffect } from "react";

const TextArea = ({ ...props }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    var observe;
    if (window.attachEvent) {
      observe = function (element, event, handler) {
        element.attachEvent("on" + event, handler);
      };
    } else {
      observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
      };
    }
    function init() {
      var text = document.getElementById("textarea");
      function resize() {
        text.style.height = "auto";
        text.style.height = text.scrollHeight + "px";
      }
      /* 0-timeout to get the already changed text */
      function delayedResize() {
        window.setTimeout(resize, 0);
      }
      observe(text, "change", resize);
      observe(text, "cut", delayedResize);
      observe(text, "paste", delayedResize);
      observe(text, "drop", delayedResize);
      observe(text, "keydown", delayedResize);

      text.focus();
      text.select();
      resize();
    }
  }, [text]);

  return (
    <div className="mt-10">
      <textarea
        {...props}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="textarea"
        className="w-full p-2 text-3xl text-white bg-transparent border-b-2 border-gray-500 outline-none focus:animate-bounce focus:border-white"
      />
      <label htmlFor={props.name} className="mt-2 text-sm text-gray-300">
        {props.label}
      </label>
    </div>
  );
};

export default TextArea;
